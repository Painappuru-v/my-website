import './DIY.css'
import React from 'react'
import { Anchor, Divider  } from 'antd';
import { createFromIconfontCN} from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3248103_ss26rtu2kg7.js',
});
const { Link } = Anchor;

export default function DIY() {
    return (
        <div className='diy'>
            {/* 侧边导航 */}
            <div className='aside'>
                <Anchor affix={false} offsetTop={66}>
                    <Link href="#Tips" title='Tips'/>
                    <Link href="#screen" title='显示器'/>
                    <Link href="#CPU" title='CPU'/>
                    <Link href="#motherboard" title='主板'/>
                    <Link href="#radiator" title='散热器'/>
                    <Link href="#GPU" title='显卡'/>
                    <Link href="#memory" title='内存条'/>
                    <Link href="#SSD" title='固态硬盘'/>
                    <Link href="#HDD" title='机械硬盘'/>
                    <Link href="#power" title='电源'/>
                    <Link href="#case" title='机箱'/>
                </Anchor>
            </div>

            <div className='container'>
                {/* id仅用于锚点定位 */}
                <div id='Tips' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#Tips" title='Tips'/>
                    </Anchor>
                    <div className='content-box'>
                        <div className='tip'>
                            <div>🍍</div>
                            <p>所有数据收集于2022年3月25日，所有推荐均来自个人经验与产品口碑，不含任何恰饭成分。</p>
                        </div>
                        <div className='tip'>
                            <div>🍍</div>
                            <p>不要买技嘉，不要买技嘉，不要买技嘉！原因其一为技嘉的辱华事件，不了解自行百度。其二为它的产品对不起它的价格，以显卡为例，从20系显卡开始，它的产品质量已经远远比不上华硕与微星了，直接被踢出一线御三家，各种测评中它的产品用料都是最吝啬、测试倒数第一的，二线的产品质量卖一线的价格，新的N卡御三家为华硕、微星、七彩虹。</p>
                        </div>
                        <div className='tip'>
                            <div>🍍</div>
                            <p>作为消费者，不要忠于任何一个厂商，一家独大最终受害的还是消费者。以CPU为例，在AMD的zen架构推出前的灰暗十年中，intel整整七代酷睿CPU的性能提升仅有35%，平均每代提升只有5%（知道为什么intel被称为牙膏厂了吗），相比于现在每一代随随便便10%、甚至25%以上的提升来说这是非常离谱的。</p>
                        </div>
                        <div className='tip'>
                            <div>🍍</div>
                            <p>强烈不推荐在2022年前三季度购买显卡，现在的显卡市场十分混乱。从2022年2月开始，显卡价格开始下跌，但是别忘了30系显卡可是两年前的产品，按照正常的市场情况，30系与6000系的价格要是原价的6、7成才有购买的价值，更何况30系和6000系的首发原价就包含了大量溢价。显卡价格每天都在跌，但是大多数依旧高于原价，只有3080这个级别的显卡破发，但依旧是处于溢价的状态。而且大部分消费者对显卡的需求并不高，主要是3060这个级别的甜品卡，你看steam玩家显卡榜第一的依旧是GTX 1060，其次是1050、1050ti，可惜这个级别的甜品卡恰巧就是现在溢价最严重的。还有一件事，显卡一点也不缺货，产能管够，各大厂商和代理商仓库了可是堆满了显卡在炒价格，可惜现在没有矿老板兜底了，蚌埠住了。现在全网算力稳定在950TH/s左右，随着以太坊（ETH）的币价小幅度波动，全网算力接近饱和，每算力收益仅有0.25元左右，这个收益意味着3080要不停挖三年才能回本，在这种情况下矿老板不会再加卡了。<a href="https://space.bilibili.com/404415409?spm_id_from=333.788.b_765f7570696e666f.1" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  关注显卡价格。</a></p>
                        </div>
                        <div className='tip'>
                            <div>🍍</div>
                            <p>矿难并没有到来，现在显卡降价主要是有三大原因。一是厂商和代理商屯了大量现货炒价格，结果现在矿老板不接盘了。其二是2022年Q4将发售40系和7000系新显卡，40系显卡在2021年已经生产完毕，测试周期为1年，预计最早2022年9月发售，老黄与苏妈已经在催非公厂商清库存了。其三是ETH2.0开始测试，待ETH2.0正式发布后，将不再支持显卡挖矿，只有专业矿机能挖，那时候才是真正的矿难。虽然显卡整体价格在下降，但不得不说国内厂商和代理奸商是真的团结，把价格控的的很稳，一点一点的降，甜品级显卡稳住不降，和外国3080一夜暴降35%比起来真的是稳。前面也说了，全网算力保持稳定，矿老板也没有大量抛卡，矿老板早就赚麻了，只要有综合起来还能有收益，矿老板就不会抛卡，现在市场上的少量矿卡都是挖矿散户抛出的，什么时候显卡价格一夜砍半了就是矿老板抛卡了。千万别看了一些分辨矿卡的视频就自以为可以分辨矿卡，上一次的矿难之后矿老板们早就吸取了教训，现在矿场都讲究防尘，所有卡的包装盒、防静电袋、标签可是都保存的好好的，拔插显卡的时候都小心翼翼不给金手指留下划痕，到时候翻新只要把显存流的油用洗板水洗掉，再把导热贴、硅脂之类的一换，和新卡一模一样，美滋滋让小白接盘。</p>
                        </div>
                        <div className='tip'>
                            <div>🍍</div>
                            <p>2022年3月14日，讯景被海关查获5840张贴标显卡（就是高级显卡贴低级显卡的标，逃关税），再结合外国显卡暴跌，很难不让人联想到这可能是洋垃圾矿渣翻新。只能说慎买。</p>
                        </div>
                        <div className='tip'>
                            <div>🍍</div>
                            <p>2022年Q4可是相当热闹。先说CPU，intel十三代酷睿与AMD zen4架构锐龙7000（6000系和4000系一样，为移动端独有）CPU将一同发售。intel迫于AMD的压力在十二代酷睿终于发力，终于打败了两年多前的的AMD锐龙5000系CPU，打了三代酷睿的zen3锐龙5000也是功成身退，不知道十三代酷睿与zen4锐龙谁能更胜一筹。此外提一嘴AMD将在2022年Q2季度发布zen3+架构的R7 5800X3D，简单来说就是三级缓存超级加倍的5800X，从AMD的测试来看，这玩意的游戏性能比i9 12900k还强，这可太有意思了。然后是显卡，第四季度NVIDIA与AMD将同时发售新显卡，分别是Ada Lovelace架构的RTX 40系与RDNA3架构的RX 7000系，从规格参数上来看，70以上级别的显卡其性能可能会得到翻倍的提升，可能会达到4070&gt;3090，现在买显卡那可是纯纯的给奸商接盘的大冤种，现在买显卡请做好明天降200、一个月后降1000、几个月砍半的心理准备。说到显卡，intel也要进入独立显卡市场了，据爆料其第一代独立显卡价格和性能会相当不错，这波啊不知道该说啥，感兴趣可以去了解一下，快进到老黄搞CPU。</p>
                        </div>
                        <div className='tip'>
                            <div>🍍</div>
                            <p>
                                担心买了硬件不会组装？看这：<a href="https://www.bilibili.com/video/BV1jE411e7hw?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  装机教程。</a>
                                装了电脑不会装系统？看这：<a href="https://www.bilibili.com/video/av77344372" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  WIN10系统安装。</a>
                                装了系统不会装硬件驱动？看这：<a href="https://www.bilibili.com/video/av84597019?spm_id_from=333.788.b_636f6d6d656e74.8" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  驱动安装。</a>
                                买了硬件不知道用什么软件测试，百度下载软件被捆绑P2P下崽器？看这：<a href="https://www.bilibili.com/video/BV1ES4y1579M?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  老弟一号的工具站。</a>
                                还有，千万别碰某宝、某东、拼夕夕的整机，越是电脑小白越不能碰，专门坑小白。整机一般不说硬件的具体型号，含糊的说个几核、高性能、电竞、畅玩吃鸡，买回来发现好家伙上古时代的E3神教、DDR3“高性能”内存条之类的，直接喜提一套洋垃圾，然而你花3000买的洋垃圾，垃圾佬只需要500就能组装出来。线下电脑城、找所谓的熟人亲戚装机那就更不可行了，俗话说得好，生人坑一半，熟人大满贯。
                                来看看两个大满贯的故事，<a href="https://www.bilibili.com/video/BV1Di4y1Z77S?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  大满贯的故事（上），</a><a href="https://www.bilibili.com/video/BV14P4y1w7zi?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  大满贯的故事（下）。</a>
                                也不要轻信B站的某些UP，这些人就是电脑城奸商，出点狗屁不通的科普然后开始卖电脑。
                                实在不想折腾台式机DIY的，建议直接买笔记本，挑选方法都是一样的，只不过是各种硬件都变成了移动端的特殊阉割型号。
                            </p>
                        </div>
                        <div className='tip'>
                            <div>🍍</div>
                            <p>以下的硬件内容不会把全部参数都讲完，只说一些玩家购买时需要注意的，有选择空间的参数。比如显卡架构、CPU架构这种说了也没得选，一代产品就一个架构。再比如显卡的打造核心、SM单元、CUDA核心数量，这些参数都已经按型号给你划分的明明白白，没得选。</p>
                        </div>
                        
                    </div>
                </div>

                <div id='screen' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#screen" title='显示器'/>
                    </Anchor>
                    <p className='desc'>
                    DIY一台主机从显示器开始，所有硬件的级别都按照你显示器的水平来选，不想看文字可以看视频：<a href="https://www.bilibili.com/video/BV1Hv411N7Va?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  显示器选购万能攻略。</a>
                    购买前最好看看测评：<a href="https://space.bilibili.com/51365206?spm_id_from=333.788.b_765f7570696e666f.1" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  显示器测评。</a>
                    </p>
                    <div className='content-box'>
                        <Divider orientation="left">显示器分类</Divider>
                            <p>显示器主要分为三大类，LCD、OLED、micro LED。其中micro LED未量产，它集合了LCD与OLED的优点，可以说是未来最佳选择，但现在没得买。现在主流的是LCD，也是分类最多的。</p>
                            <p>LCD主要由玻璃液晶面板、背光板、透光薄膜组成，背光板是一整块点亮的，显示黑色时其实背光板也是点亮的，这就导致它不能显示真正的黑色，显示黑色时会有漏光现象。主要分为IPS、VA、TN、mini-LED四种，mini-LED其实是IPS的分区背光版本，就是将一整块背光板分为多块小的LED背光板，实现分区点亮背光，但是还是没办法达到像素级分区，依旧不能显示真正的黑色，有光晕现象。</p>
                            <p>OLED是子像素有机材料自发光，没有背光板和液晶层，所以很薄。每个像素下的RGB三个子像素都可以自发光与熄灭，可以显示真正的黑色。</p>
                            <p>当然上面讲的很简单，如果你想更加详细的了解LCD与OLED，看这：<a href="https://www.bilibili.com/video/BV1Wz411B7Tf/?spm_id_from=333.788.recommend_more_video.2" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  LCD与OLED科普。</a></p>
                            <Divider orientation="left">面板厂商</Divider>
                            <p>像华硕、飞利浦、AOC这样的显示器厂商是不生产面板的，面板主要来自群创、友达、LG等面板厂商，面板厂商直接卖包含背光板、液晶层、透光薄膜的的成品面板，显示器厂商在面板的基础上自行调教产出成品，上限取决于面板，下限取决于显示器厂商。不过也有一些不含背光板的OEM版的面板，背光给显示器厂商自己加，这个质量比起原厂背光可就差远了。</p>
                            <Divider orientation="left">面板类型与特点</Divider>
                            <p>IPS属于中规中矩，各方面数据都不错的面板。VA响应速度极慢，但很容易做成曲屏。TN响应速度极快，但色彩差，一般只有FPS职业选手才会选择。mini-LED就是分区背光版的IPS。OLED主要是能显示真正的黑色，色彩也很不错，响应速度可以非常快，也能非常慢，取决于厂商调教，OLED得加钱。而且OLED的有机发光材料衰减的特别快，一两年就会出现个别子像素点亮度激发不足的情况，尤其是蓝色子像素点。OLED的一大缺点就是容易烧屏，寿命短。</p>
                            <p>主要说说IPS，简单来说IPS又可以分为三类：NanoIPS、FastIPS、一般IPS。NanoIPS、FastIPS的特点就是快，响应速度快，但是得加钱，预算够推荐买。</p>
                        <Divider orientation="left">分辨率</Divider>
                            <p>1080P，2k，4k没啥好说的。越高分辨率对显卡要求越高。</p>
                            <Divider orientation="left">像素密度（PPI）</Divider>
                            <p>每英寸所拥有的像素数。受到分辨率、尺寸影响，简单来说就是细腻度，PPI越高显示内容越细腻。尺寸越小、分辨率越高数值越大。其实最终细腻度观感还与子像素排列方式有关。</p>
                        <Divider orientation="left">尺寸</Divider>
                            <p>16:9的正常屏幕主流的是21寸、24寸、27寸、32（31.5）寸，其他奇怪的尺寸基本都是带鱼屏。尺寸要与分辨率相结合，以保证合适的细腻度。1080P最大24寸，再大PPI就比较低，能看到像素点，觉得屏幕不清晰。2k最大27寸，4k最大32寸。最适合打游戏的尺寸为27寸。</p>
                        <Divider orientation="left">带鱼屏</Divider>
                            <p>带鱼屏就是拉长的屏幕，有直屏有曲屏。买带鱼屏就是想体验超大视野，但是这得对应的软件、视频、游戏能够适配长尺寸，网络电视剧电影都是按照16:9来剪的，用它看剧大部分时间都会顶着大黑边，支持广视野的游戏也是少数。总体来说不推荐买带鱼屏，一半的时间都会顶着黑边。<span className='red'>而且厂家最喜欢在这玩文字游戏了，把拉长的2k叫准4k，2k就是2k，别扯什么准4k。</span></p>
                            <Divider orientation="left">直屏曲屏</Divider>
                            <p>大部分曲屏都是VA面板，只要你玩FPS游戏、有专业绘图需求，那就不推荐购买。也有其他面板的曲屏，但是得加钱。</p>
                            <Divider orientation="left">刷新率</Divider>
                            <p>刷新率最高拉到144HZ即可，不要纠结170还是144，说实话没区别，再高大部分人根本看不出区别。如果不打游戏直接60HZ，把刷新率这笔钱省下。</p>
                        <Divider orientation="left">灰阶响应时间</Divider>
                            <p>灰阶响应时间（GTG），可以看到一堆IPS面板的显示器都标自己1msGTG，这就是文字的魅力了，厂商宣传的1ms为某种模式下极限测试达到的，往往只能保持一瞬间或者有极大的副作用，比如非常离谱的鬼影。IPS一般的GTG一般在7ms为正常能用，5ms内算优秀，3ms极限基本只有NanoIPS、FastIPS能达到，但是这个极限往往会伴随大量鬼影。再低IPS一般就没有办法达到了，TN面板最多其实也就是这个水平，总的来说就是LCD显示器不能达到1msGTG。OLED比较极端，面板特别优秀调教的好真的能达到1ms内，调教的差能达到10ms，非常离谱。预算低就没必要考虑GTG，可以舍弃。</p>
                            <p>很多显示器标注的不是GTG而是MPRT，看起来很唬人，实际上不具备任何参考价值。更多响应时间的科普内容看这：<a href="https://www.bilibili.com/video/BV1xU4y1p7xq/?spm_id_from=333.788.recommend_more_video.1" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  显示器响应时间科普。</a></p>
                        <Divider orientation="left">峰值亮度</Divider>
                            <p>一般来说，标准亮度为350nit。为什么是峰值亮度呢，这又是文字的魅力了，大多数显示器都没有办法长时间保持在峰值亮度工作，厂商标的亮度就是峰值亮度。原则上峰值亮度低于300nit的显示器不推荐购买，如果是在光线较差的环境使用可以买。预算不足可以砍这一项，但是低于250nit真的就别买了。</p>
                        <Divider orientation="left">静态对比度</Divider>
                            <p>IPS面板的静态对比度标准为1000:1，mini-LED可以达到3000:1，OLED由于可以显示真正的黑色，静态对比度理论上是无限大。</p>
                            <p><span className='red'>当你发现某款IPS显示器其对比度高达100000000:1的时候，请注意这是动态对比度，动态对比度不具备任何参考价值！纯属是厂商玩文字游戏。</span></p>
                        <Divider orientation="left">调光方式</Divider>
                            <p>主要的调光方式有两种，DC与PWM。IPS面板的SDR模式下绝大多数都是DC调光，开启HDR后部分会变成PWM调光。<span className='red'>OLED面板99%都是PWM调光，用OLED打游戏眼睛疲惫感直接拉满，这是OLED的致命缺点！</span>当然如果PWM调光频率能够达到1200HZ以上是相对安全的，IEEE组织对最无害的闪烁频率定义为3000HZ以上，但是有几个OLED显示器能达到呢···iPhone13的PWM调光频率为690HZ···小雪人评测的QD-OLED外星人AW3423DW的PWM调光频率居然和屏幕刷新率保持一致，最高仅为175HZ···不知道该怎么评价，反正我个人极不推荐购买OLED显示器···</p>
                        <Divider orientation="left">色域</Divider>
                            <p><span className='red'>注意，色域是厂商最喜欢玩文字游戏的参数！</span>目前的色域标准有四种，NTSC、sRGB、DCI-P3、Adobe RGB。NTSC现在已经没有存在的意义了，最多也就是衬托其他标准，依我看只要不是显示器太垃圾都不会以NTSC作为卖点。sRGB是现在的互联网标准，所有在互联网上的内容都是基于sRGB的。DCI-P3是为数字电影准备的，但是只有少数电影使用了该标准，换句话说就是现在没啥意义。Adobe RGB主要是印刷用的，你在电脑上的作品如果需要印刷，那最好使用Adobe RGB。</p>
                            <p>普通用户盯着100%(99%)sRGB买就对了，预算够再考虑DCI-P3、Adobe RGB。</p>
                            <p>重点来了，上面说的100%sRGB指的是<span className='red'>色域覆盖率</span>，当你在产品页看到130%sRGB的时候，他这个参数指的一般是<span className='red'>色域容积率</span>，色域覆盖率最大值为100%，色域容积率要多大有多大。色域覆盖率与色域容积率完全不是一回事，无图说不明白，建议看视频：<a href="https://www.bilibili.com/video/BV1Hv411N7Va?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  显示器选购万能攻略。</a></p>
                        <Divider orientation="left">色准</Divider>
                            <p>色准就是想要显示的颜色与实际显示的颜色之间的偏差。△&lt;3为能用，△&lt;2为优秀，△&lt;1为专业级。大于3的显示器一般不会标出该参数，标出来就成缺点了。当然该标准是比较严格的，国际标准可宽松多了。预算不足可以砍这项。</p>
                        <Divider orientation="left">色深</Divider>
                            <p>色深就是显示器能显示多少种颜色。常见的为6bit、6抖8、8bit、8抖10、10bit等，最低最低也要买6抖8。</p>
                        <Divider orientation="left">DisplyHDR</Divider>
                            <p>显示器的DisplyHDR和HDR10之类的HDR可不是一个东西，详见：<a href="https://www.bilibili.com/video/BV1Fq4y1S7vR?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  显示器HDR。</a>DisplyHDR600以上才会有较好的HDR体验，预算不足可以砍。</p>
                        <Divider orientation="left">G-sync & FreeSync</Divider>
                            <p>它们是什么详见视频：<a href="https://www.bilibili.com/video/BV1FK4y1x7bk/?spm_id_from=333.788.recommend_more_video.4" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  G-sync与Freesync科普。</a>总结就是G-sync要加钱。</p>
                        <Divider orientation="left">防蓝光</Divider>
                            <p>不止显示器，所有防蓝光产品都是智商税。只要你的显示器是正规产商生产的合格产品，完全没有必要担心有害蓝光的问题。更何况大部分防蓝光模式仅仅是减少蓝色？？这是把消费者当傻子是吗，先不说是不是减少了有害蓝光，减少蓝色的输出，屏幕就会发黄，一个显示器连正常颜色都无法显示它还是显示器吗。莱茵防蓝光认证，贴了这个标就得加钱。</p>
                        <Divider orientation="left">接口规格与线材</Divider>
                            <p><a href="https://www.bilibili.com/video/BV1rJ411z7Z6?spm_id_from=333.337.search-card.all.click" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  HDMI、DP科普。</a>电脑优先接DP，注意有独立显卡别插到主板的DP接口去了，要插显卡的DP接口上。顺便说说某些厂商，比如4k144的显示器，要DP1.4和HDMI2.1才能发挥全部性能，但是某些厂商配备的HDMI线材是2.0的，这就很坑了啊。</p>
                        <Divider orientation="left">总结</Divider>
                            <p>显示器是参数虚标和玩文字游戏的重灾区，千万不要看参数漂亮就买了，买之前一定一定要找该型号的测评。</p>
                    </div>
                </div>

                <div id='CPU' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#CPU" title='CPU'/>
                    </Anchor>
                    <p className='desc'>
                    intel以十二代酷睿为例，赛扬、奔腾这种电子垃圾和垃圾佬的最爱的志强都不在讨论范围内。AMD也一样，以5000系锐龙为例。
                    </p>
                    <div className='content-box'>
                        <Divider orientation="left">命名规则</Divider>
                        <p>Intel core i5 12400F，core为产品系列名，即酷睿；i5为系列等级，酷睿分为i3、i5、i7、i9；12为第几代CPU；400为SKU，相同代数下越大性能越强；F为后缀，下面讲。</p>
                        <p>AMD RYZEN R5 5600X，RYZEN为产品系列名，即锐龙；R5为系列等级，锐龙分为R3、R5、R7、R9；5为第几代CPU；600为SKU，相同代数下越大性能越强；X为后缀，下面讲。</p>
                        <Divider orientation="left">后缀</Divider>
                        <p>只讲常见的桌面端CPU后缀，更多的后缀和移动端后缀自行前往官网查看。</p>
                        <p>intel方面。不带后缀的为标准版本，带核显的。K为可以超频。F为无核显。KF为可超频无核显。</p>
                        <p>AMD方面。默认无核显，全系列可超频。X为支持XFR技术，散热器越强就能超的越高；G为有vega核显。注意这个后缀的区别有时候不仅仅在后缀，比如5600X和5600G，5600G是在5600X的基础上阉割了三级缓存的。</p>
                        <Divider orientation="left">基础频率（主频）</Divider>
                        <p>即CPU在无压力的时候全核心都能达到的工作频率。</p>
                        <Divider orientation="left">睿频（加速频率）</Divider>
                        <p>一种官方的自动超频技术，在你不需要CPU性能的时候它会在基础频率工作以降低功耗，在需要的时候会自动提高频率与功耗来释放性能。现在的睿频技术已经比较成熟，出厂设置的比较激进，即出厂灰烬状态。</p>
                        <Divider orientation="left">体质</Divider>
                        <p>没错，CPU也分三六九等高矮胖瘦，体质越好越能超频，在相同的电压下能超到更高的频率，华硕主板在BIOS中会给CPU体质打分。</p>
                        <Divider orientation="left">超频</Divider>
                        <p>手动调节CPU电压和频率的操作。一般为调低电压，拉高全核频率以提高性能。现在超频收益越来越小了，出厂频率就很高，留给超频的余地不大，超冒烟也才提升10%，可以不考虑超频。</p>
                        <Divider orientation="left">核心 & 线程</Divider>
                        <p>一般一个核心对应两个线程，核心也不是越多越好，看你用不用的上。注意intel十二代酷睿为大小核架构，12600k为10核16线程，其中只有6个大核，其余4个为小核。AMD全是大核。</p>
                        <Divider orientation="left">功耗（TDP）</Divider>
                        <p>CPU的功耗，主要影响散热器的选择。intel从十二代开始放弃标注TDP，改用真实功耗标注。主要还是TDP太不准了，你看i9 11900k白纸黑字TDP125W，结果最高能冲到290W-300W，国家电网战略合作伙伴了属于是，要想实现标注的TDP125W那只能换成5800X并开启PBO了🤣。</p>
                        <Divider orientation="left">散片</Divider>
                        <p>散片并不是什么假CPU，而是从OEM厂商流出的没有包装盒的散装CPU，与盒装CPU都是一条流水线上出来的。主要区别有两点，一是盒装有原装散热器，散片没有，虽然这个原装散热器非常垃圾。二是散片的售后相当于没有。不过也不必担心，CPU可是整台电脑最耐用的硬件，其他硬件全送走了CPU还在，用坏的概率极小，不然垃圾佬的上古E3哪来的。更详细的散片与两家售后信息看这：<a href="https://www.bilibili.com/video/BV1MS4y1V7Gd?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  散片与售后。</a></p>
                        <Divider orientation="left">iU与AU的区别</Divider>
                        <p>它们的区别就是没有区别，对，就是没区别，正常使用起来是一样的。硬要说区别那就是iU的针脚在主板上，AU的针脚在CPU上，不过下一代也要到主板上去了。还有AMD的U全部都能超频。</p>
                        <Divider orientation="left">小白误区</Divider>
                        <p>最严重的小白误区：i3很弱，i3太垃圾了。都2022年了，现在还有人对你说这话建议叫他滚蛋。</p>
                        <p>保守点说，从十代酷睿开始，i3一点也不弱，更何况现在都十二代了。i3弱那是比起同一代的更高级CPU来说的，四核的i3 12100F轻松打赢六核的i5 10400F，为什么和十代比，因为十一代酷睿真的是电子垃圾，如果有人给你的配置单用十一代酷睿，找谁买都别找他买。</p>
                        <Divider orientation="left">购买建议</Divider>
                        <p>现在CPU性能过剩，压力基本在显卡那边，CPU这边差不多就好，想要更好的画面给显卡加钱。</p>
                        <p>整机2000左右的预算，办公用，偶尔玩玩4399，打打LOL，i3 10105足够用了，我觉得10105都有点过剩了。</p>
                        <p>整机3000左右的预算，想要CPU性能强劲，高帧数畅玩CSGO之类，偶尔能摸到3A大作，还不想要独立显卡，那么5600G将是不二选择，这颗核显的水平相当于GTX 750ti，不知道什么概念自己找显卡天梯图，性能强于GTX 1030，是12400的核显性能的两倍多。反正不要独显买5600G就对了，地表最强核显。</p>
                        <p>下面都是要独显的U，1080P玩3A大作，i3 12100F足以。2k4k玩3A，i5 12400F和5600X二选一，CPU差不多得了，给显卡加钱。再往上，12600K和5800X，我最高推荐到这，说实话再高普通用户根本用不着，12700k、12900k、5900X、5950X没必要。CPU选的越贵，那主板也要跟着加钱，买带K的总要小超一下吧，那就得上Z690的板子，加钱。有散片优先买散片。</p>
                    </div>
                </div>

                <div id='motherboard' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#motherboard" title='主板'/>
                    </Anchor>
                    <p className='desc'>
                    主板这块强烈建议看视频：<a href="https://www.bilibili.com/video/BV1jR4y1c71a?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  主板选购万能攻略。</a>
                    内容太多篇幅太大，文字很难讲明白，下面简单讲一下品牌。
                    </p>
                    <div className='content-box'>
                        <Divider orientation="left">品牌与产品等级划分</Divider>
                        <p>主板只推荐两个厂商，华硕和微星二选一，主要是它们的BIOS是设计的最好的，其次其他二三线品牌的丐板也不见得能便宜100块钱，BIOS还一塌糊涂。</p>
                        <p>华硕产品等级划分，由高到低分别为：ROG、ROG Strix、TUF、Prime。</p>
                        <p>微星产品等级划分，由高到低分别为：MEG、MPG、MAG、PRO。</p>
                        <p>这两产品定位一一对应，不仅主板，其他产品也是这样划分的。</p>
                        <p>买主板优先无脑TUF重炮手和MAG迫击炮，二选一。预算更低的话那Prime和PRO系列也不是不能用。</p>
                        <Divider orientation="left">其他扩展</Divider>
                        <p>优先买WiFi版，WiFi版集成了WiFi无线模块和蓝牙，WiFi可能用不着，但蓝牙总需要吧。</p>
                        <p>需要声卡、视频采集卡之类的扩展就买大板，买PCIE插槽多的。</p>
                        <p>IO接口方面USB接口越多越好，USB到用时方恨少，说到USB就不得不说<a href="https://www.bilibili.com/video/BV1tF411x7Wk?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  USB又又又改名啦。</a></p>
                    </div>
                </div>

                <div id='radiator' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#radiator" title='散热器'/>
                    </Anchor>
                    <p className='desc'>指的是CPU的散热器噢。</p>
                    <div className='content-box'>
                        <Divider orientation="left">风冷 & 水冷</Divider>
                        <p>风冷分为下压式和塔式两种。intel盒装CPU中送的就是下压式风冷，压个10105可以，再高就不要用了。塔式是现在最主流的散热器。</p>
                        <p>水冷分为一体式与分体式。分体式水冷别碰，主流的是一体式水冷。</p>
                        <p>并不是水冷就一定比风冷好的，他们现在的主要区别在于水冷好看，水冷上限更高，但一般用户根本碰不到风冷的上限。水冷有风险，购买需谨慎，一不小心就是水冷从入门到理赔无门。</p>
                        <Divider orientation="left">热管</Divider>
                        <p>塔式风冷的热管，越多越好，越粗越好，镀镍的更好。</p>
                        <Divider orientation="left">硅脂</Divider>
                        <p>现在一般好一点的散热器都已经在散热器上预涂好了硅脂，如果没有或觉得不够好可以自己擦掉换。平价就选信越7868与7921，高级的选利民TF8与TFX。</p>
                        <Divider orientation="left">风冷选购建议</Divider>
                        <p>利民和雅俊二选一闭着眼买，单塔不够买双塔，四热管不够买六热管，加到够。嫌弃原装风扇风力不够猛可以换猫头鹰与台风工业扇，只要你能忍受更大的噪音，i9 12900k都压的稳稳的。</p>
                        <Divider orientation="left">水冷选购建议</Divider>
                        <p>我优先推荐购买风冷，水冷坑很多。一是360水冷还真不一定比人家双塔风冷牛，而且水冷还要多一个水泵的噪音，二是水冷的售后是很大的问题。水冷挂了会带走你整个机箱的所有硬件，风冷坏了就坏它自己。</p>
                        <p><span className='red'>水冷质保不等于赔因为水冷漏液导致损坏的其他硬件😇。</span>很多水冷的质保只保水冷本身，你水冷漏液搞坏显卡主板之类的人家不赔。有些厂商甚至连水冷本身都不保，三年质保纯粹是给你看的。购买水冷最好先问清楚售后规则并保留证据，不赔漏液导致其他硬件损坏的都别买！！</p>
                        <p>水冷优先推荐恩杰，水冷老大哥，除了贵没啥缺点，便宜的买利民。这两个品牌是我所知道的售后比较靠谱的，不知道现在质保规则有没有变化，买前问清楚。</p>
                        <p>水冷一旦过保立马停止使用，不管它坏没坏。水冷绝对不能买二手的！！</p>
                    </div>
                </div>

                <div id='GPU' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#GPU" title='显卡'/>
                    </Anchor>
                    <p className='desc'>现在是2022年3月，别买显卡，别买显卡，别买显卡！！主要讲的是30系与6000系。</p>
                    <div className='content-box'>
                        <Divider orientation="left">公版 & 非公</Divider>
                            <p>公版卡就是NVIDIA与AMD官方发售的显卡，只有一个版本，具有一定收藏价值。除此之外的所有显卡都是非公显卡，非公显卡一般会在公版的基础上加强堆料、加强散热，性能一般比公版强，丐中丐除外，买的主要也是非公卡。</p>
                        <Divider orientation="left">各品牌非公显卡分级与售后</Divider>
                            <p><a href="https://www.bilibili.com/video/BV1YR4y157Ba?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  非公显卡分级与售后。</a></p>
                            <p>丐卡可以买，正经丐卡还是比公版强的。同级别的旗舰卡与丐卡最大差距仅有5%左右，旗舰卡堆料更多，更能超频，但都是同一个核心很难有大的提升，选旗舰还是丐取决于预算。</p>
                        <Divider orientation="left">OC & 超频</Divider>
                            <p>带OC的卡是官方超过频的，比不带OC的频率要高一些。可以的话买带OC的卡。</p>
                            <p>和CPU的情况差不多，现在显卡Boost出厂调的比较激进，留给超频的空间很小，基本不用去折腾显卡超频。</p>
                        <Divider orientation="left">显存</Divider>
                            <p>30系显卡统统是GDDR6X显存，而6000系大多数用的是GDDR6显存，整体来说AMD这边显存频率、位宽都弱于NVIDIA，但AMD这边整体显存容量大于NVIDIA。</p>
                            <p>一般来说，1080P的显示器用4GB的显存就足够了，2k的6-8GB足够，4k为8GB+。</p>
                        <Divider orientation="left">光线追踪</Divider>
                            <p>光追更详细的概念自己查，对于臭打游戏的来说就是提升画质，代价就是帧数降低。30系与6000系都支持光追，目前NVIDIA光追效果比AMD好很多。光追这玩意没必要刻意追求，需要游戏与显卡同时支持才能开启光追，大部分人即便显卡支持也不会开启，帧数还是优先于画质。3080级别以下的光追当作没有就是了。</p>
                        <Divider orientation="left">DLSS & FSR</Divider>
                            <p>一种通过低分辨率图像生成高分辨率图像的技术，可以提高帧数，画质不会损失太多，显卡与游戏都支持才能开启。DLSS是NVIDIA的，目前为DLSS2.0，只有RTX显卡支持。FSR是AMD的，在FSR1.0的时候表现不太好，但是现在已经升级到FSR2.0了，一点也不弱于DLSS2.0，最重要的是，FSR所有显卡都支持，不管是N卡还是A卡，甚至是intel的显卡都支持，不管是现在的新卡还是上古老卡都可以使用。快说谢谢AMD！</p>
                        <Divider orientation="left">显卡竖装</Divider>
                            <p>对于热管散热的显卡来说，如果没到次旗舰的级别最好别竖装显卡，其温度表现可能比横装要差很多。热管内的导热液不会注满，低级卡的热管是没有防重力设计的。</p>
                        <Divider orientation="left">智商检测卡</Divider>
                            <p>2060 12G是2021年12月新发售的新卡，3999的售价让它荣获2021智商检测卡的称号。看这12G的显存，明摆着是为挖矿而生，实测这张卡挖矿效率比3060高多了。但现在价格在2500左右，看目前行情来说性价比不错，其性能与6600差不多，稍弱于3060。</p>
                            <p>3050 8G在2022年1月一发售就荣获2022最大智商检测卡的称号，发售价1899直接溢价到3000，这卡其实卖1899也是溢价的。算力弱、游戏性能弱，就显存大。这8G显存是有点迷惑，最多就跑1080P的它也用不着，用来挖矿算力太低矿老板看不上。现在价格2200，依旧是2022最大智商检测卡。只要加200就能买到比它强20%-30%的6600。</p>
                        <Divider orientation="left">N卡 & A卡</Divider>
                            <p>N卡与A卡到底选谁，目前各类软件对N卡的适配是最好的，N卡算力也比A卡高很多，如果你有专业的生产力需求肯定买N卡。臭打游戏的谁便宜买谁，它们游戏性能在不开光追的时候相差不大，6800XT超频后4k游戏帧数接近默频的3090，离谱。A卡随着驱动更新性能释放是在逐渐上升的，反观N卡一更新驱动就是负优化来说，A卡有点战未来的意思。现在在相同性能相同价格下推荐优先买N卡。</p>
                        <Divider orientation="left">购买建议</Divider>
                            <p>最好别碰二手卡，矿卡不是不能买，矿卡要有矿卡的价格，但是现在矿卡都翻新当新卡卖，很无语。</p>
                            <p>避坑型号，1660ti和2060 6G，挖矿主力军，现在还能卖2300，资本家看了都流泪。还有3050别买。</p>
                            <p>以下显卡都会按照游戏性能从低到高出现，或者可以自行查阅显卡天梯图。</p>
                            <p>1080P下，80帧畅玩PUBG，50-60帧玩3A，选6500XT，性能相当于1660S，虽然还是有溢价，但比起3050来说那可太良心了。</p>
                            <p>1080P下，140帧PUBG，近百帧3A。2k下百帧PUBG，60-100帧3A。2060 12G、6600、3060、6600XT、3060ti。</p>
                            <p>2k百帧3A，4k 60-100帧3A，3070、6700XT、3070ti</p>
                            <p>4k百帧3A，6800XT、3080、3080ti、6900XT，3090游戏性能没提高多少，主要是算力高，适合跑生产力，游戏就不推荐了。</p>
                    </div>
                </div>

                <div id='memory' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#memory" title='内存条'/>
                    </Anchor>
                    <p className='desc'>
                        现在主流的还是DDR4内存，没有专业的生产力需求别买DDR5内存，DDR5贵不说，对于打游戏基本没有提升，在某些游戏中还存在开倒车的问题。
                    </p>
                    <div className='content-box '>
                        <Divider orientation="left">颗粒</Divider>
                            <p>颗粒厂商，三星、海力士、镁光，现在还得加个长鑫，长鑫有A-die颗粒了，其水平相当于三星普通B-die，朗科绝影搭载了长鑫A-die，除了产量不足没啥毛病，推荐购买。更多的颗粒以及对应产品看<a href="https://zhuanlan.zhihu.com/p/163842976" target="_blank" rel='noreferrer'>这里。</a>图虽然比较老了，但总体来说比较全，补充一下宏碁掠夺者3200 C14与3600 C16也是三星普通B-die颗粒。</p>
                        <Divider orientation="left">频率</Divider>
                            <p>对于臭打游戏的来说，DDR4的频率在3200以上就不会带来更多的提升了。预算够买3200和3600的即可，没必要更高，不如把预算加在其他硬件上。预算低2400的即可。此外请注意你的主板与CPU最大支持的内存频率。</p>
                        <Divider orientation="left">容量</Divider>
                            <p>如果你只是办公打打LOL，那么4G足够。不过最好上8G以保证能够有足够的内存运行一些大型软件，比如Photoshop。如果要玩PUBG这种大型网游或者3A大作最好上到16G。再高就吃不满了，除非有专业的生产力需求，否则内存最大为16G即可。并且一定要组<a href="https://www.bilibili.com/video/BV1UJ411B7mD?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  双通道。</a></p>
                        <Divider orientation="left">时序</Divider>
                            <p>简单来说就是延迟，时序越小越好，常见的有CL18、CL16、CL14。低时序与高频是矛盾的，时序低，那么频率也会低。拉高频率，那么时序也会增大。</p>
                        <Divider orientation="left">体质与套条</Divider>
                            <p><a href="https://www.bilibili.com/video/BV14X4y137JM?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  内存体质与套条。</a></p>
                        <Divider orientation="left">XMP与超频</Divider>
                            <p><a href="https://www.bilibili.com/video/BV1r54y1r7Tf?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  SPD与XMP。</a></p>
                            <p>简单说XMP就是厂商定好的自动超频参数，如果你打算手动超频请先查看主板是否支持内存超频以及最高支持频率。内存超频很麻烦，收益也很小，稍微给CPU或显卡加点钱就远远超过了内存超频的收益，不推荐超。</p>
                        <Divider orientation="left">购买建议</Divider>
                            <p>颗粒那也给出颗粒天梯图了，按照自己的需求和预算买对应的颗粒产品即可，真就是一分钱一分货。</p>
                            <p>另外如果打算买金士顿，一定要去旗舰店买，别的地方你买到的100%是假货。</p>
                    </div>
                </div>

                <div id='SSD' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#SSD" title='固态硬盘'/>
                    </Anchor>
                    <p className='desc'>如果你完全不了解硬盘，建议先看看这个视频：<a href="https://www.bilibili.com/video/BV1Qv411t7ZL?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  总线、协议、接口。</a>下面说的全都是nvme协议PCIe总线的m2固态硬盘。</p>
                    <div className='content-box'>
                        <Divider orientation="left">颗粒</Divider>
                            <p>目前闪存颗粒有四种，它们按照性能从高到低、寿命由长到短、价格由高到低排序为：SLC、MLC、TLC、QLC。现在主流的固态硬盘是TLC。QLC已经够垃圾了，比它更垃圾的PLC要来了😅。<a href="https://www.bilibili.com/video/BV1k4411a79q?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  存储科普。</a></p>
                        <Divider orientation="left">各种参数</Divider>
                            <p>请看这个视频：<a href="https://www.bilibili.com/video/BV1mv411u7by/?spm_id_from=333.788.recommend_more_video.22" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  15款主流SSD对比评测。</a></p>
                            <p>这个视频讲了所有固态硬盘重要的参数，我也没必要再重复一遍了。耐心看完，相信你已经知道如何挑选固态硬盘了。</p>
                        <Divider orientation="left">购买建议</Divider>
                            <p>对于一般用户来说，PCIe3.0*4的硬盘就够用了，当然有钱上PCIe4.0*4的那是更好。注意主板m2接口支持的最大带宽，别主板只支持PCIe3.0*4结果你买个PCIe4.0*4的硬盘回去。</p>
                            <p>原则上不建议购买500G容量以下的固态，性价比太低了，而且不够用。低于1TB的固态装系统的时候别分盘。</p>
                            <p>OEM盘更便宜性能更强，但是没有售后保证，自己权衡利弊。</p>
                            <p>西数SN550别买了，已经偷工减料了，要买就买SN570。</p>
                            <p>看看国产致钛，性能一点不比三星、西数、凯侠差，还比它们便宜一点。注意搭配散热马甲使用，致钛温度墙比较保守，马甲安排上就不会撞温度墙了。</p>
                    </div>
                </div>

                <div id='HDD' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#HDD" title='机械硬盘'/>
                    </Anchor>
                    <p className='desc'>
                        机械硬盘不是必须的，如果需要存储大文件可以加装，需要机械硬盘的人还是少数，购买时只需要注意一点，买垂直盘，不要买叠瓦盘。    
                        可以关注UP：<a href="https://space.bilibili.com/20274090/video" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  钱韦德。</a>
                        所有能买的型号和渠道、还有坑都讲的很明白了，建议4T起买，别买1TB、2TB的，太贵了。PDD的OEM海康威视西数4T紫盘我买过了，360块安全下车，完美。
                    </p>
                </div>

                <div id='power' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#power" title='电源'/>
                    </Anchor>
                    <p className='desc'>
                        所有硬件都能省，唯独电源不能省。
                    </p>
                    <div className='content-box'>
                        <Divider orientation="left">模组电源</Divider>
                            <p><a href="https://www.bilibili.com/video/BV1mD4y1D77y?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  什么是模组电源。</a>建议全模组或半模组，方便理线。</p>
                        <Divider orientation="left">80PLUS认证</Divider>
                            <p><a href="https://www.bilibili.com/video/BV1bT4y1E777?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  80PLUS认证。</a>与其纠结金牌还是铜牌，能省多少电，不如多考虑品牌本身的实力与产品用料。</p>
                        <Divider orientation="left">电源瓦数</Divider>
                            <p>电源选多少瓦基本取决于CPU和GPU两个用电大户，把CPU和GPU的最大功耗加起来，再余出200-300W给其他硬件就够了，当然整体配置比较低留100W就行。</p>
                        <Divider orientation="left">各种接口线材数量</Divider>
                            <p>注意主板的CPU供电规格与显卡外接供电规格，别出现电源的CPU供电和显卡供电接口不足的情况。</p>
                        <Divider orientation="left">定制线</Divider>
                            <p>有人说电源原配的线材又黑又粗又丑，要去买好看的定制线。当然没问题，只要你能保证买到的线材质量是合格的，所有因定制线导致的电源损坏和其他硬件损坏统统不赔。原装线材是通过压力测试的合格产品，但定制线没法保证，完全取决于做定制线的人有没有良心，一旦出现问题直接炸整个机箱，非常不推荐用定制线。</p>
                        <Divider orientation="left">品牌</Divider>
                            <p>俗话说的好，纹波不稳炸四方，一个电源的质量如何是不好分辨的，所以要靠品牌来保障。但是电源品牌太多太杂了，同一个品牌下各种定位的产品质量还不一，要是买了个红星小核弹回来神仙也救不了。最好盯着大牌的金牌电源买。</p>
                            <p>预算低，整机功耗不高，选长城、鑫谷、航嘉的金牌电源。</p>
                            <p>我个人认为，到600W以上就别考虑其他的了，海韵和振华二选一。全系列可买，一元一瓦稳如老狗，当传家宝都没问题。</p>
                    </div>
                </div>

                <div id='case' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#case" title='机箱'/>
                    </Anchor>
                    <p className='desc'>机箱这么多，没法推荐，按照自己的预算和喜欢的外观买就好，话说回来鞋盒也不是不能用🤣。主要讲讲分类还有机箱风道问题。</p>
                    <div className='content-box'>
                        <Divider orientation="left">分类</Divider>
                            <p>全塔、中塔、ITX，主要是按照主板的尺寸来分的。按风道设计分（我自己划分的），一是前进风，后出风上出风的传统机箱；二是侧进风或者无进风的海景房机箱，代表是联立包豪斯，追风者普力魔，能竖装显卡。</p>
                        <Divider orientation="left">机箱风道</Divider>
                            <p><a href="https://www.bilibili.com/video/BV1Mi4y1M7Mz?spm_id_from=333.999.0.0" target="_blank" rel='noreferrer'><IconFont type="icon-icon_bilibili" />  机箱风道布置。</a>机箱风扇没必要买贵的，没有区别，别浪费钱。</p>
                            <p>补充一下海景房机箱的风道布置。一是上下侧全部出风，形成负压风道。二是侧进风，下进风，上出风。三是侧进风，下出风，上出风。四是下进风，侧出风，上出风。我比较倾向第二种，横装显卡最好别用第三种。</p>
                        <Divider orientation="left">注意点</Divider>
                            <p>注意主板尺寸与机箱最大支持主板尺寸。</p>
                            <p>塔式风冷注意机箱限高与限宽。水冷注意机箱是否有支持该尺寸的冷排位。</p>
                            <p>注意显卡占槽宽与显卡长度。</p>
                            <p>注意电源仓位与电源尺寸是否匹配。</p>
                            <p>机箱的跳线要是比较多注意主板是否有充足的跳线接口，不然机箱的按钮和接口都成摆设。</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
