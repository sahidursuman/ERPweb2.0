## 1. 配置说明
### 1.1 nginx配置
	
	请将/bin/huouchaitou-dev.conf的配置放到nginx的配置目录，修改其中的root(该值是源代码的文件根目录)。

	若Java服务器的ip或者端口修改了，请修改huochaitou_dev_service中server的值。

### 1.2 nginx管理程序
	
	/bin/nginx.bat，用于windows管理nginx的服务器，提供启动、停止、重启、退出功能。

	需要修改NGINX_DIR变量，指向nginx的安装目录。

## 2.nodeJs 脚本设置
### 2.1 初始化nodejs
	
	打开node.js command prompt  粘贴 npm install -g tmodjs 回车初始化

### 2.2 脚本文件路径设置

	打开node.js command prompt  粘贴 tmod E:\workspace\huochaitou\src\main\webapp\app\js\template  --output E:\workspace\huochaitou\src\main\webapp\app\js\template  --type cmd --debug  

	其中  E:\workspace\huochaitou\src\main\webapp\app\js\template  路径为clone目标文件中的的template文件地址