import './DIY.css'
import React from 'react'
import { Anchor } from 'antd';
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
                    <Link href="#HHD" title='机械硬盘'/>
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
                </div>

                <div id='screen' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#screen" title='显示器'/>
                    </Anchor>
                </div>

                <div id='CPU' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#CPU" title='CPU'/>
                    </Anchor>
                </div>

                <div id='motherboard' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#motherboard" title='主板'/>
                    </Anchor>
                </div>

                <div id='radiator' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#radiator" title='散热器'/>
                    </Anchor>
                </div>

                <div id='GPU' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#GPU" title='显卡'/>
                    </Anchor>
                </div>

                <div id='memory' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#memory" title='内存条'/>
                    </Anchor>
                </div>

                <div id='SSD' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#SSD" title='固态硬盘'/>
                    </Anchor>
                </div>

                <div id='HHD' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#HHD" title='机械硬盘'/>
                    </Anchor>
                </div>

                <div id='power' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#power" title='电源'/>
                    </Anchor>
                </div>

                <div id='case' className='item'>
                    <Anchor affix={false} offsetTop={66}>
                        <Link href="#case" title='机箱'/>
                    </Anchor>
                </div>

            </div>
        </div>
    )
}
