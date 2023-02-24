import React from "react";

type Props = {
    isValid: boolean,
    text: string,
    name: string,
    placeholder: string,
    errorMessage: string,
    type?: string,
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const Input = ({
    isValid,
    text,
    handleOnChange,
    type = "text",
    placeholder,
    errorMessage,
    name,
}: Props) => {
    return (
        <div className="w-full p-2">
            <p className="mb-2.5 font-medium text-base text-gray-600">
                {text}
            </p>
            <div className="p-px bg-gradient-cyan rounded-lg">
                <input
                    className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-white outline focus:ring-4 focus:ring-indigo-500 rounded-lg"
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onChange={handleOnChange}
                />
            </div>
            {
                isValid ? null : ( 
                    <p className="mb-2.5 py-2 font-medium text-base text-red-300">
                        { errorMessage }
                    </p>
                )
            }
        </div>
    );
}

export default Input;