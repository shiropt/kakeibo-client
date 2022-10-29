import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './category'
import type { Methods as Methods1 } from './category/_id@string'
import type { Methods as Methods2 } from './money-diary'
import type { Methods as Methods3 } from './money-diary/_id@string'
import type { Methods as Methods4 } from './money-diary/month'
import type { Methods as Methods5 } from './money-diary/search'
import type { Methods as Methods6 } from './user'
import type { Methods as Methods7 } from './user/_id@string'

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
    category: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).send(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods1['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods1['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    money_diary: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          put: (option: { body: Methods3['put']['reqBody'], headers?: Methods3['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods3['put']['reqBody'], headers?: Methods3['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      month: {
        get: (option: { query: Methods4['get']['query'], headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json(),
        $get: (option: { query: Methods4['get']['query'], headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | undefined) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      search: {
        get: (option: { query: Methods5['get']['query'], headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH3, GET, option).json(),
        $get: (option: { query: Methods5['get']['query'], headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | undefined) =>
          `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      get: (option?: { headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).send(),
      $post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    user: {
      _id: (val1: string) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).send(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH4, POST, option).send(),
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH4, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
