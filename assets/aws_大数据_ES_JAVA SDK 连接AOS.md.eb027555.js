import{_ as s,c as n,o as a,a as l}from"./app.58320140.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"JAVA SDK 连接AOS","slug":"java-sdk-连接aos","link":"#java-sdk-连接aos","children":[{"level":3,"title":"pom.xml","slug":"pom-xml","link":"#pom-xml","children":[]}]}],"relativePath":"aws/大数据/ES/JAVA SDK 连接AOS.md"}'),p={name:"aws/大数据/ES/JAVA SDK 连接AOS.md"},o=l(`<h2 id="java-sdk-连接aos" tabindex="-1">JAVA SDK 连接AOS <a class="header-anchor" href="#java-sdk-连接aos" aria-hidden="true">#</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">example</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">java</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">io</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">IOException</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">java</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">util</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">HashMap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">java</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">util</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Map</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">opensearch</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">client</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">opensearch</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">OpenSearchClient</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">opensearch</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">client</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">opensearch</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">core</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">IndexRequest</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">opensearch</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">client</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">opensearch</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">indices</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">CreateIndexRequest</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">opensearch</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">client</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">opensearch</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">indices</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">DeleteIndexRequest</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">opensearch</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">client</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">transport</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">aws</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">AwsSdk2Transport</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">opensearch</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">client</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">transport</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">aws</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">AwsSdk2TransportOptions</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">software</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">amazon</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">awssdk</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">http</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">SdkHttpClient</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">software</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">amazon</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">awssdk</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">http</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">apache</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">ApacheHttpClient</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">software</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">amazon</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">awssdk</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">regions</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Region</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> host </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxxxx.es.amazonaws.com.cn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Region</span><span style="color:#A6ACCD;"> region </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Region</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CN_NORTH_1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IOException</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">InterruptedException</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">SdkHttpClient</span><span style="color:#A6ACCD;"> httpClient </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ApacheHttpClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">builder</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">OpenSearchClient</span><span style="color:#A6ACCD;"> client </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OpenSearchClient</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AwsSdk2Transport</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">                            httpClient</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            host</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            region</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            AwsSdk2TransportOptions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">builder</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">()));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// create the index</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sample-index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">CreateIndexRequest</span><span style="color:#A6ACCD;"> createIndexRequest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> CreateIndexRequest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Builder</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indices</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">createIndexRequest</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// index data</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">Map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> document </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">HashMap</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">            document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">firstName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Michael</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lastName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Douglas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">IndexRequest</span><span style="color:#A6ACCD;"> documentIndexRequest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> IndexRequest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Builder</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">id</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">document</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">documentIndexRequest</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// delete the index</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">DeleteIndexRequest</span><span style="color:#A6ACCD;"> deleteRequest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> DeleteIndexRequest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Builder</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indices</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">deleteRequest</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">finally</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            httpClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="pom-xml" tabindex="-1">pom.xml <a class="header-anchor" href="#pom-xml" aria-hidden="true">#</a></h3><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">project</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://maven.apache.org/POM/4.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">xsi</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2001/XMLSchema-instance</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xsi</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">schemaLocation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">modelVersion</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">4.0.0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">modelVersion</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.amazonaws</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">amazon-opensearch-docs-sample</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">packaging</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">jar</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">packaging</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">0.1.0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">amazon-opensearch-sample</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">http://maven.apache.org</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">scm</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">https://github.com/awsdocs/amazon-opensearch-service-developer-guide/tree/master/sample_code/java/opensearch-java-aws-sdk2-transport</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">scm</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">licenses</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">license</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Apache License, Version 2.0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">https://aws.amazon.com/apache2.0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">distribution</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">repo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">distribution</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">license</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">licenses</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">maven.compiler.source</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">1.11</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">maven.compiler.source</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">maven.compiler.target</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">1.11</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">maven.compiler.target</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">aws-java-sdk.version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2.17.219</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">aws-java-sdk.version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependencyManagement</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">software.amazon.awssdk</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">bom</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\${aws-java-sdk.version}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">pom</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">scope</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">import</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">scope</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependencyManagement</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">software.amazon.awssdk</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">auth</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.opensearch.client</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">opensearch-java</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2.1.0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">software.amazon.awssdk</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">apache-client</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2.17.224</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">project</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(c,r,D,F,y,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
