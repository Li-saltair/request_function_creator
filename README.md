# 生成services的代码
**使用方法**
### 1. 将代码格式转化为read.json中的示例格式
### 2. 命令行至当前目录，执行node index.js
### 3. 输出标准JSON格式至output.json中
### 4. 请使用IDE将output.json中的双引号全部替换为无
### 5. 得到可使用的JS代码，放入要使用的位置即可。
### 6. 各个文件的作用：
>1. index.js：执行操作的程序代码
>2. read.json：要进行读操作的文件
>3. output.json：转换后的输出文件
>4. transformation：为了方便，用于存放转化为读取文件之前的JSON的文件，可以没有
>5. test.js：为了方便，进行JSON替换字符操作变为js对象的文件