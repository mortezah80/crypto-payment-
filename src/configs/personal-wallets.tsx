import allWalletImg from "$/public/images/personal-wallets/all_wallet.png";
import bitcoinImg from "$/public/images/personal-wallets/bitcoin.png";
import dogeCoinImg from "$/public/images/personal-wallets/dogecoin.png";
import ethereumImg from "$/public/images/personal-wallets/ethereum.png";
import tronImg from "$/public/images/personal-wallets/tron.png";
import tetherImg from "$/public/images/personal-wallets/tether.png";
import polygonImg from "$/public/images/personal-wallets/polygon.png";
import binanceImg from "$/public/images/personal-wallets/binance.png";
import litecoinImg from "$/public/images/personal-wallets/litecoin.png";

import AllWalletIcon from "$/public/icons/personal-wallets/all_wallet.svg";
import BitcoinIcon from "$/public/icons/personal-wallets/bitcoin.svg";
import DogeCoinIcon from "$/public/icons/personal-wallets/dogecoin.svg";
import EthereumIcon from "$/public/icons/personal-wallets/ethereum.svg";
import TronIcon from "$/public/icons/personal-wallets/tron.svg";
import TetherIcon from "$/public/icons/personal-wallets/tether.svg";
import PolygonIcon from "$/public/icons/personal-wallets/polygon.svg";
import BinanceIcon from "$/public/icons/personal-wallets/binance.svg";
import LitecoinIcon from "$/public/icons/personal-wallets/litecoin.svg";
import { IPersonalWallet } from "@/models/personal-wallet";

export const PERSONAL_WALLET_LIST: IPersonalWallet[] = [
  {
    img: allWalletImg,
    title: "All Wallet",
    icon: <AllWalletIcon />,
  },
  {
    img: bitcoinImg,
    title: "Bitcoin",
    icon: <BitcoinIcon />,
  },
  {
    img: dogeCoinImg,
    title: "Dogecoin",
    icon: <DogeCoinIcon />,
  },
  {
    img: ethereumImg,
    title: "Ethereum",
    icon: <EthereumIcon />,
  },
  {
    img: tronImg,
    title: "Tron",
    icon: <TronIcon />,
  },
  {
    img: tetherImg,
    title: "Tether",
    icon: <TetherIcon />,
  },
  {
    img: polygonImg,
    title: "Polygon",
    icon: <PolygonIcon />,
  },
  {
    img: binanceImg,
    title: "Binance",
    icon: <BinanceIcon />,
  },
  {
    img: litecoinImg,
    title: "Litecoin",
    icon: <LitecoinIcon />,
  },
];
