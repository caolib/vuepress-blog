---
title: 计算机网络
date: 2023-10-26 21:04:32
categories: 考研
tags:
  - 计算机网络
cover: https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/l8/wallhaven-l82kpr.jpg?w=2560&h=1440&fmt=webp
sticky: 10000
---


[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=cascadia+code&size=80&duration=3500&pause=1000&color=078EFF&center=true&vCenter=true&random=false&width=1000&height=100&lines=computer+network)](https://git.io/typing-svg)

## 1. 计算机网络概述

### 1.1 作用

> 计算机网络在信息时代中的作用：21世纪是以数字化、网络化、信息化为重要特征的信息时代，作为信息的最大载体和传输媒介，网络已成为这个信息时代的核心基础

### 1.2 定义与分类

#### 1.2.1 定义

简单定义：<mark>硬件</mark>（独立和连接）+<mark>软件</mark>（协议）+<mark>目的</mark>（共享和通信）

> **计算机网络就是以传输信息为基本目的，用通信线路和通信设备将多个计算机连接起来的计算机系统的集合**

#### 1.2.2 分类

> 按网络覆盖范围进行分类

1. 局域网（Local Area Network,`LAN`，一个实验室、一幢楼、一个校园）
2. 城域网（Metropolitan Area Network,`MAN`，几个街区甚至整个城市，5-50 km）
3. 广域网（Wide Area Network,`WAN`，覆盖一个国家或地区甚至几个洲，也称为**远程网**）
4. 个人区域网（Personal Area Network,`PAN`，10 m以内）

> 按网络的使用者进行分类

1. 公用网（所有愿意缴纳费用的人都能使用）
2. 专用网（专门为本单位的特殊业务工作建造的，例如，军队、铁路、电力等系统）

<img src="https://clb.pages.dev/img/pics/CopyQ.TZiqFW.png" alt="计算机网络分类" title='计算机网络的分类' />

### 1.3 互联网概述

#### 1.3.1 网络的网络

1. 网络

> <mark>网络</mark>由<mark>若干节点</mark>（Node）和连接这些节点的<mark>链路</mark>(Link)组成
>
> 节点：可以是计算机、集线器、交换机、路由器

<img src="https://clb.pages.dev/img/pics/image-20231024224626941.png" title="网络" style="zoom:80%;" />

2. <mark>互连网络</mark>（internet，通用名词，注意和 Internet互联网 区分）

> 将网络用路由器连接起来就成了互连网络，因此互连网络是<mark>网络的网络</mark>

<img src="https://clb.pages.dev/img/pics/image-20231024224534363.png" title="互连网络就是网络的网络" style="zoom:80%;" />

> 总结：<mark>**网络把许多计算机连接在一起，而互联网络则把许多网络连接在一起**</mark>

3. <mark>互联网</mark>（Internet，也称 因特网）

> 当前全球最大的、开放的、由众多网络相互连接而成的特定计算机网络，<mark>采用TCP/IP协议作为通信规则</mark>，前身是美国的阿帕网（<mark>ARPANet</mark>）

1. <mark>边缘部分</mark>：用户直接使用的
2. <mark>核心部分</mark>：为边缘部分提供服务的

<img src="https://clb.pages.dev/img/pics/image-20231024224804841.png" title="woc,O" style="zoom: 67%;" />

#### 1.3.2 互联网结构发展的三个阶段

1. 第一阶段：从单个网络ARPANET向互连网络发展
2. 第二阶段：逐步建成三级结构的互联网
3. 第三阶段：逐渐形成多层次的ISP结构的互联网

<img src="https://clb.pages.dev/img/pics/image-20231024225143618.png" title="ISP结构的互联网" style="zoom: 67%;"/>

### 1.4 电路交换和分组交换

#### 1.4.1 电路交换

![电路交换](https://clb.pages.dev/img/pics/image-20231024225354835.png)

> 这种必须经过
>
> 1. `建立连接`（分配通信资源）
>
> 2. `通信`（一直占用通信资源）
>
> 3. `释放连接`（归还通信资源）
>
> 三个步骤的交换方式称为<mark>电路交换</mark>
>
> 电路交换：电路交换是指在通信开始之前，建立一条专用的物理连接，然后在通信过程中一直占用这条连接，直到通信结束。在这个过程中，数据被分成固定大小的数据包，每个数据包都被分配一个专用的物理通路。
>
> 优点：传输<mark>速度快</mark>
>
> 缺点：连接建立需要时间，且连接一旦建立就无法被其他通信使用（<mark>效率很低</mark>）

#### 1.4.2 报文交换

> 整个报文传送到相邻结点，全部存储下来后查找转发表，转发到下一个结点。

#### 1.4.3 分组交换

<img src="https://clb.pages.dev/img/pics/image-20231024225503293.png" alt="分组交换" style="zoom: 80%;" />

> 我们通常把要发送的整块数据称为一个<mark>报文</mark>（Message）
>
> 发送报文之前，先将报文划分为一个个更小的等长的数据段，在数据段前面加上<mark>首部</mark>（又称为<mark>包头</mark>）就构成了<mark>分组</mark>（又称为<mark>包</mark>）

> 分组交换：分组交换是指<mark>将报文分成较小的数据包</mark>，每个数据包都带有**目标地址**和**源地址**等信息，然后通过网络传输。在传输过程中，每个数据包都独立传输，可以通过不同的路径到达目的地，由于每个分组交换机都是先存储下来再转发出去，因此该方法被称为<span style='color:rgb(255, 107, 107);font-weight:bold'>存储转发</span>方式
>

![交换方式对比](https://clb.pages.dev/img/pics/CopyQ.hVntPh.png)

### 1.5 计算机网络的主要性能指标

#### 1. 速率

> 1. <mark>数据的传输速率</mark>，也称为<mark>数据率</mark>、<mark>比特率</mark> 1字节(byte)=8比特(bit)
>
> 2. 单位是 `bit/s 或 bps` ,比特是数据量的单位，是一个<mark>二进制数字</mark>(0或1)
>
> 3. 一般来说，表示速率时
>    $$
>    k = 10^{3}
>    $$
>    表示数据时
>    $$
>    k = 2^{10}
>    $$
>    

<img src='https://clb.pages.dev/img/pics/CopyQ.aGEcPX.png' alt='速率'>

#### 2. 带宽

1. 带宽本来是指某个<mark>信号具有的频带宽度</mark>，表示通信线路允许通过的信号频带范围,单位为赫兹

2. 计算机网络中，带宽表示网络某通道传输能力，即<mark>最高数据率</mark>,单位为<mark>比特每秒</mark>（bit/s）

   <img src="https://clb.pages.dev/img/pics/CopyQ.UEfjHW.png" alt='带宽'/>

#### 3. 吞吐量

> 也称为<mark>吞吐率</mark>，表示单位时间内通过某个网络（或信道、接口）的数据量

#### 4.时延

> 时延是指<mark>数据从网络的一端传送到另外一端所需要的时间</mark>，也称为<mark>延迟</mark>或<mark>迟延</mark>
>
> 网络中的时延通常由以下几个不同的部分组成：
>
> 1. <mark>发送时延：主机或路由器将整个分组的所有比特发送到通信线路上所需要的时间</mark>
>    $$
>    发送时延 = \frac{分组长度}{发送速率}
>    $$
>
> 2. <mark>传播时延：是电磁波在信道中传播一定距离所花费的时间</mark>
>    $$
>    传播时延 = \frac{信道长度}{电磁波在信道上的传播速度}
>    $$
>
> 3. 处理时延：主机或路由器在收到分组时处理分组花费的时间（一般不方便计算）

<img src="https://clb.pages.dev/img/pics/CopyQ.hzERwE.png" alt='时延'/>

![时延](https://clb.pages.dev/img/pics/202310261920366.png)

#### 5. 时延带宽积 往返时间 利用率 丢包率

<img src="https://clb.pages.dev/img/pics/CopyQ.XBpSgv.png" alt="" style="zoom:;" />

### 1.6 计算机网络体系结构

#### 1.6.1 网络协议

网络协议主要由以下三要素组成：

1. <mark>语法：数据与控制信息的结构或格式</mark>（例如，地址字段多长以及它在分组的什么位置）
2. <mark>语义：各个控制信息的具体含义</mark>（需要发出何种控制信息、完成何种动作及做出何种响应）
3. <mark>同步：事件实现的顺序和时间的详细说明</mark>（数据何时发出以及以什么速率发出）

#### 1.6.2 分层体系结构

![常见的计算机网络分层体系结构](https://clb.pages.dev/img/pics/CopyQ.uQqXEZ.png)

#### 1.6.3 原理体系结构

> 我们学习的是具有五层协议的原理体系结构

![原理体系结构](https://clb.pages.dev/img/pics/CopyQ.EvnJQE.png)

#### 1.6.4 实体、协议和服务

> **<mark>协议是水平的,服务是垂直的</mark>**
>
> 1. ==实体==：任何可发送或接收信息的硬件或软件进程
> 2. ==协议==：<mark>**控制两个或多个对等实体之间通信的规则的集合**</mark>
> 3. <mark>**下层通过层级接口向上层提供服务，下面的协议对上面的实体是”透明“的**</mark>
> 4. <mark>透明：某个实际存在的事物看起来好像不存在一样</mark>

![实体、协议和服务](https://clb.pages.dev/img/pics/CopyQ.ZGZDeQ.png)

![TCP/IP参考模型中的协议](https://clb.pages.dev/img/pics/62913fa9e4b0c71a3a81421f.jpeg)

### 1.7 相关习题

![](https://clb.pages.dev/img/pics/202310261924745.png)

![](https://clb.pages.dev/img/pics/202310261925145.png)

### 1.8 思维导图和习题

1. [第1章 概述（思维导图）](https://www.kdocs.cn/view/l/cqzI95zH7t6v)
1. [第1章 概述 习题 (kdocs.cn)](https://www.kdocs.cn/view/l/cmCC5Updax17)

---

## 2. 物理层

> <mark>**任务：怎样在连接各种计算机的传输媒体上传输数据比特流**</mark>（使数据链路层感觉不到各种传输媒体之间的差异，只需要使用物理层服务就能传输比特流，不必关心具体怎么实现）

### 2.1 物理层的基本概念

![物理层的基本概念](https://clb.pages.dev/img/pics/202310261930116.png)

### 2.2 数据通信的基础知识

#### 2.2.1 数据通信的基础知识

![](https://clb.pages.dev/img/pics/image-20231228112913963.png)

#### 2.2.2 编码与调制

1. 定义

   - <mark>模拟信号</mark>：消息的参数的取值是连续的
   - <mark>数字信号</mark>：消息的参数的取值是离散的

   - <mark>编码</mark>：将数字数据转换成数字信号的过程
   - <mark>调制</mark>：将数字数据转换成模拟信号的过程

![编码与调制](https://clb.pages.dev/img/pics/202310262020595.png)

2. 常用编码方式

![常用编码方式](https://clb.pages.dev/img/pics/202310262040597.png)

3. 基本的调制方法

![基本的调制方法](https://clb.pages.dev/img/pics/202310262047837.png)

4. **<mark>相位调制</mark>**

> **8相位调制**表示8种状态，只需要**3个比特**(二进制，$2^3=8$)即可,所以**1个码元可以承载3个比特**，**<mark>数据传输率 = 3*波特率</mark>**，以此类推

#### 2.2.3 信道的极限容量

![信号失真](https://clb.pages.dev/img/pics/202310262054137.png)

> <mark>**奈式准则**</mark>

![奈式准则](https://clb.pages.dev/img/pics/202310262059898.png)

> **<mark>香农公式</mark>**
> $$
> c = W \cdot \log_{2}(1 + \frac{S}{N})
> $$
> <mark>知道信噪比(dB)求S/N，假设信噪比为30dB</mark>
>
> 1. $$30 = 10 \cdot \log_{10}(\frac{S}{N})$$
> 2. $$3 = \log_{10}(\frac{S}{N})$$
> 3. $$\frac{S}{N} = 10^3$$

![香农公式](https://clb.pages.dev/img/pics/202310262102013.png)

> 1. 在信道带宽一定的情况下，根据奈氏准则和香农公式，要想<mark>提高信息的传输速率</mark>就必须采用<mark>多元制</mark>（更好的调制方法）和努力<mark>提高信道中的信噪比</mark>
> 2. 自从香农公式发表后，各种新的信号处理和调制方法就不断出现，其目的都是为了尽可能地<mark>接近香农公式给出的传输速率极限</mark>

#### 2.2.4 传输方式

1. 并行传输和串行传输

> - 并行传输速度是串行传输的<mark>n倍</mark>，但是<span color='rgb(1,2,3)'>成本高</span><mark>所以长距离传输使用串行传输</mark>
>- 远距离传输使用串行传输，计算机内部使用并行传输

![并行传输和串行传输](https://clb.pages.dev/img/pics/202310262005937.png)

2. 异步传输和同步传输

> 异步传输<mark>字节之间异步</mark>，但是要添加<mark>开始码</mark>和<mark>停止码</mark>作为引导

<img src="https://clb.pages.dev/img/pics/202310262010168.png" alt="异步传输和同步传输"  />

3. 单工、半双工和全双工通信

![单工、半双工和全双工通信](https://clb.pages.dev/img/pics/202310262014965.png)

### 2.3 物理层下的传输媒体（了解即可）

#### 2.3.1 导引型传输媒体

1. **同轴电缆**

![同轴电缆](https://clb.pages.dev/img/pics/202310261938546.png)

2. **双绞线**

![双绞线](https://clb.pages.dev/img/pics/202310261942966.png)

3. **光纤**

![光纤](https://clb.pages.dev/img/pics/202310261946552.png)

#### 2.3.2 非导引型传输媒体

1. **微波**

![微波](https://clb.pages.dev/img/pics/202310261954118.png)

2. 其他无线电波
3. 红外线和可见光

### 2.4 信道复用技术

> 复用：当网络中传输媒体的传输容量大于多条单一信道传输的总通信量时，可利用复用技术<mark>在一条物理线路上建立多条通信信道</mark>来共享传输媒体的带宽。

<img src="https://clb.pages.dev/img/pics/image-20231027222210209.png" alt="信道复用" style="zoom:80%;" />

#### 2.4.1 频分复用

> **频分复用**(Frequency-division multiplexing,`FDM`):<mark>将多路基带信号调制到不同频率载波</mark>上，再进行<mark>叠加形成一个复合信号</mark>,接收端的分用器通过滤波将各路信号滤出，将合成的复合信号恢复成原始的多路信号。

<img src="https://clb.pages.dev/img/pics/202310272254062.png" style="zoom: 67%;" />

#### 2.4.2 时分复用

> 时分复用(Time Division Multiplexing,`TDM`)：将传输线路的带宽资源<mark>按时间轮流分配</mark>给不同的用户，用户只能在分配的时间里使用线路传输数据（类似于<mark>时间片轮转</mark>）
>
> 存在的不足：使用时分复用系统传送计算机数据时，由于计算机数据的突发性质，用户对分配到的子信道的利用率一般不高。（如果A暂时不使用信道，其他用户正常使用，时分复用还是会给A分配时间，而且这段时间内其他用户也不能使用）

<img src="https://clb.pages.dev/img/pics/202310272254453.png" alt="时分复用" style="zoom: 67%;" />

> 统计时分复用(statistical time division multiplexing,`STDM`):<mark>动态地按需分配</mark>共用信道的时隙，只将需要传送数据的终端接入共用信道，可以提高信道的利用率
>
> 帧与帧之间留有空隙用来存储用户的地址信息，因为不是固定的分配给某个用户

![STDM](https://clb.pages.dev/img/pics/202310281701023.png)

#### 2.4.3 波分复用

> 波分复用(Wavelength Division Multiplexing,`WDM`)就是<mark>光的频分复用</mark>。使用一根光纤来同时传输多个光载波信号。现在已能做到在一根光纤上复用几十路或更多路数的光载波信号。

![波分复用](https://clb.pages.dev/img/pics/202310282020333.png)

#### 2.4.3 码分复用

> - 码分复用(Code Division Multiplexing,`CDM`)一种共享信道的方法。
> - 由于该技术主要用于无线多址接入（本书中我们不严格区分多址与复用）人们更常用的名词是码分多址CDMA(Code Division Multiple Access)。
> - 每一个用户可以在同样的时间使用同样的频带进行通信。<mark>各用户使用经过特殊挑选的不同码型，因此彼此不会造成干扰</mark>。
>
> - 最初用于军事，因为这种系统发送的信号<mark>有很强的抗干扰能力，其频谱类似于白噪声，不易被敌人发现</mark>

![码分复用](https://clb.pages.dev/img/pics/202310282039043.png)

> 规格化内积：将码片序列先写成+1和-1的向量
>
> 例如：<mark>码片序列为（1101）>>> 向量为(+1,+1,-1,+1)</mark>
>
> 向量相乘/向量个数 = 内积
>
> - **内积为1  >>> 发送信号1** <mark>发送的是自己的码片序列</mark>
> - **内积为0  >>> 未发送信号** <mark>未发送数据</mark>
> - **内积为-1 >>> 发送信号0** <mark>发送的是自己的码片序列的二进制反码</mark>

### 2.5 相关习题和资料

1. [第2章 物理层 习题](https://www.kdocs.cn/view/l/cfixYkxNJ7Ep)
2. [第2章 物理层（思维导图）](https://www.kdocs.cn/view/l/ckmnMjp5UQvK)

---

## 3. 数据链路层

> **<mark>任务：解决数据包在一个网络或一段链路上传输的问题</mark>**

### 3.1 数据链路和帧

> - <mark>链路</mark>（Link）是指从一个节点到相邻节点的一段物理线路，而中间没有任何其他的交换节点
> - <mark>数据链路</mark>（Data Link）是基于链路的。当在一条链路上传送数据时，除需要链路本身，还需要一些必要的通信协议来控制这些数据的传输，把<mark>实现这些协议的硬件和软件加到链路</mark>上，就构成了数据链路
> - 计算机中的<mark>网络适配器</mark>（俗称网卡）和其相应的软件驱动程序就实现了这些协议。一般的网络适配器都包含了物理层和数据链路层这两层的功能
> - <mark>帧</mark>（Frame）是数据链路层的协议数据单元

### 3.2 封装成帧和透明传输

#### 3.2.1 封装成帧

![封装成帧](https://clb.pages.dev/img/pics/202310291347647.png)

#### 3.2.2 <span style = 'color:#ff6b6b'>透明传输问题</span>

> **<mark>2. 透明传输问题出现原因</mark>**：上层应用交付的数据单元中可能<mark>含有和帧定界符相同的数据</mark>而被接收端误认为帧定界符从而导致错误。
>
> 如果不解决上述问题，则数据链路层就会<mark>对上层交付的PDU的内容有所限制</mark>，即<mark>PDU中不能包含帧定界符</mark>。显然，这样的数据链路层没有什么应用价值。
>
> <mark>**透明传输**</mark>：数据链路层对上层交付的PDU的内容<mark>没有任何限制</mark>，就好像数据链路层不存在一样

<img src="https://clb.pages.dev/img/pics/202310291859630.png" alt="透明传输问题" style="zoom: 67%;" />

#### 3.2.3 解决透明传输问题

1. **<mark>字符填充</mark>(字节填充)**

![字符填充](https://clb.pages.dev/img/pics/image-20231029190744213.png)

2. **<mark>零比特填充</mark>**

**扫描要发送的信息，<span style='color:#ff6b6b'>如果有连续的5个1，立即插入1个0</span>>，接收端逆操作即可（01111110为帧定界符）**

![零比特填充](https://clb.pages.dev/img/pics/image-20231029192326597.png)

### 3.3 差错检测

> 1. <mark>**比特差错**</mark>：比特在传输过程中可能会产生差错，0可能变为1,1可能变为0，这叫比特差错，也称为**<mark>误码</mark>**
> 2. **<mark>误码率</mark>**：传输<mark>错误的</mark>比特数与所传输比特<mark>总数</mark>的比率称为误码率
> 3. 使用<mark>差错检测码</mark>来检测数据在传输过程中是否产生了比特差错，是数据链路层所要解决的重要问题之一

#### 1. 使用<mark>循环冗余检验`CRC`</mark>

![CRC](https://clb.pages.dev/img/pics/image-20231101192256040.png)

#### 2. 示例

1. 发送方

![CRC](https://clb.pages.dev/img/pics/image-20231101193502184.png)

2. 接收方

![](https://clb.pages.dev/img/pics/image-20231101193959244.png)

#### 3. 总结

![](https://clb.pages.dev/img/pics/image-20231101194313756.png)

### 3.4 可靠传输

#### 1. 概念

![](https://clb.pages.dev/img/pics/image-20231101194720144.png)

![](https://clb.pages.dev/img/pics/image-20231101195208168.png)

### 3.5 可靠传输的实现机制

#### 3.5.1 停止-等待协议(SW)

1. 基本原理

> 发送一个数据分组`DATA0`然后等待接收方发来确认信息`ACK0`后再传输下一个数据分组`DATA1` ，如果<mark>超时未接收到</mark>接收方发送的确认信息`ACK0`或者接<mark>收到否认信息</mark>`NAK`就重新发送上一个分组数据分组,数据分组和确认信息的编号都是用来区分和上一个分组或信息是否相同

![SW](https://clb.pages.dev/img/pics/image-20231101204223808.png)

2. 停止等待协议的信道利用率

> $$
> 利用率 = \frac{数据发送时延}{数据发送时延+2个传播时延+确认信息发送时延}
> $$
>
> <span style='color:#ff6b6b'>确认信息的发送时延一般忽略不计</span>
>
> **总结：当往返时间远大于数据帧的发送时延时，信道利用率很低，如果出现超时重传，信道利用率更低**（卫星链路）

#### 3.5.2 回退N帧协议（GBN）

![](https://clb.pages.dev/img/pics/image-20231101215803331.png)

![](https://clb.pages.dev/img/pics/image-20231101211215263.png)

#### 3.5.3 选择重传协议（SR）

![](https://clb.pages.dev/img/pics/image-20231101212500499.png)

### 3.6 点对点协议(`PPP`)

1. 概述

> <mark>点对点协议</mark>（Point-to-Point Protocol，PPP）是目前使用最广泛的点对点数据链路层协议
>
> 1. <mark>网络控制协议NCPs</mark>
> 2. 封装成帧
> 3. <mark>链路控制协议LCP</mark>

![PPP](https://clb.pages.dev/img/pics/image-20231101213541707.png)

2. PPP的<mark>帧格式</mark>

![](https://clb.pages.dev/img/pics/image-20231101221019454.png)

3. PPP的<mark>透明传输</mark>

![](https://clb.pages.dev/img/pics/image-20231103154439848.png)

3. PPP的<mark>状态图</mark>

![](https://clb.pages.dev/img/pics/image-20231101221315932.png)

### 3.7 媒体接入控制问题

#### 3.7.1 媒体接入控制/多址接入 问题

> 如何协调多个发送站点和接收站点对一个共享传输媒体的占用（<mark>多个媒体同时发送信号导致冲突的问题</mark>）

#### 3.7.2 静态划分信道

> - 频分多址
> - 时分多址
> - 码分多址
>
> <mark>**这种固定划分信道的方法非常不灵活，通常在物理层中使用，而不是数据链路层**</mark>

#### 3.7.3 `CSMA/CD`协议

![](https://clb.pages.dev/img/pics/image-20231103161532858.png)

1. <mark>帧发送流程图</mark>

![](https://clb.pages.dev/img/pics/image-20231103162311360.png)

![](https://clb.pages.dev/img/pics/image-20231103163826951.png)

2. **<mark>争用期</mark>  2τ ，即端到端传播时延的2倍**

![](https://clb.pages.dev/img/pics/image-20231103162720907.png)

3. <mark>最小帧长</mark>
>
>    **最小帧长 = 争用期 x 数据传输速率**
> $$
>    l = 2τ * 数据传输速率
> $$

![](https://clb.pages.dev/img/pics/image-20231103162936995.png)

4. <mark>动态退避</mark>：发生碰撞后进行重传，随着重传次数增加，退避时间也会逐渐增加，减小了碰撞的概率

![image-20231103163318636](https://clb.pages.dev/img/pics/image-20231103163318636.png)

5. <mark>帧接收流程图</mark>

![](https://clb.pages.dev/img/pics/image-20231103163952585.png)

#### 3.7.4 `CSMA/CA`协议

![](https://clb.pages.dev/img/pics/202311062053040.png)

### 3.8 `MAC`、`IP`地址、`ARP`协议

#### 3.8.1 `MAC`地址

1. **MAC地址**是<mark>对网络上各接口的唯一标识</mark>，而不是对网络上各设备的唯一标识（路由器有多个接口，所以有多个MAC地址）

![](https://clb.pages.dev/img/pics/image-20231109211711863.png)

2. MAC地址格式
>
> 广播MAC地址为**<mark>FF-FF-FF-FF-FF-FF</mark>**

![](https://clb.pages.dev/img/pics/image-20231109212131157.png)

3. MAC帧有三种：<mark>单播、广播、多播</mark>

> 单播帧：<mark>一对一</mark>

![](https://clb.pages.dev/img/pics/image-20231109213737953.png)

> 广播帧：<mark>一对全体</mark>
>
> 广播地址：`FF-FF-FF-FF-FF-FF`

![](https://clb.pages.dev/img/pics/image-20231109214347270.png)

> 多播帧：<mark>一对多</mark>
>
> 多播地址：<mark>第二个数是奇数代表是多播地址</mark>

![](https://clb.pages.dev/img/pics/62942804e4b055af8b78ba06.jpeg)

#### 3.8.2 `IP`地址

> （网络层再详细介绍）

![](https://clb.pages.dev/img/pics/image-20231109220004217.png)

#### 3.8.3 `ARP`协议

> 主机中保存了一个高速缓存表，<mark>记录了IP和MAC的对应关系</mark>

<img src="https://clb.pages.dev/img/pics/image-20231109221234731.png" style="zoom: 67%;" />

> ARP协议动态获取MAC地址

![](https://clb.pages.dev/img/pics/image-20231109221003126.png)

> **总结：`ARP`协议只能逐链路（相邻）使用，不能跨网络使用**

### 3.9 集线器和交换机的区别

![](https://clb.pages.dev/img/pics/image-20231109222104719.png)

![](https://clb.pages.dev/img/pics/image-20231109222736241.png)

### 3.10 透明网桥的生成树协议`STP`

> - 为了提高以太网的<mark>可靠性</mark>，有时需要在两个以太网之间使用多个透明网桥来提供<mark>冗余链路</mark>
> - 为了避免广播帧在环路中永久兜圈，透明网桥使用生成树协议`Spanning Tree Protocol`，可以在增加冗余链路提高网络可靠性的同时，又避免环路带来的问题

![](https://clb.pages.dev/img/pics/image-20231111200010935.png)

### 3.11 虚拟局域网`VLAN`

> 虚拟局域网（`Virtual Local Area Network`，VLAN）是一种将局域网内的站点划分成与物理位置无关的逻辑组的技术，一个逻辑组就是一个VLAN，VLAN中的各站点具有某些共同的应用需求

> <mark>广播风暴</mark>：**广播风暴会浪费网络资源和各主机的CPU资源**
>
> - 可以使用路由器切割广播域，防止广播风暴，但是<mark>成本较高</mark>
> - 使用vlan技术划分广播域

> - `A`发送广播帧，`Access`接口接收并`打标签`,`PVID`和`VID`相同的Access端口可以接收该帧，进行<mark>去标签转发</mark>
>
> - `Trunk`端口的`PVID`如果等于该帧的`VID`，也会<mark>先去标签转发，然后再打标签</mark>，否则直接转发
> - **Trunk端口是连接两个交换机的**

![](https://clb.pages.dev/img/pics/image-20231111193532792.png)

### 4. 思维导图和习题

[第3章 数据链路层（思维导图）-1 (kdocs.cn)](https://www.kdocs.cn/view/l/cgV0rfS0qZEA)

[第3章 数据链路层（思维导图）-2 (kdocs.cn)](https://www.kdocs.cn/view/l/ciOEeLV6ffuJ)

[第3章 数据链路层（思维导图）-3 (kdocs.cn)](https://www.kdocs.cn/view/l/cnRBS8NFgTll)

[第3章 数据链路层 习题（第1部分）](https://www.kdocs.cn/view/l/cl60fYfO1qZe)

[第3章 数据链路层 习题（第2部分）](https://www.kdocs.cn/view/l/cenjHDfYLe95)

---

## 4. 网络层

### 4.1 概述

> 网络层的主要任务：<mark>将分组从源主机经过多个网络和多段链路传输到目的主机</mark>，可以将该任务划分为<mark>分组转发</mark>和<mark>路由选择</mark>两种重要的功能

### 4.2 网络层提供的两种服务

#### 4.2.1 面向连接的虚电路服务

> - **虚电路表示这是一条逻辑上的连接，分组沿着这条逻辑连接按照存储转发方式传送，而<mark>不是真正建立了一条物理连接</mark>**
> - **分组的首部仅在连接建立阶段使用完整的目的主机地址，之后每个分组的首部只需要携带一条<mark>虚电路编号</mark>即可**

![](https://clb.pages.dev/img/pics/image-20231112213851481.png)

#### 4.2.2 无连接的数据报服务

> - `TCP/IP`使用的就是这种<mark>简单灵活的</mark>、<mark>无连接的</mark>、<mark>不可靠的</mark>数据报服务
> - **核心思想：<mark>可靠通信应由用户主机来保证</mark>**
> - **由于网络自身不提供端到端的可靠传输服务，这就使得网络中的路由器可以做得比较简单，<mark>大大降低了网络造价</mark>**
> - **这种设计思想的<mark>运行方式灵活</mark>、能够适应多种应用。因特网能够发展到今日的规模，充分证明了当初采取这种设计思想的<mark>正确性</mark>**

![](https://clb.pages.dev/img/pics/image-20231112220730923.png)

#### 4.2.3 IP地址

> **概念**

- 网际协议（`Internet Protocol`，`IP`）是`TCP/IP`体系结构网际层中的核心协议
- `IPv4`地址就是给因特网(Internet)上的每一台主机（或路由器）的每一个<mark>接口</mark>分配一个在全世界范围内是唯一的<mark>32比特</mark>的标识符

#### 4.2.4 分类编址的`IP`

![](https://clb.pages.dev/img/pics/image-20231112223308951.png)

#### 4.2.5 划分子网的`IP`

> **分类编址方法不够灵活且容易造成<mark>大量地址浪费</mark>，划分子网编址方法对其进行改进（“打补丁”）**

<img src="https://clb.pages.dev/img/pics/image-20231113184551320.png" style="zoom:80%;" />

> 划分子网案例

<img src="https://clb.pages.dev/img/pics/image-20231113185650959.png" style="zoom:67%;" />

#### 4.2.6 <mark>无分类编制</mark>的`IP`

<img src="https://clb.pages.dev/img/pics/image-20231113190642722.png" style="zoom:67%;" />

> <mark>无分类域间路由选择</mark>（`C`lassless `I`nter-`D`omain `R`outing，`CIDR` ）

<img src="https://clb.pages.dev/img/pics/image-20231113190939322.png" style="zoom:67%;" />

> **练习**

![](https://clb.pages.dev/img/pics/image-20231113193113576.png)

> **<mark>路由聚合</mark>**
>
> **找出共同前缀，其余位取0**

<img src="https://clb.pages.dev/img/pics/image-20231113193616181.png" style="zoom:67%;" />

### 4.3 IP数据报的发送和转发过程

> **IP数据报的<mark>发送</mark>和<mark>转发</mark>过程**
>
> - **主机发送IP数据报**
>   - <mark>判断目的主机是否与自己在同一个网络：</mark>
>     - 若在同一个网络，则属于<mark>直接交付</mark>，直接发送给目的主机
>     - 若不在同一个网络，则属于<mark>间接交付</mark>，传输给主机所在网络的默认网关(路由器)，<mark>由默认网关帮忙转发</mark>)
>
> - **路由器转发IP数据报**
>   - <mark>检查IP数据报首部是否出错：</mark>
>     - 若出错，则直接丢弃该IP数据报并通告源主机
>     - 若没有出错，则进行转发
>   - <mark>根据IP数据报的目的地址在路由表中查找匹配的条目：</mark>
>     - 若找到匹配的条目，则转发给条目中指示的下一跳；
>     - 若找不到，则丢弃该IP数据报并通告源主机；

![](https://clb.pages.dev/img/pics/010ac0446c7c01e405dd1b7baf38d50a.png)

> <mark>路由器不转发广播IP数据报</mark>，即路由器隔离广播域，如果因特网中数量巨大的路由器收到广播IP数据报后都进行转发，则会<mark>造成巨大的广播风暴，严重浪费因特网资源</mark>
>
> - <mark>中继器</mark>和<mark>集线器</mark>工作在<mark>物理层</mark>，**既不隔离冲突域也不隔离广播域**
> - <mark>网桥</mark>和<mark>交换机</mark>(多端口网桥)工作在<mark>数据链路层</mark>，**可以隔离冲突域，不能隔离广播域**
> - <mark>路由器</mark>工作在<mark>网络层</mark>，**既隔离冲突域，也隔离广播域**

### 4.4 静态路由配置

#### 1. 静态路由的配置

<img src="https://clb.pages.dev/img/pics/image-20231117222851885.png" style="zoom:67%;" />

#### 2. 默认路由

1. 默认路由：默认路由条目中的目的网络`0.0.0.0/0`，其中`0.0.0.0`表示任意网络，而网络前缀“/0”（相应的地址掩码为`0.0.0.0`）是<mark>最短的网络前缀</mark>

2. 特定主机路由：特定主机路由条目中的目的网络`192.168.2.1/32`，其中`192.168.2.1`是特定主机的IP地址，而网络前缀“/32”（相应地址掩码为`255.255.255.255`）是<mark>最长的网络前缀</mark>
3. 路由器在查找转发表转发IP数据报时，遵循“最长前缀匹配”的原则，因此<mark>默认路由匹配优先级最低，特定主机路由条目的匹配优先级最高</mark>

<img src="https://clb.pages.dev/img/pics/image-20231117223841323.png" style="zoom:67%;" />

#### 3. 路由环路

- 错误配置静态路由有可能导致<mark>路由环路</mark>问题
- 为了<mark>防止IP数据报在环路中永久兜圈</mark>，在IP数据报首部设有<mark>生存时间TTL</mark>，TTL为0时会被丢弃

**路由环路问题产生原因：**

1. 路由配置错误

<img src="https://clb.pages.dev/img/pics/image-20231118125828914.png" style="zoom:67%;" />

2. 聚合了不存在的IP地址

> 需要给不存在的IP地址配置黑洞路由，防止IP数据报转发到其他路由器

<img src="https://clb.pages.dev/img/pics/image-20231118133214440.png" style="zoom:67%;" />

3. 网络故障

> 可以在网络发生故障时<mark>添加一条针对该IP的黑洞路由</mark>，待网络正常后又将其设置为失效状态

<img src="https://clb.pages.dev/img/pics/image-20231118134111043.png" style="zoom: 67%;" />

### 4.5 路由选择协议

1. 路由选择分为两类

| <mark>静态路由选择</mark>                                                                        | <mark>动态路由选择</mark>                                                                |
| :----------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| 采用<mark>人工配置</mark>的方式给路由器添加网络路由、默认路由和特定主机路由等路由条目            | 路由器通过路由选择协议<mark>自动获取</mark>路由信息                                      |
| 静态路由选择<mark>简单、开销小</mark>，但<mark>不能及时适应网络状态（流量、拓扑等）的变化</mark> | 动态路由选择比较<mark>复杂、开销比较大</mark>，但<mark>能较好地适应网络状态的变化</mark> |
| 静态路由选择一般只在<mark>小规模网络</mark>中采用                                                | 动态路由选择适用于<mark>大规模网络</mark>                                                |

2. 因特网采用<mark>分层次</mark>的路由选择协议

因特网是全球最大的互联网，它所采取的路由选择协议具有以下三个主要特点：

- 自适应：因特网采用<mark>动态路由</mark>选择，能较好地适应网络状态的变化。
- 分布式：因特网中的各路由器通过相互间的信息交互，<mark>共同完成路由信息的获取和更新</mark>。
- 分层次：将整个因特网划分为许多较小的<mark>自治系统</mark>(`Autonomous System,AS`)，在自治系统内部和外部采用不同类别的路由选择协议，分别进行路由选择

<img src="https://clb.pages.dev/img/pics/image-20231118150928383.png" style="zoom:67%;" />

### 4.6 `RIP`

路由信息协议（`Routing Information Protocol，RIP`）是内部网关协议中最先得到广泛使用的协议之一

1. 相关概念

- RIP使用<mark>跳数</mark>（`Hop Count`）作为度量（`Metric`）来衡量到达目的网络的距离

  - RIP将<mark>路由器到直连网络的距离定义为1</mark>

  - RIP将路由器到非直连网络的距离定义为<mark>所经过的路由器数加1</mark>
  - RIP允许一条路径最多只能包含15个路由器，<mark>距离等于16时相当于不可达</mark>,因此RIP只适用于<mark>小型互
    联网</mark>

<img src="https://clb.pages.dev/img/pics/image-20231118140619521.png" style="zoom: 50%;" />

2. RIP认为好的路由就是“距离短”的路由，也就是所<mark>通过路由器数量最少的路由</mark>,和传输速率和物理距离等无关

3. RIP的<mark>3个重要特点</mark>

<img src="https://clb.pages.dev/img/pics/image-20231118141136250.png" style="zoom: 67%;" />

4. **<mark>RIP的工作原理</mark>**

   1. 基本流程

   <img src="https://clb.pages.dev/img/pics/image-20231118141750507.png" style="zoom:67%;" />

   2. **<mark>RIP路由条目的更新规则</mark>**

   <img src="https://clb.pages.dev/img/pics/image-20231118142447662.png" style="zoom:80%;" />

   3. <mark>**坏消息传播的慢**</mark>

      ![](https://clb.pages.dev/img/pics/image-20231118220443883.png)

5. RIP的优缺点

| 优点                                                                                                 | 缺点                                                                                                            |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 实现<mark>简单</mark>，路由器<mark>开销小</mark>                                                     | RIP限制了<mark>最大RIP距离为`15`</mark>这就限制了使用RIP的自治系统AS的规模                                      |
| 如果一个路由器发现了RIP距离更短的路由，那么这种更新信息就传播得很快，即“<mark>好消息传播得快</mark>” | 相邻路由器之间交换的路由信息是路由器中的完整路由表，因而<mark>随着网络规模的扩大，开销也随之增大</mark>         |
|                                                                                                      | “<mark>**坏消息传播得慢**</mark>”，使更新过程的收敛时间过长。因此，对于规模较大的自治系统AS，应当使用`OSPF`协议 |

### 4.7 `OSPF`

#### 1. 基本概念

> 开放最短路径优先（`Open Shortest Path First，OSPF`）协议是为了克服路由信息协议RIP的缺点在1989年开发出来的
>
> - “<mark>开放</mark>”表明`OSPF`协议不是受某一厂商控制，而是公开发表的
> - “<mark>最短路径优先</mark>”是因为使用了Dijkstra提出的<mark>最短路径算法</mark>(`Shortest Path First,SPF`)

#### 2. 特点

> - `OSPF`是<mark>基于**链路状态**</mark>的，而不像`RIP`是基于距离向量的
> - `OSPF`基于链路状态并采用最短路径算法计算路由，<mark>从算法上保证了不会产生路由环路</mark>
> - `OSPF`<mark>不限制网络规模，更新效率高，收敛速度快</mark>

#### 3. 相关概念

1. 链路状态（`Link State，LS`）是指本路由器都和哪些路由器相邻，以及相应链路的“代价（cost）”，类似RIP中的距离

   > “代价”用来表示费用、距离、时延和带宽等，这些都由网络管理人员来决定

<img src="https://clb.pages.dev/img/pics/image-20231118223059765.png" style="zoom:80%;" alt='举例-思科路由器的代价计算标准' />



2. **<mark>`OSPF`路由器邻居关系的建立和维护</mark>**
   - **如果在死亡倒计时为0时还未收到邻居的问候分组，则认为该邻居不可达，**
   - **在接受到邻居的问候分组后，刷新死亡倒计时为40s**
   - **路由器每10s会向邻居发送问候分组**

<img src="https://clb.pages.dev/img/pics/image-20231118223958856.png" style="zoom:67%;" />

3.  <mark>**链路状态数据库**</mark>(`Link State Database，LSDB`)

![](https://clb.pages.dev/img/pics/image-20231118224728007.png)

> 使用`OSPF`的各路由器，基于链路状态数据库LSDB进行最短路径优先计算，构建出各自到达其他各路由器的最短路径，即构建各自的路由表(<mark>根据链路状态数据库得出全局带权有向图，使用Dijkstra算法得出个路由器的最短路径</mark>)

![](https://clb.pages.dev/img/pics/image-20231118225157334.png)

4. **`OSPF`的五种分组类型**
   - 类型1，<mark>问候(`Hello`)分组</mark>：用来发现和维护邻居路由器的可达性。
   - 类型2，<mark>数据库描述(`Database Description`)分组</mark>：向邻居路由器给出自己的链路状态数据库中的所有链路状态项目的摘要信息
   - 类型3，<mark>链路状态请求(`Link State Request`)分组</mark>：向邻居路由器请求发送某些链路状态项目的详细信息。
   - 类型4，<mark>链路状态更新(`Link State Update`)分组</mark>：路由器使用这种分组将其链路状态进行洪泛发送，即用洪泛法对全网更新链路状态
   - 类型5，<mark>链路状态确认(`Link State Acknowledgment`)分组</mark>：这是对链路状态更新分组的确认分组。

#### 4. 基本工作原理

<img src="https://clb.pages.dev/img/pics/image-20231119152547862.png" style="zoom:67%;" />

> 采用划分区域的方法，虽然使交换信息的种类增多了，同时也使OSPF协议更加复杂了，但这样做能<mark>使每一个区域内部交换路由信息的通信量大大减小，因而使OSPF协议能够用于规模更大的自治系统AS</mark>

<img src="https://clb.pages.dev/img/pics/image-20231119152848527.png" style="zoom:67%;" />

### 4.8  `BGP`

#### 1. 基本概念

> - **边界网关协议**（`Border Gateway Protocol，BGP`）属于<mark>外部网关协议</mark>`EGP`这个类别，用于自治系统`AS`之间的路由选择协议
> - 由于在不同AS内度量路由的“代价”（距离、带宽、费用等）可能不同，因此<mark>对于AS之间的路由选择，使用统一的“代价”作为度量来寻找最佳路由是不行的</mark>
> - AS之间的路由选择还必须考虑相关策略（政治、经济、安全等）
>
> **总结：`BGP`只能是力求寻找一条能够到达目的网络且比较好的路由（即不能兜圈子），而并非要寻找一条最佳路由**

<img src="https://clb.pages.dev/img/pics/image-20231119154933166.png" style="zoom: 80%;" />

> - 在配置BGP时，每个AS的管理员要选择至少一个路由器作为该AS的“<mark>BGP发言人</mark>”
>
> - 一般来说，两个BGP发言人都是通过一个共享网络连接在一起的，而BGP发言人往往就是<mark>BGP边界路由器</mark>
> - 使用`TCP`连接交换路由信息的两个BGP发言人，彼此称为对方的<mark>邻站</mark>（neighbor）或<mark>对等站</mark>（peer）
> - BGP发言人除了运行BGP协议外，还必须运行自己所在AS所使用的内部网关协议IGP，例如RIP或OSPF
> - BGP发言人交换网络可达性的信息，也就是<mark>要到达某个网络所要经过的一系列自治系统</mark>
> - 当BGP发言人相互交换了网络可达性的信息后，各BGP发言人就<mark>根据所采用的策略</mark>，从收到的路由信息中<mark>找出到达各自治系统的较好的路由</mark>，也就是<mark>构造出树形结构且不存在环路的自治系统连通图</mark>

#### 2. 四种报文

<img src="https://clb.pages.dev/img/pics/image-20231119155610676.png"  />

<img src="https://clb.pages.dev/img/pics/image-20231119160021206.png"  />

### 4.9 IPv4数据报的首部格式

![](https://clb.pages.dev/img/pics/image-20231119161128658.png)

|           版本           | 长度为<mark>4</mark>个比特，用来表示IP协议的版本，<mark>通信双方使用的IP协议的版本必须一致</mark>，目前广泛使用的IP协议的版本号为4（即IPv4） |
| :----------------------: | ------------------------------------------------------------ |
|       **首部长度**       | 长度为<mark>4</mark>个比特，该字段的取值<mark>以4字节为单位</mark>，用来表示IPV4数据报的首部长度。<br/>最小取值为二进制的0101，即十进制的5，再乘以4字节单位，<mark>表示IPv4数据报首部只有20字节固定部分</mark><br />最大取值为二进制的1111，即十进制的15，再乘以4字节单位，<mark>表示IPV4数据报首部包含20字节固定部分和最大40字节可变部分</mark> |
|        **总长度**        | 长度为<mark>16</mark>个比特，该字段的取值<mark>以字节为单位</mark>，用来<mark>表示IPv4数据报的长度</mark>（<mark>首部长度+数据载荷长度</mark>）<br />最大取值为二进制的16个比特1，即十进制的65535（很少传输这么长的IPv4数据报） |
|         **标识**         | 长度为<mark>16</mark>个比特，<mark>属于同一个IPv4数据报的各分片数据报应该具有相同的标识</mark> |
|         **标志**         | 最低位(`More Fragment,MF`)<br/>    MF=1表示本分片后面还有分片<br/>    MF=0表示本分片后面没有分片<br/>中间位(`Don't Fragment,DF`)<br/>    DF=1表示不允许分片<br/>    DF=0表示允许分片<br/>最高位为保留位，必须设置为0 |
|        **片偏移**        | 长度为<mark>16</mark>个比特，该字段的取值，<mark>以8字节为单位</mark>，用来指出分片IPv4数据报的<mark>数据载荷偏移其在原IPv4数据报的位置有多远，只能为整数，否则必须调整前一个分片长度</mark> |
|       **生存时间**       | 长度为<mark>8</mark>个比特，最大取值为二进制的11111111，即十进制的255。该字段的取值最初以秒为单位。因此，IPv4数据报的最大生存时间最初为255秒。路由器转发IPv4数据报时，将其首部中该字段的值减去该数据报在路由器上所耗费的时间，若结果不为0就转发，否则就丢弃<br />生存时间字段<mark>后来改为以“跳数”为单位，路由器收到待转发的IPv4数据报时，将其首部中的该字段的值减1，若结果不为0就转发，否则就丢弃</mark> |
|         **协议**         | 长度为8个比特，用来<mark>指明IPv4数据报的数据载荷是何种协议数据单元PDU</mark><br />![](https://clb.pages.dev/img/pics/image-20231119165547509.png) |
|      **首部检验和**      | 长度为<mark>16</mark>个比特，用于<mark>检测IPv4数据报在传输过程中其首部是否出现了差错</mark><br />IPv4数据报<mark>每经过一个路由器</mark>，其首部中的某些字段的值（例如生存时间TTL、标志以及片偏移等）都可能发生变化，因此路由器都要<mark>重新计算一下首部检验和</mark> |
| **源IP地址和目的IP地址** | 长度都为<mark>32</mark>个比特，用来填写发送（接收）IPv4数据报的源（目的）主机的IPv4地址 |

> `MTU`：<mark>最大传送单元，超过最大传送单元的长度的IP数据报必须分片</mark>

![](https://clb.pages.dev/img/pics/image-20231119164911210.png)

![](https://clb.pages.dev/img/pics/image-20231119171554203.png)

### 4.10 `ICMP`

#### 1. 基本概念

> - 为了更有效地转发IP数据报以及提高IP数据报交付成功的机会，TCP/IP体系结构的网际层使用了网际控制报文协议（`Internet Control Message Protocol，ICMP`）
> - 主机或路由器使用ICMP来发送<mark>差错报告报文</mark>和<mark>询问报文</mark>
> - ICMP报文被<mark>封装在IP数据报中作为数据载荷</mark>发送

#### 2. ICMP报文数据类型

- **差错报告报文**：用来<mark>向主机或路由器报告差错情况</mark>

  - **终点不可达**：<mark>当路由器或主机不能交付IP数据报时，就向源点发送终点不可达报文</mark>，具体可再根据ICMP的代码字段细分为目的网络不可达、目的主机不可达、目的协议不可达、目的端口不可达、目的网络未知、目的主机未知等13种

    ![](https://clb.pages.dev/img/pics/image-20231119222854859.png)

  - **源点抑制**：<mark>当路由器或主机由于拥塞而丢弃IP数据报时，就向发送该IP数据报的源点发送源点抑制报文</mark>，使源点知道应当把IP数据报的发送速率放慢

    <img src="https://clb.pages.dev/img/pics/image-20231119222400135.png"  />

  - **超时**：

    - 当路由器收到一个目的IP地址不是自己的IP数据报时，会将其首部中生存时间TTL字段的值减1。若结果不为0，则路由器将该数据报转发出去；<mark>若结果为0，路由器不但要丢弃该数据报，还要向发送该IP数据报的源点发送时间超过（超时）报文</mark>
    - 另外，当终点在预先规定的时间内<mark>未能收到一个数据报的全部数据报分片</mark>时，就把已收到的数据报片都<mark>丢弃</mark>，也会<mark>向源点发送时间超过（超时）报文</mark>

    <img src="https://clb.pages.dev/img/pics/image-20231120194354557.png"  />

  - **参数问题**：当路由器或目的主机收到IP数据报后，根据其首部中的检验和字段的值发现首部在传送过程中出现了误码，就丢弃该数据报，并向发送该数据报的源点发送参数问题报文

    ![](https://clb.pages.dev/img/pics/image-20231120194840526.png)

  - **改变路由（重定向）**：路由器把<mark>改变路由报文</mark>发送给主机，让主机知道下次<mark>应将IP数据报发送给另外的路由器</mark>，这样可以<mark>通过更好的路由到达目的主机</mark>

    ![](https://clb.pages.dev/img/pics/image-20231120195049808.png)

- **以下情况<mark>不应发送ICMP差错报告报文</mark>**：

  - 对<mark>ICMP差错报告报文</mark>不再发送ICMP差错报告报文
  - 对第一个分片的IP数据报片的所有<mark>后续数据报片</mark>都不发送ICMP差错报告报文
  - 对<mark>具有多播地址的IP数据报</mark>都不发送ICMP差错报告报文
  - 对具有<mark>特殊地址</mark>（例如`127.0.0.0`或`0.0.0.0`）的IP数据报不发送ICMP差错报告报文。

- **询问报文**：用来<mark>向主机或路由器询问情况</mark>

  - **回送请求和回答**：

    由主机或路由器向一个特定的目的主机或路由器发出。收到此报文的主机或路由器必须给发送该报文的源主机或路由器发送ICMP回送回答报文。这种询问报文<mark>用来测试目的站是否可达以及了解其有关状态</mark>

  - **时间戳请求和回答**：

    用来请求某个主机或路由器回答当前的日期和时间。在ICMP时间戳回答报文中有一个32比特的字段，其中写入的整数代表从1900年1月1日起到当前时刻一共有多少秒。这种询问报文<mark>用来进行时钟同步和测量时间</mark>

#### 3. ICMP的典型应用

##### 1. `PING`

> 分组网间探测（Packet InterNet Groper，`PING`）
>
> 在命令行中<mark>使用ping命令用来测试主机或路由器之间的连通性</mark>
>
> - PING是TCP/IP体系结构的<mark>应用层直接使用网际层ICMP</mark>的一个例子，它并不使用运输层的TCP或UDP
> - PING应用所使用的ICMP报文类型为<mark>回送请求和回答</mark>

##### 2. `traceroute`

> 跟踪路由应用traceroute，<mark>用于探测IP数据报从源主机到达目的主机要经过哪些路由器</mark>
>
> 在不同操作系统中，traceroute应用的命令和实现机制有所不同：
>
> - 在UNIX版本中，具体命令为`traceroute`，其<mark>在运输层使用UDP协议</mark>，<mark>在网络层使用ICMP报文类型只有差错报告报文</mark>
> - 在Windows版本中，具体命令为`tracert`，其<mark>应用层直接使用网际层的ICMP协议，所使用的ICMP报文类型有回送请求和回答报文以及差错报告报文</mark>
>
> **<mark>原理</mark>**：<mark>设置IP数据报TTL为1，经过第一个路由器时，TTL减为0，IP数据报被丢弃，路由器向源主机发送超时差错报告报文，这样就知道了经过的第一个路由器的IP地址，以此类推依次设置TTL为2,3,4，……，直到接收到目的主机的回送请求回答报文</mark>

### 4.11 `VPN`

> <mark>虚拟专用网</mark>(`Virtual Private Network,VPN`)：**利用公用的<mark>因特网</mark>作为本机构各<mark>专用网之间的通信载体</mark>，这样形成的网络又称为虚拟专用网**

**专用地址**：

- `10.0.0.0-10.255.255.255`(CIDR地址块10/8)
- `172.16.0.0-172.31.255.255`(ClDR地址块172.16/12)
- `192.168.0.0-192.168.255.255`(CIDR地址块192.168/16)

> 很显然，全世界可能有很多不同机构的专用网具有相同的专用IP地址，但这并不会引起麻烦，因为<mark>这些专用地址仅在机构内部使用</mark>
>
> **注意**：在因特网中的所有路由器，<mark>对目的地址是专用地址的IP数据报一律不进行转发</mark>，这需要由因特网服务提供者ISP对其拥有的因特网路由器进行设置来实现（需要自己对路由器额外配置）

![](https://clb.pages.dev/img/pics/image-20231120204244180.png)

### 4.12 `NAT`

#### 1. 概述

> - **背景**：尽管因特网采用了无分类编址方法来减缓IPv4地址空间耗尽的速度，但由于<mark>因特网用户数量的急剧增长</mark>，特别是<mark>大量小型办公室</mark>和<mark>家庭网络</mark>接入因特网的需求不断增加，I<mark>Pv4地址空间即将耗尽的危险然仍没有解除</mark>（实际上，因特网号码分配管理局IANN于2011年2月3日宣布，IPv4地址已经分配完毕）
>
> - **<mark>网络地址转换</mark>**（`Network Address Translation，NAT`）技术于1994年被提出，<mark>用来缓解IPv4地址空间即将耗尽的问题</mark>
>   - NAT能<mark>使大量使用内部专用地址的专用网络用户共享少量外部全球地址来访问因特网上的主机和资源</mark>
>   - 这种方法需要在专用网络连接到因特网的路由器上<mark>安装NAT软件</mark>。装有NAT软件的路由器称为<mark>NAT路由器</mark>，它<mark>至少要有一个有效的外部全球地址IPG</mark>。这样，所有使用内部专用地址的主机在和外部因特网通信时，都要<mark>在NAT路由器上将其内部专用地址转换成IPG</mark>

![](https://clb.pages.dev/img/pics/image-20231120210441321.png)

####  2. `NAPT`

> **<mark>网络地址与端口号转换方法</mark>**:将NAT和运输层端口号结合使用，称为网络地址与端口号转换（`Network Address and Port Translation，NAPT`）
>
> - 由于目前绝大多数基于TCP/IP协议栈的网络应用，都使用运输层的传输控制协议TCP或用户数据报协议UDP，<mark>为了更加有效地利用NAT路由器中的全球IP地址</mark>，现在常<mark>将NAT转换和运输层端口号结合使用</mark>
>   - 这样就可以使内部专用网中使用专用地址的<mark>大量主机，共用NAT路由器上的1个全球IP地址</mark>，因而可以同时与因特网中的不同主机进行通信
>   - 现在很多家用路由器将家中各种智能设备（手机、平板、笔记本电脑、台式电脑、物联网设备等）接入因特网，这种路由器实际上就是一个<mark>NAPT路由器</mark>，但往往并不运行路由选择协议

![](https://clb.pages.dev/img/pics/image-20231120211722902.png)

> <mark>由于NAT对外网屏蔽了内网主机的网络地址，能为内网的主机提供一定的安全保护</mark>

### 5. 思维导图和习题

[第4章 网络层（思维导图）-1 (kdocs.cn)](https://www.kdocs.cn/view/l/ceLxGZ0br8Gy)

[第4章 网络层（思维导图）-2 (kdocs.cn)](https://www.kdocs.cn/view/l/cu2tek1gzIPq)

[第4章 网络层（思维导图）-3 (kdocs.cn)](https://www.kdocs.cn/view/l/cjXVALCjxr0X)

[第4章 网络层（思维导图）-4 (kdocs.cn)](https://www.kdocs.cn/view/l/cbSlBNdR8CSr)

[第4章 网络层 习题(第1部分)](https://www.kdocs.cn/view/l/ccu9ATsOpoZf)

[第4章 网络层 习题(第2部分)](https://www.kdocs.cn/view/l/cqBldcygudFg)

---

## 5. 运输层

### 1. 概述

- 第2~4章依次介绍了计算机网络体系结构中的<mark>物理层</mark>、<mark>数据链路层</mark>和<mark>网络层</mark>，它们共同解决了将主机通过异构网络互联起来所面临的问题，实现了<mark>主机到主机的通信</mark>
- 然而在计算机网络中实际进行<mark>通信的真正实体，是位于通信两端主机中的进程</mark>
- 如何<mark>**为运行在不同主机上的应用进程提供直接的逻辑通信服务**</mark>，就是<mark>运输层的主要任务</mark>，运输层协议又称为端到端协议

![](https://clb.pages.dev/img/pics/image-20231124190055469.png)

### 2. 端口号，复用和分用

#### 1. 运输层端口号

- 运行在计算机上的进程是使用<mark>进程标识符</mark>(`P`rocess `ld`entification,`PID`)来标识的。
  - 然而，因特网上的计算机并不是使用统一的操作系统，而<mark>不同操作系统</mark>(Windows、Linux、.MacOS)
    又<mark>使用不同格式的进程标识符</mark>
  - 为了使运行不同操作系统的计算机的应用进程之间能够基于网络进行通信，就必须<mark>使用统一的方法
    对TCPP体系的应用进程进行标识</mark>
- `TCP/IP`体系结构的运输层使用端口号来标识和区分应用层的不同应用进程。端口号的<mark>长度为6比特，取
  值范围是0~65535</mark>

<img src="https://clb.pages.dev/img/pics/image-20231124191009578.png" style="zoom:100%;" />

> <mark>**端口号只具有本地意义，即端口号只是为了标识本计算机网络协议栈应用层中的各应用进程。在因特网中，不同计算机中的相同端口号是没有关系的，即相互独立。另外，`TCP`和`UDP`端口号之间也是没有关系的**</mark>

#### 2. 发送方的复用和接收方的分用

1. **复用（Multiplexing）：**
   - **定义：** 复用是指<mark>将多个应用程序的数据流合并到一个共享的通信通道上</mark>
   - **TCP中的复用：** 在TCP中，复用通过源端口号来实现。TCP连接的两端使用IP地址和端口号来唯一标识。源端口号表示发送端的应用程序，目的端口号表示接收端的应用程序。这样，在单个TCP连接中，多个应用程序的数据可以共享同一个物理通信通道
   - **UDP中的复用：** 在UDP中，复用同样通过源端口号来实现。UDP报文的源端口号用于标识发送端的应用程序，目的端口号用于标识接收端的应用程序
2. **分用（Demultiplexing）：**
   - **定义：** 分用是指<mark>根据数据流中的标识信息将合并的数据流分发给正确的应用程序</mark>
   - **TCP中的分用：** 在TCP中，分用通过目的端口号来实现。接收端根据目的端口号将接收到的数据分发给相应的应用程序。这样，TCP层能够将数据正确地传递给目标应用程序
   - **UDP中的分用：** 在UDP中，同样通过目的端口号来实现分用。接收端通过目的端口号确定应该将数据交付给哪个应用程序

![](https://clb.pages.dev/img/pics/image-20231124192346522.png)

> <mark>常见协议的分类</mark>

![](https://clb.pages.dev/img/pics/image-20231124192909256.png)

**<a href='https://www.bilibili.com/video/BV1c4411d7jb?t=353.6&p=58'>运输层端口号应用举例</a>**

### 3.  `TCP`和`UDP`的对比

![](https://clb.pages.dev/img/pics/image-20231124195001220.png)

**<mark>注意</mark>**：

- TCP面向连接是<mark>逻辑连接，并非真实物理连接</mark>
- <mark>TCP面向字节流，UDP面向应用报文</mark>（只是给数据报添加一个UDP首部）
- TCP只支持单播，UDP支持单播、多播和广播
- <mark>TCP提供可靠服务，UDP提供不可靠服务</mark>

### 4. TCP的**流量控制**

#### 1. 概述

> TCP为应用程序提供了<mark>流量控制</mark>（`Flow Control`）机制，以解决因<mark>发送方发送数据太快而导致接收方来不及接收，造成接收方的接收缓存溢出</mark>的问题
>
> **流量控制的基本方法：**<mark>接收方根据自己的接收能力（接收缓存的可用空间大小）控制发送方的发送速率</mark>

#### 2. <a href='https://www.bilibili.com/video/BV1c4411d7jb?t=44.1&p=60'>流量控制方法</a>

1. **流程**

![](https://clb.pages.dev/img/pics/image-20231124203621190.png)

![](https://clb.pages.dev/img/pics/image-20231124205122410.png)

2. 例题

   ![](https://clb.pages.dev/img/pics/image-20231124210146804.png)

### 5. TCP的**拥塞(se)控制**

#### 1. 基本概念

<img src="https://clb.pages.dev/img/pics/image-20231124211432668.png" />

#### 2. 4种拥塞控制方法

![](https://clb.pages.dev/img/pics/image-20231124212653543.png)

##### <mark>1. 慢开始、拥塞避免</mark>

![](https://clb.pages.dev/img/pics/image-20231124213905436.png)

##### <mark>2. 快重传、快恢复</mark>

> 快重传算法和快恢复算法（<mark>改进TCP性能</mark>，1990年Reno版本）

1. 问题

![](https://clb.pages.dev/img/pics/image-20231124214535400.png)

2. **<mark>快重传</mark>**

   - **采用快重传算法可以让发送方尽早知道发生了<mark>个别TCP报文段的丢失</mark>**
   - “快重传”是指**使发送方尽快（尽早）进行重传，而不是等重传计时器超时再重传**
     - 这就要求<mark>接收方不要</mark>等待自己发送数据时才进行<mark>捎带确认</mark>，而是<mark>要立即发送确认</mark>，即使收到了<mark>失序的报文段</mark>也要<mark>立即</mark>发出对已收到的报文段的<mark>重复确认</mark>
     - <mark>发送方</mark>一旦<mark>收到3个连续的重复确认</mark>，就将相应的报文段<mark>立即重传</mark>，而不是等该报文段的重传计时器超时再重传

   ![](https://clb.pages.dev/img/pics/image-20231124215953819.png)

3. <mark>**快恢复**</mark>

> 与快重传算法配合使用的是**快恢复算法**，<mark>发送方</mark>一旦<mark>收到3个重复确认</mark>，就知道现在<mark>只是丢失了个别的报文段</mark>，于是<mark>不启动慢开始算法，**而是执行快恢复算法**</mark>
>
> - **快恢复算法：**<mark>发送方将慢开始门限ssthresh的值和拥塞窗口cwnd的值**都调整为当前cwnd值的一半**，并开始执行拥塞避免算法</mark>
> - 也有的快恢复实现是把快恢复开始时的cwnd值再增大一些，即cwnd=新ssthresh+3

![](https://clb.pages.dev/img/pics/image-20231125205520540.png)

### 6. TCP超时重传时间的选择

> **<mark>TCP超时重传时间RTO的选择</mark>是TCP<mark>最复杂</mark>的问题之一**
>
> 问题：
>
> - <mark>超时重传时间设置过小</mark>，在确认报文段发送给接收方的过程中，发送方重传数据报文，<mark>增大了网络负荷</mark>
> - <mark>超时重传时间设置过大</mark>，需要重传数据报文时，推迟时间太长，<mark>网络空闲时间大，降低了传输效率</mark>
> - 超时重传时间`RTO`应略大于往返时间`RTT`

#### **<mark>RTO的选择</mark>**

##### 1. RTTs的计算

![](https://clb.pages.dev/img/pics/image-20231125211946213.png)

##### 2. RRTd和RTO的计算

![](https://clb.pages.dev/img/pics/image-20231125212210328.png)

#### 发生超时重传时无法测准RTT

![](https://clb.pages.dev/img/pics/image-20231125212838059.png)

> **通过上述两个例子可以看出：当发送方出现超时重传后，收到确认报文段时是无法判断出该确认到底是对原数据报文段的确认还是对重传数据报文段的确认，也就是无法准确测量出RTT，进而无法正确计算RTO**

##### Karn算法及修正

![](https://clb.pages.dev/img/pics/image-20231125213341384.png)

##### 总结

![](https://clb.pages.dev/img/pics/image-20231125213649193.png)

### 7.TCP可靠传输的实现

- **TCP的窗口以字节为单位**

![](https://clb.pages.dev/img/pics/image-20231126212908308.png)

- 发送方
  - 发送窗口内的已发送数据如果迟迟未收到确认，会发生<mark>超时重传</mark>
  - 只有处于发送窗口内的数据才能发送

![](https://clb.pages.dev/img/pics/image-20231126213314315.png)

- 接收方
  - 接收方<mark>**只能对按序收到的数据中的最高序号给出累计确认**</mark>，3次重复确认会导致发送方<mark>**快重传**</mark>
  - **序号落入接收窗口内的数据是允许接收的数据**

![](https://clb.pages.dev/img/pics/image-20231126213800870.png)

- **<mark>总结</mark>**

![](https://clb.pages.dev/img/pics/image-20231126214833403.png)

### 8. TCP的运输连接管理

#### 1. TCP连接的建立

![](https://clb.pages.dev/img/pics/image-20231203192027726.png)

> TCP双方连接的建立要解决的三个问题

![](https://clb.pages.dev/img/pics/image-20231203192339624.png)

#### 2. 三报文握手

![](https://clb.pages.dev/img/pics/image-20231203193842118 .png)

> **思考：第三次确认<mark>是否多余</mark>，<mark>能不能两报文握手？</mark>**
>
> 答案：不能，如下图所示

![](https://clb.pages.dev/img/pics/image-20231203194753830.png)

#### 3. 四报文挥手

![](https://clb.pages.dev/img/pics/image-20231203195725711.png)

> **思考：为什么客户端发送完最后一个确认报文段后不立刻关闭而是等待2个MSL时间后才关闭？**
>
> 答案：如图所示

![](https://clb.pages.dev/img/pics/image-20231203200428799.png)

> <mark>TCP保活计时器的作用</mark>

![](https://clb.pages.dev/img/pics/image-20231203201004403.png)

### 9. TCP报文段首部格式

> 参阅思维导图 1

### 10. 思维导图和习题

[第5章 运输层（思维导图）-1 (kdocs.cn)](https://www.kdocs.cn/view/l/cgoja6Lpohhj)

[第5章 运输层（思维导图）-2 (kdocs.cn)](https://www.kdocs.cn/view/l/chkSS9vn9Zgd)

[第5章 运输层 习题 (kdocs.cn)](https://www.kdocs.cn/view/l/cpaRQtp0G6Ou)

---

## 6. 应用层

### 1. 概述

- 应用层是计算机网络体系结构的<mark>**最顶层**</mark>，是<mark>**设计和建立计算机网络的最终目的**</mark>，也是计算机网络中发展最快的部分
  - 早期基于文本的应用（电子邮件、远程登录、文件传输、新闻组）
  - 20世纪90年代将因特网带入千家万户的万维网WWW
  - 当今流行的即时通信、P2P文件共享及各种音视频应用
  - 计算设备的小型化和“无处不在”，宽带住宅接入和无线接入的日益普及和迅速发展，为未来更多的新型应用提供了广阔的舞台

### 2. 客户服务器和对等方式

#### 1. `C/S`方式

![](https://clb.pages.dev/img/pics/image-20231203210526922.png)

![](https://clb.pages.dev/img/pics/image-20231203210406504.png)

#### 2. `P2P`方式

![](https://clb.pages.dev/img/pics/image-20231203210957388.png)

![](https://clb.pages.dev/img/pics/image-20231203210908603.png)

### 3. `DHCP`

#### 1. 概述

> 动态主机配置协议（`D`ynamic `h`ost `c`onfiguration `p`rotocol）
>
> 作用：
>
> - `DHCP`可为计算机<mark>自动配置网络参数</mark>，包括：
>   - IP地址
>   - 子网掩码
>   - 默认网关
>   - DNS服务器

#### 2. `DHCP`基本工作过程

![](https://clb.pages.dev/img/pics/image-20231203212822735.png)

#### 3. `DHCP`中继代理

![](https://clb.pages.dev/img/pics/image-20231203213528827.png)

### 4. `DNS`

> **域名系统**（`D`omain `N`ame `S`ystem,`DNS`）

#### 1. 域名系统的作用

![](https://clb.pages.dev/img/pics/image-20231204215706663.png)

![](https://clb.pages.dev/img/pics/image-20231204215946064.png)

#### 2. 因特网的域名结构

> 因特网采用**<mark>层次树状结构的域名结构</mark>**

##### 1. 域名规范

![](https://clb.pages.dev/img/pics/image-20231204220316573.png)

##### 2. 不同国家的域名

![](https://clb.pages.dev/img/pics/image-20231204220844413.png)

##### 3. 因特网的域名空间

![](https://clb.pages.dev/img/pics/image-20231204221139510.png)

#### 3. 域名服务器

![](https://clb.pages.dev/img/pics/image-20231204221502337.png)

#### 4. 域名解析

##### 1. 递归查询

![](https://clb.pages.dev/img/pics/image-20231204221840693.png)

##### 2. 迭代查询

![](https://clb.pages.dev/img/pics/image-20231204222346748.png)

##### 3. 高速缓存

![](https://clb.pages.dev/img/pics/image-20231204222807218.png)

![](https://clb.pages.dev/img/pics/image-20231204222817296.png)

### 5. `FTP`

> **文件传送协议**（`F`ile `T`ransfer `P`rotocol，`FTP`）

![](https://clb.pages.dev/img/pics/image-20231204223526085.png)

> **基本工作原理**

1. 主动模式

![](https://clb.pages.dev/img/pics/image-20231204224108197.png)

2. 被动模式

![](https://clb.pages.dev/img/pics/image-20231204224211222.png)

### 6. 电子邮件

#### 1. `E-mail`

![](https://clb.pages.dev/img/pics/image-20231205090041032.png)

#### 2. 电子邮件系统的组成

![](https://clb.pages.dev/img/pics/image-20231205090359331.png)

#### 3. 邮件发送和接收过程

![](https://clb.pages.dev/img/pics/image-20231205090654917.png)

#### 4. `SMTP`

> 简单邮件传送协议（Simple Mail Transfer Protocol，`SMTP`）的基本工作过程

![](https://clb.pages.dev/img/pics/image-20231205091401858.png)

#### 5. 电子邮件的信息格式

![](https://clb.pages.dev/img/pics/image-20231205091646693.png)

#### 6. `MIME`

> **多用途因特网邮件扩展** (Multipurpose Internet Mail Extensions，`MIME`)

![](https://clb.pages.dev/img/pics/image-20231205091958949.png)

> **`MIME`对邮件内容中的非ASCII字符转换成ASCII字符**

![](https://clb.pages.dev/img/pics/image-20231205092205673.png)

#### 7. 常用邮件读取协议

> **邮局协议**（Post Office Protocol，`POP`）
>
> **因特网邮件访问协议**（Internet Message Access Protocol，`IMAP`）

![](https://clb.pages.dev/img/pics/image-20231205092629754.png)

#### 8. 基于万维网的电子邮件

![](https://clb.pages.dev/img/pics/image-20231205093140031.png)

### 7. 万维网

#### 1. 概述

> - **<mark>万维网</mark>**（World Wide Web，`WWW`）<mark>并非某种特殊的计算机网络</mark>。它是一个大规模的、联机式的信息储藏所，是<mark>运行在因特网上的一个分布式应用</mark>
> - 万维网利用网页之间的<mark>超链接</mark>将不同网站的网页链接成一张逻辑上的信息网
> - 万维网是欧洲粒子物理实验室的<mark>Tim Berners-Lee</mark>最初于1989年3月提出的

#### 2. `URL`

> <mark>统一资源定位符</mark>（`U`niform `R`esource `L`ocator）

![image-20231205094301978](https://clb.pages.dev/img/pics/image-20231205094301978.png)

#### 3. 万维网文档

![](https://clb.pages.dev/img/pics/image-20231205094813054.png)

#### 4. `HTTP`

##### 1. 概述

> **<mark>超文本传输协议</mark>**`HTTP`(HyperText Transfer Protocol)
>
> HTTP定义了**浏览器（即万维网客户进程）怎样向万维网服务器请求万维网文档，以及万维网服务器怎样把万维网文档传送给浏览器**

![](https://clb.pages.dev/img/pics/image-20231205095412658.png)

##### 2. 报文格式

- <mark>请求报文格式</mark>

![](https://clb.pages.dev/img/pics/image-20231205095830137.png)

- <mark>响应报文格式</mark>

![](https://clb.pages.dev/img/pics/image-20231205100113338.png)

#### 5. `Cookie`

- 早期的万维网应用非常简单，仅仅是用户查看存放在不同服务器上的各种静态的文档。因此HTTP被设计为一种<mark>无状态</mark>的协议。这样可以简化服务器的设计
- 现在，用户可以通过万维网进行各种复杂的应用，如网上购物、电子商务等。这些应用往往需要万维网服务器能够识别用户
- Cookie提供了一种机制使得万维网服务器能够“记住”用户，而无需用户主动提供用户标识信息。也就是说，<mark>Cookie是一种对无状态的HTTP进行状态化的技术</mark>

![](https://clb.pages.dev/img/pics/image-20231205103323858.png)

#### 6. 万维网缓存与代理服务器

![](https://clb.pages.dev/img/pics/image-20231205103638305.png)

#### 7. 思维导图和相关习题

[第6章 应用层（思维导图）-1 (kdocs.cn)](https://www.kdocs.cn/view/l/cle5dxMBHZIH)

[第6章 应用层（思维导图）-2 (kdocs.cn)](https://www.kdocs.cn/view/l/cabHsokbKiNO)

[第6章 应用层 习题 (kdocs.cn)](https://www.kdocs.cn/view/l/cv9vfzDopPvi)

---

## 7.*计算机网络相关术语*

**ACK** (Acknowledgement) 确认

**ADSL** (Asymmetric Digital Subscriber Line) 非对称数字用户线

**AP** (Access Point) 接入点

**AP** (Application) 应用程序

**API** (Application Programming Interface) 应用编程接口

**APNIC** (Asia Pacific Network Information Centre) 亚太网络信息中心

**ARIN** (American Registry for Internet Numbers) 美国因特网号码注册机构

**<mark>ARP (Address Resolution Protocol) 地址解析协议</mark>**

**ARPA** (Advanced Research Projects Agency) 美国国防部远景研究规划局 (高级研究计划署) 

**ARQ** (Automatic Repeat-request) 自动重传请求

**AS** (autonomous system) 自制系统

<mark>**BGP** (Border Gateway Protocol ) 边界网关协议</mark>

**BOOTP** (Bootstrap Protocol) 引导程序协议

**BSA** (Basic Service Area) 基本服务区

**BT** (Bit Torrent) 一种P2P程序

**CA** (Certificate Authority) 认证中心

**CA** (Collision Avoidance) 碰撞避免

**CATV** ( Community Antenna Television) 有线电视

<mark>**CDM** (Code Division Multiplexing) 码分复用</mark>

<mark>**CDMA** (Code Division Multiple Access) 码分多址</mark>

**CGI**  (Common Gateway Interface) 通用网关接口

<mark>**CIDR** (Classless Inter-Domain Routing) 无分类域间路由选择</mark>

<mark>**CRC** (Cyclic Redundancy Check) 循环冗余校验</mark>

<mark>**CSMA/CD** (Carrier Sense Multiple Access/Collision Detect) 载波监听 多址接入/碰撞检测</mark>

**CSMA/CA** (Carrier Sense Multiple Access with Collision Avoidance)  载波监听多点接入/冲突避免

**CTS** (Clear To Send) 允许发送

**DACS** (Digital Access and Cross-connect System) 数字交接系统

**<mark>DHCP (Dynamic Host Configuration Protocol) 动态主机配置协议</mark>**

**DiffServ (Differentiated Services) 区分服务**

**DLCI** (Data Link Connection Identifier) 数据链路连接标识符

**DMT** (Discrete Multi-Tone) 离散多音 (调制) 

<mark>**DNS** (Domain Name System) 域名系统</mark>

**DoS** (Denial of Service) 拒绝服务

**DS** (Distribution System) 分配系统

**DSL** (Digital Subscriber Line) 数字用户线

**DSLAM** ( DSL Access Multiplexer) 数字用户线接入复用器

**DSSS** (Direct Sequence Spread Spectrum) 直接序列扩频

**EFM** (Ethernet in the First Mile ) 第一英里的以太网

**EFPHB** (Expedited Forwarding Per-Hop Behavior) 迅速转发每跳行为

**EGP** (Exterior Gateway Protocol) 外部网关协议

**EIA** (Electronic Industries Association) 美国电子工业协会

**FCS** (Frame Check Sequence) 帧检验序列

**FDDI** (fiber-distributed data interface) 光纤分布式数据接口

<mark>**FDM** (Frequency-division multiplexing) 频分复用</mark>

**FEC** (Forwarding Equivalence Class) 转发等价类

**FFD** (Full-Function Device) 全功能设备

**FHSS** (Frequency-Hopping Spread Spectrum) 跳频扩频

**FIFO** (First In First Out) 先进先出

**FQ** (Fair Queuing) 公平排队

<mark>**FTP (File Transfer Protocol) 文件传输协议**</mark>

**GIF** (Graphics System for Mobile) 全球移动通信系统，GSM体制

**HDLC** ( High-Level Data Link Control) 高级数据链路控制

**HDSL** (High-speed DSL) 高速数字用户线

**HSSG** (High Speed Study Group) 高速研究组

**HTML** (Hyper Text Markup Language) 超文本标记语言

**<mark>HTTP (Hyper Text Transfer Protocol) 超文本传送协议</mark>**

**IAB** (Internet Architecture Board) 因特网体系结构委员

**IANA** (Internet Assigned Numbers Authority) 因特网赋号管理局

**<mark>ICMP (Internet Control Message Protocol) 网际控制报文协议</mark>**

**IEEE** (Institute of Electrical and Electronic Engineering) (美国) 电气和电子工程师学会

**IFS** (Inter Frame Space) 帧间间隔

**IGMP** (Internet Group Management Protocol) 网际组管理协议

**IGP** (Interior Gateway Protocol) 内部网关协议

**IM** (Instant Messaging) 及时传信

**<mark>IMAP ( Internet Message Access Protocol) 因特网报文存取协议</mark>**

**IntServ** (Integrated Services) 综合服务

**<mark>IP (Internet Protocol) 网际协议</mark>**

**IPCP** (IP Control Protocol) IP控制协议

**IPng** (IP Next Protocol) 下一代IP

**IPsec** (IP security) IP安全协议

**ISDN** (Internet Services Digital Network) 综合业务数字网

**ISO** (International Organization for Standardization ) 国际标准化组织

**ISOC** (Internet Society) 因特网协会

**ISP** (Internet Service Provider) 因特网服务提供者

<mark>**LAN** (Local Area Network) 局域网</mark>

**LCP** (Link Control Protocol) 链路控制协议

**LDP** (Label Distribution Protocol) 标记分配协议

**LLC**(Logical Link Control) 逻辑链路控制

**LSR**(Label Switched Router) 标记交换路由器

**MAC**(Medium Access Control) 媒体接入控制

**MACA**(Multiple Access with Collision Avoidance)具有碰撞避免的多点接入

<mark>**MAN**(Metropolitan Area Network) 城域网</mark>

**MBONE**(Multicast Backbone On the InterNet) 多播主干网

**MCU**(Multipoint Control Unit) 多点控制单元

**MD**(Message Digest) 报文摘要

**MF**(More Fragment) 还有分片

**MRU**(Maximum Receive Unit) 最大接收单元

**MSS**(Maximum Segment Size) 最长报文段

**MTU**(Maximum Transfer Unit) 最大传送单元

**NAP**(Network Access Point)　网络接入点

<mark>**NAT**(Network Address Translation) 网络地址转换</mark>

**NAV**(Network Allocation Vector) 网络分配向量

**NCP**(Network Control Protocol) 网络控制协议

**NFS**(Network File System) 网络文件系统

**NOC**(Network Operations Center) 网络运行中心

**NSAP**(Network Service Access Point) 网络层服务访问点

**NSF**(National Service Foundation) (美国)国家科学基金会

**OFDM**(Orthogonal Frequency Division Multiplexing) 正交频分复用

**OSI/RM** (Open Systems Interconnection Reference Model) 开发系统互连基本参考模型

<mark>**OSPF(Open Shortest Path First) 开放最短通路优先**</mark>

<mark>**P2P**(Peer-to-Peer) 对等方式</mark>

<mark>**PAN**(Personal Area Network) 个人区域网</mark>

**PAP**(Password Authentication Protocol) 口令鉴别协议

**PCA**(Policy Certification Authority) 政策认证中心

**PCF**(Point Coordination Function) 点协调功能

**PCM**(Pulse Code Modulation) 脉码调制

**PEM**(Privacy Enhanced Mail) 因特网的正式邮件加密标准

**PGP**(Pretty Good Privacy) 一种电子邮件的机密标准

**PHB**(Per-Hop Behavior) 每跳行为

**PIFS**(Point Coordination Function IFS) 点协调功能帧间间隔

**PK**(public key) 公钥，公开密钥

**PoP**(Point of Presence) 汇接点

<mark>**POP**(Post Office Protocol) 邮局协议</mark>

**<mark>PPP（Point-to-Point Protocol） 点对点协议</mark>**

**PPPoE**(Point-to-Point Protocol over Ethernet) 以太网上的点对点协议

**QAM**(Quadrature Amplitude Modulation) 正交幅度调制

**QoS**(Quality of Service)　服务质量

**QPSK**(Quarternary Phase Shift Keying)正交相移键控

**RARP**(Reverse Address Resolution Protocol)逆地址解析协议

**RFD**(Reduced-Function Device)精简功能设备

**RG**(Research Group)研究组

**<mark>RIP(Routing Information Protocol)路由信息协议</mark>**

**RIPE**(法文表示的European IP Network)欧洲的IP 网络

**RTP**(Real-Time Transfer Protocol)实时传送协议

**RTSP**(Real-Time Streaming Protocol)实时流式协议

<mark>**RTT**(Round-Trip Time)往返时间</mark>

**SA**(Security Association)安全关联

**SACK**(Selective ACK)选择确认

**SAP**(Service Access Point)服务访问点

**SCTP**(Stream Control Transmission Protocol)流控制传输协议

**SDH**(Synchronous Digital Hierarchy)同步数字系列

**SMI**(Structure of Management Information)管理信息结构

**<mark>SMTP(Simple Mail Transfer Protocol)简单邮件传送协议</mark>**

**SNA**(System Network Architecture)系统网络体系结构

**SNMP**(Simple Network Management Protocol)简单网络管理协议

**SOH**(Start Of Header)首部开始

**SONET**(Synchronous Optical Network)同步光纤网

**STDM**(Statistic TDM)统计时分复用

**STM**(Synchronous Transfer Module)同步传递模块

**STS**(Synchronous Transport Signal)同步传送信号

**TAG**(TAG Switching)标记交换

**TCB**(Transmission Control Block)传输控制程序块

**<mark>TCP(Transmission Control Protocol)传输控制协议</mark>**

<mark>**TDM**(Time Division Multiplexing)时分复用</mark>

**TELNET**(TELetype NETwork)电传机网络，一种因特网的应用程序

**TFTP**(Trivial File Transfer Protocol)简单文件传送协议

**TIA**(Telecommunications Industries Association)电信行业协会

**TLD**(Top Level Domain)顶级域名

**TLI**(Transport Layer Interface)运输层接口

**TLS**(Transport Layer Security)运输层安全协议

**TLV**(Type-Length-Value)类型-长度-值

**TPDU**(Transport Protocol Data Unit)运输协议数据单元

**<mark>UDP(User Datagram Protocol)用户数据报协议</mark>**

<mark>**URL**(Uniform Resource Locator)统一资源定位符</mark>

**UTP**(Unshield Twisted Pair)无屏蔽双绞线

**UWB**(Ultra-Wide Band)超宽带

**VC**(Virtual Circuit)虚电路

**VDSL**(Very high speed DSL)甚高数字用户线

<mark>**VLAN**(Virtual LAN)虚拟局域网</mark>

<mark>**VPN**(Virtual Private Network) 虚拟专用网</mark>

<mark>**WAN**(Wide Area Network) 广域网</mark>

**WDM**(Wavelength Division Multiplexing) 波分复用

**WG**(Working Group)　工作组

**Ｗi-Fi**(Wireless-Fidelity) 无线保真度（无限局域网的同义词）

**WLAN**(Wireless Local Area Network) 无线局域网

**WMAN**(Wireless Metrpolitan Area Network) 无线个城域网

**WPAN**(wireless Personal Area Network) 无线个人区域网

**WSN**(Wireless Sensor Network)　无线传感器网络

<mark>**WWW**(World Wide Web) 万维网</mark>
