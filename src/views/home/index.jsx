import { fetchHomeDataFn } from '@/store/modules/home'
import React, { memo, useEffect,useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './cpns/home-banner'
import { HomeWarpp } from './cpns/style'
import SectionHeader from '@/components/section-header'
import HomeData from './cpns/home-data'
import HomeDiscount from './cpns/home-discount'
import SectionFooter from '@/components/section-footer'
import HomeLongFor from './cpns/home-longfor'
import HomeSectionV3 from './cpns/home-section-v3/index'
import { changeHeaderConfigAction } from '@/store/modules/main'
const Home = memo(() => {
  const [name, setName] = useState("")
  const { goodsPriceInfo, highScoreInfo, discountInfo, hotrecommenddest,longForInfo,plusInfo } = useSelector(state => {
    return {
      goodsPriceInfo: state.home.goodPrice,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotrecommenddest: state.home.hotrecommenddest,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    }
  }, shallowEqual)

  const dispath = useDispatch()
  useEffect(() => {
    dispath(fetchHomeDataFn())
    dispath(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [])
  return (
    <HomeWarpp>
      <HomeBanner></HomeBanner>
      <div className="content">
        {/*折扣数据*/}
        {discountInfo.dest_address && <HomeDiscount maindata={discountInfo} initname={discountInfo.dest_address[0].name}></HomeDiscount>}
        {/*热门推荐数据*/}
        {hotrecommenddest.dest_address && <HomeDiscount maindata={hotrecommenddest} initname={hotrecommenddest.dest_address[0].name}></HomeDiscount>}
        {longForInfo&&<HomeLongFor infoData={longForInfo}></HomeLongFor>}
        {/*佛山高性价比房源数据*/}
        <SectionHeader title={goodsPriceInfo.title}></SectionHeader>
        {goodsPriceInfo.list && <HomeData maindata={goodsPriceInfo.list.slice(0, 8)} itemWidth='25%'></HomeData>}
        <SectionFooter name={name}></SectionFooter>
        {/*佛山高分好评房源数据*/}
        <SectionHeader title={highScoreInfo.title} subtitlt={highScoreInfo.subtitle}></SectionHeader>
        {highScoreInfo.list && <HomeData maindata={highScoreInfo.list.slice(0, 8)} itemWidth='25%'></HomeData>}
        <SectionFooter name={name}></SectionFooter>
        <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>
      </div>
    </HomeWarpp>
  )
})

export default Home