

```Python
import requests
from requests_aws4auth import AWS4Auth
import boto3

import time
class SigV4Session(requests.Session):
    def __init__(self, service, region):
        super().__init__()
        self.service = service
        self.region = region
        self.auth = self._initialize_auth()

    def _initialize_auth(self):
        session = boto3.Session()
        credentials = session.get_credentials()
        return AWS4Auth(credentials.access_key, credentials.secret_key, self.region, self.service,
                        session_token=credentials.token)



# 使用示例
service_name = 'es'
region_name = 'cn-north-1'
session = SigV4Session(service_name, region_name)


# 第一个请求
url1 = 'https://search-testifranme-rnwlwnxhk52k26trxkwxpwgssq.cn-north-1.es.amazonaws.com.cn/'
response1 = session.get(url1)
print(response1.text)
time.sleep(60*6)
# 第二个请求
url2 = 'https://search-testifranme-rnwlwnxhk52k26trxkwxpwgssq.cn-north-1.es.amazonaws.com.cn/'
response2 = session.get(url2)
print(response2.text)
```