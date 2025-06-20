import React, { Fragment } from 'react'
import { isFn } from '@formily_eastcoal/shared'
import { observer } from '@formily_eastcoal/reactive-react'
import { useForm } from '../hooks'
import { IFormSpyProps, ReactFC } from '../types'

export const FormConsumer: ReactFC<IFormSpyProps> = observer((props) => {
  const children = isFn(props.children) ? props.children(useForm()) : null
  return <Fragment>{children}</Fragment>
})

FormConsumer.displayName = 'FormConsumer'
