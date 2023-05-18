import{_ as s,c as n,o as a,a as l}from"./app.5b22e94d.js";const A=JSON.parse('{"title":"基于Markdown生成静态网站","description":"","frontmatter":{"title":"基于Markdown生成静态网站","date":"2023-02-07T00:00:00.000Z","draft":false,"tags":[2023,"javascript","静态网站"]},"headers":[{"level":2,"title":"markdown 生成静态网站","slug":"markdown-生成静态网站","link":"#markdown-生成静态网站","children":[{"level":3,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[]},{"level":3,"title":"生成思路","slug":"生成思路","link":"#生成思路","children":[]},{"level":3,"title":"页面","slug":"页面","link":"#页面","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]}]}],"relativePath":"tech/javascript/20230207.md"}'),p={name:"tech/javascript/20230207.md"},o=l(`<h2 id="markdown-生成静态网站" tabindex="-1">markdown 生成静态网站 <a class="header-anchor" href="#markdown-生成静态网站" aria-hidden="true">#</a></h2><h3 id="数据结构" tabindex="-1">数据结构 <a class="header-anchor" href="#数据结构" aria-hidden="true">#</a></h3><h4 id="内容信息" tabindex="-1">内容信息 <a class="header-anchor" href="#内容信息" aria-hidden="true">#</a></h4><ul><li>标题</li><li>所有文章</li><li>所有分类</li><li>所有标签</li></ul><h5 id="标题" tabindex="-1">标题 <a class="header-anchor" href="#标题" aria-hidden="true">#</a></h5><p>所有页面都有引用，因此存为全局变量使用</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;希洛克的个人小站&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;logo&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;logo.png&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;description&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;生命不止，编码不息！&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-hidden="true">#</a></h5><p>一个文章列表，存储所有的文章信息，对于每个文章，结构如下：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxxxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;category&#39;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">     &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;tags&#39;</span><span style="color:#89DDFF;">:[</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxxxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;category&#39;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">     &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;tags&#39;</span><span style="color:#89DDFF;">:[</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxxxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;category&#39;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">     &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> &#39;tags&#39;</span><span style="color:#89DDFF;">:[</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;link&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h5 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-hidden="true">#</a></h5><p>收集所有文档数据，最后生成一个所有分类的数据，应该是一个列表，结构如下：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;links&#39;</span><span style="color:#89DDFF;">:[</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;links&#39;</span><span style="color:#89DDFF;">:[</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;title&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">&#39;xxx&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;links&#39;</span><span style="color:#89DDFF;">:[</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">&#39;xxx.html&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>对于每一个分类，下面有多篇文章，那么肯定不能一次加载那么多，所以这里必须要分页，也就是一个分类，生成好几个页面，然后通过上下页进行关联。</p><p>在分类页面，会显示所有分类和当前分类，以及当前页的文章。</p><h5 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-hidden="true">#</a></h5><p>标签和分类类似，不过又有不同，因为标签和文章是多对多的，但是将文章和标签分开来处理，从标签的角度看，一个标签对应多个文章，因此也是一对多，和分类的数据结构类似。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;title&#39;:&#39;xxx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;links&#39;:[&#39;xxx.html&#39;,&#39;xxx.html&#39;,&#39;xxx.html&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;title&#39;:&#39;xxx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;links&#39;:[&#39;xxx.html&#39;,&#39;xxx.html&#39;,&#39;xxx.html&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;title&#39;:&#39;xxx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;links&#39;:[&#39;xxx.html&#39;,&#39;xxx.html&#39;,&#39;xxx.html&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="生成思路" tabindex="-1">生成思路 <a class="header-anchor" href="#生成思路" aria-hidden="true">#</a></h3><p>收集文档目录下的所有markdown，并且提取头部信息，头部信息里面包括了标题，分类，和标签，这三个基础信息。</p><p>生成三者的数据结构，最后根据数据结构，生成相应页面。</p><h3 id="页面" tabindex="-1">页面 <a class="header-anchor" href="#页面" aria-hidden="true">#</a></h3><h4 id="主页-列表页" tabindex="-1">主页/列表页 <a class="header-anchor" href="#主页-列表页" aria-hidden="true">#</a></h4><p>所有分类，文章，标签第一页，分类第一页</p><h4 id="分类页" tabindex="-1">分类页 <a class="header-anchor" href="#分类页" aria-hidden="true">#</a></h4><p>所有分类，文章，上下页。</p><h4 id="标签页" tabindex="-1">标签页 <a class="header-anchor" href="#标签页" aria-hidden="true">#</a></h4><p>所有分类，文章，上下页。</p><h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-hidden="true">#</a></h3><p>依据上述分析，用代码构造数据结构</p><p>主要数据结构</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Article</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">category</span><span style="color:#89DDFF;">?:</span><span style="color:#FFCB6B;">Category</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tags</span><span style="color:#89DDFF;">?:</span><span style="color:#FFCB6B;">Tag</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Category</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">links</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">articles</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Article</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tag</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">links</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">articles</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Article</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 因为标签和分类的数据结构，完全一致，因此只声明一个就可以了，就是文章集合，使用的时候，就用这一个</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ArticleSet</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">links</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">articles</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Article</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SiteConfig</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 三个文件目录必须填写</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 列表页用于分页加载文章</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 详情页用于加载单个文章</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GenerateConfig</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">docPath</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">templatePath</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">distPath</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">listTemplate</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">detailTemplate</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">	</span></span>
<span class="line"></span></code></pre></div>`,32),e=[o];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const x=s(p,[["render",t]]);export{A as __pageData,x as default};
