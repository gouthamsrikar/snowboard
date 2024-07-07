import React, { useState } from 'react'
import { CloseSvg, InputSuffixSvg, SearchSvg } from '../svg/svg';


const SearchInput = () => {

    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={` h-[28px] w-[160px] px-1 py-2 flex justify-center items-center rounded-md focus-within:border focus-within:bg-transparent ` + (inputValue || isFocused ? 'bg-none border border-[#f2f2f2] dark:border-white05' : 'bg-[#f2f2f2] dark:bg-white05 border-none')}>
            <label htmlFor="search">
                {/* <img className='size-4' src={require('../icons/search_ic.svg').default} alt="search" /> */}
                <SearchSvg className='fill-black20 dark:fill-white20' size={16} />
            </label>
            <input
                type="text"
                id="search"
                className={"flex-grow h-[28px] appearance-none w-full bg-transparent px-1 placeholder:border-none focus:border-none outline-none text-sm font-normal font-Inter leading-tight" + ` + ${inputValue ? 'text-black dark:text-white' : 'text-gray-700 dark:text-white20'}`}
                placeholder="Search..."
                style={{
                    boxSizing: 'border-box',
                }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {!isFocused ?
                <label htmlFor="search">
                    {/* <img className='size-[20px]' src={require('../icons/input_suffix_ic.svg').default} alt="search" /> */}
                    <InputSuffixSvg className='fill-black20 dark:fill-white20' size={16} />
                </label> :
                <CloseSvg className='fill-black20  dark:fill-white20 cursor-pointer' size={20} />
            }
        </div>
    )
}

export default SearchInput