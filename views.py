from home.views import CommonPageView
from django.http import JsonResponse
from hpcdatawarehouse.database_extract import get_db_clusters, get_datacenter_hardware_chassis, get_datacenter_hardware
import re

re_cluster_page_name = re.compile(r'physical(?P<cluster>[A-Z][a-z]+)')


class DataCenter(CommonPageView):
    """
        Top down view of the datacenter

    """
    page_name = 'datacenter'

    def get_context_data(self, request, **kwargs) -> dict:
        data = {}
        data['columns'] = []
        rows_display = ['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6',
                        'row 7', 'row 8', 'row 9', 'row 10', 'row 11']
        for i in range(26):
            letter = chr(64 + i)
            num_list = []
            for j in range(71):
                if (j in range(4, 6) or j in range(9, 11)) and (i >= 4 and i <= 22):
                    machine = "Sawtooth"
                elif (j in range(22, 24) or j in range(28, 30) or j in range(34, 36)) and (i >= 4 and i <= 22):
                    machine = "FutureSystem"
                elif (j in range(41, 43) and (i >= 4 and i <= 17)):
                    machine = "Falcon"
                elif (j in range(47, 49) and (i >= 4 and i <= 14)):
                    machine = "Lemhi"
                elif (j in range(53, 55) and (i >= 6 and i <= 20)):
                    machine = "Utility"
                elif (j in range(59, 61) and (i >= 6 and i <= 20)):
                    machine = "University"
                else:
                    machine = "Empty"
                num_list.append({'name': j, 'machine': machine, 'rows_display': rows_display})
            data['columns'].append({'name': letter, 'rows': num_list})
        return data


class PhysicalClusterViewBack(CommonPageView):
    """
        Physical view of cluster back

    """
    page_name = 'clusterphysicalbase'

    def get_context_data(self, **kwargs) -> dict:
        cluster_name = kwargs['cluster'].lower()
        cluster = get_db_clusters(cluster_name)
        rows = [1]
        if cluster_name == 'sawtooth':
            rows = [1, 2]
        if cluster_name == 'windriver':
            rows = [1, 2, 3]

        return {'cluster': cluster, 'side': 'back', 'rows': rows}


class PhysicalClusterViewFront(CommonPageView):
    """
        Physical view of cluster front

    """
    page_name = 'clusterphysicalbase'

    def get_context_data(self, **kwargs) -> dict:
        cluster_name = kwargs['cluster'].lower()
        cluster = get_db_clusters(cluster_name)
        rows = [1]
        if cluster_name == 'sawtooth':
            rows = [1, 2]
        if cluster_name == 'windriver':
            rows = [1, 2, 3]

        return {'cluster': cluster, 'side': 'front', 'rows': rows}


def layout_data(request, cluster):
    cluster_name = get_db_clusters(cluster)['name']
    dcim_data = get_datacenter_hardware_chassis(cluster_name)
    dcim_data_list = {}
    for row in dcim_data:
        if row['dcim_row'] not in dcim_data_list.keys():
            dcim_data_list[row['dcim_row']] = {}

            if row['dcim_rack'] not in dcim_data_list[row['dcim_row']].keys():
                dcim_data_list[row['dcim_row']][row['dcim_rack']] = []
                row['nodes'] = get_datacenter_hardware(row['id'], cluster_name)
                dcim_data_list[row['dcim_row']][row['dcim_rack']].append(row)
            else:
                row['nodes'] = get_datacenter_hardware(row['id'], cluster_name)
                dcim_data_list[row['dcim_row']][row['dcim_rack']].append(row)
        else:
            if row['dcim_rack'] not in dcim_data_list[row['dcim_row']].keys():
                dcim_data_list[row['dcim_row']][row['dcim_rack']] = []
                row['nodes'] = get_datacenter_hardware(row['id'], cluster_name)
                dcim_data_list[row['dcim_row']][row['dcim_rack']].append(row)
            else:
                row['nodes'] = get_datacenter_hardware(row['id'], cluster_name)
                dcim_data_list[row['dcim_row']][row['dcim_rack']].append(row)

    return JsonResponse({'dcim_data': dcim_data_list})
