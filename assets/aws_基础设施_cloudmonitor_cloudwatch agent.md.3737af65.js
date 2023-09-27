import{_ as s,c as n,o as a,a as l}from"./app.58320140.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aws/基础设施/cloudmonitor/cloudwatch agent.md"}'),p={name:"aws/基础设施/cloudmonitor/cloudwatch agent.md"},o=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">centos测试:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">安装：</span></span>
<span class="line"><span style="color:#A6ACCD;">wget https://s3.amazonaws.com/amazoncloudwatch-agent/centos/amd64/latest/amazon-cloudwatch-agent </span></span>
<span class="line"><span style="color:#A6ACCD;">t.rpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sudo rpm -U ./amazon-cloudwatch-agent.rpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">生成配置文件：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">On which OS are you planning to use the agent?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. linux</span></span>
<span class="line"><span style="color:#A6ACCD;">2. windows</span></span>
<span class="line"><span style="color:#A6ACCD;">3. darwin</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">Trying to fetch the default region based on ec2 metadata...</span></span>
<span class="line"><span style="color:#A6ACCD;">Are you using EC2 or On-Premises hosts?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. EC2</span></span>
<span class="line"><span style="color:#A6ACCD;">2. On-Premises</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">Which user are you planning to run the agent?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. root</span></span>
<span class="line"><span style="color:#A6ACCD;">2. cwagent</span></span>
<span class="line"><span style="color:#A6ACCD;">3. others</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">Do you want to turn on StatsD daemon?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. yes</span></span>
<span class="line"><span style="color:#A6ACCD;">2. no</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">Do you want to monitor metrics from CollectD? WARNING: CollectD must be installed or the Agent will fail to start</span></span>
<span class="line"><span style="color:#A6ACCD;">1. yes</span></span>
<span class="line"><span style="color:#A6ACCD;">2. no</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">Do you want to monitor any host metrics? e.g. CPU, memory, etc.</span></span>
<span class="line"><span style="color:#A6ACCD;">1. yes</span></span>
<span class="line"><span style="color:#A6ACCD;">2. no</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">Do you want to monitor cpu metrics per core?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. yes</span></span>
<span class="line"><span style="color:#A6ACCD;">2. no</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">Do you want to add ec2 dimensions (ImageId, InstanceId, InstanceType, AutoScalingGroupName) into all of your metrics if the info is available?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. yes</span></span>
<span class="line"><span style="color:#A6ACCD;">2. no</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">Do you want to aggregate ec2 dimensions (InstanceId)?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. yes</span></span>
<span class="line"><span style="color:#A6ACCD;">2. no</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">Would you like to collect your metrics at high resolution (sub-minute resolution)? This enables sub-minute resolution for all metrics, but you can customize for specific metrics in the output json file.</span></span>
<span class="line"><span style="color:#A6ACCD;">1. 1s</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 10s</span></span>
<span class="line"><span style="color:#A6ACCD;">3. 30s</span></span>
<span class="line"><span style="color:#A6ACCD;">4. 60s</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [4]:</span></span>
<span class="line"><span style="color:#A6ACCD;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">Which default metrics config do you want?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. Basic</span></span>
<span class="line"><span style="color:#A6ACCD;">2. Standard</span></span>
<span class="line"><span style="color:#A6ACCD;">3. Advanced</span></span>
<span class="line"><span style="color:#A6ACCD;">4. None</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">Current config as follows:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;agent&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;run_as_user&quot;: &quot;root&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collected&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;cpu&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;measurement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;cpu_usage_idle&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;cpu_usage_iowait&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;cpu_usage_user&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;cpu_usage_system&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;totalcpu&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;disk&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;measurement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;used_percent&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;inodes_free&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;resources&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;diskio&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;measurement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;io_time&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;resources&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;mem&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;measurement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;mem_used_percent&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;swap&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;measurement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;swap_used_percent&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Are you satisfied with the above config? Note: it can be manually customized after the wizard completes to add additional items.</span></span>
<span class="line"><span style="color:#A6ACCD;">1. yes</span></span>
<span class="line"><span style="color:#A6ACCD;">2. no</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">Do you have any existing CloudWatch Log Agent (http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html ) configuration file to import for migration?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. yes</span></span>
<span class="line"><span style="color:#A6ACCD;">2. no</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [2]:</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">Do you want to monitor any log files?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. yes</span></span>
<span class="line"><span style="color:#A6ACCD;">2. no</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">Saved config file to /opt/aws/amazon-cloudwatch-agent/bin/config.json successfully.</span></span>
<span class="line"><span style="color:#A6ACCD;">Current config as follows:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;agent&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;run_as_user&quot;: &quot;root&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collected&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;cpu&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;measurement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;cpu_usage_idle&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;cpu_usage_iowait&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;cpu_usage_user&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;cpu_usage_system&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;totalcpu&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;disk&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;measurement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;used_percent&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;inodes_free&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;resources&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;diskio&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;measurement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;io_time&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;resources&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;mem&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;measurement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;mem_used_percent&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;swap&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;measurement&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;swap_used_percent&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;metrics_collection_interval&quot;: 60</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Please check the above content of the config.</span></span>
<span class="line"><span style="color:#A6ACCD;">The config file is also located at /opt/aws/amazon-cloudwatch-agent/bin/config.json.</span></span>
<span class="line"><span style="color:#A6ACCD;">Edit it manually if needed.</span></span>
<span class="line"><span style="color:#A6ACCD;">Do you want to store the config in the SSM parameter store?</span></span>
<span class="line"><span style="color:#A6ACCD;">1. yes</span></span>
<span class="line"><span style="color:#A6ACCD;">2. no</span></span>
<span class="line"><span style="color:#A6ACCD;">default choice: [1]:</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">Program exits now.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">使用命令行启动 CloudWatch 代理</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/opt/aws/amazon-cloudwatch-agent/bin/config.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),e=[o];function t(c,C,A,i,r,u){return a(),n("div",null,e)}const q=s(p,[["render",t]]);export{D as __pageData,q as default};
