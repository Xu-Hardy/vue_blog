默认情况下，我们会阻止账户两个区域中，所有EC2实例的25 端口出站流量（SMTP），如果客户需要使用EC2搭建邮件服务器或者从EC2发送邮件，那么就会用到实例的25端口，进而申请取消相关限制。

很多时候是限制发送频率而不是完全限制。

场景：

自己遇到的例子，写了个自动发邮件的程序（发邮件到自己邮箱），然后每次都是发十几条邮件之后就中断不发送了，然后等了一段时间又能发送了，发了十几条又被中断了。
[console.amazonaws.cn/support/contacts#/rdns-limits](https://console.amazonaws.cn/support/contacts#/rdns-limits)