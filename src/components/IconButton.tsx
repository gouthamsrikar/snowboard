import React from 'react'

interface IconButtonProps {
    children?: any
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const IconButton = (props: IconButtonProps) => {
    return (
        <div onClick={props.onClick} className='size-[28px] p-1 cursor-pointer rounded-lg hover:bg-black05 hover:dark:bg-white05 inline-flex items-center justify-center'>
            {props.children}
        </div>
    )
}

export default IconButton