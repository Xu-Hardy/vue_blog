###  Linux 把源代码打包成安装包



正常编译安装源代码的需要如下操作：

```shell
./configure
make
make install
make clean
```

那么如果仅仅是要编译成安装包呢？

先去安装checkinstall

`apt-get install checkinstall`

这里以的debian为例使用checkinstall打包了一个deb的安装包

```shell
tar -zxvf source-app.tar.gz
cd source
./configure
make
checkinstall
```

然后使用dpkg -i name.deb即可



参考：

[ubuntu help wiki](https://help.ubuntu.com/community/CheckInstall)

[debian wiki](https://wiki.debian.org/CheckInstall)

[checkisntall mainpage](https://manpages.debian.org/buster-backports/checkinstall/checkinstall.8.en.html)
