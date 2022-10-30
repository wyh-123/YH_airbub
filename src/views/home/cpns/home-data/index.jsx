import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DataWarpper } from './style'
import GoodsItem from '@/components/goods-item/imdex'
const HomeData = memo((props) => {
    return (
        <DataWarpper>
            {
               props.maindata.map(item => {
                    return <GoodsItem itemData={item} itemWidth={props.itemWidth} key={item.id}></GoodsItem>
                })
            }
        </DataWarpper>
    )
})

HomeData.propTypes = {
    maindata: PropTypes.array,
    itemWidth:PropTypes.string
}

export default HomeData