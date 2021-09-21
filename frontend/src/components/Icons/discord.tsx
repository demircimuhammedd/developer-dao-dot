import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  className?: string;
};

function IconDiscord({ className }: Props) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#5865F2" />
      <path
        d="M28.888 11.6752C27.2128 10.8925 25.4242 10.3223 23.5578 10C23.3276 10.4144 23.0584 10.974 22.8742 11.4167C20.8873 11.1192 18.9181 11.1192 16.9667 11.4167C16.7825 10.974 16.5062 10.4144 16.276 10C14.4025 10.3223 12.6139 10.8961 10.9422 11.6788C7.56698 16.7753 6.65322 21.7478 7.1101 26.6495C9.34846 28.3212 11.516 29.3342 13.6481 30C14.1758 29.2739 14.6433 28.5054 15.0471 27.6943C14.2785 27.4004 13.5383 27.0391 12.8406 26.6212C13.0247 26.4831 13.2054 26.3414 13.3825 26.1927C17.6325 28.1796 22.2544 28.1796 26.4549 26.1927C26.632 26.3414 26.8126 26.4831 26.9968 26.6212C26.2991 27.0427 25.5588 27.4039 24.7867 27.6979C25.1905 28.5089 25.658 29.281 26.1857 30.0035C28.3178 29.3377 30.4889 28.3248 32.7272 26.6531C33.262 20.9687 31.8099 16.0421 28.888 11.6752ZM15.6279 23.6356C14.3529 23.6356 13.3045 22.4455 13.3045 20.9934C13.3045 19.5413 14.3281 18.3478 15.6279 18.3478C16.9277 18.3478 17.9725 19.5378 17.9513 20.9934C17.9513 22.442 16.9242 23.6356 15.6279 23.6356ZM24.2094 23.6356C22.9344 23.6356 21.8861 22.4455 21.8861 20.9934C21.8861 19.5413 22.9096 18.3478 24.2094 18.3478C25.5093 18.3478 26.5541 19.5378 26.5328 20.9934C26.5328 22.442 25.5093 23.6356 24.2094 23.6356Z"
        fill="white"
      />
    </svg>
  );
}

export default IconDiscord;
