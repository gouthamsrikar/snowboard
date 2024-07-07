import React from 'react'
import Activities from './Activities'
import Notifications from './Notifications'

const NotificationSideNav = () => {
    return (
        <div className='flex flex-col gap-6 w-[280px] p-5'>
            <Notifications />
            <Activities />
        </div>
    )
}

export default NotificationSideNav