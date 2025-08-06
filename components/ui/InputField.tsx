import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  border?: string;
  borderColor?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  className?: string;
  placeholderColor?: string; 
  name?:string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder = '',
  bgColor = 'bg-white',
  width = 'w-full',
  height = 'h-12',
  className = '',
  border = 'border',
  borderColor = 'border-[#E5E5E5]',
  placeholderColor = 'placeholder-[#AAAAAA]',
  ...rest
}) => {
  
  return (
    <div className={`flex flex-col ${width} ${className}`}>
      {label && <label className='mb-1 text-[#616060] font-sm'>{label}</label>}
      <input
        placeholder={placeholder}
        className={`px-4 py-2 rounded-md ${border} ${borderColor} outline-none text-gray-800 ${bgColor} ${height} ${placeholderColor} transition-all focus:ring-2 focus:ring-blue-400 ${width}`}
        {...rest}
      />
    </div>
  );
};

export default InputField;
