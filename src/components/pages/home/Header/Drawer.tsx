"use client";
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
export default function CustomDrawer() {
  const [state, setState] = React.useState(false)
  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setState(!state)
    }
  return (
    <div>
      <button
        onClick={() => setState(true)}
        className="w-[42px] h-[42px] bg-card_light rounded-xl justify-center items-center  max-md:flex hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
        >
          <rect y="12" width="20" height="4" rx="2" fill="#1093FF" />
          <rect y="6" width="20" height="4" rx="2" fill="#99D1FF" />
          <rect width="20" height="4" rx="2" fill="#1093FF" />
        </svg>
      </button>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer()}>
        <Box
          role="presentation"
          width={229}
          onClick={toggleDrawer()}
          onKeyDown={toggleDrawer()}
        >
          <div className="px-5 mt-5">
            <button
              onClick={() => setState(true)}
              className="w-[42px] h-[42px] bg-card_light rounded-xl justify-center items-center  max-md:flex hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
              >
                <rect y="12" width="20" height="4" rx="2" fill="#1093FF" />
                <rect y="6" width="20" height="4" rx="2" fill="#99D1FF" />
                <rect width="20" height="4" rx="2" fill="#1093FF" />
              </svg>
            </button>
          </div>
          <div className="mt-10 px-[30px]">
            <ul className='flex space-y-3 flex-col text-text text-[14px] font-bold'>
              <li>Home</li>
              <li>Personal</li>
              <li>Pricing</li> 
              <li>Plugins</li>
              <li>API</li>
              <li>Blog</li>
            </ul>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
