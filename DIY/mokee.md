## How does flash mokee as Android System?



### 0. unlock and image zip download



You can use SD card or OTG USB as your image zip storage.



- [ ] mokee MK-${version}.zip (system zip)
- [ ] Magisk-v21.0.zip (ROOT solution & Universal Systemless Interface provided by John Wu)
- [ ] open_gapps         (GSM services)





### 1. [twrp](https://twrp.me/xiaomi/xiaomimi8.html)

###### find your android device

```
adb device
```

###### reboot into fastboot

```
adb reboot bootloader
```

###### flash twrp into fastboot

```
fastboot flash recovery twrp.img
```

after flash twrp rec

```
fastboot reboot
```



### 2. use image to flash device

