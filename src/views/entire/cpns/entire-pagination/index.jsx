import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PagnationWarpper } from './style'
import { shallowEqual, useSelector,useDispatch } from 'react-redux'
import { Pagination } from '@mui/material'
import {changeCurrentPageAction,fetchRoomListAction} from '@/store/modules/entire/createAcions'
const EntirePagnation = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)
  const dispatch = useDispatch();
  const totalpage = Math.ceil(totalCount / 20)
  const start = currentPage * 20 + 1;
  const end = (currentPage + 1) * 20
  function handlechange(event, count) {
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(count-1))
    console.log(count);
  }
  return (
    <PagnationWarpper>
      {
        !!roomList.length&& <div className="info">
        <Pagination count={totalpage} onChange={handlechange}></Pagination>
        <div className='desc'>
          第 {start} - {end} 个房源, 共超过 {totalCount} 个
        </div>
      </div>
      }
    </PagnationWarpper>
  )
})

EntirePagnation.propTypes = {}

export default EntirePagnation