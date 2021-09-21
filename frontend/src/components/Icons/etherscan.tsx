import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  className?: string;
};

function IconEtherscan({ className }: Props) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0245 40C31.0549 40 39.9967 31.0582 39.9967 20.0278C39.9967 8.99751 31.0549 0.0556641 20.0245 0.0556641C8.99421 0.0556641 0.0523682 8.99751 0.0523682 20.0278C0.0523682 31.0582 8.99421 40 20.0245 40Z"
        fill="white"
      />
      <path
        d="M7.53699 35.5963C10.9486 38.3138 15.2705 39.9443 19.9721 39.9443C31.0027 39.9443 39.9443 31.0027 39.9443 19.9722C39.9443 19.4221 39.9148 18.8786 39.8723 18.3384C32.4007 28.2786 20.7546 34.8989 7.53699 35.5963Z"
        fill="#979695"
      />
      <path
        d="M19.6185 0.00324525C9.09551 0.186596 0.419073 8.66986 0.0163552 19.1864C-0.134255 23.1415 0.864354 26.8544 2.70769 30.0172C3.13332 30.7473 3.90274 31.2089 4.74747 31.2188C4.9079 31.222 5.06506 31.222 5.22549 31.222C5.82138 31.222 6.414 31.2089 7.00661 31.1828C7.85461 31.1467 8.51926 30.4428 8.51926 29.5948V18.8589C8.51926 18.1354 9.10533 17.5493 9.82891 17.5493H13.3224C14.046 17.5493 14.6321 18.1354 14.6321 18.8589V29.86C15.1592 29.7421 16.0399 29.2052 16.5343 28.8843C16.7602 28.737 16.8945 28.4849 16.8945 28.2164V14.2293C16.8945 13.5057 17.4805 12.9197 18.2041 12.9197H21.6976C22.4212 12.9197 23.0073 13.5057 23.0073 14.2293V27.0803C23.5017 26.8576 24.3104 26.1701 24.7949 25.7346C25.0503 25.5054 25.1977 25.1747 25.1977 24.8309V10.4477C25.1977 9.72413 25.7837 9.13806 26.5073 9.13806H30.0008C30.7244 9.13806 31.3104 9.72413 31.3104 10.4477V22.4834C34.2735 20.2439 36.9452 17.6344 39.2437 14.7204C36.9059 6.12914 28.9858 -0.160461 19.6185 0.00324525Z"
        fill="#21325B"
      />
    </svg>
  );
}

IconEtherscan.propTypes = {
  className: PropTypes.string,
};

export default IconEtherscan;
