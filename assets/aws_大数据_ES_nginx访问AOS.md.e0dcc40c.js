import{_ as s,c as n,o as a,a as e}from"./app.58320140.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aws/大数据/ES/nginx访问AOS.md"}'),p={name:"aws/大数据/ES/nginx访问AOS.md"},l=e(`<p><a href="https://repost.aws/zh-Hans/knowledge-center/opensearch-outside-vpc-nginx" target="_blank" rel="noreferrer">https://repost.aws/zh-Hans/knowledge-center/opensearch-outside-vpc-nginx</a></p><div class="language-co"><button title="Copy Code" class="copy"></button><span class="lang">co</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">可以更改nginx配置文件设置proxy_pass达到反向代理的效果。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">测试使用带有自签名证书的测试环境，具体参考文档【1】</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/cert.key -out /etc/nginx/cert.crt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 导航到 /etc/nginx/conf.d 目录，然后创建一个名为 default.conf 的文件。使用以下值修改文件：</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/nginx/cert.crt：SSL 证书的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/nginx/cert.key：您为 SSL 证书生成的私有密钥的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">$domain-endpoint：您的 OpenSearch Services 终端节点</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">添加反向代理规则：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">location /_dashboards {</span></span>
<span class="line"><span style="color:#A6ACCD;">                proxy_pass http://$OPENSEARCH_DASHBOARD_URL  ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这部分配置文件会把nginx在443端口的流量转发到opensearch dashboard.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 443;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name $host;</span></span>
<span class="line"><span style="color:#A6ACCD;">    rewrite ^/$ https://$host/_dashboards  redirect;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate           /etc/nginx/cert.crt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key       /etc/nginx/cert.key;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_session_cache  builtin:1000  shared:SSL:10m;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_ciphers HIGH:!aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location /_dashboards {</span></span>
<span class="line"><span style="color:#A6ACCD;">        # Forward requests to Dashboards</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass https://search-dakun-test-wfzvl2teucq77l5utcm5dcapcm.cn-north-1.es.amazonaws.com.cn/_dashboards ; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>OpenSearch _dashboards: <a href="https://xxxxxx.es.amazonaws.com.cn/_dashboards" target="_blank" rel="noreferrer">https://xxxxxx.es.amazonaws.com.cn/_dashboards</a></p><p>1）启动Amazon linux 2</p><p>2）安装nginx： sudo amazon-linux-extras install nginx1</p><p>3）设置密钥： sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/cert.key -out /etc/nginx/cert.crt</p><p>4）创建nginx配置文件： cd /etc/nginx/conf.d/ sudo vi default.conf</p><p>5）配置文件如下： server { listen 443; server_name $host; rewrite ^/$ <a href="https://$host/_dashboards" target="_blank" rel="noreferrer">https://$host/_dashboards</a> redirect;</p><pre><code>ssl_certificate           /etc/nginx/cert.crt;
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
</code></pre><p>}</p><p>6）重启nginx服务： sudo systemctl restart nginx.service</p><p>7）浏览器访问此linux，即可重定向到opensearch dashboard <a href="https://$IP/" target="_blank" rel="noreferrer">https://$IP/</a></p>`,12),o=[l];function c(t,r,i,A,C,d){return a(),n("div",null,o)}const y=s(p,[["render",c]]);export{h as __pageData,y as default};
