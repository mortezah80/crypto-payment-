"use client";
import Switch from "@/components/common/switch";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useState } from "react";
import ReactECharts from "echarts-for-react";
import stc from "@/tools/functions/stc";
import { PERSONAL_WALLET_LIST } from "@/configs/personal-wallets";
import Image from "next/image";
import { IPersonalWallet } from "@/models/personal-wallet";
import { CURRENCY_ACTIONS } from "@/configs/currency-actions";
import WriteIcon from "$/public/icons/write.svg";
import DollarIcon from "$/public/icons/circle-gray-dollar.svg";
import { ICurrencyAction } from "@/models/currency-action";
import WalletCard from "@/components/pages/Admin/wallet/WalletCard";
import bitcoinImg from "$/public/images/personal-wallets/bitcoin.png";
import { IWallet } from "@/models/wallet";
import Pagination from "@/components/common/Pagination";

const Wallet = () => {
  /** @type EChartsOption */
  const option = {
    grid: {
      left: "10%",
      right: "1%",
      top: 20,
      bottom: 25,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
        showSymbol: false,
        lineStyle: {
          color: "#1093FF",
          width: 3,
          shadowBlur: 2,
        },
      },
      {
        data: [10, 20, 24, 28, 15, 107, 240],
        type: "line",
        showSymbol: false,
        lineStyle: {
          color: "#F33131",
          width: 3,
          shadowBlur: 2,
        },
      },
    ],
  };
  /** @type EChartsOption */
  const option1 = {
    grid: {
      left: "10%",
      right: "1%",
      top: 20,
      bottom: 25,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
        showSymbol: false,
        lineStyle: {
          color: "#1093FF",
          width: 3,
          shadowBlur: 2,
        },
      },
      {
        data: [10, 20, 24, 28, 15, 107, 240],
        type: "line",
        showSymbol: false,
        lineStyle: {
          color: "#F33131",
          width: 3,
          shadowBlur: 2,
        },
      },
    ],
  };
  /** @type EChartsOption */
  const option2 = {
    grid: {
      left: "10%",
      right: "1%",
      top: 20,
      bottom: 25,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
        showSymbol: false,
        lineStyle: {
          color: "#1093FF",
          width: 3,
          shadowBlur: 2,
        },
      },
      {
        data: [10, 20, 24, 28, 15, 107, 240],
        type: "line",
        showSymbol: false,
        lineStyle: {
          color: "#F33131",
          width: 3,
          shadowBlur: 2,
        },
      },
    ],
  };
  /** @type EChartsOption */
  const pieChartOption = {
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["60%", "90%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  const [totalityActive, setTotalityActive] = useState("Weekly");
  const [circleChartActive, setCircleChartActive] = useState("Weekly");
  const [currencyActive, setCurrencyActive] = useState("Weekly");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPersonalWallets, setSelectedPersonalWallets] = useState<
    IPersonalWallet[]
  >([]);
  const [selectedCurrencyActions, setSelectedCurrencyActions] = useState<
    ICurrencyAction[]
  >([]);

  const data = [
    {
      name: "Bitcoin",
      percentage: "25",
    },
    {
      name: "Ethereum",
      percentage: "5",
    },
    {
      name: "Tether",
      percentage: "15",
    },
    {
      name: "Litecoin",
      percentage: "10",
    },
    {
      name: "Binance",
      percentage: "10",
    },
    {
      name: "Polygon",
      percentage: "15",
    },
    {
      name: "Dogecoin",
      percentage: "10",
    },
    {
      name: "Other",
      percentage: "10",
    },
  ];
  const walletList: IWallet[] = [
    {
      img: bitcoinImg,
      title: "BTC",
      description: "Bitcoin",
      wallets: 315471,
      network: "BTC-41",
      totalRevenue: 325045125,
      settle: 216000,
      purchase: 945025450,
      withdraw: 216630,
      convert: 1450315,
      transfer: 125000,
    },
    {
      img: bitcoinImg,
      title: "BTC",
      description: "Bitcoin",
      wallets: 315471,
      network: "BTC-41",
      totalRevenue: 325045125,
      settle: 216000,
      purchase: 945025450,
      withdraw: 216630,
      convert: 1450315,
      transfer: 125000,
    },
    {
      img: bitcoinImg,
      title: "BTC",
      description: "Bitcoin",
      wallets: 315471,
      network: "BTC-41",
      totalRevenue: 325045125,
      settle: 216000,
      purchase: 945025450,
      withdraw: 216630,
      convert: 1450315,
      transfer: 125000,
    },
    {
      img: bitcoinImg,
      title: "BTC",
      description: "Bitcoin",
      wallets: 315471,
      network: "BTC-41",
      totalRevenue: 325045125,
      settle: 216000,
      purchase: 945025450,
      withdraw: 216630,
      convert: 1450315,
      transfer: 125000,
    },
    {
      img: bitcoinImg,
      title: "BTC",
      description: "Bitcoin",
      wallets: 315471,
      network: "BTC-41",
      totalRevenue: 325045125,
      settle: 216000,
      purchase: 945025450,
      withdraw: 216630,
      convert: 1450315,
      transfer: 125000,
    },
    {
      img: bitcoinImg,
      title: "BTC",
      description: "Bitcoin",
      wallets: 315471,
      network: "BTC-41",
      totalRevenue: 325045125,
      settle: 216000,
      purchase: 945025450,
      withdraw: 216630,
      convert: 1450315,
      transfer: 125000,
    },
  ];

  const selectPersonalWallets = (item: IPersonalWallet) => {
    if (selectedPersonalWallets?.includes(item)) {
      const filteredList = selectedPersonalWallets.filter(
        (i) => i.title !== item.title
      );
      setSelectedPersonalWallets(filteredList);
    } else {
      setSelectedPersonalWallets([...selectedPersonalWallets, item]);
    }
  };

  const selectCurrencyActions = (item: ICurrencyAction) => {
    if (selectedCurrencyActions?.includes(item)) {
      const filteredList = selectedCurrencyActions.filter(
        (i) => i.title !== item.title
      );
      setSelectedCurrencyActions(filteredList);
    } else {
      setSelectedCurrencyActions([...selectedCurrencyActions, item]);
    }
  };

  return (
    <Grid container className="py-6" rowGap={4} columnGap={4}>
      <Grid
        container
        xs={12}
        rowGap={5}
        className="shadow-3xl rounded-xl py-5 px-10 bg-card max-md:p-6"
      >
        <Grid
          xs={12}
          className="flex justify-between items-center max-lg:flex-col max-lg:flex-wrap max-lg:justify-center max-lg:gap-5"
        >
          <div className="text-primary text-3xl font-bold max-md:text-lg">
            Personal Wallet List
          </div>
          <div className="flex items-center max-md:flex-col">
            <div className="flex flex-col items-center gap-1 border-r-[1px] border-borderGray last:border-none px-7 max-md:flex-row max-md:justify-between max-md:w-full max-md:border-b-[1px] max-md:border-r-0 max-md:px-0 max-md:py-2">
              <span className="text-grayText text-xs font-bold">Wallet</span>
              <span className="text-text text-4xl font-bold">325,000</span>
            </div>
            <div className="flex flex-col items-center gap-1 border-r-[1px] border-borderGray last:border-none px-7 max-md:flex-row max-md:justify-center max-md:w-full max-md:border-b-[1px] max-md:border-r-0 max-md:px-0 max-md:py-2 max-md:flex-wrap">
              <span className="text-grayText text-xs font-bold max-md:w-full">
                Create New Wallets
              </span>
              <div className="flex items-center gap-1 max-md:flex-row-reverse max-md:justify-between max-md:w-full">
                <span className="text-text text-4xl font-bold">212</span>
                <div className="text-center px-4 h-7 rounded-xl bg-grayLight flex justify-center items-center text-grayText text-xs font-bold">
                  Last Week
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 border-r-[1px] border-borderGray last:border-none px-7 max-md:flex-row max-md:justify-between max-md:w-full max-md:border-b-[1px] max-md:border-r-0 max-md:px-0 max-md:py-2">
              <span className="text-grayText text-xs font-bold">All User</span>
              <span className="text-text text-4xl font-bold">765k</span>
            </div>
          </div>
        </Grid>
        <Grid
          xs={12}
          className="flex flex-wrap justify-center items-center gap-3"
        >
          {PERSONAL_WALLET_LIST.map((i) => (
            <div
              key={i.title}
              onClick={() => selectPersonalWallets(i)}
              className={`w-[140px] h-[102px] p-1 rounded-[18px] border-[1px] flex flex-col gap-1 justify-center items-center cursor-pointer ${
                selectedPersonalWallets.includes(i)
                  ? "border-primary"
                  : "border-borderGray"
              }`}
            >
              <Image width={60} height={40} src={i.img} alt={i.title} />
              <div className="flex flex-wrap justify-center items-center gap-1">
                {i.icon}
                <span className="text-text text-sm font-bold">{i.title}</span>
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        className="w-full flex justify-between max-2xl:flex-col max-2xl:gap-8"
      >
        <Grid
          container
          xs={8}
          className="py-5 px-10 rounded-xl shadow-3xl bg-card w-full max-w-[62%] flex justify-between max-2xl:max-w-none"
        >
          <Grid className="w-full max-w-[28%] flex flex-col justify-between max-xl:max-w-none max-xl:flex-row max-xl:flex-wrap max-xl:items-start max-md:justify-center max-md:gap-5">
            <div className="text-primary text-lg font-bold pb-10 max-md:pb-0">
              Totality Information
            </div>
            <div className="flex flex-col gap-3 max-xl:flex-row max-md:flex-col">
              <div className="flex gap-2 items-center">
                <div className="h-4 w-1 bg-primary" />
                <div className="flex items-center gap-1">
                  <span className="text-lg text-text font-bold">
                    {"1,251,315"}
                  </span>
                  <span className="text-grayText text-xs font-bold">
                    {"Register Users"}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-4 w-1 bg-redText" />
                <div className="flex items-center gap-1">
                  <span className="text-lg text-text font-bold">
                    {"7,251,315"}
                  </span>
                  <span className="text-grayText text-xs font-bold">
                    {"Created Wallet"}
                  </span>
                </div>
              </div>
            </div>
            <Switch
              first="Weekly"
              seconde="Monthly"
              active={totalityActive}
              setActive={setTotalityActive}
            />
          </Grid>
          <Grid className="w-full max-w-[70%] max-xl:max-w-none">
            <ReactECharts option={option} />
          </Grid>
        </Grid>
        <Grid
          container
          xs={4}
          className="py-5 px-10 rounded-xl shadow-3xl bg-card flex justify-between w-full max-w-[35%] max-xl:flex-col max-2xl:max-w-none"
        >
          <Grid className="w-full max-w-[70%] flex flex-col justify-between max-xl:max-w-none max-md:items-center">
            <div className="text-primary text-lg font-bold max-xl:text-center">
              Circle Chart of Currency
            </div>
            <div className="max-xl:flex max-xl:justify-center">
              <Switch
                first="Weekly"
                seconde="Monthly"
                active={circleChartActive}
                setActive={setCircleChartActive}
              />
            </div>
            <Grid
              container
              xs={12}
              className="flex flex-col flex-wrap gap-2 justify-between h-1/3 max-xl:h-2/5 max-md:w-full"
            >
              {data.map((item, index) => (
                <Grid
                  md={6}
                  xs={12}
                  key={index}
                  className="flex items-center gap-1 w-full max-w-[40%]"
                >
                  <div
                    className="rounded-full w-1.5 h-1.5"
                    style={{
                      backgroundColor: stc(item.name),
                    }}
                  />
                  <span className="pl-1 text-xs font-bold text-grayText">
                    {item.name}
                  </span>
                  <span className="text-xs font-bold text-text ml-auto">
                    {item.percentage}%
                  </span>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid className="w-full max-w-[28%] max-xl:max-w-none">
            <ReactECharts option={pieChartOption} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        className="w-full py-5 px-10 rounded-xl shadow-3xl bg-card flex flex-col gap-7"
      >
        <Grid
          container
          xs={12}
          className="flex justify-between max-xl:flex max-xl:flex-col max-xl:gap-2"
        >
          <Grid className="w-full max-w-fit flex gap-5 items-center max-xl:max-w-none max-md:flex-col max-md:items-center">
            <div className="text-primary text-lg font-bold">
              Chart of Currency
            </div>
            <div className="max-xl:ml-auto max-md:ml-0">
              <Switch
                first="Weekly"
                seconde="Monthly"
                active={currencyActive}
                setActive={setCurrencyActive}
              />
            </div>
          </Grid>
          <Grid className="w-full max-w-[70%] flex gap-1 items-center max-xl:max-w-none max-lg:flex-wrap max-lg:justify-center">
            {CURRENCY_ACTIONS.map((ca) => (
              <div
                key={ca.title}
                onClick={() => selectCurrencyActions(ca)}
                className={`w-full max-w-[200px] h-14 p-3 rounded-xl border-[1.5px] max-md:max-w-none ${
                  selectedCurrencyActions?.includes(ca)
                    ? "bg-card border-primary"
                    : "bg-grayLight border-transparent"
                } flex flex-col justify-between cursor-pointer`}
              >
                <div
                  className={`${
                    selectedCurrencyActions?.includes(ca)
                      ? "text-primary"
                      : "text-grayText"
                  } flex gap-1 items-center text-xs font-bold`}
                >
                  {ca.icon} {ca.title}
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <div
                      className="rounded-full w-1.5 h-1.5"
                      style={{
                        backgroundColor: stc(ca.title),
                      }}
                    />
                    <div className="text-grayText">
                      <WriteIcon />
                    </div>
                    <span className="text-xs text-text font-bold">111</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className="rounded-full w-1.5 h-1.5"
                      style={{
                        backgroundColor: stc(ca.title),
                      }}
                    />
                    <div className="text-grayText">
                      <DollarIcon />
                    </div>
                    <span className="text-xs text-text font-bold">
                      25,711,822
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid md={6} xs={12}>
            <ReactECharts option={option1} />
          </Grid>
          <Grid md={6} xs={12}>
            <ReactECharts option={option2} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        className="py-5 px-10 rounded-xl shadow-3xl bg-card flex flex-col gap-2"
      >
        <div className="text-primary text-lg font-bold">Wallet List</div>
        <div className="w-full flex flex-col gap-2">
          {walletList?.map((w) => (
            <WalletCard key={w.title} item={w} />
          ))}
        </div>
        <div className="w-full flex justify-center pt-1">
          <Pagination
            totalPage={10}
            currentPage={currentPage}
            containerClass="mx-auto"
            onPageChange={(curr) => setCurrentPage(curr)}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Wallet;
