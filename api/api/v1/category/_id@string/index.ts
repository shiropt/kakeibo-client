/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: string
  }

  patch: {
    status: 200
    resBody: string
    reqBody: Types.UpdateCategoryDto
  }

  delete: {
    status: 200
    resBody: string
  }
}
