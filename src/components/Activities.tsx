import React from 'react'

interface ActivitiesItemProps {
    profile_url: string
    title: string
    subtitle: string
}

const Activities = () => {

    const items: ActivitiesItemProps[] = [
        {
            profile_url: "https://avatars.githubusercontent.com/u/47338871?v=4",
            title: "Discount details updated",
            subtitle: "Just now",
        },
        {
            profile_url: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
            title: "Aman added a new product",
            subtitle: "59 minutes ago",
        },
        {
            profile_url: "https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
            title: "Refunds cleared",
            subtitle: "12 hours ago",
        },
        {
            profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hpR5DranfYmZtsfPfGzXmWpkqmfcRRrNng&s",
            title: "Tax report download complete",
            subtitle: "Today, 11:59 AM",
        }
    ]

    return (
        <div className='flex flex-col gap-2'>
            <div className="text-black dark:text-white text-sm font-medium font-Inter leading-tight py-2 px-1">Activities</div>
            {
                items.map((e, index) => {
                    return (
                        <div className="h-[46px] p-1 rounded-lg justify-start items-start gap-2 inline-flex">
                            <div className='flex-col flex gap-2 items-center justify-center'>
                                <img className="size-6 rounded-full bg-cover" src={e.profile_url} />
                                {
                                    index + 1 < items.length ? <div className="w-px h-3.5 bg-black dark:bg-white opacity-10" /> : <></>
                                }

                            </div>
                            <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-start inline-flex">
                                <div className="self-stretch text-black dark:text-white text-sm font-normal font-Inter leading-tight line-clamp-1">{e.title}</div>
                                <div className="self-stretch text-black dark:text-white opacity-40 text-xs font-normal font-Inter leading-[18px]">{e.subtitle}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Activities