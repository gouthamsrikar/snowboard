import React, { useEffect, useState } from 'react'
import PagePath from './PagePath'
import SearchInput from './SearchInput'
import IconButton from './IconButton'
import { ThemeSvg, SideBarSvg, RocketSvg, StarSvg, NotificationSvg } from '../svg/svg'
import { useTheme } from '../utils/ThemeContext'
// import RocketLaunch from '../icons/RocketLaunch.svg'

interface TopNavProps {
    onRSideNav?: React.MouseEventHandler<HTMLDivElement> | undefined
    onLSideNav?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const TopNav = (props: TopNavProps) => {

    const themeP = useTheme();



    return (
        <div className='py-5 px-7 flex-col sm:flex-row gap-3 flex sm:justify-between items-start sm:items-center'>
            <div className='flex gap-2'>
                <IconButton onClick={props.onRSideNav}>
                    <RocketSvg size={16} className=' fill-black dark:fill-white ' />
                </IconButton>
                <IconButton>
                    <StarSvg size={16} className=' fill-black dark:fill-white ' />
                </IconButton>
                <PagePath pathArray={["Pages", "Overview"]} />
            </div>

            <div className='flex items-center sm:justify-start justify-between gap-2 sm:w-fit w-full'>
                <SearchInput />
                <div className='flex gap-2'>
                    <IconButton onClick={() => { themeP.toggleTheme() }}>
                        <ThemeSvg />
                    </IconButton>
                    <IconButton>
                        <NotificationSvg size={16} className=' fill-black dark:fill-white ' />
                    </IconButton>
                    <IconButton onClick={props.onLSideNav}>
                        <SideBarSvg size={16} />
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default TopNav