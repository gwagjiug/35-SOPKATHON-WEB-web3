import * as React from 'react';
const SvgIcCheckboxDisabled = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#BDBDBD"
      d="M7 20h6c5 0 7-2 7-7V7c0-5-2-7-7-7H7C2 0 0 2 0 7v6c0 5 2 7 7 7"
    />
    <path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 9.83 2.83 2.83L14.5 7"
    />
  </svg>
);
export default SvgIcCheckboxDisabled;
