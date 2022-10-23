import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './v1/money-diary'
import type { Methods as Methods1 } from './v1/money-diary/_id@string'
import type { Methods as Methods2 } from './v1/money-diary/month'
import type { Methods as Methods3 } from './v1/money-diary/search'
import type { Methods as Methods4 } from './v1/user'
import type { Methods as Methods5 } from './v1/user/_id@string'

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
    v1: {
      money_diary: {
        _id: (val2: string) => {
          const prefix2 = `${PATH0}/${val2}`

          return {
            put: (option: { body: Methods1['put']['reqBody'], headers?: Methods1['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods1['put']['reqBody'], headers?: Methods1['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        month: {
          get: (option: { query: Methods2['get']['query'], headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
          $get: (option: { query: Methods2['get']['query'], headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
            `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        search: {
          get: (option: { query: Methods3['get']['query'], headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
          $get: (option: { query: Methods3['get']['query'], headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods3['get']['query'] } | undefined) =>
            `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
        $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      },
      user: {
        _id: (val2: string) => {
          const prefix2 = `${PATH3}/${val2}`

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, prefix2, GET, option).send(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, prefix2, GET, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH3, POST, option).send(),
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
