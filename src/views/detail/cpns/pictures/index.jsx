import PictureView from '@/base-ui/picture-view'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PictureWarpper } from './style'
const Picture = memo((props) => {
    const [showpocture, setpicture] = useState(false)
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo,
    }), shallowEqual)
    return (
        <PictureWarpper>
            <div className='pictures'>
                <div className='left'>
                    <div className='item' onClick={e => setpicture(true)}>
                        <img src={detailInfo?.picture_urls?.[0]} alt="" />
                        <div className='cover'></div>
                    </div>
                </div>
                <div className='right'>
                    {
                        detailInfo?.picture_urls?.slice(1, 5).map(item => {
                            return (
                                <div className='item' key={item} onClick={e => setpicture(true)}>
                                    <img src={item} alt="" />
                                    <div className='cover'></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='show-btn' onClick={e => setpicture(true)}>显示照片</div>
            {showpocture && <PictureView  pictureUrls={detailInfo.picture_urls}  closeClick={e => setpicture(false)}></PictureView>}
        </PictureWarpper>
    )
})

Picture.propTypes = {}

export default Picture