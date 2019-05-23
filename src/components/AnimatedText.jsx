import React from 'react'
import { useTrail, animated } from 'react-spring'

function AnimatedText() {
    const items = [`Hi, I'm`, `Samuel Vicente,`, `Full-Stack Developer`, `& Designer`]
    const config = { mass: 5, tension: 2000, friction: 200 }
    const trail = useTrail(items.length, {
        config,
        opacity: 1,
        x: 0,
        height: 80,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                    key={items[index]}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
            ))}
        </div>
    )
}

export default AnimatedText