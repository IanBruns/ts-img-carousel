import React from 'react';

export default function Photo(props: any) {
    return (
        <img src={props.source} alt='' height='75' width='75' onClick={() => props.changeImage(props.source)} />
    )
}