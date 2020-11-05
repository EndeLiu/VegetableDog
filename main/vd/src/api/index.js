import service from '../utils/request'

/**
 * 首页推荐hotitems
 */
export function getHotItems () {
  return service.request({
    url: '/api/hotitems',
    method: 'get'
  })
}

/**
 * 获取菜谱详情
 */
export function getReceipeDetails (name) {
  return service.request({
    url: '/api/receipe/details' + name,
    method: 'get'
  })
}

export function getReceipes (page, pageVol) {
  return service.request({
    url: `/api/receipe/lib?page=${page}&vol=${pageVol}`,
    method: 'get'
  })
}
