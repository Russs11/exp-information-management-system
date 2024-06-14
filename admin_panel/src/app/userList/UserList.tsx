'use client'

export function UserList() {
  return (
    <div className='flex-auto justify-center p-0 overflow-auto h-screen md:p-12'>
      <div className='relative flex flex-col w-full mb-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border min-w-fit'>
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
                    Статус
                  </th>
                  <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                    Последняя запись
                  </th>
                  <th className='px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <div className='flex px-2 py-1'>
                      <div>
                        <img
                          src='./image/Ivanov.jpg'
                          className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-in-out text-sm h-9 w-9 rounded-xl'
                          alt='user1'
                        />
                      </div>
                      <div className='flex flex-col justify-center'>
                        <h6 className='mb-0 leading-normal text-sm'>
                          Иванов Иван
                        </h6>
                        <p className='mb-0 leading-tight text-xs text-slate-400'>
                          Иванович
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <p className='mb-0 font-semibold leading-tight text-xs'>
                      ОМВД по Евпатории
                    </p>
                    <p className='mb-0 leading-tight text-xs text-slate-400'>
                      Эксперт
                    </p>
                  </td>
                  <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent'>
                    <span className='bg-gradient-to-tl from-emerald-500 to-teal-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
                      Online
                    </span>
                  </td>
                  <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <span className='font-semibold leading-tight text-xs text-slate-400'>
                      23.04.24
                    </span>
                    <span className='font-semibold leading-tight text-xs text-slate-400'>
                      в 23:05
                    </span>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <a
                      href='javascript:;'
                      className='font-semibold leading-tight text-xs text-slate-400'
                    >
                      {' '}
                      Редакт.{' '}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <div className='flex px-2 py-1'>
                      <div>
                        <img
                          src='./image/Sidorov.jpg'
                          className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-in-out text-sm h-9 w-9 rounded-xl'
                          alt='user2'
                        />
                      </div>
                      <div className='flex flex-col justify-center'>
                        <h6 className='mb-0 leading-normal text-sm'>
                          Сидоров Пётр
                        </h6>
                        <p className='mb-0 leading-tight text-xs text-slate-400'>
                          Петрович
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <p className='mb-0 font-semibold leading-tight text-xs'>
                      ОП №2 Киевский
                    </p>
                    <p className='mb-0 leading-tight text-xs text-slate-400'>
                      Старший эксперт
                    </p>
                  </td>
                  <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent'>
                    <span className='bg-gradient-to-tl from-slate-600 to-slate-300 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
                      Offline
                    </span>
                  </td>
                  <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <span className='font-semibold leading-tight text-xs text-slate-400'>
                      23.04.24
                    </span>
                    <span className='font-semibold leading-tight text-xs text-slate-400'>
                      в 16:30
                    </span>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <a
                      href='javascript:;'
                      className='font-semibold leading-tight text-xs text-slate-400'
                    >
                      {' '}
                      Редакт{' '}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <div className='flex px-2 py-1'>
                      <div>
                        <img
                          src='./image/Petrov_cr.jpg'
                          className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-in-out text-sm h-9 w-9 rounded-xl'
                          alt='user1'
                        />
                      </div>
                      <div className='flex flex-col justify-center'>
                        <h6 className='mb-0 leading-normal text-sm'>
                          Петров Иван
                        </h6>
                        <p className='mb-0 leading-tight text-xs text-slate-400'>
                          Сергеевич
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <p className='mb-0 font-semibold leading-tight text-xs'>
                      ОМВД по Бахчисарайскому р-ну
                    </p>
                    <p className='mb-0 leading-tight text-xs text-slate-400'>
                      Эксперт
                    </p>
                  </td>
                  <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent'>
                    <span className='bg-gradient-to-tl from-emerald-500 to-teal-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
                      Online
                    </span>
                  </td>
                  <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <span className='font-semibold leading-tight text-xs text-slate-400'>
                      23.04.24
                    </span>
                    <span className='font-semibold leading-tight text-xs text-slate-400'>
                      в 20:45
                    </span>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <a
                      href='javascript:;'
                      className='font-semibold leading-tight text-xs text-slate-400'
                    >
                      {' '}
                      Редакт.{' '}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <div className='flex px-2 py-1'>
                      <div>
                        <img
                          src='./image/Petrova.jpg'
                          className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-in-out text-sm h-9 w-9 rounded-xl'
                          alt='user1'
                        />
                      </div>
                      <div className='flex flex-col justify-center'>
                        <h6 className='mb-0 leading-normal text-sm'>
                          Петрова Светлана
                        </h6>
                        <p className='mb-0 leading-tight text-xs text-slate-400'>
                          Петровна
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <p className='mb-0 font-semibold leading-tight text-xs'>
                      ОМВД по Евпатории
                    </p>
                    <p className='mb-0 leading-tight text-xs text-slate-400'>
                      Эксперт
                    </p>
                  </td>
                  <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent'>
                    <span className='bg-gradient-to-tl from-emerald-500 to-teal-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
                      Online
                    </span>
                  </td>
                  <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <span className='font-semibold leading-tight text-xs text-slate-400'>
                      23.04.24
                    </span>
                    <span className='font-semibold leading-tight text-xs text-slate-400'>
                      в 00:05
                    </span>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                    <a
                      href='javascript:;'
                      className='font-semibold leading-tight text-xs text-slate-400'
                    >
                      {' '}
                      Редакт.{' '}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
