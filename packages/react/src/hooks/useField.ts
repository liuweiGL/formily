import { useContext } from 'react'
import { GeneralField } from '@formily_eastcoal/core'
import { FieldContext } from '../shared'

export const useField = <T = GeneralField>(): T => {
  return useContext(FieldContext) as any
}
