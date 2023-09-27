import{_ as s,c as n,o as a,a as l}from"./app.58320140.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aws/开发/Python从kafka读取数据写道AOS和S3.md"}'),p={name:"aws/开发/Python从kafka读取数据写道AOS和S3.md"},o=l(`<p>Python从kafka读取数据写道AOS和S3</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> json</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> boto3</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> datetime</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> opensearchpy </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> OpenSearch</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> kafka </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> KafkaConsumer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">s3_client </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> boto3</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">client</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">bucket </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pipline</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">host </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxxx.cn-north-1.es.amazonaws.com.cn</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">port </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">443</span></span>
<span class="line"><span style="color:#A6ACCD;">auth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tesssssst</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">os_client </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OpenSearch</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">hosts</span><span style="color:#89DDFF;">=[{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">host</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> host</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">port</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> port</span><span style="color:#89DDFF;">}],</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">http_compress</span><span style="color:#89DDFF;">=True,</span><span style="color:#82AAFF;">  </span><span style="color:#676E95;font-style:italic;"># enables gzip compression for request bodies</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">http_auth</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">auth</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">use_ssl</span><span style="color:#89DDFF;">=True</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">bootstrap_servers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b-1.xxx.y6lq26.c2.kafka.cn-north-1.amazonaws.com.cn:9092</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b-3.xxx.y6lq26.c2.kafka.cn-north-1.amazonaws.com.cn:9092</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_msk_data</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    consumer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">KafkaConsumer</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MSKTutorialTopic</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">bootstrap_servers</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">bootstrap_servers</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> msg </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> consumer</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#A6ACCD;"> msg</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">data2OpenSearch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">document</span><span style="color:#89DDFF;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    index_name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ana-lab</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> os_client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">index_name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">body</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">json</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loads</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">document</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">refresh</span><span style="color:#89DDFF;">=True</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">data2s3</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">bucket</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    now </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> datetime</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">datetime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    current_date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> now</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">strftime</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%Y/%m/</span><span style="color:#F78C6C;">%d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    current_time </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> now</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">strftime</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%H%M%S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    Key </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">current_date</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">current_time</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">.txt&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    body </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> json</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumps</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">encode</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    s3_client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put_object</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Body</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">body</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">Bucket</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">bucket</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">Key</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">Key</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_msk_data</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">data2OpenSearch</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">data2s3</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">bucket</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> data</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,2),t=[o];function e(c,F,r,D,y,A){return a(),n("div",null,t)}const _=s(p,[["render",e]]);export{i as __pageData,_ as default};
