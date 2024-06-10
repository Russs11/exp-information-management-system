import Link from 'next/link'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface IUserMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}


	export const UserMenu = ({
    ...props
  }: IUserMenuProps): JSX.Element => {
    return (
      <div
        className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu-button'
        tabIndex={-1}
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
        <Link href='/auth' className='block px-4 py-2 text-sm text-gray-700'>
          Выйти
        </Link>
      </div>
    )
  }