import React from 'react'
import { CardHeader, CardTitle } from './ui/card'
import { string } from 'zod'
type p={
  title: string
}
const CTitle = (props: p) => {
  const {title} = props
  return (
      <CardHeader>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
      </CardHeader>
  )
}

export default CTitle
