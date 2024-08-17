import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { UserProfileButton } from '../buttons/UserProfileButton'
import { UserMenu } from './UserMenu'

interface IProfile 
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement > {}



export const Profile = ({...props}:IProfile): JSX.Element => {
	const [isUserMenu, setIsUserMenu] = useState<boolean>(false)
	
	return (
    <div className='relative ml-3'>
      <UserProfileButton
        onClick={() => setIsUserMenu(true)}
        onMouseLeave={() => setTimeout(() => setIsUserMenu(false), 5000)}
      />
      {isUserMenu && <UserMenu />}
    </div>
  )
}