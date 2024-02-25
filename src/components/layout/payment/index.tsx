import React from 'react'
import PaymentHeader from './header';

interface PaymentLayoutProps {
  children: React.ReactNode;
}

const PaymentLayout:React.FC<PaymentLayoutProps> = ({children}) => {
  return (
    <React.Fragment>
        <PaymentHeader/>
        <main>
            {children}
        </main>
    </React.Fragment>
  )
}

export default PaymentLayout