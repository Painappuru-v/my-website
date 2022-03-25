import './Illustration.css'
import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import { Anchor, Image, message } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { createFromIconfontCN, SyncOutlined } from '@ant-design/icons';
const { Link } = Anchor;
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3248103_018w6xn45kyq9.js',
});

export default function Illustration() {
    // 我的插画
    const [myIllustration, setMyIllustration] = useState([]);

    // 画师
    const [artists, setArtists] = useState([]);
    // 页数
    const [artistNum, setArtistNum] = useState(1);
    // 是否加载完毕全部画师
    const [artistDone, setArtistDone] = useState(false);
    const [artistCount, setArtistCount] = useState(0);
    const [artistLoading, setArtistLoading] = useState(false)

    // 专题
    const [subject, setSubject] = useState([]);
    // 页数
    const [subjectNum, setSubjectNum] = useState(1);
    // 是否加载完毕全部专题
    const [subjectDone, setSubjectDone] = useState(false);
    const [subjectCount, setSubjectCount] = useState(0);
    const [subjectLoading, setSubjectLoading] = useState(false)

    // 获取我的插画列表
    function getMyIllustration() {
        axios.get('illustration/myIllustration').then(
            response => {
                // console.log(response);
                if(response.data.status !== 200) {
                    return message.error('出错了!');
                }
                setMyIllustration(response.data.data)
            },
            error => {
                message.error(`ERROR: ${error}`);
            }
        )
    }

    // 获取画师列表
    function getArtist() {
        setArtistLoading(true)

        axios.get('illustration/artist', {params: {artistNum}}).then(
            response => {
                // console.log(JSON.parse(response.data.data[0].list));
                // console.log(response.data);
                if(response.data.status !== 200) {
                    setArtistLoading(false)
                    return message.error('出错了!');
                }
                setArtistCount(response.data.total);
                setArtistNum(artistNum+1)
                setTimeout(() => {
                    setArtists([...artists, ...response.data.data])
                    setArtistLoading(false)
                }, 500);
            },
            error => {
                setArtistLoading(false)
                return message.error(`ERROR: ${error}`);
            }
        )
    }

    // 画师列表滚动ref
    const artistsScrollRef = useRef();
    // 画师列表点击滚动
    function artistsScroll(index, type) {
        // console.log(artistsScrollRef.current.childNodes[index].childNodes[1].childNodes[2]);
        // 滚动元素
        const element = artistsScrollRef.current.childNodes[index].childNodes[1].childNodes[2];
        // 当前滚动的长度
        const currentScroll = element.scrollLeft;
        // 最大滚动长度
        const maxScroll = element.scrollWidth - element.offsetWidth;
        // 左滚动
        if(type === 'left') {
            if(currentScroll === 0) return
            element.scrollTo({
                top: 0,
                left: currentScroll-576,
                behavior: 'smooth' //  smooth(平滑滚动)
              });
        }
        // 右滚动
        if(type === 'right') {
            if(maxScroll === currentScroll) return
            element.scrollTo({
                top: 0,
                left: currentScroll+576,
                behavior: 'smooth' //  smooth(平滑滚动)
              });
        }
    }

    // 获取专题列表
    function getSubject() {
        setSubjectLoading(true)

        axios.get('illustration/subject', {params: {subjectNum}}).then(
            response => {
                // console.log(JSON.parse(response.data.data[0].list));
                console.log(response.data);
                if(response.data.status !== 200) {
                    setSubjectLoading(false)
                    return message.error('出错了!');
                }
                setSubjectCount(response.data.total);
                setSubjectNum(subjectNum+1)
                setTimeout(() => {
                    setSubject([...subject, ...response.data.data])
                    setSubjectLoading(false)
                }, 500);
            },
            error => {
                setSubjectLoading(false)
                return message.error(`ERROR: ${error}`);
            }
        )
    }
    // 专题列表滚动ref
    const subjectScrollRef = useRef();
    // 专题列表点击滚动
    function subjectScroll(index, type) {
        // console.log(subjectScrollRef.current.childNodes[index].childNodes[1].childNodes[2]);
        // 滚动元素
        const element = subjectScrollRef.current.childNodes[index].childNodes[1].childNodes[2];
        // 当前滚动的长度
        const currentScroll = element.scrollLeft;
        // 最大滚动长度
        const maxScroll = element.scrollWidth - element.offsetWidth;
        // 左滚动
        if(type === 'left') {
            if(currentScroll === 0) return
            element.scrollTo({
                top: 0,
                left: currentScroll-576,
                behavior: 'smooth' //  smooth(平滑滚动)
              });
        }
        // 右滚动
        if(type === 'right') {
            if(maxScroll === currentScroll) return
            element.scrollTo({
                top: 0,
                left: currentScroll+576,
                behavior: 'smooth' //  smooth(平滑滚动)
              });
        }
    }

    // 组件挂载
    useEffect(() => {
        getMyIllustration();
        getArtist()
        getSubject()
    }, [])
    // 判断画师是否全部加载完毕
    useEffect(() => {
        // console.log(artists.length);
        // console.log(artistCount);
        if(artists.length !== 0 && artists.length === artistCount) {
            setArtistDone(true);
        }
    }, [artists, artistCount])
    // 判断专题是否全部加载完毕
    useEffect(() => {
        // console.log(subject.length);
        // console.log(subjectCount);
        if(subject.length !== 0 && subject.length === subjectCount) {
            setSubjectDone(true);
        }
    }, [subject, subjectCount])
    
    return (
        <div className='illustration'>
            {/* 侧边导航 */}
            <div className='aside'>
                <Anchor affix={false} offsetTop={66}>
                    <Link href="#my-illustration" title='我的插画'/>
                    <Link href="#artists" title='画师'/>
                    <Link href="#subject" title='专题'/>
                </Anchor>
            </div>
            {/* 展示区 */}
            <div className='container'>
                <div className='tip'>转载请注明出处，这是对原创画师最基本的尊重。所有作品禁止未授权商用。有空就更新。</div>
                {/* 我的插画 */}
                <div id='my-illustration'>
                    {/* 锚点 */}
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#my-illustration" title='我的插画'/>
                    </Anchor>
                    <Image.PreviewGroup>
                        <div className='my-wrap'>
                            {/* 遍历我的插画 */}
                            {
                                myIllustration.map((item) => {
                                    return (
                                        <div className='my-box' key={item.id}>
                                            <Image width={150} height={150} src={`http://127.0.0.1:5000/image/my/${item.file_name}`} />
                                            <a href={item.url} target="_blank" rel='noreferrer'>{item.title}</a>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </Image.PreviewGroup>
                </div>
                {/* 画师 */}
                <div id='artists'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#artists" title={`画师（${artistCount}）`}/>
                    </Anchor>
                    <div className='artists-wrap' ref={artistsScrollRef}>
                        {/* 遍历画师列表 */}
                        {
                            artists.map((item, index) => {
                                return (
                                    <div className='artist-box' key={item.id}>
                                        <div className='artist'>
                                            <span>{item.ordinal}、</span>
                                            <a href={item.url} target="_blank" rel='noreferrer'>{item.artist}</a>
                                            <p>{item.description}</p>
                                        </div>
                                        <Image.PreviewGroup>
                                            <div className='scroll-wrap'>
                                                {/* 左右滚动按钮 */}
                                                <div className='left-scroll' onClick={() => artistsScroll(index, 'left')}>
                                                    <div className='btn'><LeftOutlined /></div>
                                                </div>
                                                <div className='right-scroll' onClick={() => artistsScroll(index, 'right')}>
                                                    <div className='btn'><RightOutlined /></div>
                                                </div>
                                                {/* 滚动盒 */}
                                                <div className='scroll-box'>
                                                    {/* 遍历插画列表 */}
                                                    {
                                                        JSON.parse(item.list).map((work) => {
                                                            return (
                                                                <div className='work-box' key={work.id}>
                                                                    <Image width={136} height={136} src={`http://127.0.0.1:5000/image/artists/${work.file_name}`} />
                                                                    <a href={work.url} target="_blank" rel='noreferrer'>{work.title}</a>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </Image.PreviewGroup>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='more'>
                        <div className='loadMore' onClick={getArtist} style={artistLoading || artistDone ? {display: 'none'} : {display: 'block'}}>
                            <div><SyncOutlined/>&nbsp;&nbsp;加载更多</div>
                        </div>
                        <div className='moreLoading' style={artistLoading ? {display: 'block'} : {display: 'none'}}>
                            <IconFont type="icon-jiazai" spin/>&nbsp;&nbsp;加载中
                        </div>
                        <div className='done' style={artistDone ? {display: 'block'} : {display: 'none'}}>我也是有底线的~</div>
                    </div>
                </div>
                {/* 专题 */}
                <div id='subject'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#subject" title={`专题（${subjectCount}）`}/>
                    </Anchor>
                    <div className='subject-wrap' ref={subjectScrollRef}>
                        {/* 遍历专题列表 */}
                        {
                            subject.map((item, index) => {
                                return (
                                    <div className='subject-box' key={item.id}>
                                        <div className='subject'>
                                            <span>{item.ordinal}、{item.description}</span>
                                        </div>
                                        <Image.PreviewGroup>
                                            <div className='scroll-wrap'>
                                                {/* 左右滚动按钮 */}
                                                <div className='left-scroll' onClick={() => subjectScroll(index, 'left')}>
                                                    <div className='btn'><LeftOutlined /></div>
                                                </div>
                                                <div className='right-scroll' onClick={() => subjectScroll(index, 'right')}>
                                                    <div className='btn'><RightOutlined /></div>
                                                </div>
                                                {/* 滚动盒 */}
                                                <div className='scroll-box'>
                                                    {/* 遍历插画列表 */}
                                                    {
                                                        JSON.parse(item.list).map((work) => {
                                                            return (
                                                                <div className='work-box' key={work.id}>
                                                                    <Image width={136} height={136} src={`http://127.0.0.1:5000/image/subject/${work.file_name}`} />
                                                                    <a href={work.url} target="_blank" rel='noreferrer'>{work.title}</a>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </Image.PreviewGroup>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='more'>
                        <div className='loadMore' onClick={getSubject} style={subjectLoading || subjectDone ? {display: 'none'} : {display: 'block'}}>
                            <div><SyncOutlined/>&nbsp;&nbsp;加载更多</div>
                        </div>
                        <div className='moreLoading' style={subjectLoading ? {display: 'block'} : {display: 'none'}}>
                            <IconFont type="icon-jiazai" spin/>&nbsp;&nbsp;加载中
                        </div>
                        <div className='done' style={subjectDone ? {display: 'block'} : {display: 'none'}}>我也是有底线的~</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
