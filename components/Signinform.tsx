'use client'
import React from 'react'
import { useState } from 'react'
import { Card, CardContent,CardDescription,CardHeader,CardTitle} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Signinform = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const hundleSubmit = (e:React.FormEvent) =>
    {
        e.preventDefault()
        console.log("Login attempt with",{email,password})
    };
  return (
    <Card className='w-[350px]'>
        <CardHeader>
            <CardTitle>
                Signin
            </CardTitle>
            <CardDescription>
                Credientials enter to access your account
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={hundleSubmit}
            className='space-y-4'>
                <div className='space-y-2'>
                    <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                </div>
                <div className='space-y-2'> 
                <input
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
                </div>
                <div className='space-y-2'>
                <input
                type='confirmPassword'
                value={confirmPassword}
                placeholder='Enter password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                required/>
                </div>
                <Button type='submit' className='w-full' 
                onClick={() => alert('Thanks for Signin!')}>
                    Signin
                </Button>
            </form>
        </CardContent>
    </Card>
  )
}

export default Signinform
