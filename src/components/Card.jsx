import React from 'react';

export const Card = ({ icon, title, desc }) => {
    const renderIcon = () => {
        // If user passed a React element (<Icon />), render it
        if (React.isValidElement(icon)) return icon;
        // If user passed a component reference (Icon) render it
        if (typeof icon === 'function') return React.createElement(icon);
        // Otherwise render whatever (string, number, emoji)
        return icon;
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 bg-neutral w-full max-w-[384px] min-h-60 rounded-lg shadow-2xs m-2 p-4">
                <div className="flex flex-row justify-center items-center gap-4">
                    <span className="bg-amber-100 h-11 w-11 rounded-full flex items-center justify-center">{renderIcon()}</span>
                    <h4 className="font-bold text-secondary text-xl md:text-2xl ">{title}</h4>
                </div>
                <p className="text-secondary text-base ">{desc}</p>
            </div>
        </>
    )
}
