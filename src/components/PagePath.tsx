import React from 'react'

interface PagePathProps {
    pathArray: string[]
}

const PagePath = (props: PagePathProps) => {
    return (
        <div className='inline-flex gap-2 items-center justify-center'>
            {
                props.pathArray.map((e, index) => {
                    return (
                        <>
                            <div className="px-2 py-1 text-center text-black cursor-pointer dark:text-white text-sm font-normal font-Intern leading-tight" style={{ opacity: index + 1 < props.pathArray.length ? 0.2 : 1 }}>{e}</div>
                            {index + 1 < props.pathArray.length ?
                                <div className='text-center text-black dark:text-white opacity-20 text-sm font-normal font-Intern leading-tight'>
                                    /
                                </div>
                                : <></>
                            }

                        </>
                    )
                })
            }
        </div>
    )
}

export default PagePath