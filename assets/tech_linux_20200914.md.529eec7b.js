import{_ as p,c as t,o,a as r}from"./app.5b22e94d.js";const d=JSON.parse('{"title":"Linux NFS挂载","description":"","frontmatter":{"title":"Linux NFS挂载","date":"2020-09-26T00:00:00.000Z","draft":false,"tags":[2020,"Linux"]},"headers":[],"relativePath":"tech/linux/20200914.md"}'),s={name:"tech/linux/20200914.md"},a=r("<p>最近做了一个文件的异地备份，采用网络挂载的方式，效果比之前用sync拷贝要方便的多。</p><p>也比之前简单的多，其实也就是几件事情。</p><p>首先是，需要备份的服务器和备份的服务器都装上nfs。</p><p>yum install nfs-utils</p><p>有的可能还需要单独安装一下rpcbind</p><p>那就</p><p>yum install rpcbind</p><p>接着在被挂载服务器编写配置文件</p><p>vim /etc/exports</p><p>/root/work 192.168.0.3(rw,no_root_squash,no_all_squash,async)</p><p>/root/work 192.168.0.16(rw,no_root_squash,no_all_squash,async)</p><p>如像这样，授权了本地的/root/work 目录可以被两个服务器访问，权限是读写（rw）</p><p>这一部分就完成了。</p><p>接下来是需要备份的服务器：</p><p>安装玩nfs以后，在/mnt目录下建一个目录（通常都是在这个目录下，别问为什么？问就是通用习惯。）</p><p>cd /mnt</p><p>mkdir backserver</p><p>这就完成了目录创建</p><p>接着也是最重要的一步</p><p>mount -t nfs 192.168.0.18:root/work/backup /mnt/backserver/</p><p>这条命令的意思是挂载192.168.0.18:root/work/backup目录到本机的/mnt/backserver/</p><p>-t 是指定挂载类型，nfs，就是网络文件系统的简称。</p><p>这样之后，本机的/mnt/backserver/存的文件实际上是存在192.168.0.18:root/work/backup目录下的。</p><p>接下来就是一个见的文件拷贝命令。</p><p>rsync -avz /usr/local/nginx /usr/local/tomcat /mnt/backserver/09back</p><p>就把文件备份到192.168.0.18:root/work/backup目录下了。</p><p>实现自动备份就更简单了，直接把刚才的命令写入shell脚本</p><p>保存为backup.sh</p><p>然后加入系统定时计划</p><p>crontab -e</p><p>30 3 * * * sh /root/work/work/backup.sh</p><p>意思是每天三点执行一次脚本，就完成了自动异地备份。</p><p>整个过程还是很简答的，其中涉及一个cs的模式。</p><p>需要知道：</p><p>1，是客户端挂载到服务端。</p><p>2，服务端需要授予客户端访问权限。</p>",36),n=[a];function e(c,_,l,i,u,k){return o(),t("div",null,n)}const b=p(s,[["render",e]]);export{d as __pageData,b as default};