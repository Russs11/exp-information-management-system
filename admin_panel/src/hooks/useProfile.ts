import { adminService } from '@/services/admin.service'
import { useQuery } from '@tanstack/react-query'

export function useProfile() {
	
	const {data, isLoading } = useQuery({
		queryKey: ['currentProfile'],
		queryFn: ()=> adminService.getCurrentUserProfile()
	})
	
	return {data, isLoading}
}