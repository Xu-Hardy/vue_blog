### ssh key

#### 1.生成

` ssh-keygen -t rsa`

#### 2.传输

`ssh-copy-id  -i /root/.ssh/id_rsa root@xxx,xxx,xxx,xxx`

#### sshd_config

`vim /etc/ssh/sshd_config`

1、使用ssh key登录 	**PubkeyAuthentication** yes

2、禁用密码登录 		**UserPAM** no

3、重启ssh服务  `/etc/init.d/sshd restart `

```
Host 自定义
HostName hostname or ip address
Port 22
User username
ServerAliveInterval 30
IdentityFile ~/.ssh/id_rsa
```


这样做确实可以免密码登录，但是如果要执行sudo的话还是混提示输入密码。

更改`/etc/sudoer`文件
