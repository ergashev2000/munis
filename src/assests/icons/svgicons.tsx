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

export const CartIcon: FC = () => (
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
    className="lucide lucide-shopping-cart"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

export const ArrowRightIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a7a5a5"
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
