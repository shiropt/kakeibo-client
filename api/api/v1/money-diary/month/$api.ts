import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/money-diary/month'
  const GET = 'GET'

  return {
    get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).send(),
    $get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).send().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
