'use client'
import { userService } from '@/services/user.service'
import { UserThread } from './components/userThread'


export function UserList() {
  interface IUser {
    name: string
    id: number
  }

  let threadsArr: JSX.Element[] = []

  let userArray: IUser[] = []

  for (let i = 0; i < 30; i++) {
    userArray.push({ name: 'Петров', id: i + 1 })
  }

  // let userArray2 = new Array(30).fill({ name: 'Ivanov', id: 1 })

  threadsArr = userArray.map((item, index) => {
    return <UserThread key={item.id} name={item.name} id={item.id} />
  })


  async function getUser() {
    const response = await userService.getProfile()
    console.log(response);
}

getUser()
  return (
    <div className='flex-auto justify-center p-0 overflow-auto h-screen md:p-12'>
      <div className='relative flex flex-col w-full break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border min-w-fit'>
        <div className='p-6 pb-0 mb-0 bg-white rounded-t-2xl'>
          <h6>Список пользователей</h6>
        </div>
        <div className='flex-auto px-0 pt-0 pb-2'>
          <div className='p-0'>
            <table className='items-center w-full mb-0 align-top border-gray-200 text-slate-500'>
              <thead className='align-bottom'>
                <tr>
                  <th className='px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                    Пользователь
                  </th>
                  <th className='px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                    Подразделение
                  </th>
                  <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                    Роль
                  </th>
                  <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                    Последняя запись
                  </th>
                  <th className='px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70'></th>
                </tr>
              </thead>
              <tbody>{threadsArr}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
