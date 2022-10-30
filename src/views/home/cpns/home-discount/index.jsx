import PropTypes from 'prop-types'
import React, { memo, useState, useCallback, useEffect, useRef } from 'react'
import { DiscountWarpp } from './style'
import SectionHeader from '@/components/section-header'
import Tab from '@/components/app-tabs'
import HomeData from '../home-data'
import SectionFooter from '@/components/section-footer'
const HomeDiscount = memo((props) => {
    const [name, setName] = useState(props.initname)
    const [TabName, setTabName] = useState(props.initname)
    // const TabNames = props.maindata.dest_address.map(item => item.name)
    const [TabNames, setTabNames] = useState([])
    useEffect(() => {
        setTabNames(props.maindata.dest_address.map(item => item.name))
    }, [])
    const Tabclick = useCallback(function (index, name) {
        setTabName(name)
        setName(name)
    }, [TabName])
    return (
        <DiscountWarpp>
            <SectionHeader title={props.maindata.title} subtitlt={props.maindata.subtitle}></SectionHeader>
            <Tab TabNames={TabNames} Tabclick={Tabclick}></Tab>
            {props.maindata.dest_list && <HomeData maindata={props.maindata.dest_list[TabName]} itemWidth='33.3%'></HomeData>}
            {name && <SectionFooter name={name}></SectionFooter>}
        </DiscountWarpp>
    )
})

HomeDiscount.propTypes = {
    maindata: PropTypes.object,
    initname: PropTypes.string
}

export default HomeDiscount