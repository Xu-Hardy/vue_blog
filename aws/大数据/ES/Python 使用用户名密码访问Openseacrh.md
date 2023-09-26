问题描述：

Python 使用用户名密码访问Openseacrh

分析过程：

```python
import requests
import json
opensearch_url = "https://xxx.cn-north-1.es.amazonaws.com.cn"

headers = {
    "Content-Type": "application/json"
}
auth = ('username',   'password')
# 创建或更新索引（如果不存在）


for i in range(1000):
    index_name = f"ism{i}"
    response = requests.put(f"{opensearch_url}/{index_name}", headers=headers, auth=auth)
    print(response.text)
    # 写入单条数据
    doc = {
        "name": "John Doe",
        "age": 30,
        "job": "Engineer"
    }
    response = requests.post(f"{opensearch_url}/{index_name}/_doc", headers=headers, data=json.dumps(doc), auth=auth)
    print(response.text)
```