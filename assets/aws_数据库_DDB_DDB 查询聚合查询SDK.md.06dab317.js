import{_ as s,c as n,o as a,a as e}from"./app.58320140.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aws/数据库/DDB/DDB 查询聚合查询SDK.md"}'),t={name:"aws/数据库/DDB/DDB 查询聚合查询SDK.md"},p=e(`<p>问题描述：</p><p>查询一段时间内的某个字段的count聚合</p><p>分析过程：</p><p>使用 Promise 和 async/await 可以使代码更简洁，更易于理解，特别是在处理异步操作时。为了使用 async/await，需要确保你的函数返回一个 Promise。</p><p>AWS SDK 的方法通常都具有一个 .promise() 函数，这使得转换变得非常简单。</p><p>使用 Promise 和 async/await 来查询具有 ticket 字段的项的数量：</p><ol><li>准备 AWS SDK：</li></ol><div class="language-node"><button title="Copy Code" class="copy"></button><span class="lang">node</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const AWS = require(&#39;aws-sdk&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const dynamoDb = new AWS.DynamoDB.DocumentClient();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li>创建一个异步函数并进行查询：</li></ol><div class="language-node"><button title="Copy Code" class="copy"></button><span class="lang">node</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">async function getCountOfTickets() {</span></span>
<span class="line"><span style="color:#A6ACCD;">const startDate = &quot;2023-01-01&quot;;  // 示例日期，需要根据实际情况进行调整</span></span>
<span class="line"><span style="color:#A6ACCD;">const endDate = &quot;2023-12-31&quot;;    // 示例日期</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const params = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    TableName: &#39;test02&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    FilterExpression: &#39;attribute_exists(ticketID) AND #dateAttr BETWEEN :startDate AND :endDate&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ExpressionAttributeNames: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;#dateAttr&quot;: &quot;date&quot;  // 替换为你的表中的实际日期字段名</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ExpressionAttributeValues: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;:startDate&quot;: startDate,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;:endDate&quot;: endDate</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    Select: &#39;COUNT&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const data = await dynamodb.scan(params).promise();</span></span>
<span class="line"><span style="color:#A6ACCD;">    return data.Count;</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch (error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.error(&quot;Error:&quot;, error);</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw error;  // or handle it based on your requirements</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li>使用这个函数：</li></ol><div class="language-node"><button title="Copy Code" class="copy"></button><span class="lang">node</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const count = await getCountOfTickets();</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;Number of items with &#39;ticket&#39; field:&quot;, count);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch (error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.error(&quot;Failed to fetch count:&quot;, error);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这种使用 async/await 的方法允许你以更同步的方式编写代码，而不需要嵌套回调，从而提高代码的可读性。</p><p>注意几点：</p><p>我使用了 ExpressionAttributeNames 来代替真正的字段名。这在你的字段名是 DynamoDB 的保留字时是有用的，但在大多数情况下，它只是为了清晰。</p><p>ExpressionAttributeValues 用于传递参数给你的 FilterExpression。在这里，我们使用它来传递 startDate 和 endDate。</p><p>假设你的日期字段是一个字符串，格式为 &quot;YYYY-MM-DD&quot;。如果它是一个时间戳或其他格式，你可能需要进行调整。</p><p>这种方式将会过滤出所有存在 ticketID 字段，并且 date 字段值介于 startDate 和 endDate 之间的项。</p>`,18),l=[p];function o(c,r,i,A,C,D){return a(),n("div",null,l)}const u=s(t,[["render",o]]);export{d as __pageData,u as default};
