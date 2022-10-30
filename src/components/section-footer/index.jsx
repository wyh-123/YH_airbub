import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWarpper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'
const SectionFooter = memo((props) => {
    const { name } = props
    let showName = "查看全部"
    if (name) {
        showName = `查看更多${name}房源`
    }
    const navigate = useNavigate()
    function navto() {
        navigate('/entire')
    }
    return (
        <FooterWarpper name={name}>
            <span  className='text' onClick={navto}>{showName}</span>
            <IconMoreArrow />
        </FooterWarpper>
    )
})

SectionFooter.propTypes = {}

export default SectionFooter