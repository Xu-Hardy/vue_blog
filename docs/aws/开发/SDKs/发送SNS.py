import boto3

topic_arn = "" # 替换为你的 SNS 主题 ARN
    message = "你想要发送的消息内容"

    sns_client = boto3.client('sns')
    response = sns_client.publish(
        TopicArn=topic_arn,
        Message=message
    )

    print(response)