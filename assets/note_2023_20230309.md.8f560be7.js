import{_ as e,c as a,o as t,a as d}from"./app.5b22e94d.js";const v=JSON.parse('{"title":"有点难受","description":"","frontmatter":{"title":"有点难受","date":"2023-03-09T00:00:00.000Z","draft":false},"headers":[{"level":2,"title":"有点难受","slug":"有点难受","link":"#有点难受","children":[]},{"level":2,"title":"vue的一个特性","slug":"vue的一个特性","link":"#vue的一个特性","children":[]},{"level":2,"title":"下午","slug":"下午","link":"#下午","children":[]}],"relativePath":"note/2023/20230309.md"}'),i={name:"note/2023/20230309.md"},r=d('<h2 id="有点难受" tabindex="-1">有点难受 <a class="header-anchor" href="#有点难受" aria-hidden="true">#</a></h2><p>昨天晚上就得知了一个不好的消息，她爸爸生病了，是胃溃疡，所以我周末就不要去成都了，我听到这个消息，是很难受的。但是，更为难受的事，帮不上什么忙，只能发几句安慰的消息，好像也没有什么用。</p><p>早上过来，解决了一个bug，也花了不少的时间，几乎是大半个上午。</p><h2 id="vue的一个特性" tabindex="-1">vue的一个特性 <a class="header-anchor" href="#vue的一个特性" aria-hidden="true">#</a></h2><p>解决这个bug，是我的程序问题，因为从后端传过来的数据，我直接赋值给组件的data，后面又根据数据的id，获取他的子级的信息，在附加到数据上，昨天试了好几次，想了各种办法，都没找到解决办法。</p><p>我以为是异步，但是当我把所有代码都变成同步过后，还是没有生效，在这个地方卡了很久，还是没有解决。</p><p>后来我换了思路，在vue组件的data里，数据都是观察者状态，但是一开始的时候，后端传过来的数据里，是没有子级数据的，也没有子级字段，我后面给数据加上了child，作为子级字段，但是这个child并么有被观察到，我想应该是这么一个原因，导致我在页面要显示数据子级的时候，找不到这个数据，最后我在后端返回的数据里面添加了一个空的child字段，这样当数据被添加到data的时候，child字段是处于观察状态的，后续对child的操作，应该都能被观察到，也能在页面正常显示。</p><p>这个方法生效了，这里也总结出一个经验，就是vue的观察者模式，如果不是一开始就有的字段，是不会被观察到的，所以后续的数据修改，也不会被观察到。所以如果要对有些字段做延时的处理，或者计算，就应该在一开始给字段初始值，让他被观察到。</p><h2 id="下午" tabindex="-1">下午 <a class="header-anchor" href="#下午" aria-hidden="true">#</a></h2><p>下午写了一个组件，其实没什么复杂，就是后面到不同手机分辨率的时候，有点问题，是布局的问题。我后来把整个容器都改成grid布局，然后问题解决了。</p><p>最后临近下班的时候，本来想打包上传一个版本，结果发现，主包太大了，传不上去，真是郁闷极了，本来心情就不好，现在更郁闷了，于是埋着一肚子闷气，分包然后上传，又改了很多代码，最后出去，在路边走了一转，然后去吃饭，面很油，只吃了菜。</p>',11),l=[r];function n(c,h,s,_,o,p){return t(),a("div",null,l)}const f=e(i,[["render",n]]);export{v as __pageData,f as default};