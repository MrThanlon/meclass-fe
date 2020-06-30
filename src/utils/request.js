/**
 * get/post package
 */

import conf from '../config'

/**
 * request API
 * @param url {string}
 * @param method {string}
 * @param data {Object}
 * @return {Promise}
 */
export default function request (url, method, data = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    if (conf.CORS) {
      xhr.withCredentials = true
    }
    xhr.onload = function () {
      if (xhr.status === 200) {
        if (xhr.getResponseHeader('Content-Type') === 'application/json') {
          const res = JSON.parse(xhr.response)
          if (res.code === 0) {
            resolve(res)
          } else {
            reject(res)
          }
        } else {
          reject(xhr.response)
        }
      } else {
        reject(xhr.responseText)
      }
    }
    xhr.onerror = xhr.onabort = function () {
      reject(xhr.responseText)
    }
    if (data instanceof FormData) {
      xhr.send(data)
    } else {
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(data))
    }
  })
}
