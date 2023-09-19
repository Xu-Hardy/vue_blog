可以在相应的用户中附件如下策略：

   1) SourceIp 填写您允许的特定IP白名单。
   2) 策略不拒绝 Amazon 服务使用主体的凭证发出的请求,  也就是说可以正常配置aws configure。
   3) 但是从 IP 白名单之外发出请求时（比如aws s3 ls），请求将被拒绝。

{
    "Version": "2012-10-17",
    "Statement": {
        "Effect": "Deny",
        "Action": "*",
        "Resource": "*",
        "Condition": {
            "NotIpAddress": {
                "aws:SourceIp": [
                    "192.0.2.0/24",
                    "203.0.113.0/24"
                ]
            },
            "Bool": {"aws:ViaAWSService": "false"}
        }
    }
}


【1】 https://docs.amazonaws.cn/IAM/latest/UserGuide/reference_policies_examples_aws_deny-ip.html 