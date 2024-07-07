import React from 'react'
import TabBar from './TabBar'
import PagesSection from './PagesSection'
import HelpSection from './HelpSection'

const MainSideNav = () => {
    return (
        <div className='w-[212px] flex flex-col p-4 gap-4 h-full'>
            {/* profile section */}
            <div className="p-1 justify-start items-center gap-2 inline-flex">
                <img className="size-6 relative rounded-full" src="https://avatars.githubusercontent.com/u/53181084?v=4" alt='profile_pic' />
                <div className="text-black dark:text-white text-sm font-normal font-Inter leading-tight line-clamp-1">Superstars AI</div>
            </div>
            {/* tabs */}
            <div className='flex-col flex gap-2 items-start'>
                <TabBar labels={["Favorites", "Recently"]} selectedIndex={0} />
                {
                    ["Get Started", "Transactions"].map((e, index) => {
                        return (
                            <div className="h-7 px-2 py-1 rounded-lg justify-start items-center gap-2 inline-flex">
                                <div className="grow shrink basis-0 rounded-lg justify-start items-center gap-1 flex">
                                    <div className="m-[5px] size-[6px] rounded-full bg-black dark:bg-white opacity-20 " />
                                    <div className="rounded-lg flex-col justify-center items-start inline-flex">
                                        <div className="self-stretch text-black dark:text-white text-sm font-normal font-Inter leading-tight">{e}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
            {/* pages */}
            <PagesSection />
            {/* help */}
            <HelpSection />

            <div className='flex-1 flex-col flex h-full items-end justify-end'>
                <img className='h-10 bg-white rounded-lg p-2 flex w-full' src={require("../icons/Logo.svg").default} alt="logo" />
            </div>

        </div>
    )
}

export default MainSideNav