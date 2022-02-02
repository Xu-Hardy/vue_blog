# udacity无人驾驶先修课笔记（一）  高精度地图

高精度地图主要用于**定位**和**预先规划**，这些都是用于辅助驾驶的信息。百度开源了Apollo的无人车，Apollo把地图放在了云端，这样就可以即时更新，避免了数据老旧的问题。另外这个高精度和手机的高德或者腾讯地图不同，用于PC或者智能手机的地图精度是米级的，对于人来说，差个几米的距离用眼睛也分辨不出来，所以对日常导航的影响很小。而对于自动驾驶来说，几米的精度确实不够的，Apollo的高精度的地图可以达到厘米级，在地图上保证车辆和行人的安全。同样这个这个地图是三维的，包含了车道线，交通标志等。

![三维高精度地图](https://upload-images.jianshu.io/upload_images/5415189-c52ebb94ca286cff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 定位：
![](https://upload-images.jianshu.io/upload_images/5415189-6b9b3741e0ea1ce8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

使用高精度地图进行定位，无人车就可以自己所在的位置，从而进行路径规划。


##### 预先规划：

1.对于同一目的的，可以选择不同的路线。
2.在车辆行驶过程中，可以准确的识别道路上的中心线。
3.可以提前查看路标，比如提前减速。如果前方有障碍物可以提前知道，进而及时更换驾驶路线。

![路径优化](https://upload-images.jianshu.io/upload_images/5415189-caf486fc7ea35920.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 高精度地图的构建：

![传感器融合](https://upload-images.jianshu.io/upload_images/5415189-fcf3772f75b66d54.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

1.数据采集:用于构建，维护，更新地图。用传感器采集点云回来，再进行和传感器融合。
2.数据处理：这个步骤很像数据分析，这个时候就把拿到的数据进行整理，分类，过滤，清洗，最后生成没有语义信息的初始化题图模板。
3.对象检测：官方的说法是采用人工智能技术检测对象并且进行分类。不过我觉得这里应该是机器学习非监督学习的聚类。（车道线，交通标志）
4.手动验证： 这里确保自动地图创建的都十八正确的，如果有错能够及时发现问题。
5.地图发布：确保地图无误，最终发布到云上，无人车在联网状态下可以共享。

![高精度地图的构建](https://upload-images.jianshu.io/upload_images/5415189-a0a98aa024a0651e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**注**：对于地图的数据采集问题，百度使用了众包，允许其他人使用智能手机和其他无人车来贡献地图信息。


![定位](https://upload-images.jianshu.io/upload_images/5415189-31e683ea94223ba8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# udacity无人驾驶先修课笔记（二） 定位
#### 1. 为何GPS不应用在无人车上？

![GPS](https://upload-images.jianshu.io/upload_images/5415189-f882add8ed7bb1b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


我们的智能手机通常配备GPS的接收器，但是GPS对于无人车来说精度就稍微低了一些，GPS的精度在1~3米之间，而在一些隧道，楼区精度可能更低，对于无人驾驶来说，这样的精度是不满足要求的。


#### 2. 车辆传感器

![image.png](https://upload-images.jianshu.io/upload_images/5415189-ed9cd10a8b750161.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


在车辆上用一系列的传感器，比如说RGBD的摄像头，把摄像头采集到的数据和数据库中的地图信息进行匹配。另外，还可以用类似声呐的传感器测量车辆与静态障碍物的距离。这样，就可以基于无人车建立一个三维的空间直角坐标系，而地图也有一个坐标系，前面说过，生成的高精度地图是三维的数据，所以对无人车的做坐标通过平移旋转的方式就可以与地图的坐标匹配，这一步，通常通过矩阵相乘即可完成。从线性代数的角度来说，这个是把无人车的向量空间通过旋转平移，最后的到三维高精度地图的向量空间。


**定位的方式有一下几种：**
![](https://upload-images.jianshu.io/upload_images/5415189-4f46740b6d4ea270.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


>1. GNSS RTK
>2. 惯性导航
>3. LiDAR 定位
>4. 视觉定位

下边详细介绍一下。

#### 3. GNSS RTK

GPS 是使用最广泛的GNSS系统。

![GPS的传输方式](https://upload-images.jianshu.io/upload_images/5415189-155ac3fed3bcc6b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**GPS主要由三部分组成**
![GPS](https://upload-images.jianshu.io/upload_images/5415189-445aa189d5ad0f34.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*  1. 卫星：大约距离地球表面2万公里。
* 2. 世界各地的控制站： 用于控制和监视卫星。主要目的是让系统保持运行，验证GPS广播信号的精确度。
* 3.接收器:  广泛存在于智能手机， 电脑中。每次至少检测四次颗卫星。

![GPS距离计算](https://upload-images.jianshu.io/upload_images/5415189-d1189e4a35151c76.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

由于光速很快，所以很小的时间误差也会导致在距离上误差很大，所以每个卫星都配备的高精度的原子钟。

![利用RTK减少误差](https://upload-images.jianshu.io/upload_images/5415189-d6f522c290a20c68.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

RTK的精度大约在10CM，但是没有解决障碍物遮挡信号和频率慢的问题，一般的RTK只有10HZ。
![RTK的优势和不足](https://upload-images.jianshu.io/upload_images/5415189-c0377442d2849423.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#### 4. 惯性导航

惯性导航利用物理学方法来对汽车轨迹进行估计。
比如匀加速运动的位移和速度公式，
s = s0 + vt
v = v0 + at
必要时可能会使用积分。

![三轴陀螺仪](https://upload-images.jianshu.io/upload_images/5415189-52efc717e8808f33.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


而对于测量加速度， Apollo采用了三轴加速计来测量加速度， 用三轴陀螺仪把及速度计的测量结果转化成全局坐标系。加速度计和陀螺仪是测量惯性单元（IMU）的主要组件，IMU的更新频率可以达到1000HZ，接近于实时数据的更新，但是其误差随着运行时间增加而增加。IMU可以在很短的时间进行定位，把IMU和GPS结合起来一方面可以弥补GPS更新频率低的问题，一方面又纠正了IMU的运动误差。
但是在GPS没有信号的地方，还是会面临着定位失败的结果。


#### 5. LiDAR定位
![激光雷达捕获的点云](https://upload-images.jianshu.io/upload_images/5415189-0daf370f4c050b13.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



