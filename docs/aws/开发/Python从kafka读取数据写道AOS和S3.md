

Python从kafka读取数据写道AOS和S3


```python
import json
import boto3
import datetime
from opensearchpy import OpenSearch
from kafka import KafkaConsumer

s3_client = boto3.client('s3')
bucket = 'pipline'
host = 'xxxxx.cn-north-1.es.amazonaws.com.cn'
port = 443
auth = ('tesssssst', '@')
os_client = OpenSearch(
    hosts=[{'host': host, 'port': port}],
    http_compress=True,  # enables gzip compression for request bodies
    http_auth=auth,
    use_ssl=True
)
bootstrap_servers = ['b-1.xxx.y6lq26.c2.kafka.cn-north-1.amazonaws.com.cn:9092',
                     'b-3.xxx.y6lq26.c2.kafka.cn-north-1.amazonaws.com.cn:9092']


def get_msk_data():
    consumer = KafkaConsumer('MSKTutorialTopic', bootstrap_servers=bootstrap_servers)
    for msg in consumer:
        yield msg.value.decode('UTF-8')


def data2OpenSearch(document):

    index_name = 'ana-lab'
    response = os_client.index(
        index=index_name,
        body=json.loads(document),
        refresh=True
    )


def data2s3(bucket, data):
    now = datetime.datetime.now()
    current_date = now.strftime('%Y/%m/%d')
    current_time = now.strftime("%H%M%S")

    Key = f'{current_date}/{current_time}.txt'

    body = json.dumps(data).encode("UTF-8")
    s3_client.put_object(Body=body, Bucket=bucket, Key=Key)


for data in get_msk_data():
    data2OpenSearch(data)
    data2s3(bucket, data)
```


