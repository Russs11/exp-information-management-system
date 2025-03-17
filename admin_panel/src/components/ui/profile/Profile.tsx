import { useOutside } from '@/hooks/useOutside'
import { IUser } from '@/types/auth.types'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { UserProfileButton } from '../buttons/UserProfileButton'
import { UserMenu } from './UserMenu'

interface IProfile
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data?: IUser
}

export const Profile = ({ data, ...props }: IProfile): JSX.Element => {
  const { isShow, ref, setisShow } = useOutside(false)

  return (
    <div className='flex relative ml-3'>
      <UserProfileButton data={data} onClick={() => setisShow(!isShow)} />
      {isShow && <UserMenu data={data} ref={ref} />}
      <div className='ml-3'>
        <div className='text-base font-medium leading-none text-white'>
          {data?.name}
        </div>
        <div className='text-sm font-medium leading-none text-gray-400'>
          {data?.login}
        </div>
      </div>
    </div>
  )
}
