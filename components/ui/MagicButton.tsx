import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: { title: string, icon: React.ReactNode, position: string, handleClick?: () => void; otherClasses?: string }) => {
    return (
            <button className="relative inline-flex h-12 overflow-hidden w-full rounded-lg p-[2px] focus:outline-none md:w-60" onClick={handleClick}>
                <span className="absolute inset-[-10000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#71e3cf_0%,#5636d5_40%,#a376df_80%,#71e3cf_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-7 text-sm font-medium text-black backdrop-blur-3xl gap-2 ${otherClasses}`}>
                    {position == 'left' && icon}
                    {title}
                    {position == 'right' && icon}
                </span>
            </button>
    )
}

export default MagicButton
