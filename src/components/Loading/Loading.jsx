import React from 'react'
import './loading.css'
import { Spin } from 'antd';
// import {SyncOutlined} from '@ant-design/icons'

export default function Loading() {
    return (
        <div className='loading'>
            {/* <SyncOutlined spin /> &nbsp;Loading... */}
            <Spin/>
            &nbsp;&nbsp;&nbsp;Loading...
        </div>
    )
}
