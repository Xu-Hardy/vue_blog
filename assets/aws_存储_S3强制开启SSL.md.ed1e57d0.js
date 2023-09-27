import{_ as s,c as n,o as a,a as o}from"./app.58320140.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aws/存储/S3强制开启SSL.md"}'),p={name:"aws/存储/S3强制开启SSL.md"},e=o(`<p>问题描述：</p><p>在Amazon S3中，SSL是用于加密客户端与S3之间的数据传输的。事实上，当使用Amazon S3的HTTPS终结点访问你的bucket时，就已经使用SSL/TLS进行数据加密了。如果您想控制只有HTTPS请求或者特定TLS版本才能访问此存储桶，那么可以在桶策略上进行设置，详情您可以参考链接【1】。</p><p>解决方案：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> &quot;Version&quot;: &quot;2012-10-17&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Statement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Sid&quot;: &quot;EnforceTLSv12orHigher&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Principal&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;AWS&quot;: &quot;*&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Action&quot;: [&quot;s3:*&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Effect&quot;: &quot;Deny&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Resource&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;arn:aws:s3:::DOC-EXAMPLE-BUCKET/*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;arn:aws:s3:::DOC-EXAMPLE-BUCKET&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Condition&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;NumericLessThan&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;s3:TlsVersion&quot;: 1.2</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><a href="https://repost.aws/zh-Hans/knowledge-center/s3-enforce-modern-tls" target="_blank" rel="noreferrer">强制对 Amazon S3 桶使用 TLS 1.2 或更高版本 | AWS re:Post</a></p>`,5),t=[e];function l(c,r,A,C,i,u){return a(),n("div",null,t)}const _=s(p,[["render",l]]);export{S as __pageData,_ as default};
