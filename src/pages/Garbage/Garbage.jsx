import './Garbage.css'
import React from 'react'
import { Image} from 'antd';

export default function Garbage() {
    return (
        <div className='garbage'>
            <Image width={250} height={150} src={require('../../assets/images/img.gif')} />
            <p>收集一些垃圾佬最爱的硬件型号。捡垃圾中···</p>
        </div>
    )
}
