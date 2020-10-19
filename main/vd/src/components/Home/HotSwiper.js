import React from 'react'
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
    console.log(e)
  }


  render () {
    const testRecipeList = [
      {
        src: '//ali.xinshipu.cn/20170806/original/1501990705768.jpg@288w_216h_50q_1e_1c.jpg',
        name: '冬瓜薏米排骨汤',
        desc: '这里是描述内容'
      },
      {
        src: '//ali.xinshipu.cn/20100810/original/1281402577750.jpg@288w_216h_99q_1e_1c.jpg',
        name: '地锅鸡',
        desc: '这里是描述内容'
      },
      {
        src: '//ali.xinshipu.cn/20100310/original/1268202924157.jpg@288w_216h_99q_1e_1c.jpg',
        name: '东北锅包肉',
        desc: '这里是描述内容'
      },
      {
        src: '//ali.xinshipu.cn/20100325/original/1269479876754.jpg@288w_216h_99q_1e_1c.jpg',
        name: '锅包肉版糖醋里脊',
        desc: '这里是描述内容'
      },
      {
        src: '//ali.xinshipu.cn/20121017/original/1350477964699.jpg@288w_216h_99q_1e_1c.jpg',
        name: '香辣虾',
        desc: '这里是描述内容'
      }
    ]
    const testRecipe = testRecipeList.map((i, index) => {
      const getReceipeClass = (centerIndex, index) => {
        console.log(testRecipeList[centerIndex].name, testRecipeList[index].name)
        if (index === centerIndex) {
          return 'receipe-center'
        } else if (Math.abs(centerIndex - index) === 1 || 
          (centerIndex === 0 && index === testRecipeList.length - 1) ||
          (centerIndex === testRecipeList.length - 1 && index === 0)
          ) {
          return 'receipe-center-side'
        }
        return ''
      }
      // getReceipeClass(this.state.curIndex, index)
      return (
        <SwiperSlide key={index}>
          <div className={`receipe-index-item ${getReceipeClass(this.state.curIndex, index)}`}>    
            <span className="receipe-name">{i.name}</span>
            <div className="receipe-cover">     
              <img src={i.src} alt=""></img>
              <div className='receipe-desc'>{i.desc}</div>
            </div>
          </div>
          
        </SwiperSlide>
      )
    })
    const paginationConfig = { 
      clickable: true,
      // bulletClass: 'swiper-pagination-bullet my-bullet',
      // bulletActiveClass: 'swiper-pagination-bullet-active'
    }
    return (
      <div>
        <div className="receipe-swiper-wrapper">
          <Swiper
            onSlideChangeTransitionEnd={this.sliderChange}
            autoplay={false}
            spaceBetween={10}
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
}

export default HotSwiper
