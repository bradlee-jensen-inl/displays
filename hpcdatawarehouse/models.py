from __future__ import unicode_literals
from django.db import models


class Cluster(models.Model):
    name = models.TextField()
    server = models.TextField()
    scheduler = models.TextField()
    accepted_on = models.DateField(blank=True, null=True)
    commissioned_on = models.DateField(blank=True, null=True)
    decommissioned_on = models.DateField(blank=True, null=True)
    made_public_on = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cluster'


class DatacenterHardwareChassis(models.Model):
    name = models.TextField()
    display_name = models.TextField()
    cluster = models.ForeignKey('Cluster', models.DO_NOTHING)
    dcim_row = models.IntegerField()
    dcim_rack = models.IntegerField()
    dcim_unit_start_location = models.IntegerField()
    chassis_height = models.IntegerField()
    information = models.TextField()
    front_image_path = models.TextField()
    back_image_path = models.TextField()
    last_updated = models.DateTimeField()
    hardware_type = models.TextField()
    service_tag = models.TextField()
    inl_asset_tag = models.TextField()

    class Meta:
        managed = False
        db_table = 'datacenter_hardware_chassis'


class DatacenterHardware(models.Model):
    name = models.TextField()
    display_name = models.TextField()
    datacenter_hardware_chassis = models.ForeignKey('DatacenterHardwareChassis', models.DO_NOTHING)
    information = models.TextField()
    dcim_left_start = models.IntegerField()
    dcim_top_start = models.IntegerField()
    front_image_path = models.TextField()
    back_image_path = models.TextField()
    last_updated = models.DateTimeField()
    hardware_type = models.TextField()
    service_tag = models.TextField()
    inl_asset_tag = models.TextField()
    owner = models.TextField()

    class Meta:
        managed = False
        db_table = 'datacenter_hardware'
