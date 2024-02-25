import SslConnectionIcon from "$/public/icons/personal/ssl_connection.svg";
import StoreSecurityIcon from "$/public/icons/personal/store_securely.svg";
import AnonymityIcon from "$/public/icons/personal/anonymity.svg";
import PrivacyIcon from "$/public/icons/personal/privacy.svg";
import UseMultiFactorSecurityIcon from "$/public/icons/personal/use_multi_factor_security.svg";

export const PERSONAL_SECURITY_CARD_ITEMS = [
  {
    icon: <SslConnectionIcon />,
    title: "SSL Connection",
    description:
      "SSL and HTTPS setups, two-factor authentication, trusted IP addresses",
  },
  {
    icon: <StoreSecurityIcon />,
    title: "Store securely",
    description:
      "Secure assets with multi-sig and optional key encryption in BitPay’s non-custodial wallet. Seamlessly manage assets across platforms.",
  },
  {
    icon: <AnonymityIcon />,
    title: "Anonymity",
    description: "No proof of identity. Your payments Remain anonymous",
  },
  {
    icon: <PrivacyIcon />,
    title: "Privacy",
    description:
      "We don’t keep transaction details after the payment is complete",
  },
  {
    icon: <UseMultiFactorSecurityIcon />,
    title: "Use multi-factor security",
    description:
      "Use multi-factor wallets to split payment authorization across up to 12 devices or trusted copayers for enhanced security.",
  },
];
