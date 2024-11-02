import { adminService} from '@/services/admin.service'
import { IUser } from '@/types/auth.types'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useUserList() {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => adminService.getAll(),

  })

 
  const { push } = useRouter()
  
  
  useEffect(() => {
    if (isSuccess) {
      console.log('Data fetched succesfully')
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      console.log('Error fetching data')
      // authAdminService.logout()
      push('/auth')
    }
  }, [isError, push])

  return { data, isLoading }
}
