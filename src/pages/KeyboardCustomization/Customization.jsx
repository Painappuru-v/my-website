import './Customization.css'
import React from 'react'
import { Image} from 'antd';

export default function Customization() {
    return (
        <div className='customization'>
            <Image width={250} height={150} src={require('../../assets/images/img.gif')} />
            <p>介绍各种机械轴体、键盘套件，打造属于自己的客制化键盘。在写了再写了···</p>
        </div>
    )
}
