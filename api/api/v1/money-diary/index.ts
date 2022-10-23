/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    reqHeaders?: {
      userId: string
    } | undefined

    status: 200
    resBody: Types.MoneyDiaryGetResponse[]
  }

  post: {
    reqHeaders?: {
      userId: string
    } | undefined

    status: 201
    reqBody: Types.MoneyDiaryDto
  }
}
