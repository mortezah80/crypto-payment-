import PaymentLayout from "@/components/layout/payment/index";
import PaymentModal from "@/components/pages/Payment/index";
import React from "react";

const page = ({
  params: { merchant_id, order_id },
}: {
  params: { merchant_id: string; order_id: string };
}) => {
  return (
    <PaymentLayout>
      <PaymentModal merchant_id={merchant_id} order_id={order_id} />
    </PaymentLayout>
  );
};

export default page;
