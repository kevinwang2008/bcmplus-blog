---
title: "韧性是Capability还是Capacity？看看AI大模型怎么说"
date: 2025-09-30
original_url: https://mp.weixin.qq.com/s/4f0GeCkjwqoEpzwpv-6pgg
source: "公众号：业务连续性+"
author: "王曙"
---

9月份比较忙，原计划开发完成的勒索软件应对危机演练还留下一个不小的尾巴，只能争取尽快在下个月进入测试阶段。前几天曾和AI大模型聊了聊韧性（resilience）究竟是capability还是capacity？就以此发一篇小文吧。
和AI大模型聊BCM问题，已成为我的日常工作方式了，曾经陆续发过以下文章，汇总一下供大家参考：1．AI赋能，业务连续性管理（BCM）的重载与重生2．和ChatGPT聊业务连续性和韧性（译文）3．与ChatGPT再聊业务连续性管理（一）4．与ChatGPT再聊业务连续性管理（二）
******* 正文开始*******
由于capability和capacity都可以译为中文“能力”，为避免混淆，就用英文向AI大模型提问了。
先把这个问题抛给DS，看看它的回复。

我来简单翻译一下这个回复，DS说：
这是一个很好的问题。这个区别很微妙，在日常语言中，这两个术语经常被互换使用。然而，在学术和专业领域（如心理学、组织行为学和风险管理），两者存在有意义的、（尽管有些）微妙的区别。
最准确的答案是：韧性是一种通过容量（capacity）建设得到发展和增强的能力（capability）。
让我们来分析一下原因。
Capacity（容量）和Capability（能力）之间的区别
要理解这一点，我们首先需要定义这两个术语：
Capacity指的是潜力（potential）或可用的资源。它指“你拥有什么”，通常是静态的，可以量化。例子：一个油箱的容量（capacity）是50升。一个图书馆有容纳10000本书的容量（capacity）。对韧性而言：这是你的心理、社会和身体资源的储备（例如，支持性网络、应对技巧、财务储蓄、身体健康）。Capability是指利用那些资源达成特定结果的能力。它指“你能用你拥的做什么”。它是动态的，涉及行动。例子：一名工程师有能力（capability）设计一座桥梁。一名厨师有能力（capability）从食材中制作一餐。对韧性而言：这是你主动运用你的应对技巧、依靠你的社会网络、调整你的思维方式，并坚持克服逆境的能力。
将这一区别应用于对韧性的理解
将建设韧性想象成锻炼肌肉。
你的Capacity（容量）是肌肉本身的大小和力量。这是通过持续训练（你建立起的“资源”）来构建的。你的Capability（能力）是在比赛中用那块肌肉举起重物的能力。这是你已发展出的力量的应用。
实际应用后对韧性的理解：
相互依存关系
没有前者（capacity）就无从谈论后者（capability）。
1.Capacity（容量）使能力（Capability）得以实现。如果没有基础资源（capacity），你就无法有效运用技能（capability）。如果没有社交网络，你就无法向朋友求救。如果没有应对策略的知识，你就无法在危机中使用它们。2．Capability（能力）构建Capacity（容量）。每当你通过运用自身能力成功应对挑战时，你向自己证明了自己能够应对。这种成功会增强你的自信心，丰富你的应对策略，强化你的心理资源，从而提升你未来应对挑战的整体能力（capacity）。
结论
所以，韧性（resilience）是能力（capability）还是容量（capacity）呢?
最好将其理解为一种依赖于潜在容量（capacities）的动态能力（capabilities）。
你通过学习、人际关系和自我关照来建立你的容量（capacity，即你的资源）。你通过在面临逆境时主动且适应性地运用那些资源来展示你的能力（capability，即你的技能）。
因此，当我们说我们“建立韧性”（building resilience）时，我们实际上是在同时进行两个过程：一是增强我们的容量/产能（increasing our capacity，储备资源），二是提升我们的技能（enhancing our capability，通过实践和磨练来熟练运用这些资源）。
接下来，我们再把这个问题抛给GPT，看看它的回答。

我简单翻译一下这个回答，GPT说：
好问题。这是一个经常被随意使用而没有严格定义的术语，不同领域对其理解也不同。让我们直截了当地说：
韧性最好被理解为一种能力（capability）——而不仅仅是容量（capacity）。
原因如下：容量（capacity）是指你能容纳、存储或吸收多少。它一般是可以计量，例如：数据中心能处理10,000个并发用户，或者医院有500张病床。能力（capability）是指你能做什么以及如何适应。它通常是定性的，例如：医院在疫情期间快速切换到应急方案、重新规划空简、迅速调配人员的能力。
当人们谈论韧性（resilience）——无论是个人、组织还是系统——他们几乎总是指在压力或扰断下适应、恢复和继续运营的能力。这不仅仅是拥有多少备用缓冲或冗余（capacity）。关键在于系统是否能够灵活调整、重组并恢复（capability）。（王曙注：即你的灾备系统也好，汽车备胎也好，本质这些capacity是构成resiliencecapability的基础，但它们本身并不是resiliencecapability）
也就是说，能力（capability）源于容量（capacity）：拥有额外的容量（capacity,如冗余系统、闲置资源、缓冲库存等）会增强韧性，但如只用这些并不构成韧性。真正的韧性体现在意外发生时，你能够展现出诸如即兴应变、协调配合、升级处理或重新配置等能力（capability）。
所以，准确地说：韧性是一种能力（capability），其形成在一定程度上依赖于可用的容量（capacity）。
好的，以上就是AI大模型对这个问题的理解，你的理解呢？后面我会在文章留言区给出我对以上两个答案的观点。
***** ***** ***** *****
本公众号“业务连续性+”（ID: bcmplus）专注于业务连续性和韧性知识的传播和推广，关注业务连续性、应急和危机管理的朋友可关注本公众号。
随着腾讯重新开启留言功能，公众号已获得留言资格，欢迎对文章内容感兴趣的朋友踊跃留言，也让更多的朋友了解到你的意见和想法。
此外，需要获取更多相关资料的朋友，可长按以下二维码加入知识星球：“业务连续性实践社群”进行更多讨论。请注意，原免费知识星球：“业务连续性管理问与答”已满1000名成员，成员政策按计划调整为：退出1人进入1人，希望加入知识星球者可选择在原免费星球排队等待，或者加入新知识星球“业务连续性实践社群”（目前年费为79元，后续可能会涨价），两个星球所发布和共享的内容会尽可能保持同步。

**附件：原文图片**

![](images/4f0GeCkjwqoEpzwpv-6pgg_01.jpg)
![](images/4f0GeCkjwqoEpzwpv-6pgg_02.jpg)
![](images/4f0GeCkjwqoEpzwpv-6pgg_03.jpg)
![](images/4f0GeCkjwqoEpzwpv-6pgg_04.jpg)
![](images/4f0GeCkjwqoEpzwpv-6pgg_05.jpg)
![](images/4f0GeCkjwqoEpzwpv-6pgg_06.jpg)

**附件：原文图片**

![](images/4f0GeCkjwqoEpzwpv-6pgg_01.jpg)
![](images/4f0GeCkjwqoEpzwpv-6pgg_02.jpg)
![](images/4f0GeCkjwqoEpzwpv-6pgg_03.jpg)
![](images/4f0GeCkjwqoEpzwpv-6pgg_04.jpg)
![](images/4f0GeCkjwqoEpzwpv-6pgg_05.jpg)
![](images/4f0GeCkjwqoEpzwpv-6pgg_06.jpg)

---
*原文发表于公众号"业务连续性+" | [原文链接](https://mp.weixin.qq.com/s/4f0GeCkjwqoEpzwpv-6pgg)*
