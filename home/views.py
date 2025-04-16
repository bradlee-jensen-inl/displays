from __future__ import print_function, division
from __future__ import unicode_literals, absolute_import

from re import search
import subprocess

from django.conf import settings
from django.http import Http404
from django.shortcuts import render
from django.template import TemplateDoesNotExist
from django.views.generic import View

# from templatesadmin.forms import TinyMCEForm


class CommonPageView(View):

    def get_app_name(self):
        """
        Get the name of the Django app to which this view belongs.

        :returns: str, name of the folder or app

        This automatically determines the app folder of any child classes.
        """
        return self.__module__.split('.')[0]

    app_name = property(get_app_name)

    def get_context_data(self, **kwargs):
        return {}

    def get_template_name(self, pageName):
        return f'{self.app_name}/{pageName.lower()}.jinja'

    def get_template_filename(self, template_name):
        return f'{self.app_name}/templates/{template_name}'

    def get(self, request, pageName=None, **kwargs):
        if not pageName:
            pageName = self.page_name
        kwargs['pageName'] = pageName
        template_name = self.get_template_name(pageName)
        template_filename = self.get_template_filename(template_name)
        context = self.get_context_data(request=request, **kwargs)
        context.update({
            'authenticated': request.user.is_authenticated,
            'is_staff': request.user.is_staff,
            'templatefilename': template_filename,
            # 'TinyMCEForm': TinyMCEForm,
            'PRODUCTION_HOST': getattr(settings, 'PRODUCTION_HOST', 'hpcweb.hpc.inl.gov'),
            'STAGING_HOST': getattr(settings, 'STAGING_HOST', 'hpcweb-staging.hpc.inl.gov'),
        })
        try:
            if request.user.is_staff:
                command = f'git log -n 1 -- {template_filename}'
                git_info = subprocess.run(
                    command,
                    shell=True,
                    cwd=settings.BASE_DIR,
                    encoding='utf-8',
                    stdout=subprocess.PIPE,
                )
                match = search(r'Author:\s*([^<]*) ', git_info.stdout)
                context['author'] = ''
                if (match):
                    context['author'] = match.group(1)
                context['last_edit'] = ''
                match = search(r'Date:\s*([^\n]*)', git_info.stdout)
                if (match):
                    context['last_edit'] = match.group(1)
        except subprocess.CalledProcessError:
            logger.warning("Error checking git! ")
        finally:
            try:
                return render(request, template_name, context)
            except TemplateDoesNotExist:
                raise Http404(
                    f"File does not exist: {template_filename}, or pageName: {pageName}"
                )


class SiteIndex(CommonPageView):
    page_name = 'index'

    def get(self, request, **kwargs):
        return CommonPageView.get(
            self,
            request,
            **kwargs
        )
