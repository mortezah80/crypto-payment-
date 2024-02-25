'use client';
import {useState} from 'react'
import ReactEcharts from 'echarts-for-react';
import { height } from '@mui/system';

const Chart = () => {


    const [total, setTotal] = useState<number>(100); // Initialize with your initial total value

    // Function to update the total and the chart title
    const updateTotal = (newTotal: number) => {
      setTotal(newTotal);
    };
  
    const pieChartData = [
        { name: 'Bitcoin', value: 40, color: '#ff5733' },
        { name: 'Bitcoin Cash', value: 30, color: '#33ff57' },
        { name: 'Ethereum', value: 10, color: '#5733ff' },
        { name: 'Doge Coin', value: 3, color: '#33a3ff' },
        { name: 'Bitcoin', value: 1, color: '#ff5733' },
        { name: 'Binance Coin', value: 7, color: '#33ff57' },
        { name: 'Ethereum', value: 2, color: '#5733ff' },
        { name: 'Doge Coin', value: 5, color: '#33a3ff' },
        { name: 'Doge Coin', value: 1.5, color: '#33a3ff' },
        { name: 'Binance Coin', value: 0.5, color: '#33ff57' },
      ];
    
      // Calculate percentages
      const percentages = pieChartData.map((item) => ({
        name: item.name,
        percentage: ((item.value / total) * 100).toFixed(2) + '%',
        color: item.color,
      }));

      const title = {
        text: [
          '9,352,624,215', // First line
          'USD',            // Second line
        ].join('\n'),        // Join lines with a newline character
        textStyle: {
          fontSize: 14,     // Adjust the font size
          fontWeight: 'bold', // Add bold styling
        },
        left: 'center',     // Center the title horizontally
        top: 'middle',      // Center the title vertically
      };

    const option = {
        itemStyle: {
            opacity: 0.7,
            borderWidth: 10,
            borderColor: '#235894'
          },
        // title: {
        //   text: [
        //     '9,352,624,215', // First line
        //     'USD',            // Second line
        //   ].join('\n'), 
        //   textStyle: {
        //     fontSize: 14,
        //     fontWeight: 'bold',
        //     margin: "5px 0px"
        //   },
        //   left: 'center',
        //   top: 'middle',
        // },
        series: [
          {
            name: 'Data',
            type: 'pie',
            radius: ['70%', '100%', ], // Adjust the radius as needed
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            itemStyle: {
                borderRadius: 0,
                borderColor: '#fff',
                borderWidth: 6
              },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: pieChartData.map((item) => ({
                value: item.value,
                name: item.name,
                itemStyle: {
                  color: item.color, // Set the color for each category
                },
              })),
          },
        ],
      };

    return (
        <div className='px-[37px] py-[25px]'>
            <span className='text-primary font-bold text-[16px]'>Balances of business wallets</span>
            <div className='flex items-center justify-between my-4'>
                <div className='flex items-center '>
                    <div className='w-[35px] h-[35px] rounded-full bg-grayText'>
                    </div>
                    <div className='flex flex-col ml-[7px] '>
                        <span className='text-[14px] font-bold'>All Merchant</span>
                        <span className='text-[12px] text-grayText'>Balance Wallets</span>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <span className='text-gold text-[16px] font-bold'>9,352,624,215</span>
                    <span className='text-[12px] text-grayText'>USD</span>
                </div>
            </div>
            <div className='relative pt-4 pb-6'>
                <ReactEcharts option={option} style={{ height: '220px' }}/>
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'> 
                    <div className='flex flex-col items-center'>
                        <span className='text-text text-[22px] font-bold'>
                        9,352,624,215
                        </span>
                        <span className='text-grayText text-[14px] font-bold'>
                        USD 
                        </span>
                    </div>
                
                </div>
            </div>
            <div style={{ flex: 1 }} className='mt-[15px]'>
                <ul className='grid grid-cols-2 gap-x-[61px] gap-y-[13px] max-sm:grid-cols-1 max-h-[250px] overflow-y-scroll coinScroll'>
                    {percentages.map((item) => (
                        <li key={item.name} className='flex items-center justify-between'>
                            <div className='text-[12px] font-bold text-grayText'>
                                <span
                                    style={{
                                    display: 'inline-block',
                                    width: '6px',
                                    height: '6px',
                                    backgroundColor: item.color,
                                    marginRight: '6px',
                                    borderRadius: '50%',
                                    }}
   
                                ></span>                
                                <span>{item.name}</span>
                            </div>
                            <span className='text-text text-[12px] font-bold'>{item.percentage}</span>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Chart;