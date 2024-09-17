import { adminService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export function useUserList() {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => adminService.getAll(),
    
  })

  useEffect(() => {
    if (isSuccess) {
      console.log('Data fetched succesfully')
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      console.log('Error fetching data')
    }
  }, [isError])

	return { data, isLoading } 
}
