import SideBarPersonalWallet from "$/public/icons/sidebar/wallet.svg";
import SideBarMerchant from "$/public/icons/sidebar/merchants.svg";
import SideBarBlog from "$/public/icons/sidebar/blog.svg";
import SideBarDonation from "$/public/icons/sidebar/donation.svg";
import SideBarApi from "$/public/icons/sidebar/api.svg";
import SideBarPlugin from "$/public/icons/sidebar/plugin.svg";
import SideBarUserSetting from "$/public/icons/sidebar/user.svg";
import SideBarTickets from "$/public/icons/sidebar/tickets.svg";
import SideBarTransaction from "$/public/icons/sidebar/transaction.svg";

export const HeaderRoutesLocalization: any = {
  "/admin/merchant": "Merchant List",
  "/admin/plugin": "Plugin",
  "/admin/tickets": "Ticket",
  "/admin/wallet": "Wallet List",
  "/admin/apis": "",
  "/admin/blog": "Writing Blog",
  "/admin/user-setting": "",
  "/admin/transaction": "List of Transactions",
  "/dashboard/apis": "API",
  "/dashboard/merchant": "Merchants",
  "/dashboard/merchant/income": "Merchants",
  "/dashboard/merchant/transaction": "Merchants",
  "/dashboard/wallet": "Personal Wallet",
  "/dashboard/wallet/transaction": "Personal Wallet",
  "/dashboard/tickets": "Tickets",
  "/dashboard/plugin": "Plugin",
  "/dashboard/plugin/[pluginId]": "Plugin",
};

export const SIDE_BAR_LINKS = [
  {
    title: "Personal wallet",
    route: "/dashboard/wallet",
    icon: <SideBarPersonalWallet />,
    hasChild: true,
  },
  {
    title: "Donation",
    route: "/dashboard/donation",
    icon: <SideBarDonation />,
    hasChild: false,
  },
  {
    title: "API",
    route: "/dashboard/apis",
    icon: <SideBarApi />,
    hasChild: false,
  },
  {
    title: "Plugin",
    route: "/dashboard/plugin",
    icon: <SideBarPlugin />,
    hasChild: false,
  },
  {
    title: "User settings",
    route: "/dashboard/user-settings",
    icon: <SideBarUserSetting />,
    hasChild: false,
  },
  {
    title: "Tickets",
    route: "/dashboard/tickets",
    icon: <SideBarTickets />,
    hasChild: false,
  },
];

export const ADMIN_SIDE_BAR_LINKS = [
  {
    title: "Merchants List",
    route: "/admin/merchant",
    icon: <SideBarMerchant />,
    hasChild: false,
  },
  {
    title: "Wallet",
    route: "/admin/wallet",
    icon: <SideBarPersonalWallet />,
    hasChild: true,
  },
  {
    title: "Writing blog",
    route: "/admin/blog",
    icon: <SideBarBlog />,
    hasChild: false,
  },
  {
    title: "Plugin",
    route: "/admin/plugin",
    icon: <SideBarPlugin />,
    hasChild: false,
  },
  {
    title: "User settings",
    route: "/admin/users",
    icon: <SideBarUserSetting />,
    hasChild: false,
  },
  {
    title: "Admin settings",
    route: "/admin/administrative-users",
    icon: <SideBarUserSetting />,
    hasChild: false,
  },
  {
    title: "Tickets",
    route: "/admin/tickets",
    icon: <SideBarTickets />,
    hasChild: false,
  },
  {
    title: "List of Transactions",
    route: "/admin/transactions",
    icon: <SideBarTransaction />,
    hasChild: false,
  },
];
