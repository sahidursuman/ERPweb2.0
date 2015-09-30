## 1. 配置说明
### 1.1 nginx配置
	
	请将/bin/huouchaitou-dev.conf的配置放到nginx的配置目录，修改其中的root(该值是源代码的文件根目录)。

	若Java服务器的ip或者端口修改了，请修改huochaitou_dev_service中server的值。

### 1.2 nginx管理程序
	
	/bin/nginx.bat，用于windows管理nginx的服务器，提供启动、停止、重启、退出功能。

	需要修改NGINX_DIR变量，指向nginx的安装目录。

