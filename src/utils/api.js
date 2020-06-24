/**
 * API description
 */

import request from '../utils/request'
import conf from '../config'

const handler = {
  get (target, property) {
    if (property in target) {
      return target[property]
    }
    if ('_url' in target) {
      target._url += `/${property}`
    } else {
      target._url = `/${property}`
    }
    return new Proxy(target, handler)
  },
  apply (target, thisArg, argumentList) {
    const u = conf.baseURL + target._url
    target._url = ''
    return request(u, 'post', argumentList[0])
  }
}

export default new Proxy(() => {}, handler)
