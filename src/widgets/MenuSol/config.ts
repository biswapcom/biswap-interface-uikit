import { noop } from "lodash";

// types
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { ItemTypes, MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "../Menu/types";
import { BadgeTypes } from "../../components/Badge";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "secondary",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: "Home",
    href: "/",
    hidden: true,
  },
  {
    label: "Trade",
    showNavBadge: true,
    colorNavBadge: "warning",
    items: [
      {
        label: "Swap",
        href: "/swap",
        leftIcon: "ExchangeOpacity",
        description: "Item description",
        badgeType: BadgeTypes.SUCCESS,
        badgeTitle: "New",
      },
      {
        label: "Expert Trade",
        leftIcon: "ExpertModeOpacity",
        rightIconFill: "primary",
        description: "Item description",
        href: "/liquidity",
        disabled: true,
        badgeType: BadgeTypes.CORE,
        badgeTitle: "Modification",
      },
      {
        label: "Liquidity",
        href: "/pool",
        leftIcon: "LiquidityOpacity",
        description: "Item description",
      },
    ],
  },
  {
    type: ItemTypes.DIVIDER,
    showItemsOnMobile: true,
    href: "",
  },
  {
    label: "Buy crypto",
    href: "/",
    isMobileNav: true,
    showItemsOnMobile: true,
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: {
      channel: {
        icon: "LogoIcon",
        label: "Channel",
        href: "https://t.me/biswap_news",
      },
      chats: [
        {
          icon: "USAIcon",
          label: "English",
          href: "https://t.me/biswap",
        },
        {
          icon: "IDIcon",
          label: "Bahasa",
          href: "https://t.me/biswap_idn",
        },
        {
          icon: "RUIcon",
          label: "Русский",
          href: "https://t.me/biswap_rus",
        },
        {
          icon: "VNIcon",
          label: "Tiếng Việt",
          href: "https://t.me/biswap_vnm",
        },
        {
          icon: "FRIcon",
          label: "La France",
          href: "https://t.me/biswap_france",
        },
        {
          icon: "PTIcon",
          label: "Portugal",
          href: "https://t.me/biswap_prt",
        },
        {
          icon: "DEIcon",
          label: "Germany",
          href: "https://t.me/biswap_germany",
        },
        {
          icon: "CNIcon",
          label: "Сhina",
          href: "https://t.me/biswap_china",
        },
        {
          icon: "TRIcon",
          label: "Turkey",
          href: "https://t.me/biswap_turkey",
        },
        {
          icon: "ESIcon",
          label: "Espanol",
          href: "https://t.me/biswap_espanol",
        },
        {
          icon: "INIcon",
          label: "India",
          href: "https://t.me/biswap_india",
        },
      ],
    },
  },
  {
    label: "Instagram",
    icon: "InstagramIcon",
    href: "https://www.instagram.com/_biswap_dex",
  },
  {
    label: "Facebook",
    icon: "FacebookIcon",
    href: "https://www.facebook.com/profile.php?id=100082146264626",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/Biswap_DEX",
  },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://biswap-dex.medium.com/",
  },
  {
    label: "Youtube",
    icon: "YoutubeIcon",
    href: "https://www.youtube.com/channel/UCHartwkRUURf2Q7MlKOV84w",
  },
  {
    label: "TikTok",
    icon: "TikTokIcon",
    href: "https://www.tiktok.com/@biswap_dex?_t=8ZvBURxahPR&_r=1",
  },
  {
    label: "CoinMarketCap",
    icon: "CoinMarketCapIcon",
    href: "https://coinmarketcap.com/community/profile/Biswap_DEX/",
  },
  {
    label: "DeBank",
    icon: "DeBankIcon",
    href: "https://debank.com/official-account/112793",
  },
];

export const BSWPriceLabel = "BSW Price";
export const BSWPriceValue = 1234.947;
// ];

export const socialLinks = {
  title: "Community",
  links: [],
};

export const aboutLinks = {
  title: "About Us",
  links: [
    {
      label: "Info",
      href: "/",
    },
    {
      label: "Github",
      href: "/",
    },
    {
      label: "Docs",
      href: "/",
    },
    {
      label: "News",
      href: "/",
    },
    {
      label: "Contacts",
      href: "/",
    },
  ],
};

export const moreLinks = {
  title: "More",
  links: [
    {
      label: "Voting",
      href: "/",
    },
    {
      label: "Charity",
      href: "/",
    },
    {
      label: "Marketplace",
      href: "/",
    },
    {
      label: "Limit Order",
      href: "/",
    },
    {
      label: "Liquid Staking",
      href: "/",
    },
    {
      label: "Competitions",
      href: "/",
    },
    {
      label: "Prediction",
      href: "/",
    },
  ],
};

export const infoLinks = {
  title: "Info",
  links: [
    {
      label: "Terms of Use",
      href: "/",
    },
    {
      label: "Privacy Policy",
      href: "/",
    },
    {
      label: "Cookies",
      href: "/",
    },
    {
      label: "Marketplace",
      href: "/",
    },
    {
      label: "IDO",
      href: "/",
    },
    {
      label: "About BSW",
      href: "/",
    },
  ],
};

export const productLinks = {
  title: "Features",
  links: [
    {
      label: "Exchange",
      href: "/swap",
    },
    {
      label: "Liquidity",
      href: "/pool",
    },
    {
      label: "Farms",
      href: `/farms`,
    },
    {
      label: "Launchpools",
      href: `/pools`,
    },
    {
      label: "Fixed Staking",
      href: "/fixed_staking",
    },
    {
      label: "Analytics",
      href: "/analytics",
    },
  ],
};

export const serviceLinks = {
  title: "Service",
  links: [
    {
      label: "Referral program",
      href: "/referral",
    },
    {
      label: "BSW Token",
      href: "/bsw_token",
    },
    {
      label: "Apply to Launch",
      href: "https://forms.gle/V8sQfCi5aBesL2ya8",
    },
    {
      label: "$10M Program",
      href: "/incentive_program",
    },
    {
      label: "Space Agents",
      href: "/space_agents",
    },
  ],
};

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://biswap.org",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const MENU_HEIGHT = 72;
export const MOBILE_EVENT_BUTTON_HEIGHT = 40;
export const TRANSFER_BLOCK_CLOSED_HEIGHT = 40;
export const TRANSFER_BLOCK_OPENED_HEIGHT = 156;
