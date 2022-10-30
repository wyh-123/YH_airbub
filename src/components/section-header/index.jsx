import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeadWarpper } from './style'
const SectionHeader = memo((props) => {
    return (
        <HeadWarpper>
            <h2>{props.title}</h2>
            <div className='bottom'>{props.subtitlt }</div>
      </HeadWarpper>
  )
})
SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitlt:PropTypes.string
}
export default SectionHeader
