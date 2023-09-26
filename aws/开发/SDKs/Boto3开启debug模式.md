

我们很多时候需要boto3内部的日志信息，而且是debug级别， 需要导入日志的库并且设置日志级别 https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/boto3.html 

```
import boto3
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Configure Boto3 logging
logger = logging.getLogger('botocore')
logger.setLevel(logging.DEBUG)

# Initialize a Boto3 session
session = boto3.Session()

# Use Boto3 resources or clients as usual
s3 = session.resource('s3')
for bucket in s3.buckets.all():
    print(bucket.name)
```

打印结果：

2023-04-21 17:58:21,953 botocore.hooks [DEBUG] Changing event name from creating-client-class.iot-data to creating-client-class.iot-data-plane 2023-04-21 17:58:21,955 botocore.hooks [DEBUG] Changing event name from before-call.apigateway to before-call.api-gateway 2023-04-21 17:58:21,955 botocore.hooks [DEBUG] Changing event name from request-created.machinelearning.Predict to request-created.machine-learning.Predict 2023-04-21 17:58:21,956 botocore.hooks [DEBUG] Changing event name from before-parameter-build.autoscaling.CreateLaunchConfiguration to before-parameter-build.auto-scaling.CreateLaunchConfiguration 2023-04-21 17:58:21,956 botocore.hooks [DEBUG] Changing event name from before-parameter-build.route53 to before-parameter-build.route-53 2023-04-21 17:58:21,957 botocore.hooks [DEBUG] Changing event name from request-created.cloudsearchdomain.Search to request-created.cloudsearch-domain.Search 2023-04-21 17:58:21,957 botocore.hooks [DEBUG] Changing event name from docs._.autoscaling.CreateLaunchConfiguration.complete-section to docs._.auto-scaling.CreateLaunchConfiguration.complete-section 2023-04-21 17:58:21,960 botocore.hooks [DEBUG] Changing event name from before-parameter-build.logs.CreateExportTask to before-parameter-build.cloudwatch-logs.CreateExportTask 2023-04-21 17:58:21,960 botocore.hooks [DEBUG] Changing event name from docs._.logs.CreateExportTask.complete-section to docs._.cloudwatch-logs.CreateExportTask.complete-section 2023-04-21 17:58:21,960 botocore.hooks [DEBUG] Changing event name from before-parameter-build.cloudsearchdomain.Search to before-parameter-build.cloudsearch-domain.Search 2023-04-21 17:58:21,960 botocore.hooks [DEBUG] Changing event name from docs._.cloudsearchdomain.Search.complete-section to docs._.cloudsearch-domain.Search.complete-section 2023-04-21 17:58:21,980 botocore.utils [DEBUG] IMDS ENDPOINT: http://169.254.169.254/ 2023-04-21 17:58:31,120 botocore.credentials [DEBUG] Looking for credentials via: env 2023-04-21 17:58:31,120 botocore.credentials [DEBUG] Looking for credentials via: assume-role 2023-04-21 17:58:31,121 botocore.credentials [DEBUG] Looking for credentials via: assume-role-with-web-identity 2023-04-21 17:58:31,121 botocore.credentials [DEBUG] Looking for credentials via: sso 2023-04-21 17:58:31,121 botocore.credentials [DEBUG] Looking for credentials via: shared-credentials-file 2023-04-21 17:58:31,122 botocore.credentials [INFO] Found credentials in shared credentials file: ~/.aws/credentials 2023-04-21 17:58:31,129 botocore.loaders [DEBUG] Loading JSON file: C:\Users\Administrator\miniconda3\lib\site-packages\botocore\data\endpoints.json 2023-04-21 17:58:31,152 botocore.loaders [DEBUG] Loading JSON file: C:\Users\Administrator\miniconda3\lib\site-packages\botocore\data\sdk-default-configuration.json 2023-04-21 17:58:31,153 botocore.hooks [DEBUG] Event choose-service-name: calling handler 2023-04-21 17:58:31,233 botocore.loaders [DEBUG] Loading JSON file: C:\Users\Administrator\miniconda3\lib\site-packages\botocore\data\ec2\2016-11-15\service-2.json 2023-04-21 17:58:31,332 botocore.hooks [DEBUG] Event creating-client-class.ec2: calling handler 2023-04-21 17:58:31,335 botocore.endpoint [DEBUG] Setting ec2 timeout as (60, 60) 2023-04-21 17:58:31,338 botocore.loaders [DEBUG] Loading JSON file: C:\Users\Administrator\miniconda3\lib\site-packages\botocore\data_retry.json 2023-04-21 17:58:31,338 botocore.client [DEBUG] Registering retry handlers for service: ec2

Process finished with exit code 0


