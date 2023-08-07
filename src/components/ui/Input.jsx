import React from 'react';
import ExpandMore from '../../Icons/ExpandMore';

export const InputSubmit = ({ value, className = '' }) => {
    return <input className={`h-10 w-60 rounded-md outline-none ${className}`} type="submit" value={value} />;
};

const Input = ({
    id = '',
    onClick,
    onChange,
    label = '',
    expandIcon,
    options,
    setGender,
    setIsOpen,
    isOpen,
    ...props
}) => {
    return (
        <div className="flex flex-col relative z-0" onClick={() => onClick && onClick()}>
            <label htmlFor={id} className="block text-start mb-1.5 text-neutral w-60">
                {label}
            </label>
            <input
                className="border h-10 w-60 rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-3 pe-1"
                {...props}
                name={id}
                id={id}
                onChange={(e) => onChange && onChange(e)}
            />
            {expandIcon && (
                <>
                    <ExpandMore className="h-6 w-6 absolute right-2 bottom-1.5" />
                    <div
                        hidden={!isOpen}
                        className="absolute w-full bg-base-100 drop-shadow-md rounded-md top-full mt-1"
                    >
                        <ul className="text-start ms-3 py-3">
                            {options &&
                                options.map((option, index) => (
                                    <li
                                        key={index}
                                        className="py-1 cursor-pointer"
                                        onClick={() => {
                                            setGender && setGender(option);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {option}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default Input;
