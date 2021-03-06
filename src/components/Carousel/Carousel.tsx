import React, { useState } from 'react';
import asyncPhoto from '../../images/asyncAwait.png';
import belle from '../../images/belle.jpg';
import ps5 from '../../images/ps5.jpg';
import taako from '../../images/taco.jpg';
import thenPhoto from '../../images/thenScreenShot.png';
import Photo from '../Photos/Photo';

export default function Carousel(props: any) {
    const [top, setTop] = useState(asyncPhoto);

    const changeImage = (source: string) => {
        setTop(source);
    }

    const photoArr = [asyncPhoto, belle, ps5, taako, thenPhoto];
    const lowerImg = photoArr.map(photo => <Photo source={photo}
        changeImage={changeImage} />)

    return (
        <React.Fragment>
            <h2>Carousel</h2>
            <img src={top} alt='' height='200' width='200' />
            <br />
            {lowerImg}
        </React.Fragment>
    )
}