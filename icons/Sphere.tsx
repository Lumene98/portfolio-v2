import React from 'react';

function Sphere() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="104" height="107" fill="none" viewBox="0 0 104 107">
      <path
        fill="url(#paint0_radial)"
        fillRule="evenodd"
        d="M104 53.3c0 14.136-5.479 27.693-15.23 37.689C79.017 100.984 65.79 106.6 52 106.6c-13.791 0-27.018-5.616-36.77-15.611C5.48 80.993 0 67.436 0 53.3s5.479-27.693 15.23-37.689C24.982 5.616 38.21 0 52 0c13.791 0 27.018 5.616 36.77 15.611C98.52 25.607 104 39.164 104 53.3z"
        clipRule="evenodd"
      />
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(37.427 -40.044 65.419) scale(90.1271 80.692)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF32BB">
            <animate
              attributeName="stop-color"
              values="#FF32BB; #EE2AAD; #D52199; #EE2AAD; #FF32BB;"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="offset"
              values="0;.1;.2;.3;.4;.5;.6;.7;.6;.5;.4;.3;.2;.1;0;"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="1" stopColor="#FF5F58">
            <animate
              attributeName="stop-color"
              values=" #FF5F58; #EA5B55; #EE7671; #EA5B55; #FF5F58;"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default Sphere;
