import React from 'react'

const Alert = ({ type, text }) => {
  return (
    <div className='absolute top-[4rem] left-0 right-0 flex justify-center items-center'>
        <div className={`${type === 'danger' ? 'bg-red-500' : 'bg-teal-800'} p-2 text-indigo-100 leading-none rounded-full flex lg:inline-flex items-center`} role='alert'>
            <p className={`flex rounded-full uppercase px-2 py-1 font-semibold mr-2 text-xs`}>{type === 'danger' ? 'Sin Exito:' : 'Exito:'}</p>
            <p className='mr-2 text-left'>{text}</p>
        </div>
    </div>
  )
}

export default Alert