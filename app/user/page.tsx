'use client'
import  { useState } from 'react'
import Loginform from '@/components/Loginform'
import Signinform from '@/components/Signinform'
import { Button } from '@/components/ui/button'

const user = () => {
    const [isLogin,setIsLogin] = useState(true)
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-slate-500'>
        <div className='mb-4'>
        <button className='text-sm' 
        onClick={(isLogin) => setIsLogin(!isLogin)}>
            {isLogin ? 'Need a account to create':'Loin with your current account'}
        </button>
        </div>
      {isLogin? <Loginform/> : <Signinform/>}
    </div>
  )
}

export default user
