import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './api/v1/category'
import type { Methods as Methods2 } from './api/v1/category/_id@string'
import type { Methods as Methods3 } from './api/v1/money-diary'
import type { Methods as Methods4 } from './api/v1/money-diary/_id@string'
import type { Methods as Methods5 } from './api/v1/money-diary/month'
import type { Methods as Methods6 } from './api/v1/money-diary/search'
import type { Methods as Methods7 } from './api/v1/user'
import type { Methods as Methods8 } from './api/v1/user/_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/category'
  const PATH1 = '/api/v1/money-diary'
  const PATH2 = '/api/v1/money-diary/month'
  const PATH3 = '/api/v1/money-diary/search'
  const PATH4 = '/api/v1/user'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    api: {
      v1: {
        category: {
          _id: (val3: string) => {
            const prefix3 = `${PATH0}/${val3}`

            return {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, prefix3, GET, option).send(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
              patch: (option: { body: Methods2['patch']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods2['patch']['status']>(prefix, prefix3, PATCH, option).send(),
              $patch: (option: { body: Methods2['patch']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods2['patch']['status']>(prefix, prefix3, PATCH, option).send().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH0, POST, option).send(),
          $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH0}`
        },
        money_diary: {
          _id: (val3: string) => {
            const prefix3 = `${PATH1}/${val3}`

            return {
              put: (option: { body: Methods4['put']['reqBody'], headers?: Methods4['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, prefix3, PUT, option).send(),
              $put: (option: { body: Methods4['put']['reqBody'], headers?: Methods4['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          month: {
            get: (option: { query: Methods5['get']['query'], headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH2, GET, option).json(),
            $get: (option: { query: Methods5['get']['query'], headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | undefined) =>
              `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          search: {
            get: (option: { query: Methods6['get']['query'], headers?: Methods6['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json(),
            $get: (option: { query: Methods6['get']['query'], headers?: Methods6['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods6['get']['query'] } | undefined) =>
              `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          get: (option?: { headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH1, GET, option).json(),
          $get: (option?: { headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
          post: (option: { body: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, PATH1, POST, option).send(),
          $post: (option: { body: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH1}`
        },
        user: {
          _id: (val3: string) => {
            const prefix3 = `${PATH4}/${val3}`

            return {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods8['get']['status']>(prefix, prefix3, GET, option).send(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods8['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, PATH4, POST, option).send(),
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, PATH4, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH4}`
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
