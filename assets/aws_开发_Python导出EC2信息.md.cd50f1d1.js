import{_ as s,c as n,o as a,a as e}from"./app.58320140.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aws/开发/Python导出EC2信息.md"}'),p={name:"aws/开发/Python导出EC2信息.md"},o=e(`<p>问题描述：</p><p>Python 使用boto3导出EC2信息</p><p>分析过程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import boto3</span></span>
<span class="line"><span style="color:#A6ACCD;">import pandas as pd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ec2 = boto3.client(&quot;ec2&quot;, region_name=&#39;cn-north-1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">response = ec2.describe_instances(Filters=[{&quot;Name&quot;: &quot;instance-state-name&quot;, &#39;Values&#39;: [&#39;running&#39;]}])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">basic_ec2_information = []</span></span>
<span class="line"><span style="color:#A6ACCD;">for reservation in response[&#39;Reservations&#39;]:</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance = reservation[&#39;Instances&#39;][0]</span></span>
<span class="line"><span style="color:#A6ACCD;">    CpuOptions = instance[&#39;CpuOptions&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    instance_type = instance[&#39;InstanceType&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    images_name = ec2.describe_images(ImageIds=[instance[&#39;ImageId&#39;]])[&#39;Images&#39;][0][&#39;Description&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    detail = ec2.describe_instance_types(InstanceTypes=[instance_type])</span></span>
<span class="line"><span style="color:#A6ACCD;">    memory = f&quot;{detail[&#39;InstanceTypes&#39;][0][&#39;MemoryInfo&#39;][&#39;SizeInMiB&#39;] / 1024}G&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    eni = instance[&#39;NetworkInterfaces&#39;][0][&#39;NetworkInterfaceId&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    # ec2.modify_network_interface_attribute(NetworkInterfaceId=eni, Groups=[&#39;sg-id&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">    VolumeId = instance[&#39;BlockDeviceMappings&#39;][0][&#39;Ebs&#39;][&#39;VolumeId&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    volume = f&quot;{ec2.describe_volumes(VolumeIds=[VolumeId])[&#39;Volumes&#39;][0][&#39;Size&#39;]}G&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    tags = instance.get(&#39;Tags&#39;, None)</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance_name = [i.get(&#39;Value&#39;, &#39;None&#39;) for i in tags if &#39;Name&#39; in i.values()][0] if tags is not None else &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    basic_ec2_information.append({</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;Name&#39;: instance_name,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;images_name&#39;: images_name,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;CpuOptions&#39;: CpuOptions[&#39;CoreCount&#39;] * CpuOptions[&#39;ThreadsPerCore&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;memory&#39;: memory,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;disk&#39;: volume,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;PrivateIpAddress&#39;: instance[&#39;PrivateIpAddress&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;PublicIpAddress&#39;: instance.get(&#39;PublicIpAddress&#39;, None)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    df = pd.DataFrame(data=basic_ec2_information)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    df.rename(columns={</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;Name&quot;: &quot;主机名称&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;images_name&quot;: &quot;镜像&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;CpuOptions&quot;: &quot;CPU&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;memory&quot;: &quot;内存 (GB)&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;disk&quot;: &quot;硬盘 (GB)&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;PrivateIpAddress&quot;: &quot;内网ip&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;PublicIpAddress&quot;: &quot;外网ip&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }).to_csv(&quot;data.csv&quot;, index=False)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),l=[o];function t(c,i,r,C,A,u){return a(),n("div",null,l)}const m=s(p,[["render",t]]);export{d as __pageData,m as default};
