/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  post: {
    status: 201
    resBody: string
    reqBody: Types.CreateCategoryDto
  }

  get: {
    status: 200
    resBody: Types.Category[]
  }
}
