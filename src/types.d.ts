/* eslint-disable @typescript-eslint/naming-convention */
import 'express'

/**
 * Extend Express' Responses `res.locals` with custom types
 *
 * @see https://stackoverflow.com/a/57509904/1238150
 */
declare module 'express' {
  export interface Response {
    locals: {
      /**
       * Example value on res.locals
       */
      message: string
    }
  }
}
