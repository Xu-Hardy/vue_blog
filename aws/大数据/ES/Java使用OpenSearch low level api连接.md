问题描述：

Java使用OpenSearch low level api连接,见[Java client - OpenSearch documentation](https://opensearch.org/docs/2.7/clients/java/)

解决方案：

```java
package org.example;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.opensearch.client.opensearch.OpenSearchClient;
import org.opensearch.client.opensearch.core.IndexRequest;
import org.opensearch.client.opensearch.indices.CreateIndexRequest;
import org.opensearch.client.opensearch.indices.DeleteIndexRequest;
import org.opensearch.client.transport.aws.AwsSdk2Transport;
import org.opensearch.client.transport.aws.AwsSdk2TransportOptions;

import software.amazon.awssdk.http.SdkHttpClient;
import software.amazon.awssdk.http.apache.ApacheHttpClient;
import software.amazon.awssdk.regions.Region;

public class Main {

    private static final String host = "xxxxx.cn-north-1.es.amazonaws.com.cn";
    private static Region region = Region.CN_NORTH_1;

    public static void main(String[] args) throws IOException, InterruptedException {
        SdkHttpClient httpClient = ApacheHttpClient.builder().build();
        try {

            OpenSearchClient client = new OpenSearchClient(
                    new AwsSdk2Transport(
                            httpClient,
                            host,
                            region,
                            AwsSdk2TransportOptions.builder().build()));

            // create the index
            String index = "sample-index";

            CreateIndexRequest createIndexRequest = new CreateIndexRequest.Builder().index(index).build();
            client.indices().create(createIndexRequest);

            // index data
            Map document = new HashMap();
            document.put("firstName", "Michael");
            document.put("lastName", "Douglas");
            IndexRequest documentIndexRequest = new IndexRequest.Builder()
                    .index(index)
                    .id("2")
                    .document(document)
                    .build();
            client.index(documentIndexRequest);

            // delete the index
            DeleteIndexRequest deleteRequest = new DeleteIndexRequest.Builder().index(index).build();
            client.indices().delete(deleteRequest);

        }
        finally {
            httpClient.close();
        }
    }
}
```

