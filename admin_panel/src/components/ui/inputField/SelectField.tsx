import { ISelectFieldProps } from './SelectFieldProps'

export const SelectField = ({
  id,
  name,
  label,
  autoComplete,
  ...props
}: ISelectFieldProps): JSX.Element => {

  const unitsOptionArr: string[] = [
    'ОМВД по Евпатории',
    'ОП №2 Кевский',
    'ОП №3 Центральный',
  ]

  


  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {label}
      </label>
      <div className='mt-2'>
        <select
          id={id}
          name={name}
          autoComplete={autoComplete}
          required
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 outline-none'
          {...props}
        >
          { unitsOptionArr.map((option, index) => (
                <option key={index}>{option}</option>
              ))
						}
        </select>
      </div>
    </div>
  )
}
