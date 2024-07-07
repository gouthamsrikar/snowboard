import React from 'react'
import { GraphSvg } from '../svg/svg'

interface MetricCardProps {
    title: string
    subtitle: string
    metric: string
    index: number
}

const MetricCard = (props: MetricCardProps) => {
    return (
        <div className={'col-span-1 rounded-2xl h-28 p-6 flex-col justify-between items-start flex ' + (props.index % 2 === 1 ? ` bg-[#DBE6F2] dark:bg-white05` : ' bg-[#F9FEF0] dark:bg-[#F9FEF0]')}>
            <div className={" font-semibold font-Inter text-sm leading-tight " + (props.index % 2 === 1 ? "text- dark:text-white " : "text-black  ")}>{props.title}</div>
            <div className='flex w-full justify-between items-center'>
                <div className={"self-stretch  text-2xl font-semibold font-Inter leading-9 " + (props.index % 2 === 1 ? "text-black dark:text-white " : "text-black")}>{props.subtitle}</div>
                <div className='inline-flex gap-1'>
                    <div className={"  text-xs font-normal font-Inter leading-[18px] " + (props.index % 2 === 1 ? "text-black dark:text-white " : "text-black ")}>{props.metric}</div>
                    <GraphSvg size={16} className={props.index % 2 === 1 ? 'fill-black dark:fill-white' : 'fill-black'} />
                </div>
            </div>
        </div >
    )
}

export default MetricCard