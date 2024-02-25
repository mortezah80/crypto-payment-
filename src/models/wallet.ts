import { StaticImageData } from "next/image";

export interface IWallet {
  img: StaticImageData;
  title: string;
  description: string;
  wallets: number;
  network: string;
  totalRevenue: number;
  settle: number;
  purchase: number;
  withdraw: number;
  convert: number;
  transfer: number;
}
