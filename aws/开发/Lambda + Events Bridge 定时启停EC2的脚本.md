**步骤**:

1. **创建 Lambda 函数**: 首先，你需要在 AWS Lambda 中创建一个函数来启动和停止 EC2 实例。

以下是一个使用 Python 的简单 Lambda 函数示例：

```python
import boto3

def lambda_handler(event, context):
    ec2 = boto3.client('ec2')

    # EC2 instance ID
    INSTANCE_ID = 'your-instance-id'

    if event['action'] == 'start':
        response = ec2.start_instances(InstanceIds=[INSTANCE_ID])
        print(response)
    elif event['action'] == 'stop':
        response = ec2.stop_instances(InstanceIds=[INSTANCE_ID])
        print(response)
```

1. **为 Lambda 函数设置 IAM 角色**: 确保 Lambda 函数有足够的权限启动和停止 EC2 实例。以下是一个简单的 IAM 策略示例：

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:StartInstances",
                "ec2:StopInstances"
            ],
            "Resource": "arn:aws:ec2:region:account-id:instance/instance-id"
        }
    ]
}
```

1. **创建 Events Bridge 规则**: 在 Amazon CloudWatch 控制台中，创建两个事件规则：
    
2. 一个事件定时启动 EC2 实例。
    
3. 另一个事件定时停止 EC2 实例。

为每个规则设置所需的 cron 或 rate 表达式。对于目标，请选择之前创建的 Lambda 函数，并为每个事件设置一个固定值，例如 `{"action": "start"}` 或 `{"action": "stop"}`。

完成上述步骤后，Lambda 函数将根据 Events Bridge 规则的计划自动启动和停止你的 EC2 实例。

这只是一个简化的示例。可能需要根据实际需求进行调整，例如处理多个 EC2 实例或在启动和停止之间添加其他逻辑。