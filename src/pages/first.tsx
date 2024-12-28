import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import Formulario from '@/components/formulario'
const formSchema = z.object({
  name: z.string().min(1, {message: 'This field is required'}),
  email: z.string().min(1, {message: 'This field is required'}).email({message: 'Must be a valid email'}),
  phone: z.string().min(1, {message: 'This field is required'})
})

const First = ({onFormSubmit}) => {
  // const [entry, setEntry] = useState({})

  // const {register, handleSubmit, formState: {errors}} = useForm({
  //   resolver: zodResolver(formSchema),
  // })  
  // const onSubmit = (data: any) => {
  //   console.log('uwu')
  //   console.log(data)
  //   setEntry(data)
  //   console.log(entry)
  // }
  // const onError = (error: any) => {
  //   console.error(error)
  // }

  // return (
  //   <form onSubmit={handleSubmit(onSubmit, onError)}>
  //     <Label htmlFor='nome'>Name</Label>
  //     <Input id='nome' {...register('name')}/>

  //     <Label htmlFor='email'>Email Address</Label>
  //     <Input id='email' {...register('email')}/>
  //     
  //     <Label htmlFor='phone'>Phone Number</Label>
  //     <Input id='phone' {...register('phone')}/>
  //     <button type='submit'>Next Step</button>
  //   </form>
  // )
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:'',
      email:'',
      phone:''
    }
  })
  const onSubmit = (data: Object) => {
    // console.log(data)
    onFormSubmit(data, 2)
  }
  const onError = (e: Object) => {
    console.error(e)
  }
  return (
    <Form {...form}>
      <form className='max-w-sm grid gap-4' onSubmit={form.handleSubmit(onSubmit, onError)}>
        {/* <FormField */}
        {/*   control={form.control} */}
        {/*   name='name' */}
        {/*   render={({field}) => ( */}
        {/*     <FormItem> */}
        {/*       <FormLabel>Username</FormLabel> */}
        {/*       <FormControl> */}
        {/*         <Input placeholder="shadcn" {...field} /> */}
        {/*       </FormControl> */}
        {/*       <FormDescription> */}
        {/*         This is your public display name. */}
        {/*       </FormDescription> */}
        {/*       <FormMessage /> */}
        {/*     </FormItem> */}
        {/*   )} */}
        {/* > */}
        {/* </FormField> */}
        <Formulario control={form.control} name="name" label="Name" />
        <Formulario control={form.control} name='email' label='Email'/>
        <Formulario control={form.control} name='phone' label='Phone Number'/>

        <div className='flex justify-end'>
          <Button type='submit'>Next Step</Button>
        </div>
      </form>
    </Form>
  )

}

export default First
