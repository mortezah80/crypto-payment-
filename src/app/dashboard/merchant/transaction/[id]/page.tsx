import Wallet from "@/components/pages/Dashboard/wallet";
import Total from "@/components/pages/Dashboard/merchant/total";
import { Grid } from "@mui/material";
import TransitionList from "@/components/pages/Dashboard/Transition/TransitionList";

const Transaction = () => {
  return (
    <div className="flex flex-col"> 
      <Grid container rowGap={2}>
        <Grid item xs={12}>
          <Total />
        </Grid>
        <Grid item xs={12} xl={4}>
          <div className="xl:pr-7 -">
            <Wallet />
          </div>
        </Grid>
        <Grid item xs={12} xl={8}>
          <div className="xl:pl-7 h-full flex items-center">
            <TransitionList />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Transaction;
