import BTCIcon from "$/public/images/cryptocurrencies/BTC.svg";
import DOGECoinIcon from "$/public/images/cryptocurrencies/DOGECoin.svg";
import TetherIcon from "$/public/images/cryptocurrencies/Tether.svg";
import PokadotIcon from "$/public/images/cryptocurrencies/Pokadot.svg";
import SolaIcon from "$/public/images/cryptocurrencies/Sola.svg";
import TRONIcon from "$/public/images/cryptocurrencies/TRON.svg";
import XRPIcon from "$/public/images/cryptocurrencies/XRP.svg";
import CardanoIcon from "$/public/images/cryptocurrencies/Cardano.svg";
import BNBIcon from "$/public/images/cryptocurrencies/BNB.svg";
import CROIcon from "$/public/images/cryptocurrencies/CRO.svg";

import Tether_Icon from "@/assets/walletIcons/Tether.svg";
import Bitcoin_Icon from "@/assets/coins/bitcoin.svg";
import Dodge_Icon from "@/assets/coins/Dodge.svg";
import BNB_Icon from "@/assets/coins/BNB.svg";
import Tron_Icon from "@/assets/coins/Tron.svg";
import bitcoin from "@/assets/CoinBackgrounds/Bitcoin.png";
import dodge_back from "@/assets/CoinBackgrounds/Dodge.png";
import red_back from "@/assets/CoinBackgrounds/redBackCart.png";
import yellow_back from "@/assets/CoinBackgrounds/yellowBackCart.png";
import Bitcoin_back_2 from "@/assets/CoinBackgrounds/Bitcoin2.png";
import brown_back from "@/assets/CoinBackgrounds/brownBackCart.png";
import { StaticImageData } from "next/image";

export interface TransitionProps {
  type: string;
  merchant?: string;
  date: Date;
  payment: string;
  extra?: number;
  less?: number;
  ajustmentStatus?: boolean;
  dollar: number;
  status: boolean;
  paymentId?: string;
  orderId?: string;
  background: string;
  coin: string;
  transaction?: number;
  networkAddress?: string;
  ///////////////------------///////////////
  id: string;
  amount: number;
  ///////////////------------///////////////
  tid?: string;
  payment_type?: string;
  wallet_address?: string;
  merchant_id?: string;
  payment_status?: string;
  paid_amount?: number;
  payment_crypto_type?: string;
  payment_crypto_network?: string;
  user_payment_crypto_type?: string;
  creator_id?: string;
  creator_user?: string;
  creator_email?: string;
  is_deleted?: boolean;
}

export interface WalletType {
  icon: any;
  amount: string;
  network: string;
  walletAddress: string;
  usd: number;
  type: number;
  coin: string;
  subColor?: boolean;
  short: string;
  valueColor?: string;
  background: StaticImageData;
  isActive?: boolean;
  small: boolean;
}

export const CRYPTOCURRENCIES = [
  { icon: <BTCIcon />, title: "BTC", description: "Bitcoin" },
  { icon: <DOGECoinIcon />, title: "DOGECoin", description: "Dogecoin" },
  { icon: <TetherIcon />, title: "Tether", description: "Tether coin" },
  { icon: <PokadotIcon />, title: "Pokadot", description: "Pokadot" },
  { icon: <SolaIcon />, title: "Sola", description: "Sola Token" },
  { icon: <TRONIcon />, title: "TRON", description: "Tron Coin" },
  { icon: <XRPIcon />, title: "XRP", description: "Xrp coin" },
  { icon: <CardanoIcon />, title: "Cardano", description: "Cardano coin" },
  { icon: <BNBIcon />, title: "BNB", description: "Binance coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
  { icon: <CROIcon />, title: "CRO", description: "Crypto coin" },
];

export const WALLET_LIST: WalletType[] = [
  {
    network: "BTC-41",
    valueColor: "black",
    walletAddress: "H6579-65236HJFBN-9511DFGVN-122SDF",
    short: "BTC",
    coin: "BitCoin",
    icon: <Bitcoin_Icon />,
    amount: "0.00000000",
    background: Bitcoin_back_2,
    usd: 0,
    type: 2,
    small: false,
  },
  {
    network: "USDT-41",
    valueColor: "black",
    walletAddress: "H6579-65236HJFBN-9511DFGVN-332SDF",
    short: "doge",
    coin: "Dogecoin",
    icon: <Dodge_Icon />,
    amount: "0.00000000",
    background: dodge_back,
    usd: 0,
    type: 2,
    small: true,
  },
  {
    network: "USDT-41",
    valueColor: "black",
    walletAddress: "H6579-65236HJFBN-9511DFGVN-442SDF",
    short: "USDT",
    coin: "Tether",
    icon: <Tether_Icon />,
    amount: "0.00000000",
    background: brown_back,
    usd: 0,
    type: 2,
    small: true,
  },
  {
    network: "Tron-41",
    valueColor: "black",
    walletAddress: "H6579-65236HJFBN-9511DFGVN-552SDF",
    short: "Tron",
    coin: "Tron",
    icon: <Tron_Icon />,
    amount: "0.00000000",
    background: red_back,
    usd: 0,
    type: 2,
    small: true,
  },
  {
    network: "BNB-41",
    valueColor: "black",
    walletAddress: "H6579-65236HJFBN-9511DFGVN-772SDF",
    short: "BNB",
    coin: "BNB",
    icon: <BNB_Icon />,
    amount: "0.00000000",
    background: yellow_back,
    usd: 0,
    type: 2,
    small: true,
  },
  {
    network: "Tether-41",
    valueColor: "black",
    walletAddress: "H6579-65236HJFBN-9511DFGVN-192SDF",
    short: "Tether",
    coin: "Tether",
    icon: <Tether_Icon />,
    amount: "0.00000000",
    background: bitcoin,
    usd: 0,
    type: 2,
    small: true,
  },
];

export const MERCHANTS_LIST: TransitionProps[] = [
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderId: "BTC-41",
    status: true,
    background: "#F5F5F5",
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: false,
    paymentId: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Less Than",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderId: "BTC-41",
    status: true,
    background: "#FFF",
    type: "Payment",
    coin: "BTC",
    ajustmentStatus: false,
    paymentId: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Unpaind",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderId: "BTC-41",
    status: true,
    background: "#F5F5F5",
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: false,
    paymentId: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "More Than",
  },
];

export const TRANSACTIONS_LIST: TransitionProps[] = [
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    transaction: 0,
    dollar: 59216.62,
    less: 430,
    status: true,
    background: "#F5F5F5",
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: false,
    networkAddress: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Unpaind",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    transaction: 0,
    dollar: 59216.62,
    less: 430,
    status: true,
    background: "#FFFFFF00",
    type: "Payment",
    coin: "BTC",
    ajustmentStatus: false,
    networkAddress: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Less Than",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    transaction: 0,
    dollar: 59216.62,
    less: 430,
    status: true,
    background: "#F5F5F5",
    type: "Payment",
    coin: "BTC",
    ajustmentStatus: false,
    networkAddress: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Less Than",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    transaction: 0,
    dollar: 59216.62,
    less: 430,
    status: true,
    background: "#FFFFFF00",
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: false,
    networkAddress: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Less Than",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    transaction: 0,
    dollar: 59216.62,
    less: 430,
    status: true,
    background: "#F5F5F5",
    type: "Payment",
    coin: "BTC",
    ajustmentStatus: false,
    networkAddress: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Paid",
  },
];
