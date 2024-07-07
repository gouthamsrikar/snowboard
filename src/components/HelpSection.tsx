import React from 'react'
import { DocumentSvg, LinkSvg } from '../svg/svg'

interface HelpSectionItemProps {
    label: string
    iconPath: string
}

const HelpSectionItem = (props: HelpSectionItemProps) => {
    return (
        <div className='flex px-2 py-[6px] gap-1'>
            <LinkSvg className='size-5' />
            <DocumentSvg size={20} className='fill-black dark:fill-white' />
            <div className=" text-black dark:text-white text-sm font-normal font-Inter leading-tight">{props.label}</div>
        </div>
    )
}

const HelpSection = () => {
    const pages: HelpSectionItemProps[] = [
        { label: "Documentation", iconPath: "../icons/file_doc_ic.svg" },
        { label: "Help Center", iconPath: "../icons/headset_ic.svg" },
    ]

    return (
        <div className='flex flex-col gap-1'>
            <div className="px-3 py-1 text-black dark:text-white opacity-40 text-sm font-normal font-Inter leading-tight">Help</div>
            {
                pages.map((e, index) => {
                    return (
                        <HelpSectionItem iconPath={"e.iconPath"} label={e.label} />
                        // <div className='flex px-2 py-[6px] gap-1'>
                        //     <img className='size-4' src={require('../icons/Link.svg').default} alt={e.iconPath} />
                        //     <img className='size-5' src={require(e.iconPath).default} alt={e.iconPath} />
                        //     <div className=" text-black dark:text-white text-sm font-normal font-Inter leading-tight">{e.label}</div>
                        // </div>
                    )
                })
            }
        </div>
    )
}






export default HelpSection