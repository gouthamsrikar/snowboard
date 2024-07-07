import React, { useState } from 'react'
import PageSectionbutton from './PageSectionbutton'
import { RocketSvg } from '../svg/svg'



const PagesSection = () => {
    const pages = [
        {
            "title": "Overview",
            "subtitles": [
                "Overview Page1",
                "Overview Page2",
                "Overview Page3",
                "Overview Page4",
                "Overview Page5",

            ],
            "icon": (
                <RocketSvg className='size-5 fill-black dark:fill-white ' />
            )
        },
        {
            "title": "Transactions",
            "subtitles": [
                "Transactions Page1",
                "Transactions Page2",
                "Transactions Page3",
                "Transactions Page4",
                "Transactions Page5",

            ],
            "icon": (
                <RocketSvg className='size-5 fill-black dark:fill-white ' />
            )

        },
        {
            "title": "Invoices",
            "subtitles": [
                "Invoices Page1",
                "Invoices Page2",
                "Invoices Page3",
                "Invoices Page4",
                "Invoices Page5",

            ],
            "icon": (
                <RocketSvg className='size-5 fill-black dark:fill-white ' />
            )
        },
        {
            "title": "Customers",
            "subtitles": [
                "Customers Page1",
                "Customers Page2",
                "Customers Page3",
                "Customers Page4",
                "Customers Page5",

            ],
            "icon": (
                <RocketSvg className='size-5 fill-black dark:fill-white ' />
            )
        },
    ]
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <div className='flex flex-col gap-1'>
            <div className="px-3 py-1 text-black dark:text-white opacity-40 text-sm font-normal font-Inter leading-tight">Pages</div>
            {
                pages.map((e, index) => {
                    return (<PageSectionbutton onClick={(e) => {
                        setSelectedIndex(index)
                        console.log(index)
                    }} label={e.title} isSelected={selectedIndex === index} subPageLabels={e.subtitles} iconSrc={require('../icons/pages/overview_ic.svg').default} />)
                })
            }
        </div>

    )
}

export default PagesSection