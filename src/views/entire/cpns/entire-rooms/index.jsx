import GoodsItem from '@/components/goods-item/imdex'
import { changeDetailInfoAction } from '@/store/modules/detail'
import PropTypes from 'prop-types'
import React, { memo, useCallback, } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWarrper } from './style'
const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)
  const nav = useNavigate()
  const diapatch=useDispatch()
  const click = useCallback((item) => {
    diapatch(changeDetailInfoAction(item))
    nav('/detail')
  },[])
  return (
    <RoomsWarrper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className='list'>
        {
          roomList.map((item) => {
            return (
              <GoodsItem
                itemclick={click}
                itemData={item} 
                itemWidth="20%" 
                key={item._id}
              />
            )
          })
        }
      </div>
      { isLoading && <div className='cover'></div> }
    </RoomsWarrper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms