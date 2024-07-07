import React from 'react'

interface TabBarProps {
    labels: string[]
    selectedIndex: number
}

const TabBar = (props: TabBarProps) => {
    return (
        <div className="h-7 justify-start items-center gap-2 inline-flex">
            {
                props.labels.map((e, index) => {
                    return (
                        <div className="text-center px-2 py-1  text-black dark:text-white text-sm font-normal font-Inter leading-tight" style={{
                            opacity: props.selectedIndex === index ? 0.4 : 0.2
                        }}>{e}</div>
                    )
                })
            }
        </div>
    )
}

export default TabBar