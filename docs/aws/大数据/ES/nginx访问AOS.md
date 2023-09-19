https://repost.aws/zh-Hans/knowledge-center/opensearch-outside-vpc-nginx

```co
可以更改nginx配置文件设置proxy_pass达到反向代理的效果。

测试使用带有自签名证书的测试环境，具体参考文档【1】

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/cert.key -out /etc/nginx/cert.crt

 导航到 /etc/nginx/conf.d 目录，然后创建一个名为 default.conf 的文件。使用以下值修改文件：
/etc/nginx/cert.crt：SSL 证书的路径
/etc/nginx/cert.key：您为 SSL 证书生成的私有密钥的路径
$domain-endpoint：您的 OpenSearch Services 终端节点

添加反向代理规则：

location /_dashboards {
                proxy_pass http://$OPENSEARCH_DASHBOARD_URL  ;
        }

这部分配置文件会把nginx在443端口的流量转发到opensearch dashboard.

server {
    listen 443;
    server_name $host;
    rewrite ^/$ https://$host/_dashboards  redirect;

    ssl_certificate           /etc/nginx/cert.crt;
    ssl_certificate_key       /etc/nginx/cert.key;

    ssl on;
    ssl_session_cache  builtin:1000  shared:SSL:10m;
    ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers HIGH:!aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4;
    ssl_prefer_server_ciphers on;

    location /_dashboards {
        # Forward requests to Dashboards
        proxy_pass https://search-dakun-test-wfzvl2teucq77l5utcm5dcapcm.cn-north-1.es.amazonaws.com.cn/_dashboards ; 

    }
}
```

OpenSearch _dashboards:
https://xxxxxx.es.amazonaws.com.cn/_dashboards  

1）启动Amazon linux 2

2）安装nginx：
sudo amazon-linux-extras install nginx1

3）设置密钥：
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/cert.key -out /etc/nginx/cert.crt

4）创建nginx配置文件：
cd /etc/nginx/conf.d/
sudo vi default.conf

5）配置文件如下：
server {
    listen 443;
    server_name $host;
    rewrite ^/$ https://$host/_dashboards  redirect;

    ssl_certificate           /etc/nginx/cert.crt;
    ssl_certificate_key       /etc/nginx/cert.key;
    
    ssl on;
    ssl_session_cache  builtin:1000  shared:SSL:10m;
    ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers HIGH:!aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4;
    ssl_prefer_server_ciphers on;
    
    location /_dashboards {
        # Forward requests to Dashboards
        proxy_pass https://vpc-dakun-vpc-adlw4p4pkp5l3nfzqylbdcgmom.cn-north-1.es.amazonaws.com.cn   ;
    
    }
}

6）重启nginx服务：
sudo systemctl restart nginx.service

7）浏览器访问此linux，即可重定向到opensearch dashboard
https://$IP/
