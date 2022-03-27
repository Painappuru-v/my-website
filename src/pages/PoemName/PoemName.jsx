import './Poem.css'
import React from 'react'
import { Image} from 'antd';

export default function Poem() {
    return (
        <div className='poem'>
            <Image width={250} height={150} src={require('../../assets/images/img.gif')} />
            <p>用《诗经》起一个诗意的名字，读诗中···</p>
        </div>
    )
}
