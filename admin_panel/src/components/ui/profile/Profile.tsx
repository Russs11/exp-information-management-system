import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { UserProfileButton } from '../buttons/UserProfileButton'
import { UserMenu } from './UserMenu'
import { useOutside } from '@/hooks/useOutside'

interface IProfile 
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement > {}



export const Profile = ({...props}:IProfile): JSX.Element => {
	const [isUserMenu, setIsUserMenu] = useState<boolean>(false)
	const {isShow, ref, setisShow} = useOutside(false)


	return (
    <div className='relative ml-3'>
      <UserProfileButton
        onClick={() => setisShow(!isShow)}
      />
      {isShow && <UserMenu ref={ref} />}
    </div>
  )
}