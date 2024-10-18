import React from 'react'

const InputComponent = ({ name, type, imageSrc, placeholder, maxLength}) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-2xl max-md:text-[1.25rem] font-marv font-medium mb-2">{name}</label>
      <div className="flex items-center relative input-width"> 
        <img src={imageSrc} alt={name} className="h-6 mr-2 mb-1" /> 
        <input
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          className="bg-transparent mb-1 flex-1 focus:outline-none focus:border-blue-500 placeholder-gray-500"
        />
        <div className="absolute bottom-0 left-0 h-0.5 bg-gray-500 w-full" /> 
      </div>
    </div>
  )
}

export default InputComponent;