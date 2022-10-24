import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <circle
          cx={12}
          cy={12}
          r={12}
          style={{
            fill: "#f7931e",
          }}
        />
        <path
          d="M9.39,19.52c-2.87.73-4-.68-3.61-2.33a6.54,6.54,0,0,1,1.68-2.74c2.48-2.74,7.69-5.86,12.82-8-3.9,2.2-9,5.62-11.36,9.51C8.17,17.13,7.7,19,9.39,19.52Z"
          style={{
            fill: "#ffecd3",
            fillRule: "evenodd",
          }}
        />
        <path
          d="M6.37,12.35a50.22,50.22,0,0,1,6-2.61C7.31,12,3.79,15.57,5.67,16.66c-1,0-1.62-.29-1.84-.77-.43-.9.44-2,1.18-2.6l0,0a8.24,8.24,0,0,1-.06-1.22,7.29,7.29,0,0,1,12.33-5c-.5.21-1,.42-1.47.64a5.77,5.77,0,0,0-3.36-1.21,5.85,5.85,0,0,0-6.06,5.63Z"
          style={{
            fill: "#ffecd3",
            fillRule: "evenodd",
          }}
        />
        <path
          d="M9.21,17.37a2.86,2.86,0,0,0,.18,1.72,7.46,7.46,0,0,0,2.84.57,7.3,7.3,0,0,0,7.3-7.3,7.21,7.21,0,0,0-1.1-3.85c-.39.25-.79.52-1.2.82a35.32,35.32,0,0,0-5.52,5.21h1.8a26.55,26.55,0,0,1,4.32-3.89,5.59,5.59,0,0,1,.25,1.7,5.85,5.85,0,0,1-8.87,5Z"
          style={{
            fill: "#ffecd3",
            fillRule: "evenodd",
          }}
        />
      </g>
    </g>
  </svg>
  );
};

export default Icon;
