import * as React from 'react';
const SvgIcCheckboxDefault = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#FF8A80"
      d="M7 20h6c5 0 7-2 7-7V7c0-5-2-7-7-7H7C2 0 0 2 0 7v6c0 5 2 7 7 7"
    />
    <path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.75 10 2.83 2.83 5.67-5.66"
    />
  </svg>
);
export default SvgIcCheckboxDefault;
