import { forwardRef } from 'react'
import { IInputFieldProps } from './InputFieldProps'


export const InputField = forwardRef<HTMLInputElement, IInputFieldProps>(
  (
    { type, id, name, label, placeholder, autoComplete, isNumber, ...props },
    ref
  ) => {

    return (
      <div>
        <label
          htmlFor={id}
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          {label}
        </label>
        <div className='mt-2'>
          <input
            ref={ref}
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            placeholder={placeholder}
            required
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 outline-none'
            onKeyDown={event => {
              if (
                isNumber &&
                !/[0-9]/.test(event.key) &&
                event.key !== 'Backspace' &&
                event.key !== 'Tab' &&
                event.key !== 'Enter' &&
                event.key !== 'ArrowLeft' &&
                event.key !== 'ArrowRight'
              ) {
                event.preventDefault()
              }
            }}
            {...props}
          />
        </div>
      </div>
    )
  }
)
InputField.displayName = 'inputField'

