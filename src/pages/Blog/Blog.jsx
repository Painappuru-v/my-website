import './Blog.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import dayjs from 'dayjs';
import { Tooltip, message } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3248103_ss26rtu2kg7.js',
  });

export default function Blog() {
    // blog列表
    const [blog, setBlog] = useState([]);
    // 获取blog列表
    useEffect(() => {
        axios.get('blog').then(
            response => {
                // console.log(response);
                if(response.data.status !== 200) {
                    return message.error('出错了!');
                }
                setBlog(response.data.data);
            },
            error => {
                return message.error(`ERROR: ${error}`);
            }
        )
    }, [])

    return (
        <div className='blog'>
            <div className='author'>
                <Tooltip title="画师主页" color='#f7c173' placement="right">
                    <a href="https://www.artstation.com/superdj" target="_blank" rel='noreferrer'>
                        JAY KIM
                    </a>
                </Tooltip>
                <Tooltip title="插画作品页" color='#f7c173' placement="right">
                    <a href="https://www.artstation.com/artwork/aYQR6R" target="_blank" rel='noreferrer'>
                        Fishing Cats
                    </a>
                </Tooltip>
            </div>

            <div className='tip'>其实我不太喜欢写博客，写的都比较随意简陋。</div>
            {/* 遍历博客列表 */}
            {
                blog.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <div className='info'>
                                <a className='title' href={item.url} target='_blank' rel='noreferrer'>
                                    {item.title}
                                </a>
                                <div className='time'>{dayjs(item.time).format('YYYY-MM-DD HH:mm')}</div>
                            </div>
                            <div className='icon'>
                                <Tooltip title="csdn" color='#f7c173'>
                                    <IconFont type="icon-csdn-copy"/>
                                </Tooltip>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}
