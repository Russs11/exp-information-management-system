import { useState } from 'react';
import { IButtonProps } from './ButtonProps'

export const Logout = ({
  children,
  className,
  ...props
}: IButtonProps): JSX.Element => {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  let timer: NodeJS.Timeout;

  const handleMouseEnter = () => {
    // Запускаем отображение через небольшую задержку (например, 500ms)
    timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Время задержки до появления подсказки
  };

  const handleMouseLeave = () => {
    // Очищаем предыдущий таймер, если он ещё активен
    clearTimeout(timer);
    // Немедленно скрываем подсказку
    setIsVisible(false);
  };


  return (
    <button
      type='button'
      className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-gray-800'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={ handleMouseLeave}
      {...props}
    >
      <svg
        className='h-6 w-6'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M21 12L13 12'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      { isVisible && (
        <>
      <span className='text-sm absolute group-hover:block bg-gray-800 text-white p-2 rounded-md shadow-lg
       z-10 top-full mt-5 left-1/2 transform -translate-x-1/2 whitespace-no-wrap'>Выход</span>
        </>
    )
    }
    </button>
  )
}
