import React from 'react'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'

type Props ={
  control: object,
  name: string,
  label: string,
}

const Formulario = (props: Props) => {
  const {control, name, label} = props

  return (

        <FormField
          control={control}
          name={name}
          render={({field}) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        >
        </FormField>

  )
}

export default Formulario
