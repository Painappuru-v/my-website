import './Home.css'
import React, { useState, useEffect } from 'react'
import {Space, Tooltip} from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3248103_018w6xn45kyq9.js',
});
const jinrishici = require('jinrishici');

export default function Home() {
    // 诗句state
    const [sentence, setSentence] = useState('');
    // 加载随机诗句
    function loadSentence() {
        jinrishici.load(result => {
            // console.log(result);
            setSentence(result.data.content);
        }, errData => {
            // 加载错误
            console.log(errData);
            setSentence('人生若只如初见，何事秋风悲画扇。')
        });
    }
    // effect hook
    useEffect(() => {
        loadSentence()
        // 开启定时器
        const timer = setInterval(() => {
            loadSentence()
        }, 5000);
        return () => {
            // 销毁定时器
            clearInterval(timer)
        }
    },[])
    return (
        <div className='home'>
            <div className='sentence'>
                <IconFont type="icon-jiazai" spin/>&nbsp;&nbsp;{sentence}
            </div>
            <div className='author'>
                <Space size="large">   
                    <Tooltip title="pixiv画师主页" color='#f7c173'>
                        <a href="https://www.pixiv.net/users/26225243" target="_blank" rel='noreferrer'>
                            粉帮老大
                        </a>
                    </Tooltip>
                    <Tooltip title="pixiv插画作品页" color='#f7c173'>
                        <a href="https://www.pixiv.net/artworks/84595361" target="_blank" rel='noreferrer'>
                            No,Thank You
                        </a>
                    </Tooltip>
                </Space>
            </div>
            <div className='beian'>
                <a href="http://beian.miit.gov.cn" target="_blank" rel="noreferrer">琼ICP备2021008664号</a>
            </div>
    </div>
    )
}
