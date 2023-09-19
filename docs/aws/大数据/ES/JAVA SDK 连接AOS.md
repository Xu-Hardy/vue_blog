## JAVA SDK 连接AOS

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

    private static final String host = "xxxxxx.es.amazonaws.com.cn";
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
            Map<String, Object> document = new HashMap<>();
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



### pom.xml

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.amazonaws</groupId>
    <artifactId>amazon-opensearch-docs-sample</artifactId>
    <packaging>jar</packaging>
    <version>0.1.0</version>
    <name>amazon-opensearch-sample</name>
    <url>http://maven.apache.org</url>

    <scm>
        <url>https://github.com/awsdocs/amazon-opensearch-service-developer-guide/tree/master/sample_code/java/opensearch-java-aws-sdk2-transport</url>
    </scm>

    <licenses>
        <license>
            <name>Apache License, Version 2.0</name>
            <url>https://aws.amazon.com/apache2.0</url>
            <distribution>repo</distribution>
        </license>
    </licenses>

    <properties>
        <maven.compiler.source>1.11</maven.compiler.source>
        <maven.compiler.target>1.11</maven.compiler.target>
        <aws-java-sdk.version>2.17.219</aws-java-sdk.version>
    </properties>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>software.amazon.awssdk</groupId>
                <artifactId>bom</artifactId>
                <version>${aws-java-sdk.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>software.amazon.awssdk</groupId>
            <artifactId>auth</artifactId>
        </dependency>
        <dependency>
            <groupId>org.opensearch.client</groupId>
            <artifactId>opensearch-java</artifactId>
            <version>2.1.0</version>
        </dependency>
        <dependency>
            <groupId>software.amazon.awssdk</groupId>
            <artifactId>apache-client</artifactId>
            <version>2.17.224</version>
        </dependency>
    </dependencies>
</project>
```

