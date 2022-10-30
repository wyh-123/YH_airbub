import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import Rating from '@mui/material/Rating'
import { Warpper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import { Carousel } from 'antd';
import classNames from 'classnames';
import Indicator from '@/base-ui/indicator';
const GoodsItem = memo((props) => {
    const { itemData, itemWidth = "33.3333%",itemclick } = props;
    const [selectIndex, setSelectIndex] = useState(0)
    const sliderRef = useRef();
    function controlClickHandle(e,isRight) {
        isRight ? sliderRef.current.next() : sliderRef.current.prev()
        // 最新的索引
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
        const length = itemData.picture_urls.length
        if (newIndex < 0) newIndex = length - 1
        if (newIndex > length - 1) newIndex = 0
        setSelectIndex(newIndex)
        console.log(e)
        e.stopPropagation()
    }
    const slideElement = (<div className='slider'>
        <div className='control'>
            <div className='btn left' onClick={e => controlClickHandle(e,false)}>
                <IconArrowLeft width="30" height="30" />
            </div>
            <div className='btn right' onClick={e => controlClickHandle(e,true)}>
                <IconArrowRight width="30" height="30" />
            </div>
        </div>
        <div className='indicator'>
            <Indicator selectIndex={selectIndex}>
                {
                    itemData?.picture_urls?.map((item, index) => {
                        return (
                            <div className="item" key={item}>
                                <span className={classNames("dot", { active: selectIndex === index })}></span>
                            </div>
                        )
                    })
                }
            </Indicator>
        </div>
        <Carousel dots={false} ref={sliderRef}>
            {
                itemData?.picture_urls?.map(item => {
                    return (
                        <div className='cover' key={item}>
                            <img src={item} alt="" />
                        </div>
                    )
                })
            }
        </Carousel>
    </div>)
  const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt="" />
    </div>
    )
    function click(data) {
        if (itemclick) {
            itemclick(data)
       }
    }
    return (
        <Warpper itemWidth={itemWidth} onClick={e=>click(itemData)}>
            <div className='inner'>
            { !itemData.picture_urls ? pictureElement: slideElement }
                <div className='desc'>{itemData.verify_info.messages.join("·")}</div>
                <div className='name'>{itemData.name}</div>
                <div className='price'>¥{itemData.price}/晚</div>
                <div className="bottom">
                    <Rating value={itemData.star_rating ?? 5} precision={0.1} readOnly sx={{ color: '#00848A', fontSize: '12px' }}></Rating>
                    <span className='count'>{itemData.reviews_count}</span>
                    <span className='extra'>{itemData?.bottom_info?.content}</span>
                </div>
            </div>
        </Warpper>
    )
})

GoodsItem.propTypes = {
    itemData: PropTypes.object,
    itemWidth: PropTypes.string,
}

export default GoodsItem