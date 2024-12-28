import { useEffect, useState, useRef } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import arcade from'../assets/images/icon-arcade.svg'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { string, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from '@radix-ui/react-label'

const formSchema = z.object({
  plan: z.enum(['arcade', 'advanced', 'pro']),
  isMonthly: z.boolean().default(true)
})

const Second = () => {
  const [m, setM] = useState(false)
  const plans = [{
    // icon: '../assets/images/icon-arcade.svg',
    icon: arcade,
    title: 'Arcade',
    cost: !m ? '$9/mo' : '$90/yr',
    promo: !m ? '2 months free' : '',
    value: 'arcade'
  },
  {
    // icon: '../assets/images/icon-advanced.svg',
    icon: advanced,
    title: 'Advanced',
    cost: !m ? '$12/mo' : '$120/yr',
    promo: !m ? '2 months free' : '',
    value: 'advanced'
  },
  {
    // icon: '../assets/images/icon-pro.svg',
    icon: pro,
    title: 'Pro',
    cost: !m ? '$15/mo' : '$150/yr',
    promo: !m ? '2 months free' : '',
    value: 'pro'
  }
  ]
  const [chosed, setChosed] = useState<string | null>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        isMonthly: true
    },
  })
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }
  const onError = (e) => {
    console.error(e)
  }
  const click = (i: string) => {
    setChosed(i)
  }
  const cooldownRef = useRef(false)
  const handleClick = (id: any) => {
    if(cooldownRef.current) return
    click(id)
    cooldownRef.current = true
    //for some reason it kept firing click() multiple times with just one click, so ill set this timeout :/
    setTimeout(()=>{
      cooldownRef.current = false
    }, 400)
  }
  const cdMonthly = useRef(false)
  const handleMonthly = (value: boolean) =>{
    if(cdMonthly.current) return
    setM(!value)
    cdMonthly.current = true
    setTimeout(()=>{
      cdMonthly.current = false
    }, 400)
  }
  useEffect(()=>{
    // if(form.getValues('isMonthly')===undefined){ 
    //   form.setValue("isMonthly", false)
    // }
    // console.log(form.getValues('isMonthly'))
    // console.log(m)
  }, [m])
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)}>
        <FormField
          control={form.control}
          name='plan'
          render={({field})=>(
            <FormItem>
              <FormControl>
                <RadioGroup
                  className='flex gap-5'
                  onValueChange={field.onChange}
                >
                  {plans.map((plan, index)=>(
                    <FormItem key={index}>
                      <FormControl>
                        <Card className={`hover:border-black ${chosed===plan.value ? 'border-blue-700' : 'border'}`}  onClick={()=>handleClick(plan.value)}>
                          <RadioGroupItem id={plan.title} className={`hidden checked:[check]`} value={plan.value} />
                          <Label htmlFor={plan.title}>
                          <CardHeader>
                            <Avatar>
                              <AvatarImage src={plan.icon} />
                              <AvatarFallback>{plan.title}</AvatarFallback>
                            </Avatar>
                          </CardHeader>
                          <CardContent>
                            <CardTitle>{plan.title}</CardTitle>
                            <CardDescription>{plan.cost}</CardDescription>
                          </CardContent>
                          </Label>
                        </Card>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        >
        </FormField>
        <FormField
          control={form.control}
          name='isMonthly'
          render={({field})=> (
            <FormItem className='flex justify-center align-center'>
              <div>
              <span className='text-md'>UwU</span>
              <FormControl>
                <Switch
                  id='switch'
                  onClick={()=>handleMonthly(field.value)}
                  className='data-[state=unchecked]:bg-gray-700 mx-5'
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <span className='text-md'>OwO</span>
              </div>
            </FormItem>
          )}
        >
        </FormField>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  ) 
}

export default Second
