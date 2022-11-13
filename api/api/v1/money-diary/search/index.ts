/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      year: string
      month: string
      orderByDate: string
      orderByIncomeAndExpenditure: string
    }

    status: 200
    resBody: Types.MoneyDiaryGetResponse[]
  }
}
