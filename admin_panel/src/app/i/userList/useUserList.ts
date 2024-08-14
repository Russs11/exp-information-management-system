import { userService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export function useUserList() {
	
	const { data } = useQuery({
		queryKey:['users'],
		queryFn: () => userService.getAll()
	}) 	
	return data
}