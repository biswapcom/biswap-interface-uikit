import { type DropdownMenuItems, DropdownMenuItemType } from "./types";

const ItemsMock: DropdownMenuItems[] = [
  {
    label: "Swap",
    href: "/swap",
    leftIcon: "Swap",
    description: "Item description",
  },
  {
    label: "Expert Trade",
    href: "/pool",
    leftIcon: "ExpertTrade",
    rightIconFill: "primary",
    description: "Item description",
    links: [
      {
        label: "Label",
        href: "/polar",
      },
      {
        label: "Label 2",
        href: "/polar",
      },
      {
        label: "Label 3",
        href: "/polar",
      },
      {
        label: "Label 4",
        href: "/polar",
      },
    ],
  },
  {
    label: "Expert Trade",
    href: "/pool",
    leftIcon: "ExpertTrade",
    rightIcon: "ArrowRightIcon",
    rightIconFill: "primary",
    description: "Item description",
  },
  {
    label: "Liquidity",
    href: "/pool",
    leftIcon: "Liquidity",
    description: "Item description",
  },
  {
    label: "Farms",
    href: "/pool",
    leftIcon: "Farms",
    description: "Item description",
  },
  {
    label: "LaunchPools",
    href: "/pool",
    leftIcon: "Launch",
    description: "Item description",
    links: [
      {
        label: "Stake BSW",
        href: "/polar",
      },
      {
        label: "Stake tokens",
        href: "/polar",
      },
    ],
  },
  {
    label: "Referral Program",
    href: "/pool",
    description: "Item description",
  },
  {
    label: "IDO",
    href: "/pool",
    description: "Item description",
  },
  {
    label: "Lottery",
    href: "/pool",
    description: "Item description",
  },
  {
    label: "Competitions",
    href: "/pool",
    description: "Item description",
  },
  {
    label: "NFT Launchpad",
    href: "/pool",
    description: "Item description",
    type: DropdownMenuItemType.EXTERNAL_LINK,
  },
  {
    label: "NFT Earn",
    href: "/pool",
    description: "Item description",
    type: DropdownMenuItemType.EXTERNAL_LINK,
  },
  {
    label: "Marketplace",
    href: "/pool",
    leftIcon: "MarketMenu",
    description: "Item description",
    type: DropdownMenuItemType.EXTERNAL_LINK,
  },
  {
    label: "GameFi",
    href: "/pool",
    description: "Item description",
    type: DropdownMenuItemType.EXTERNAL_LINK,
  },
];

export default ItemsMock;
