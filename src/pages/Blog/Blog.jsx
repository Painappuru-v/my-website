import './Blog.css'
import React from 'react'
import { Tooltip } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3248103_018w6xn45kyq9.js',
  });

export default function Blog() {
    return (
        <div className='blog'>
            <div className='author'>
                <Tooltip title="画师pixiv主页" color='#f7c173' placement="right">
                    <a href="https://www.pixiv.net/users/44473246" target="_blank" rel='noreferrer'>
                        画师：Rune Xiao
                    </a>
                </Tooltip>
                <Tooltip title="背景插画pixiv作品页" color='#f7c173' placement="right">
                    <a href="https://www.pixiv.net/artworks/88956309" target="_blank" rel='noreferrer'>
                        插画详情
                    </a>
                </Tooltip>
            </div>

            <div className='tip'>其实我不太喜欢写博客，写的都比较随意简陋。</div>
            <div className="item">
                <div className='info'>
                    <a className='title' href='https://blog.csdn.net/fxxkingpineapple/article/details/123445796' target='_blank' rel='noreferrer'>
                        phpstudy无法启动MySQL数据库的问题
                    </a>
                    <div className='time'>2022-03-12 16:34:36</div>
                </div>
                <div className='icon'>
                    <Tooltip title="csdn" color='#f7c173'>
                        <IconFont type="icon-csdn-copy"/>
                    </Tooltip>
                </div>
            </div>
            <div className="item">
                <div className='info'>
                    <a className='title' href='https://blog.csdn.net/fxxkingpineapple/article/details/123445796' target='_blank' rel='noreferrer'>
                        phpstudy无法启动MySQL数据库的问题
                    </a>
                    <div className='time'>2022-03-12 16:34:36</div>
                </div>
                <div className='icon'>
                    <Tooltip title="csdn" color='#f7c173'>
                        <IconFont type="icon-csdn-copy"/>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
