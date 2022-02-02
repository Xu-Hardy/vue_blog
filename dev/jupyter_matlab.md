# jupyter notebook支持matlab语法

1.安装matlab的python拓展

进入安装matlab的文件夹，如下路径
![](https://upload-images.jianshu.io/upload_images/5415189-01b0cb94189c06d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

执行py代码，
```
python setup.py install
```
这样就算完成了py的拓展。


2.在jupyter装 matlab kernel

```
pip install matlab_kernel
```

使用jupyter即可。


我的matlab版本是2018a, python 3.6.5。用的最新的anaconda。
参考链接：

https://github.com/Calysto/matlab_kernel

https://www.zhihu.com/question/65744778