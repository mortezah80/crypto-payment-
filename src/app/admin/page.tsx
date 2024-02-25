"use client";
import BalanceAdmin from "@/components/pages/Admin/Dashboard/Balance";
import BlogStatus from "@/components/pages/Admin/Dashboard/BlogStatus/BlogStatus";
import HeaderAdmin from "@/components/pages/Admin/Dashboard/Header";
import MerchantsList from "@/components/pages/Admin/Dashboard/MerchantsList";
import PluginStatus from "@/components/pages/Admin/Dashboard/Plugin";
import TicketStatus from "@/components/pages/Admin/Dashboard/TicketStatus";
import TotalUsers from "@/components/pages/Admin/Dashboard/TotalUsers";
import TotalWallets from "@/components/pages/Admin/Dashboard/TotalWallet";
import TransactionsAdmin from "@/components/pages/Admin/Dashboard/Transactions";
import TotalTransactinoValume from "@/components/pages/Admin/Dashboard/Transactions/TotalTransactionValume";
import { useZustandStore } from "@/store";
import { Grid } from "@mui/material";
const merchants = {
  total: 5254896,
  merchants: [
    {
      name: "EmanuelCoin",
      creator: "Kami Nilamon",
    },

    {
      name: "Daily store",
      creator: "Stephan Cambiaso",
    },
    {
      name: "Support Shops",
      creator: "Harchi Hool",
    },
  ],
};
const DashboardAdmin = () => {
  const user = useZustandStore((state) => state.user);

  return (
    <div className="my-6 flex flex-col gap-8">
      <HeaderAdmin name={user?.username} />
      <Grid container rowGap={2} columnSpacing={2}>
        <Grid item className="w-full max-w-[40%] max-xl:max-w-none">
          <MerchantsList
            total={merchants.total}
            merchants={merchants.merchants}
          />
        </Grid>
        <Grid item className="w-full max-w-[60%] max-xl:max-w-none">
          <TransactionsAdmin
            total={12765251078}
            income={1251320}
            paid={1251}
            unpaid={56}
            moreThan={415}
            lessThan={401}
            value={12765251078}
          />
        </Grid>
        <Grid item className="w-full max-w-[60%] max-xl:max-w-none">
          <TotalTransactinoValume
            total={62765251078}
            withdrawal={7232415}
            income={665251078}
          />
        </Grid>
        <Grid item className="w-full max-w-[40%] max-xl:max-w-none">
          <BalanceAdmin
            siteWithdrawalPercenter={30}
            userWithdrawalPercent={25}
            balancePercent={45}
            userWithdrawal={41232415}
            siteWithdrawal={12232422}
            balance={66232496}
          />
        </Grid>
        <Grid item className="w-full">
          <TotalUsers registratin={1297} logins={21456} users={766254896} />
        </Grid>
        <Grid item className="w-full">
          <TotalWallets totalBalanceWallet={256963741} wallets={22465} />
        </Grid>
        <Grid
          container
          rowGap={2}
          item
          className="w-full max-w-[75%] max-xl:max-w-none"
        >
          <Grid item className="w-full">
            <TicketStatus created={1793} closed={794} open={852} />
          </Grid>
          <Grid item className="w-full">
            <BlogStatus blogContent={78} viewInWeek={3512} />
          </Grid>
        </Grid>
        <Grid item className="w-full max-w-[25%] max-xl:max-w-none">
          <PluginStatus plugins={13} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardAdmin;
