# install Nvidia 1080Ti driver on ubuntu1804

if you're using ubuntu 16.04, I recommand your upgrade your system to ubuntu1804.

### install 1080TI driver for ubuntu1804

##### 1.Remove old Nvidia driver
```
sudo apt-get purge nvidia*
```
##### 2. add a repository
```
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt-get update
```
 ##### 3. Installation
Type in this command, then press Tab, I install nividia-driver-435.
 ```
sudo apt-get install nividia-
 ```
 
 or try this command
 ```
 sudo ubuntu-drivers autoinstall
 ```


then reboot
```
reboot
```
### Last
when I try to install deb file, there's some wrong in it.
```
sudo apt-get install -f
```
then run command
```
sudo dpkg - i *.deb
```

#### install deb
```
1.CODE:

sudo apt-get install rpm alien

2.CODE:

alien -d package.rpm

3.CODE:

sudo dpkg -i package.deb
```
