问题描述：

Python 使用boto3导出EC2信息

分析过程：

```
import boto3
import pandas as pd

ec2 = boto3.client("ec2", region_name='cn-north-1')
response = ec2.describe_instances(Filters=[{"Name": "instance-state-name", 'Values': ['running']}])

basic_ec2_information = []
for reservation in response['Reservations']:
    instance = reservation['Instances'][0]
    CpuOptions = instance['CpuOptions']

    instance_type = instance['InstanceType']
    images_name = ec2.describe_images(ImageIds=[instance['ImageId']])['Images'][0]['Description']

    detail = ec2.describe_instance_types(InstanceTypes=[instance_type])
    memory = f"{detail['InstanceTypes'][0]['MemoryInfo']['SizeInMiB'] / 1024}G"

    eni = instance['NetworkInterfaces'][0]['NetworkInterfaceId']
    # ec2.modify_network_interface_attribute(NetworkInterfaceId=eni, Groups=['sg-id'])
    VolumeId = instance['BlockDeviceMappings'][0]['Ebs']['VolumeId']
    volume = f"{ec2.describe_volumes(VolumeIds=[VolumeId])['Volumes'][0]['Size']}G"

    tags = instance.get('Tags', None)
    instance_name = [i.get('Value', 'None') for i in tags if 'Name' in i.values()][0] if tags is not None else ''

    basic_ec2_information.append({
        'Name': instance_name,
        'images_name': images_name,
        'CpuOptions': CpuOptions['CoreCount'] * CpuOptions['ThreadsPerCore'],
        'memory': memory,
        'disk': volume,
        'PrivateIpAddress': instance['PrivateIpAddress'],
        'PublicIpAddress': instance.get('PublicIpAddress', None)
    })

    df = pd.DataFrame(data=basic_ec2_information)

    df.rename(columns={
        "Name": "主机名称",
        "images_name": "镜像",
        "CpuOptions": "CPU",
        "memory": "内存 (GB)",
        "disk": "硬盘 (GB)",
        "PrivateIpAddress": "内网ip",
        "PublicIpAddress": "外网ip"
    }).to_csv("data.csv", index=False)
```