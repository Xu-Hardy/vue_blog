问题描述：

Java使用标准HTTP API 连接opensearch

解决方案：

```java
package org.example;

import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.auth.signer.Aws4Signer;
import software.amazon.awssdk.auth.signer.params.Aws4SignerParams;
import software.amazon.awssdk.http.SdkHttpFullRequest;
import software.amazon.awssdk.http.SdkHttpMethod;
import software.amazon.awssdk.regions.Region;
import java.io.BufferedReader;
import java.io.InputStreamReader;

import java.io.ByteArrayInputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.nio.charset.StandardCharsets;

public class OpensearchSigV4Example {

    public static void main(String[] args) throws Exception {

        String accessKey = "xxxx";
        String secretKey = "xxxxx";
        Region region = Region.CN_NORTH_1; 
        String domainEndpoint = "https://xxxxx.cn-north-1.es.amazonaws.com.cn";
        String indexName = "my-index1";
        String field = "a";
        Integer text = 5;

        // 构建请求正文
        String jsonBody = String.format("{\"query\": {\"match\": {\"%s\": \"%s\"}}}", field, text);

        // 构建请求
        SdkHttpFullRequest.Builder httpRequestBuilder = SdkHttpFullRequest.builder()
                .method(SdkHttpMethod.POST)
                .protocol("https")
                .host(new URI(domainEndpoint).getHost())
                .port(new URI(domainEndpoint).getPort())
                .encodedPath("/" + indexName + "/_doc")
                .contentStreamProvider(() -> new ByteArrayInputStream(jsonBody.getBytes(StandardCharsets.UTF_8)));

        // 签署请求
        Aws4Signer signer = Aws4Signer.create();
        SdkHttpFullRequest signedRequest = signer.sign(httpRequestBuilder.build(),
                Aws4SignerParams.builder()
                        .awsCredentials(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)).resolveCredentials())
                        .signingName("es")
                        .signingRegion(region)
                        .build());

        // 使用Java的HttpURLConnection发送请求
        HttpURLConnection connection = (HttpURLConnection) new URI(domainEndpoint + "/" + indexName + "/_doc").toURL().openConnection();
        connection.setRequestMethod("POST");
        connection.setDoOutput(true);

        // 设置 Content-Type 为 application/json
        connection.setRequestProperty("Content-Type", "application/json");

        for (String headerName : signedRequest.toBuilder().headers().keySet()) {
            for (String headerValue : signedRequest.toBuilder().headers().get(headerName)) {
                connection.setRequestProperty(headerName, headerValue);
            }
        }

        try (OutputStream os = connection.getOutputStream()) {
            os.write(jsonBody.getBytes(StandardCharsets.UTF_8));
        }

        System.out.println("Response code: " + connection.getResponseCode());
        System.out.println(connection.getResponseMessage());

        InputStreamReader isr;
        if (connection.getResponseCode() == 200 || connection.getResponseCode() == 201) {
            isr = new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8);
        } else {
            isr = new InputStreamReader(connection.getErrorStream(), StandardCharsets.UTF_8);
        }

        try (BufferedReader br = new BufferedReader(isr)) {
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) {
                response.append(line).append("\n");
            }
            System.out.println("Response body: " + response.toString());
        }

        connection.disconnect();
    }
}
```