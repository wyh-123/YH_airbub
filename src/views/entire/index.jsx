import React, { memo, useEffect } from 'react'
import { EntireWarpper } from './style'
import EntireFilter from './cpns/entire-filter'
import EntireRooms from './cpns/entire-rooms'
import EntirePagnation from './cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { fetchRoomListAction } from '@/store/modules/entire/createAcions'
const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])
  return (
    <EntireWarpper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagnation></EntirePagnation>
    </EntireWarpper>
  )
})

export default Entire