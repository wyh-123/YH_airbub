import React, { memo, useEffect } from 'react'
import { DeatilWarpper } from './style'
import Picture from './cpns/pictures'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { useDispatch } from 'react-redux'
const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])
  return (
    <DeatilWarpper>
      <Picture></Picture>
    </DeatilWarpper>
  )
})

export default Detail