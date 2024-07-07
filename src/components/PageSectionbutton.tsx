import React from 'react'
import { RightArrowSvg, RocketSvg } from '../svg/svg'

interface PageSectionbuttonProps {
    label: string
    isSelected: boolean
    subPageLabels: string[]
    iconSrc: any
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const PageSectionbutton = (props: PageSectionbuttonProps) => {

    return (
        <>
            <div onClick={props.onClick} className={`flex items-center hover:bg-[#f2f2f2] cursor-pointer hover:dark:bg-white05 transition-all duration-100 gap-1 py-1 rounded-lg ${props.isSelected ? "bg-[#f2f2f2] dark:bg-white05" : "bg-transparent"}`} >
                <div className='w-6 h-4 items-center inline-flex justify-end gap-1'>
                    {
                        props.isSelected ?
                            <>
                                <div className='h-full w-1 rounded-full bg-black dark:bg-white' />
                                <div className="size-4 " />
                            </>
                            : <>
                                <RightArrowSvg className='size-4' />
                            </>
                    }
                    {/* icon here */}

                </div>
                <div className='flex gap-1 items-center justify-start'>
                    <RocketSvg size={20} className='size-4 fill-black dark:fill-white ' />
                    <div className="text-black dark:text-white text-sm font-normal font-Inter leading-tight line-clamp-1">{props.label}</div>
                </div>
            </div>
            {
                props.isSelected && props.subPageLabels.length > 0 ?
                    <div className='py-1 flex-col gap-1 flex transition-all duration-300 ' style={{
                    }}>
                        {
                            props.subPageLabels.map((e, index) => {
                                return (
                                    <div className="ml-11 px-1 py-1 rounded-lg hover:bg-[#f2f2f2] cursor-pointer hover:dark:bg-white05 text-black dark:text-white text-sm font-normal font-Inter leading-tight line-clamp-1">{e}</div>
                                )
                            })
                        }
                    </div >
                    : <></>
            }

        </>
    )
}

export default PageSectionbutton