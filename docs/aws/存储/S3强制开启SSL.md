问题描述：

在Amazon S3中，SSL是用于加密客户端与S3之间的数据传输的。事实上，当使用Amazon S3的HTTPS终结点访问你的bucket时，就已经使用SSL/TLS进行数据加密了。如果您想控制只有HTTPS请求或者特定TLS版本才能访问此存储桶，那么可以在桶策略上进行设置，详情您可以参考链接【1】。

解决方案：

```
 "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "EnforceTLSv12orHigher",
      "Principal": {
        "AWS": "*"
      },
      "Action": ["s3:*"],
      "Effect": "Deny",
      "Resource": [
        "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*",
        "arn:aws:s3:::DOC-EXAMPLE-BUCKET"
      ],
      "Condition": {
        "NumericLessThan": {
          "s3:TlsVersion": 1.2
        }
      }
    }
  ]
}
```

[强制对 Amazon S3 桶使用 TLS 1.2 或更高版本 | AWS re:Post](https://repost.aws/zh-Hans/knowledge-center/s3-enforce-modern-tls)