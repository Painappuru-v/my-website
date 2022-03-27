import './Nav.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import dayjs from 'dayjs';
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, Space, Tooltip, Popover, Steps, message } from 'antd';
// 引入阿里矢量图标
import { createFromIconfontCN, GithubOutlined } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3248103_ss26rtu2kg7.js',
});
const { Step } = Steps;

export default function Nav() {
    const navigate = useNavigate();
    // 当前路由地址
    const {pathname} = useLocation();
    // console.log(pathname);
    // 当前选中的导航
    const [current, setCurrnet ] = useState(pathname)
    // 切换导航
    function handleClick(e) {
        // console.log(e);
        setCurrnet(e.key)
        // 路由跳转
        navigate(e.key)
    }

    // 更新公告
    const [notify, setNotify] = useState([]);

    function getNotify() {
        axios.get('notify').then(
            response => {
                // console.log(response);
                if(response.data.status !== 200) {
                    return message.error('出错了!');
                }
                setNotify(response.data.data);
            },
            error => {
                return message.error(`ERROR: ${error}`);
            }
        )
    }

    const content = (
        <Steps progressDot direction="vertical">
            {
                notify.map((item) => {
                    return <Step title={dayjs(item.time).format('YYYY-MM-DD')} description={item.content} key={item.id}/>
                })
            }
        </Steps>
        
    )

    useEffect(() => {
        getNotify()
    }, [])

    return (
        <div className='nav'>
            <div className='menu'>
                {/* 导航菜单 */}
                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="/home">
                        首页
                    </Menu.Item>
                    <Menu.Item key="/blog">
                        博客
                    </Menu.Item>
                    <Menu.Item key="/illustration">
                        插画
                    </Menu.Item>
                    <Menu.Item key="/pc-diy">
                        DIY
                    </Menu.Item>
                    <Menu.Item key="/pc-garbage">
                        垃圾佬
                    </Menu.Item>
                    <Menu.Item key="/keyboard-customization">
                        客制化
                    </Menu.Item>
                    <Menu.Item key="/poem-name">
                        诗之名
                    </Menu.Item>
                </Menu>
            </div>
            {/* 导航右侧图标 */}
            <Space size='middle'>
                <Popover content={content} title="网站更新公告" placement="bottom">
                    <IconFont type="icon-gonggao" />
                </Popover>
                <Tooltip title="Painappuru 的 Gitee主页" color='#f7c173' placement="bottom">
                    <a href="https://gitee.com/fxxkingpineapple" target="_blank" rel="noreferrer">
                        <IconFont type="icon-gitee" />
                    </a>
                </Tooltip>
                <Tooltip title="本项目的 Github 仓库" color='#f7c173' placement="bottom">
                    <a href="https://github.com/Painappuru-v/my-website" target="_blank" rel="noreferrer" style={{color: "#24292f"}}>
                        <GithubOutlined />
                    </a>
                </Tooltip>
                <Tooltip title="Painappuru 的 pixiv主页" color='#f7c173' placement="bottom">
                    <a href="https://www.pixiv.net/users/65507224" target="_blank" rel="noreferrer">
                        <IconFont type="icon-pixiv" />
                    </a>
                </Tooltip>
            </Space>
        </div>
    )
    }
