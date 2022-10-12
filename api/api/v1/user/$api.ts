import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/user'
  const GET = 'GET'
  const POST = 'POST'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).send(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    post: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
    $post: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
