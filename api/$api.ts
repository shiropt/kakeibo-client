import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './api/v1/money-diary'
import type { Methods as Methods2 } from './api/v1/money-diary/_id@string'
import type { Methods as Methods3 } from './api/v1/money-diary/month'
import type { Methods as Methods4 } from './api/v1/money-diary/search'
import type { Methods as Methods5 } from './api/v1/user'
import type { Methods as Methods6 } from './api/v1/user/_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/money-diary'
  const PATH1 = '/api/v1/money-diary/month'
  const PATH2 = '/api/v1/money-diary/search'
  const PATH3 = '/api/v1/user'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    api: {
      v1: {
        money_diary: {
          _id: (val3: string) => {
            const prefix3 = `${PATH0}/${val3}`

            return {
              put: (option: { body: Methods2['put']['reqBody'], headers?: Methods2['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, prefix3, PUT, option).send(),
              $put: (option: { body: Methods2['put']['reqBody'], headers?: Methods2['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          month: {
            get: (option: { query: Methods3['get']['query'], headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH1, GET, option).json(),
            $get: (option: { query: Methods3['get']['query'], headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods3['get']['query'] } | undefined) =>
              `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          search: {
            get: (option: { query: Methods4['get']['query'], headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json(),
            $get: (option: { query: Methods4['get']['query'], headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | undefined) =>
              `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).json(),
          $get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
          post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH0, POST, option).send(),
          $post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH0}`
        },
        user: {
          _id: (val3: string) => {
            const prefix3 = `${PATH3}/${val3}`

            return {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, prefix3, GET, option).send(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH3, POST, option).send(),
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH3}`
        }
      }
    },
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, '', GET, option).send(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, '', GET, option).send().then(r => r.body),
    $path: () => `${prefix}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
