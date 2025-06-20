import { useContext } from 'react'
import { Form } from '@formily_eastcoal/core'
import { FormContext } from '../shared'

export const useForm = <T extends object = any>(): Form<T> => {
  return useContext(FormContext)
}
