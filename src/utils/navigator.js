import Taro from "@tarojs/taro"

const route = (name, {redirect, packages, params}) => {
  const prefixPath = packages ? `${packages}-packages` : "pages"
  const suffixPath = 'index'
  const url = `/${prefixPath}/${name}/${suffixPath}`
  const method = redirect ? Taro.redirectTo : Taro.navigateTo
  let query = params ? queryStringify(params) : ''
  if (query) {
    query = `?${query}`
  }
  method({
    url: `${url}${query}`
  })
}

const queryStringify = (params ) => {
  const query = Object.keys(params).reduce((acc, key) => {
    const value = params[key]
    if (typeof value === 'string' || typeof value === 'number') {
      return `${acc}${key}=${value}&`
    }
    return acc
  }, '')
  // remove the '&' in trail
  return query.slice(0, -1)
}

export const login = () => {
  // @ts-ignore
  route('Login', {redirect: true})
}