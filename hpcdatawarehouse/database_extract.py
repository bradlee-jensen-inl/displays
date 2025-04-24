import re

def get_db_clusters(cluster_name):
    with open('pg_dumps/20250415cluster.sql') as cluster_file:
        for line in cluster_file:
            if re.match(r'(\d{1,3})', line):
                if cluster_name in line:
                    cluster_list = line.split('\t')
                    cluster = {
                        'id': cluster_list[0],
                        'name': cluster_list[1]
                    }
                    # print(cluster)
                    return cluster


def get_datacenter_hardware_chassis(cluster_name):
    dcim_data = []
    column_names_list = []
    with open('pg_dumps/20250424chassis.sql') as chassis_file:
        for line in chassis_file:
            if 'COPY' in line:
                column_names = re.findall(r'[\(](.+)[\)]', line)
                column_names = "".join(column_names)
                column_names_list = column_names.split(', ')

            if cluster_name.capitalize() in line:
                chassis_list = line.split('\t')
                chassis_dict = {}
                for x, column in enumerate(chassis_list):
                    if '\\N' in column:
                        column = None
                    chassis_dict[column_names_list[x]] = column
                    dcim_data.append(chassis_dict)
    return dcim_data


def get_datacenter_hardware(datacenter_hardware_chassis_id, cluster_name):
    datacenter_hardware = []
    column_names_list = []
    with open('pg_dumps/20250424hardware.sql') as hardware_file:
        for line in hardware_file:
            if 'COPY' in line:
                column_names = re.findall(r'[\(](.+)[\)]', line)
                column_names = "".join(column_names)
                column_names_list = column_names.split(', ')

            if cluster_name.capitalize() in line:
                chassis_list = line.split('\t')
                chassis_dict = {}
                for x, column in enumerate(chassis_list):
                    if x == 3:
                        if datacenter_hardware_chassis_id == column:
                            for n, name in enumerate(column_names_list):
                                if '\\N' in chassis_list[n]:
                                    chassis_list[n] = None
                                chassis_dict[name] = chassis_list[n]
                            datacenter_hardware.append(chassis_dict)
    # print(datacenter_hardware)

    return datacenter_hardware
