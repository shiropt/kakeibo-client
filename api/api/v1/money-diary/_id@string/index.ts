/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  put: {
    reqHeaders?: {
      userId: string
    } | undefined

    status: 200
    reqBody: Types.MoneyDiaryDto
  }

  delete: {
    status: 200
  }
}
