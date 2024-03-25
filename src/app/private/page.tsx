import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'

export const runtime = 'edge';

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return <p>Hello {data.user.email}</p>
}