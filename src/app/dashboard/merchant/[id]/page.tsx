"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Grid } from "@mui/material";
import Total from "@/components/pages/Dashboard/merchant/total";
import IncomeChart from "@/components/pages/Dashboard/merchant/incomeChart";
import Wallet from "@/components/pages/Dashboard/wallet";
import {} from "next/navigation";
import AnimatePageWrapper from "@/app/AnimatePageWrapper";
import Link from "next/link";
import { authServiceHandler } from "@/api/auth.service";
import { useEffect, useState } from "react";

const Transitioncard = dynamic(
  () => import("@/components/pages/Dashboard/TransitionCard")
);

const Merchant = ({ params }: { params: { id: string } }) => {
  const [merchant, setMerchant] = useState<any>();
  const [transactions, setTransactions] = useState<any>([]);

  const handleGetMerchant = async () => {
    const res = await authServiceHandler.getMerchant(params.id);
    setMerchant(res.data.data);
  };

  const handleGetMerchantTransactions = async () => {
    const res = await authServiceHandler.getMerchantTransactions({
      merchant_id: params.id,
    });
    setTransactions(res.data.data);
  };

  useEffect(() => {
    handleGetMerchant();
    handleGetMerchantTransactions();
  }, []);

  const refreshList = () => {
    handleGetMerchantTransactions();
    handleGetMerchant();
  };
  return (
    <div className="flex flex-col px-3 sm:px-[10px] ">
      <AnimatePageWrapper>
        <Grid container rowGap={2}>
          <Grid item xs={12}>
            <Total merchant={merchant} refreshList={refreshList} />
          </Grid>
          <Grid item xs={12} xl={4}>
            <div className="xl:pr-5">
              <Wallet id={params.id} />
            </div>
          </Grid>
          <Grid item xs={12} xl={8}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="xl:pl-5"
            >
              <IncomeChart />
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="flex flex-col w-full bg-white rounded-xl shadow-3xl px-10 pt-6 pb-7 mt-3"
              >
                <div className="flex justify-between items-center font-bold text-base pb-2.5">
                  <div className="text-primary">Last Transactions</div>
                  <Link
                    href={"merchant/transaction"}
                    className="bg-primary text-white rounded-xl px-5 py-2.5"
                  >
                    Show All Transactions
                  </Link>
                </div>
                {transactions?.map((item: any, index: number) => (
                  <Transitioncard key={index} {...item} />
                ))}
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </AnimatePageWrapper>
    </div>
  );
};

export default Merchant;
