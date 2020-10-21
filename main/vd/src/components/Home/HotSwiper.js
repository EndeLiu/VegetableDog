import React from 'react'

import Cover from '../common/Cover'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination} from 'swiper'
import SwiperCore from 'swiper'
// import SwiperCore, {EffectCoverflow, EffectFade} from 'swiper';
// import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'

// SwiperCore.use([EffectCoverflow])
SwiperCore.use([Autoplay, Pagination])

class HotSwiper extends React.Component {
  constructor (prop) {
    super(prop)
    this.state = {
      curIndex: 0
    }
  }
  sliderChange = (e) => {
    this.setState({
      curIndex: e.realIndex
    })
  }
  swiperEvt = (e) => {

  }
  render () {
    const {items} = this.props
    const testRecipe = items.map((i, index) => {
      const getReceipeClass = (centerIndex, index) => {
        if (index === centerIndex) {
          return 'receipe-center'
        } else if (Math.abs(centerIndex - index) === 1 || 
          (centerIndex === 0 && index === items.length - 1) ||
          (centerIndex === items.length - 1 && index === 0)
          ) {
          return 'receipe-center-side'
        }
        return ''
      }
      // getReceipeClass(this.state.curIndex, index)
      return (
        <SwiperSlide key={index}>
          <div onClick={() => {this.props.clickItem(i)}} className={`receipe-index-item ${getReceipeClass(this.state.curIndex, index)}`}>    
            <span className="receipe-name">{i.name}</span>
            <Cover src={i.src} desc={i.desc}  />
          </div>
        </SwiperSlide>
      )
    })
    const paginationConfig = { 
      clickable: true,
      // bulletClass: 'swiper-pagination-bullet my-bullet',
      // bulletActiveClass: 'swiper-pagination-bullet-active'
    }
    
    if (testRecipe.length > 0) {
      return (
        <div>
          <div className="receipe-swiper-wrapper">
            <Swiper
              onSlideChangeTransitionEnd={this.sliderChange}
              autoplay={true}
              spaceBetween={20}
              slidesPerView={5}
              loop={true}
              centeredSlides={true}
              pagination={paginationConfig}
              effect="coverflow"
              onSlideChange={this.sliderChange}
              onSwiper={this.swiperEvt}
            >
              {testRecipe}
            </Swiper>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="receipe-swiper-wrapper">
        </div>
      </div>
    )
    
  }
}

export default HotSwiper
