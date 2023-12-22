import React, { FC } from "react";

export const LocationIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-map-pin"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const MenuIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-align-justify"
  >
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </svg>
);

export const SearchIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8c8c8c"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-search"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const UserIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-user-round"
  >
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

interface HeartIconProps {
  color?: string;
}
export const HeartIcon: FC<HeartIconProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "#000"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-heart"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export const CartIcon: FC<HeartIconProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "#000"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-shopping-cart"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

export const ArrowRightIcon: FC<HeartIconProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke=""
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const Icon1: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11V16H19V11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11V16H3V11Z"
      fill="#76797F"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 13C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19V15C9 13.8954 8.10457 13 7 13H5ZM17 13C15.8954 13 15 13.8954 15 15V19C15 20.1046 15.8954 21 17 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13H17Z"
      fill="#76797F"
    ></path>
  </svg>
);

export const Icon2: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.75"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99963 3H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V3H16.0004C15.0882 4.21445 13.6358 5 12 5C10.3642 5 8.91184 4.21445 7.99963 3Z"
      fill="#1AB2FF"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.89431 4.55279L4.99989 3V9.25L4.39431 9.55279C3.90033 9.79978 3.29966 9.59955 3.05267 9.10557L1.4471 5.89443C1.20011 5.40045 1.40034 4.79978 1.89431 4.55279ZM22.1053 4.55279L18.9998 3V9.25L19.6053 9.55279C20.0993 9.79978 20.7 9.59955 20.947 9.10557L22.5525 5.89443C22.7995 5.40045 22.5993 4.79978 22.1053 4.55279Z"
      fill="#1AB2FF"
    ></path>
  </svg>
);

export const CloseIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const Instagram: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 56.7 56.7"
    xmlSpace="preserve"
    width={24}
    height={24}
  >
    <path
      d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"
      fill="#ffffff"
      className="fill-000000"
    ></path>
    <circle
      cx="41.5"
      cy="16.4"
      r="2.9"
      fill="#ffffff"
      className="fill-000000"
    ></circle>
    <path
      d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z"
      fill="#ffffff"
      className="fill-000000"
    ></path>
  </svg>
);

export const Telegram: FC = () => (
  <svg
    viewBox="0 0 256 256"
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h256v256H0z"></path>
    <path
      d="m88 134.9 89.9 79.1a8 8 0 0 0 13.1-4.2l37.6-164.2a8 8 0 0 0-10.7-9.2L33.3 108.9c-7.4 2.9-6.4 13.7 1.4 15.3ZM88 134.9l136.1-98.3"
      fill="none"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      className="stroke-000000"
    ></path>
    <path
      d="m132.9 174.4-31.2 31.2A8 8 0 0 1 88 200v-65.1"
      fill="none"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      className="stroke-000000"
    ></path>
  </svg>
);

export const Facebook: FC = () => (
  <svg
    viewBox="0 0 56.693 56.693"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
  >
    <path
      d="M40.43 21.739h-7.645v-5.014c0-1.883 1.248-2.322 2.127-2.322h5.395V6.125l-7.43-.029c-8.248 0-10.125 6.174-10.125 10.125v5.518h-4.77v8.53h4.77v24.137h10.033V30.269h6.77l.875-8.53z"
      fill="#ffffff"
      className="fill-000000"
    ></path>
  </svg>
);

export const Youtube: FC = () => (
  <svg
    viewBox="0 0 512 512"
    width={24}
    height={24}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
  >
    <path
      d="M501.303 132.765c-5.887-22.03-23.235-39.377-45.265-45.265C416.106 76.8 256 76.8 256 76.8s-160.107 0-200.039 10.7c-22.026 5.888-39.377 23.235-45.264 45.265C0 172.693 0 256.003 0 256.003s0 83.308 10.697 123.232c5.887 22.03 23.238 39.382 45.264 45.269C95.893 435.2 256 435.2 256 435.2s160.106 0 200.038-10.696c22.03-5.887 39.378-23.239 45.265-45.269 10.696-39.924 10.696-123.232 10.696-123.232s0-83.31-10.696-123.238ZM204.797 332.804V179.201l133.019 76.802-133.019 76.801Z"
      fillRule="nonzero"
      fill="#ffffff"
      className="fill-000000"
    ></path>
  </svg>
);

export const SettingsIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-settings"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const OrderCartIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-shopping-basket"
  >
    <path d="m5 11 4-7" />
    <path d="m19 11-4-7" />
    <path d="M2 11h20" />
    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
    <path d="m9 11 1 9" />
    <path d="M4.5 15.5h15" />
    <path d="m15 11-1 9" />
  </svg>
);

export const DownloadIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-download"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const MapIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="red"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-map-pin"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
