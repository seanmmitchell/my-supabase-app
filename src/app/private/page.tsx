import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'

export const runtime = 'edge';

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    console.log("Authentication Error: " + error?.message)
    redirect('/error')
  }

  return (
    <div className="container">
      <div className="container naax-w-screen-sm mx-auto">
        <p>Hello {data.user.email}</p>
        
      </div>
    </div>
  )
}