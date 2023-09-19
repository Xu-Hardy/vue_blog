import boto3
import time

def lambda_handler(event, context):
    client = boto3.client('logs')

    query = "fields @timestamp, @message, @logStream, @log | sort @timestamp desc| limit 20" # 你的查询字符串
    log_group = "/aws/" # 你要查询的日志组

    time_d = 60*60*12
    start_query_response = client.start_query(
        logGroupName=log_group,
        startTime=int((time.time() - time_d) * 1000),  # 查询过去30分钟的日志
        endTime=int(time.time() * 1000),
        queryString=query,
    )

    query_id = start_query_response['queryId']

    response = None
    while response is None or response['status'] == 'Running':
        print('Waiting for query to complete ...')
        time.sleep(1)
        response = client.get_query_results(
            queryId=query_id
        )

    print(response)
    return response['results']

