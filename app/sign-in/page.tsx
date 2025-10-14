import { SignIn } from '@stackframe/stack'
import Link from 'next/link'
import React from 'react'

function SignInPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100'>
        <div className='max-w-md w-full space-y-8' >
            <SignIn/>
            <Link href="/">Home Page</Link>
        </div>
    </div>
  )
}

export default SignInPage