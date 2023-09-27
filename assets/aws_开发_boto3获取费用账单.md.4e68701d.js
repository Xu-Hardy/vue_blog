import{_ as s,c as n,o as a,a as l}from"./app.58320140.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aws/开发/boto3获取费用账单.md"}'),p={name:"aws/开发/boto3获取费用账单.md"},o=l(`<p>boto3获取费用账单</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> boto3</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_billing_info</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    client </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> boto3</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">client</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ce</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">region_name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cn-north-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 使用Cost Explorer服务的客户端</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get_cost_and_usage</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">TimePeriod</span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-06-01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">  </span><span style="color:#676E95;font-style:italic;"># 开始日期</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">End</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-06-29</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;">  </span><span style="color:#676E95;font-style:italic;"># 结束日期</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">Granularity</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MONTHLY</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">  </span><span style="color:#676E95;font-style:italic;"># 可以是&#39;DAILY&#39;，&#39;MONTHLY&#39;，或&#39;HOURLY&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">Metrics</span><span style="color:#89DDFF;">=[</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">UnblendedCost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">  </span><span style="color:#676E95;font-style:italic;"># 你可以指定不同的度量标准，例如&#39;UsageQuantity&#39;或&#39;BlendedCost&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">get_billing_info</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div>`,2),t=[o];function e(c,F,r,D,y,i){return a(),n("div",null,t)}const C=s(p,[["render",e]]);export{_ as __pageData,C as default};
