import React, { useState } from 'react'
import NotificationSideNav from '../components/NotificationSideNav'
import TopNav from '../components/TopNav'
import MetricCard from '../components/MetricCard'
import MainSideNav from '../components/MainSideNav'
import SGraph from '../components/SGraph'

const Dashboard = () => {

    const [isR, setR] = useState(true)
    const [isL, setL] = useState(true)


    return (
        <div className='flex justify-between h-full bg-white dark:bg-bgBlack relative'>
            <div className={`border-r bg-white dark:bg-bgBlack z-40 border-divLight dark:border-divDark h-full lg:w-[212px] ${isR ? "w-0" : "w-[212px]"} absolute lg:relative  lg:inline-block transition-all overflow-x-hidden`}>
                <MainSideNav />
            </div>
            <div onClick={() => { setR(true) }} className={`${isR ? "hidden" : "inline"} absolute w-full h-full inline lg:hidden bg-black opacity-40`} />
            <div className='flex flex-col flex-1'>
                <div className='flex flex-col  border-b border-divLight dark:border-divDark'>
                    <TopNav onRSideNav={() => { setR(!isR); setL(true); }} onLSideNav={() => { setL(!isL) }} />
                </div>
                <div className='p-7 w-full h-full overflow-y-scroll flex flex-col items-start gap-7'>
                    <div className='py-1 px-2'>
                        <div className=" text-center text-black dark:text-white text-sm font-semibold font-Inter leading-tight">Today</div>
                    </div>
                    <div className='grid grid-cols-1 w-full sm:grid-cols-2 xl:grid-cols-4 gap-7'>
                        <MetricCard title='Revenue' subtitle='$24M' metric='+11.01%' index={0} />
                        <MetricCard title='Transaction' subtitle='14K' metric='+3.01%' index={1} />
                        <MetricCard title='Average transaction' subtitle='$2K' metric='+2.09%' index={2} />
                        <MetricCard title='Refunds' subtitle='1K' metric='+61.32%' index={3} />
                    </div>
                    <div className='grid grid-cols-1 w-full xl:grid-cols-2 gap-7'>
                        <SGraph />
                        <SGraph />
                        <SGraph />
                        <SGraph />
                    </div>
                </div>
            </div>
            <div onClick={() => { setL(true) }} className={`${isL ? "hidden" : "inline"} absolute w-full h-full inline lg:hidden bg-black opacity-40`} />
            <div className={`border-l bg-white dark:bg-bgBlack z-40 border-divLight dark:border-divDark h-full lg:w-[280px] ${isL ? "w-0" : "w-[280px]"} absolute lg:relative right-0 lg:inline-block transition-all overflow-x-hidden`}>
                <NotificationSideNav />
            </div>
        </div>
    )
}

export default Dashboard