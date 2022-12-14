import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './api/v1/auth/login'
import type { Methods as Methods2 } from './api/v1/category'
import type { Methods as Methods3 } from './api/v1/category/_id@string'
import type { Methods as Methods4 } from './api/v1/money-diary'
import type { Methods as Methods5 } from './api/v1/money-diary/_id@string'
import type { Methods as Methods6 } from './api/v1/money-diary/aggregate'
import type { Methods as Methods7 } from './api/v1/money-diary/month'
import type { Methods as Methods8 } from './api/v1/money-diary/search'
import type { Methods as Methods9 } from './api/v1/user'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/auth/login'
  const PATH1 = '/api/v1/category'
  const PATH2 = '/api/v1/money-diary'
  const PATH3 = '/api/v1/money-diary/aggregate'
  const PATH4 = '/api/v1/money-diary/month'
  const PATH5 = '/api/v1/money-diary/search'
  const PATH6 = '/api/v1/user'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    api: {
      v1: {
        auth: {
          login: {
            post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH0, POST, option).json(),
            $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH0}`
          }
        },
        category: {
          _id: (val3: string) => {
            const prefix3 = `${PATH1}/${val3}`

            return {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix3, GET, option).text(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix3, GET, option).text().then(r => r.body),
              patch: (option: { body: Methods3['patch']['reqBody'], config?: T | undefined }) =>
                fetch<Methods3['patch']['resBody'], BasicHeaders, Methods3['patch']['status']>(prefix, prefix3, PATCH, option).text(),
              $patch: (option: { body: Methods3['patch']['reqBody'], config?: T | undefined }) =>
                fetch<Methods3['patch']['resBody'], BasicHeaders, Methods3['patch']['status']>(prefix, prefix3, PATCH, option).text().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix3, DELETE, option).text(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix3, DELETE, option).text().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).text(),
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).text().then(r => r.body),
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH1}`
        },
        money_diary: {
          _id: (val3: string) => {
            const prefix3 = `${PATH2}/${val3}`

            return {
              put: (option: { body: Methods5['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix3, PUT, option).json(),
              $put: (option: { body: Methods5['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          aggregate: {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH3}`
          },
          month: {
            get: (option: { query: Methods7['get']['query'], headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH4, GET, option).json(),
            $get: (option: { query: Methods7['get']['query'], headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | undefined) =>
              `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          search: {
            get: (option: { query: Methods8['get']['query'], config?: T | undefined }) =>
              fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH5, GET, option).json(),
            $get: (option: { query: Methods8['get']['query'], config?: T | undefined }) =>
              fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods8['get']['query'] } | undefined) =>
              `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          get: (option?: { headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json(),
          $get: (option?: { headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
          post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json(),
          $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH2}`
        },
        user: {
          post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods9['post']['status']>(prefix, PATH6, POST, option).send(),
          $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods9['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH6}`
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
