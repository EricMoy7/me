import React, {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring'

export default function Boop( {rotation = 0, timing = 150, children}) {
    const [isBooped, setIsBooped] = React.useState(false);
    const props = useSpring(
        {width: isBooped ? '100%' : '0%',
        borderBottom: isBooped ? "3px solid" : "0px solid",
        color: isBooped? '#6717cd' : '#202020',
        display: 'block',
        top: '50%',
        left: '50%'})


    return ( <span onMouseEnter={()=> {setIsBooped(true)}} onMouseLeave={() => {setIsBooped(false)}}>{children}
        <animated.div id='underline' style={props}></animated.div></span>)
}

//<span onMouseEnter={trigger} style={style}>{children}<div style={lineStyle}></div></span>