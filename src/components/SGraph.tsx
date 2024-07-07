import { LineChart } from '@mui/x-charts/LineChart'
import React, { useEffect } from 'react'
import { useTheme } from '../utils/ThemeContext';

const SGraph = () => {

    const theme = useTheme();

    var isDarkTheme = theme.theme === 'dark';
    var textColor = isDarkTheme ? "#ffffff66" : "#00000066";
    var backgroundColor = isDarkTheme ? 'rgba(31, 41, 55, 0.9)' : 'rgba(229, 231, 235, 0.9)';
    var barColor = isDarkTheme ? 'rgba(255, 255, 255, 0.8)' : 'rgba(59, 130, 246, 0.8)';

    useEffect(() => {
        isDarkTheme = theme.theme === 'dark';
        textColor = isDarkTheme ? '#222222' : '#ffffff';
        backgroundColor = isDarkTheme ? 'rgba(31, 41, 55, 0.9)' : 'rgba(229, 231, 235, 0.9)';
        barColor = isDarkTheme ? 'rgba(255, 255, 255, 0.8)' : 'rgba(59, 130, 246, 0.8)';
    }, [theme.theme])
    return (
        <div className="col-span-1 h-[330px] p-6 bg-[#F7F9FB] dark:bg-white05 rounded-2xl flex-col justify-start items-start gap-[18px] inline-flex">
            <div className="text-black dark:text-white text-sm font-semibold font-Inter leading-tight">Revenue</div>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                sx={{
                    // change all labels fontFamily shown on both xAxis and yAxis
                    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                        fontFamily: "Inter",
                    },
                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                        strokeWidth: "1",
                        fill: textColor
                    },
                    // change bottom label styles
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                        strokeWidth: 1,
                        fill: textColor
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
                        strokeWidth: 0,
                        fill: textColor
                    },
                    "& .MuiChartsAxis-left .MuiChartsAxis-tick": {
                        strokeWidth: 0,
                        fill: textColor
                    },
                    // bottomAxis Line Styles
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                        stroke: textColor,
                        strokeWidth: 1
                    },
                    // leftAxis Line Styles
                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                        stroke: textColor,
                        strokeWidth: 1
                    }
                }}

            ></LineChart>

        </div>
    )
}

export default SGraph