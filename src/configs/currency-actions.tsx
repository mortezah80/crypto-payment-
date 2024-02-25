import { ICurrencyAction } from "@/models/currency-action";
import SettleIcon from "$/public/icons/currency-actions/settle.svg";
import ConvertIcon from "$/public/icons/currency-actions/convert.svg";
import PurchaseIcon from "$/public/icons/currency-actions/purchase.svg";
import TransferIcon from "$/public/icons/currency-actions/transfer.svg";
import WithdrawIcon from "$/public/icons/currency-actions/withdraw.svg";

export const CURRENCY_ACTIONS: ICurrencyAction[] = [
  { icon: <SettleIcon />, title: "Settle" },
  { icon: <ConvertIcon />, title: "Convert" },
  { icon: <PurchaseIcon />, title: "Purchase" },
  { icon: <TransferIcon />, title: "Transfer" },
  { icon: <WithdrawIcon />, title: "Withdraw" },
];
