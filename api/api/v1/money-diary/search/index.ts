/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: {
      userId: string
    } | undefined

    query: {
      year: string
      month: string
    }

    status: 200
    resBody: Types.MoneyDiaryGetResponse[]
  }
}
