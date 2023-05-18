import{_ as s,c as a,o as e,a as n}from"./app.5b22e94d.js";const A=JSON.parse('{"title":"css拾遗","description":"","frontmatter":{"title":"css拾遗","date":"2023-03-09T00:00:00.000Z","draft":false},"headers":[{"level":2,"title":"定位","slug":"定位","link":"#定位","children":[]},{"level":2,"title":"吸顶","slug":"吸顶","link":"#吸顶","children":[]},{"level":2,"title":"最便捷居中方案","slug":"最便捷居中方案","link":"#最便捷居中方案","children":[]},{"level":2,"title":"文字溢出","slug":"文字溢出","link":"#文字溢出","children":[]}],"relativePath":"tech/css/20230309.md"}'),l={name:"tech/css/20230309.md"},p=n(`<h1 id="css一些知识点" tabindex="-1">css一些知识点 <a class="header-anchor" href="#css一些知识点" aria-hidden="true">#</a></h1><h2 id="定位" tabindex="-1">定位 <a class="header-anchor" href="#定位" aria-hidden="true">#</a></h2><p>static--默认就是static</p><p>fixed--相对浏览器窗口是固定的</p><p>relative--相对于自己的正常位置的定位</p><p>absolute--相对于最近的已经有定位属性的父元素，static属性不算，就是fixed和relative</p><p>sticky--相对用户的滚动位置定位</p><h2 id="吸顶" tabindex="-1">吸顶 <a class="header-anchor" href="#吸顶" aria-hidden="true">#</a></h2><p>相对父元素的吸顶</p><p>sticky z-index top-0</p><h2 id="最便捷居中方案" tabindex="-1">最便捷居中方案 <a class="header-anchor" href="#最便捷居中方案" aria-hidden="true">#</a></h2><p>父元素：flex</p><p>子元素：margin：auto</p><h2 id="文字溢出" tabindex="-1">文字溢出 <a class="header-anchor" href="#文字溢出" aria-hidden="true">#</a></h2><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">文字单行溢出</span></span>
<span class="line"><span style="color:#89DDFF;">----------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">overflow: hidden;            // 溢出隐藏</span></span>
<span class="line"><span style="color:#A6ACCD;">text-overflow: ellipsis;      // 溢出用省略号显示</span></span>
<span class="line"><span style="color:#A6ACCD;">white-space: nowrap;         // 规定段落中的文本不进行换行</span></span>
<span class="line"><span style="color:#A6ACCD;">width:100px;                   // 需要设置确定的宽度</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">文字多行溢出</span></span>
<span class="line"><span style="color:#89DDFF;">----------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">overflow: hidden;            // 溢出隐藏</span></span>
<span class="line"><span style="color:#A6ACCD;">text-overflow: ellipsis;     // 溢出用省略号显示</span></span>
<span class="line"><span style="color:#A6ACCD;">display:-webkit-box;         // 作为弹性伸缩盒子模型显示。</span></span>
<span class="line"><span style="color:#A6ACCD;">-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列</span></span>
<span class="line"><span style="color:#A6ACCD;">-webkit-line-clamp:3;        // 显示的行数</span></span>
<span class="line"></span></code></pre></div>`,15),t=[p];function i(c,o,r,d,h,_){return e(),a("div",null,t)}const f=s(l,[["render",i]]);export{A as __pageData,f as default};
