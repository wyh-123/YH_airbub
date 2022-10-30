import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScroolWarpper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
const ScrollView = memo((props) => {
    const [showRight, setShowRight] = useState(true)
    const [showLeft, setshowLeft] = useState(false)
    const [index, setindex] = useState(0);
    const scrollRef = useRef()
    //这里使用useref而不用usestate是因为这个useref改变不会刷新页面
    const totalDistanceRef = useRef(0)
    useEffect(() => {
        //子元素撑开的宽度，包含隐藏部分
        const scrollWidth = scrollRef.current.scrollWidth
        //本身占据的宽度，继承的宽度
        const clientWidth = scrollRef.current.clientWidth
        //记录超出的宽度
        totalDistanceRef.current = scrollWidth - clientWidth
        setShowRight(totalDistanceRef.current > 0)
    }, [props.children])
    function rightBtn() {
        const newindex = index + 1;
        const offsetLeft = scrollRef.current.children[newindex].offsetLeft;
        scrollRef.current.style.transform = `translate(-${offsetLeft}px)`
        setindex(newindex)
        setShowRight(totalDistanceRef.current > offsetLeft)
        setshowLeft(offsetLeft > 0)
    }
    function LeftBtn() {
        const newindex = index - 1;
        const offsetLeft = scrollRef.current.children[newindex].offsetLeft;
        scrollRef.current.style.transform = `translate(-${offsetLeft}px)`
        setindex(newindex)
        setShowRight(totalDistanceRef.current > offsetLeft)
        setshowLeft(offsetLeft > 0)
    }
    return (
        <ScroolWarpper>
            {showLeft && (
                <div className='control left' onClick={LeftBtn}>
                    <IconArrowLeft />
                </div>
            )}
            {showRight && (
                <div className='control right' onClick={rightBtn}>
                    <IconArrowRight />
                </div>
            )}
            <div className="content">
                <div className='scroll' ref={scrollRef}>
                    {props.children}
                </div>
            </div>
        </ScroolWarpper>
    )
})

ScrollView.propTypes = {}

export default ScrollView