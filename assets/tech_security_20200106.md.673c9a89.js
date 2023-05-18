import{_ as e,c as n,o as t,a as o}from"./app.5b22e94d.js";const f=JSON.parse('{"title":"漏洞战争-基础知识","description":"","frontmatter":{"title":"漏洞战争-基础知识","date":"2020-01-14T00:00:00.000Z","draft":false,"tags":[2020,"漏洞战争"]},"headers":[],"relativePath":"tech/security/20200106.md"}'),p={name:"tech/security/20200106.md"},r=o(`<p>漏洞：硬件，软件，协议在具体实现或者系统安全策略存在的缺陷，可以使攻击者未经授权的情况下访问或者破坏系统</p><p>poc：漏洞验证</p><p>exp：漏洞利用</p><p>分析工具：</p><pre><code>1，IDA-反汇编利器

2，ollydbg-破解与逆向常用调试工具

3，immunity debugger-漏洞分析专用调试器

4，windbg-微软正宗调试器

5，gdb-linux调试器

6，jeb-Android反编译调试器
</code></pre><p>常用分析方法：</p><pre><code>1，静态分析-使用反汇编/反编译工具逆向分析代码

2，动态调试-借助调试器跟踪程序执行过程，主要是函数调用关系，参数变量传递，和返回值，以及堆栈分配情况

3，源码分析-阅读源码或者调试源码进行分析

4，补丁分析-通过补丁与被修复文件进行对比，发现差异之处，从而发现漏洞，属于静态分析
</code></pre><p>学习资源：</p><pre><code>1，exploit-db

2，vupen博客（zerodium）

3，看雪安全论坛

4，securityfocus

5，bugtraq邮件
</code></pre>`,9),c=[r];function a(d,_,s,i,u,l){return t(),n("div",null,c)}const g=e(p,[["render",a]]);export{f as __pageData,g as default};
