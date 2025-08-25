import { authAdminService } from '@/services/auth-admin.service'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'
import { Button } from '../buttons/Button'
import { IUser } from '@/types/auth.types'

interface IUserMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data?: IUser
  }

export const UserMenu = forwardRef<HTMLDivElement, IUserMenuProps>(
  ({data, ...props }, ref) => {
    const { push } = useRouter()

    const { mutate } = useMutation({
      mutationKey: ['logout'],
      mutationFn: () => authAdminService.logout(),
      onSuccess() {
        push('/auth')
      },
    })
  
    return (
      <div
        className='absolute right-0 z-10 mt-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu-button'
        tabIndex={-1}
        ref={ref}
      >
        <Link
          href={`/i/getUserProfile/?id=${data?.id}`}
          className='block px-4 py-2 text-sm text-gray-700'
          role='menuitem'
          tabIndex={-1}
        >
          Профиль
        </Link>
        <Button
          className='block px-4 py-2 text-sm text-gray-700'
          onClick={() => mutate()}
        >
          Выйти
        </Button>
      </div>
    )
  }
)
UserMenu.displayName = 'UserMenu'
