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
    status: 201
    resBody: Types.MoneyDiary
    reqBody: Types.MoneyDiaryDto
  }
}
