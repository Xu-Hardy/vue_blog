使用webstorm直接运行ts文件，关联ts-node

```bash
npm i typescript -D
npm i ts-node -D
```

分析过程：

配置webstorm,点击右上角打开Run/Debug Configurations选项卡 添加nodejs，输入框添加**--require ts-node/register**

然后在JavaScript file 添加**$FilePathRelativeToProjectRoot$**
![](https://raw.githubusercontent.com/Xu-Hardy/image-host/master/20230926201239.png)