import { authAdminService } from '@/services/auth-admin.service'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'
import { Button } from '../buttons/Button'
interface IUserMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const UserMenu = forwardRef<HTMLDivElement, IUserMenuProps>(
  ({ ...props }, ref) => {
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
        className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu-button'
        tabIndex={-1}
        ref={ref}
      >
        <a
          href='#'
          className='block px-4 py-2 text-sm text-gray-700'
          role='menuitem'
          tabIndex={-1}
          id='user-menu-item-0'
        >
          Профиль
        </a>
        <a
          href='#'
          className='block px-4 py-2 text-sm text-gray-700'
          role='menuitem'
          tabIndex={-1}
          id='user-menu-item-1'
        >
          Настройки профиля
        </a>
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
