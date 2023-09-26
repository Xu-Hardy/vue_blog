### Python

 [清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/)

```
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

[pypi | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)

至于单独给pip设置代理，是仁者见仁的一件事，可以单独给Pip设置代理，也可以使用系统的代理

```bash
pip install -r requirements.txt --proxy=代理服务器IP:端口号
```

或者设置

```ini
[global]
  index-url = https://pypi.tuna.tsinghua.edu.cn/simple
  proxy=your_username:your_password@192.168.158.1:80

[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn/simple
```

参考 [win10 pip设置代理 - 知乎](https://zhuanlan.zhihu.com/p/110945788)