

boto3获取费用账单



```python
import boto3


def get_billing_info():
    client = boto3.client('ce', region_name='cn-north-1')  # 使用Cost Explorer服务的客户端

    response = client.get_cost_and_usage(
        TimePeriod={
            'Start': '2023-06-01',  # 开始日期
            'End': '2023-06-29'  # 结束日期
        },
        Granularity='MONTHLY',  # 可以是'DAILY'，'MONTHLY'，或'HOURLY'
        Metrics=[
            'UnblendedCost',  # 你可以指定不同的度量标准，例如'UsageQuantity'或'BlendedCost'
        ]
    )

    print(response)


if __name__ == "__main__":
    get_billing_info()
```