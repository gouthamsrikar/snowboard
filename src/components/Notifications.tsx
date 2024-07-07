import React from 'react'
import { NotificationSvg, RocketSvg } from '../svg/svg'

const Notifications = () => {

    return (
        <div className='flex flex-col gap-2'>
            <div className="text-black dark:text-white text-sm font-medium
             font-Inter leading-tight py-2 px-1">Notifications</div>
            {
                [1, 2, 3].map((e, index) => {
                    return (
                        <div className="w-[232px] h-[46px] p-1 rounded-lg justify-start items-start gap-2 inline-flex">
                            <div className="p-1 bg-sky-100 rounded-lg justify-center items-center inline-flex">
                                <NotificationSvg size={16} className=' fill-black' />
                            </div>
                            <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-start inline-flex">
                                <div className="self-stretch text-black dark:text-white text-sm font-normal font-Inter leading-tight line-clamp-1">You have an issue that needs to be fixed.</div>
                                <div className="self-stretch text-black dark:text-white opacity-40 text-xs font-normal font-Inter leading-[18px]">Just now</div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Notifications