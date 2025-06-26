import Register from '@/components/Pages/Auth/Register/Register'
import React, { Suspense } from 'react'

export const metadata = {
    title: 'Register | Medical Equipment',
    description: 'This is the registration page for our application',
    keywords: ['registration', 'page', 'example']
}
const RegisterPage = () => {
  return <div>
  <Suspense fallback={<div>Loading...</div>}>
   <Register />
</Suspense>
</div>
}

export default RegisterPage