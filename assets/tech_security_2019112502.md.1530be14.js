import{_ as p,c as n,o as e,a}from"./app.5b22e94d.js";const l=JSON.parse('{"title":"信息安全笔记-密码学","description":"","frontmatter":{"title":"信息安全笔记-密码学","date":"2019-11-25T00:00:00.000Z","draft":false,"tags":[2019,"信息安全"]},"headers":[],"relativePath":"tech/security/2019112502.md"}'),t={name:"tech/security/2019112502.md"},r=a(`<p>密码学</p><p>基本概念</p><p>完整性---信息仅能被合法用户访问，不能泄漏给非法用户，实体或过程</p><p>保密性---自由只有在授权方或者以授权方式进行修改，所有资源没有授权则不能修改。保证数据完整性，就是保证数据不能被偶然或者蓄意编辑，或者攻击</p><p>可用性---资源只有在适当的时候被授权访问，并按需求使用。</p><p>密码学</p><p>密码学基本概念-密码体制、古典密码及破译方法、量子密码</p><p>分组密码-分组密码概念、DES算法、AES算法，SM4算法、分组密码工作模式</p><p>序列密码-线性反馈移位寄存器、RC4、ZUC</p><p>Hash函数-Hash函数的安全性、MD5算法、SHA算法、SM3算法、HMAC算法</p><p>公钥密码体制-Diffe-Hellman与ElGamal体制、椭圆曲线密码</p><p>数字签名-数字签名</p><p>认证-身份认证、报文认证</p><p>密钥管理-对称密钥分配、非对称密钥分配</p><p>密码体制</p><p>通用秘密体系：</p><p>1、明文空间M-全体明文集合</p><p>2、密文空间C-全体密文集合</p><p>3、加密算法E-一组明文M到密文C的加密变换</p><p>4、解密算法D-一组密文C到明文M的加密变换</p><p>5、密钥空间K-包含加密密钥和解密密钥的全体密钥集合</p><p>密码攻击方法</p><p>穷举攻击-对截获到的密文尝试遍历所有可能的密钥，直到获取正确的明文；或者使用固定的密钥对所有的可能的明文加密，直到与截获到的密文一致</p><p>统计分析攻击-利用已经获取到的明文与明文已知统计规律进行破译的方法</p><p>数学分析攻击-密码分析者针对加解密算法的数学基础和密码学特征，通过数学求解的方法来破译密码。</p><p>攻击密码类型</p><p>仅知密文-通过截获的密文破解密码</p><p>已知明文-已知明文与密文对，来破解密码</p><p>选择明文-不仅可以得到一些明文与密文对，还能选择被加密的明文，并获取相应的密文</p><p>选择密文-选择一些密文，并得到相应的明文</p><p>古典密码</p><p>置换密码-明文字母不变，但位置被打乱</p><p>代替密码-建立一个替换表，加密时通过查表将明文每个字母替换为相应字符，生成密文。</p><p>加法密码-加法密码的映射函数为：f(ai)=bi=aj,j=i+k mod n, k为正整数且 0&lt; k &lt; n。i j 为小字母</p><p>乘法密码-需要预先知道消息元素的个数，加密的过程其实就是对明文消息所组成的数组下标进行加密，然后用明文消息中加密后位置所对应的明文字符代替。映射函数为：f(ai)=bi=aj j = i*k mod n k为正整数且 0&lt; k &lt; n。i j 为小字母</p><p>仿射密码-加法密码和乘法密码的结合，函数为：f(ai)=bi=aj ,j=(ak1+k0) mod n,其中k1和n是互素的。</p><p>古典密码的破译方法</p><p>穷举分析</p><p>统计分析</p><p>量子算法</p><p>量子的叠加性和相干性原理具有计算能力。 实用的量子算法包括Shor算法和Grover算法，两种算法均可对RSA，EIGamal，ECC密码及DH密钥协商进行有效攻击。</p><p>分组密码</p><p>分组密码又称对称密码，使用分组密码加密时，先对明文进行分组，每个分组长度相同，然后对每个组的明文进行加密得到等长的密文。</p><p>DES算法</p><p>DES算法分组为64比特，使用56比特密钥对64比特明文进行16轮加密，得到64比特密文。</p><p>密钥64比特，使用56比特加密，另8比特做奇偶校验。</p><p>DES 使用对合运算，即f = f-1，1为上标</p><p>DES加密</p><p>异或运算：⊕</p><p>加密过程：</p><pre><code>1、子密钥生成，64位子密钥经过子密钥算法产生16个子密钥k1...k16，分别在1-16次加密迭代中使用

2、初始置换IP，64位明文经过置换IP表，被打乱重新排列

3、初始置换结果分为两组，L0（32位） ，R0（32位）

4、第一次迭代加密：使用加密函数f和子密钥k1，对R0进行加密，然后与L0进行模2运算（异或运算），记为L0⊕f（R0，k1），结果成为第二次运算的R1，R0成为第二次迭代的L1

5、第2-16次迭代，分别使用子密钥K2-K16，加密结果与第一次加密迭代相同
</code></pre><p>子密钥产生：</p><pre><code>64位密钥经过置换选择1，循环左移，置换选择2，产生16个长为48位的子密钥k

1-k16。
</code></pre><p>加密函数：</p><pre><code>加密函数f(Ri-1,ki),是DES算法的核心算法，函数包含选择运算E，异或运算，代替函数组S（S盒变换），置换运算P。

1），选择运算E与异或运算

    选择运算E把Ri-1的32位扩展到48位，并与48位Ki子密钥进行异或运算。

2），S盒变换

    一种压缩替换，通过S盒将48位输入变成32位输出。共有8个S盒，并行运算。

3），置换运算P

    将S盒输出的32位再进行一次置换。
</code></pre><p>DES安全性：</p><p>1，密钥太短，经不起穷举攻击</p><p>2，存着弱密钥和半弱密钥</p><pre><code>弱密钥：产生的子密钥与其本身相同。

半弱密钥：产生的子密钥有些相同，但不完全相同。

弱密钥的产生原理：C和D中的数据进行循环移位后，得到的结果仍然是重复的数据。
</code></pre><p>3DES算法</p><p>3DES算法是DES的扩展，执行了三次DES。 有两种实现方式： 1，第一，三次使用相同的密钥，密钥长度为128（112位有效） 2，三次使用不同的密钥，密钥长度192位（168位有效） 中国人民银行智能卡技术规范支持3DES</p><p>前路实在漫长，也不知道出口是否明亮，只能就这样坚持着，不断的遇到问题，解决问题，还好没有解决不了的问题，只是时间问题，抑或是能力问题，能力会提升起来的，时间也会有所回报。</p><p>人的一生确实会遇到许多困难，甚至是绝望的时刻，可是就此放弃，真的不甘心，我不想像一粒尘埃一样消散在历史长河里，卑微如此，我不甘心。</p><p>所以，我要像一个孤独的侠客，历经重重困难，砍到每个挡在我面前的敌人，冲破他们，撕裂他们，碾碎他们。</p><p>AES算法</p><p>AES---advanced encryption standard</p><p>Rijndael算法被选为AES算法</p><p>AES明文分组长度可以是，128位，192位，256位。</p><p>AES数学基础</p><p>加法：多项式洗漱按位模加</p><p>乘法：两个多项式相乘，然后模m(x)</p><p>乘法逆元</p><p>乘法的计算机实现（X乘法，xtime()），xtime（）运算可以方便在计算机上实现乘法运算</p><p>加密过程</p><p>1、最初的子密钥加---明文分组与种子密钥按位进行异或运算</p><p>2、前9轮加密操作</p><pre><code>1、字节代换---查询S盒表。

    S盒的设计原理是将字节非线性的变换为另一个字节：

        1、求乘法逆

        2、仿射变换

2、行移位变换---对矩阵中的每行，规定第一行循环左移0个字节，第二行循环左移1个字节，第三行循环左移2个字节，第四行循环左移3个字节。

3、列混淆变换---把每列都乘以固定的多项式

4、子密钥加---与第一步相同，结果与该轮子密钥异或运算
</code></pre><p>3、第10轮加密操作---与前9轮相同，唯一缺少混淆变换</p><p>AES不是对合运算，因此解密与加密算法不同</p><p>解密过程</p><p>1、行位移求逆 2、字节代换求逆 3、列混淆求逆</p><p>SM4算法</p><p>我国密码管理局公布的无线局域网产品使用的SM4算法</p><p>可以抵御差分攻击，线性攻击</p><p>第一次官方公布的密码算法</p><p>特点：</p><p>分组长度和密钥长度都是128位，处理8位和32位数据单位</p><p>属于对合运算，加密和解密相同，只是轮使用的密钥顺序相反</p><p>基本运算</p><p>1、模2加</p><p>2、循环左移</p><p>工作模式</p><p>5种工作模式</p><p>1，ECB---电码本模式，每个分组使用相同密钥。</p><p>2，CBC---分组链接模式</p><pre><code>    1，密文链接方式---明文分组与前一密文分组异或，不利于并行计算

    2，明密文链接方式---前与密文分组与前一明文分组异或，再与当前明文分组异或
</code></pre><p>3，OFB---输出反馈模式</p><p>4，CFB---密码反馈模式</p><p>5，CTR---计数器模式，把分组密码转为序列密码。</p><p>序列密码</p><p>又称流密码，原理是明文流与密钥流按顺序逐比特进行异或运算，从而产生密文流，属于对合运算。</p><p>序列密码的关键是保持通信双方的精确同步。</p><p>RC4</p><p>算法简单，速度快，实现容易，应用广泛。</p><p>具体步骤：</p><pre><code>1、密钥调度算法

2、伪随机子密码生成算法
</code></pre><p>ZUC</p><p>祖冲之算法，我国自主设计的加密和完整性算法，是一个同步流算法。</p><p>对称算法这块并没有记的很详细，一来是图太多，我不会画图，二来是工作接触这块比较多，比较熟悉。</p><p>Hash函数</p><p>用于构建数据的指纹，标识数据，将任意长度的数据输出为固定长度的消息，通过摘要算法。</p><p>计算函数又叫摘要算法，散列算法，哈希算法。</p><p>特性：</p><pre><code>1，单向性，不可逆向运算，知道摘要计算结果，不能计算出原数据

2，弱抗碰撞性

3，强抗碰撞性
</code></pre><p>攻击方法：</p><pre><code>1，穷举工具：典型的有“生日攻击”，产生若干明文消息，计算出消息摘要，然后进行对比，找到碰撞。

2，利用散列函数的代数结构：攻击函数的弱性质，有中间相遇攻击，修正分组攻击，差分分析攻击
</code></pre><p>SHA-1算法</p><p>输入长度小于2的64次方比特任意消息，输出160比特摘要。</p><p>SM3算法</p><p>是国家密码管理局发布的安全密码杂凑算法，采用Merkle-Damgard结构，把1-2的64次方比特消息，经过填充和迭代压缩，生成256长度的摘要。 可用于数字签名，验证，消息认证码，伪随机数生成等。</p><p>Hmac</p><p>一种基于密钥和散列函数进行消息认证的方法，要求通信双方共享密钥，约定算法。</p><p>公钥密码</p><p>公钥密码，加密和解密才有不同密钥，分别叫做公钥和私钥。</p><p>RSA密码</p><p>基于大素数分解，核心是模幂运算。</p><p>RSA算法可以实现数字签名和数据加密。</p><p>注：</p><p>加密：公钥加密，私钥解密</p><p>签名：私钥签名，公钥验签</p><p>RSA密钥长度大于1024位被认为是安全的。</p><p>这个地方符号比较难写，可以搜集一些例子。</p><p>Diffie-Hellman体制</p><p>简称DH密钥交换体制，目的是完成通信双方对称密钥的交互，在不安全环境下也不会造成密钥泄露。 流程：</p><p>1、公开（p，g)</p><p>2、通信双方A B交换密钥</p><p>1、Ai把密钥（随机产生2&lt;=x</p><p>2、Bi把密钥（随机产生2&lt;=y</p><p>3、通信双方得到公共密钥</p><p>1、A结合产生密钥和受到的B的密钥，经过计算得到公共密钥</p><p>2、B同样进行计算，得到相同的密钥。</p><p>ELGamal体制</p><p>对DH的改进，是基于离散对数问题的公开密钥体制。 离散对数问题是指：对于比较大的整数，y，p，g，求出一个整数满足y=g2mod p 是非常困难的。</p><p>椭圆曲线密码</p><p>基于费马大定理：当n&gt;2时，xn+yn=zn没有正整数解。</p><p>椭圆曲线的计算比RSA复杂的多，密钥比RSA短。</p><p>一般认为160位长椭圆曲线密码相当于1024位RSA密码的安全性。</p><p>我国二代身份证采用256位椭圆曲线密码</p><p>数字签名</p><p>确保消息接收者是预期目标，并且内容没有被篡改。</p><p>包括签名和验签两个方面。</p><p>签名：</p><p>1、A使用摘要算法，计算消息摘要。</p><p>2、A使用私钥对消息摘要进行加密，将加密摘要和原文发送给B</p><p>验签：</p><p>1、受到原文和加密摘要后，使用相同摘要算法，对原文进行摘要。</p><p>2、使用A公钥对加密摘要解密</p><p>3、对比两个摘要，如果一致，则没有被篡改。</p><p>认证</p><p>用于证实某件事情是否真实或有效。</p><p>身份认证</p><p>1，口令认证</p><p>2，生物特征认证</p><p>报文认证</p><p>保证通信双方严重每个报文的发送方，接收方，内容，时间的真实性和完整性。</p><p>密钥管理</p><p>原则：</p><p>全程安全原则</p><p>最小权限原则</p><p>责任分离原则</p><p>密钥分级原则</p><p>密钥更新原则</p><p>密钥分级</p><p>分为三级：</p><p>初级密钥：用于加解密数据，一次一密，必须受到高级密钥的保护。</p><p>二级密钥：保护初级密钥，生存周期较长。</p><p>主密钥：用于保护二级密钥和初级密钥，生成周期很长。</p><p>对称密钥分配</p><p>Kerberos协议，密钥分配中心的核心，</p><p>1，验证服务器</p><p>2，票据授权服务器</p><p>非对称密钥分配</p><p>1，PKI一组规则，过程，人员，设施，软件，硬件的集合。</p><p>有五个组成部分：证书申请者，RA注册中心，CA认证中心，证书库，和证书信任方。</p><p>1，数字证书</p><p>采用公钥体制进行加密和解密，每个用于有一个私钥用于解密和签名，还有一个公钥用于加密和验证。</p><p>密码学部分到此就算是完了，也不是很详细，我接触比较多，所以没太过多深挖，下一部分是网络安全。</p>`,187),o=[r];function S(c,d,i,s,E,A){return e(),n("div",null,o)}const D=p(t,[["render",S]]);export{l as __pageData,D as default};