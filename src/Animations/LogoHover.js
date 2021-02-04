import React, {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring'

export default function LogoHover({children}) {
    const [isBooped, setIsBooped] = React.useState(false);

    const props = useSpring(
        {
        border: isBooped ? "2px solid" : "0px solid",
        color: isBooped? '#6717cd' : '#202020',
        borderRadius: '30%'})


    return ( <span onMouseEnter={()=> {setIsBooped(true)}} onMouseLeave={() => {setIsBooped(false)}}>
        <animated.div id='underline' style={props}>{children}</animated.div></span>)
}