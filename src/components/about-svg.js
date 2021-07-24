import React from "react";

export default function AboutSVG({ main }) {
    return (
        <svg viewBox="0 0 627 484" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M475 8H571C597.51 8 619 29.4903 619 56V200H475V8Z" fill="#1F7AE0" />
            <g filter="url(#filter0_d)">
                <rect x="32" y="32" width="563" height="420" rx="24" fill="white" />
            </g>
            <image href={main} x="48" y="48" width="531" height="388" clipPath="url(#main-clip)" />
            <rect id="main-rect" opacity="0.24" x="48" y="48" width="531" height="388" rx="20" fill="#1F7AE0" />
            <path opacity="0.4" d="M120 476H48C25.9086 476 8 458.091 8 436V332H120V476Z" fill="#2ECC71" />
            <defs>
                <clipPath id="main-clip">
                    <use href="#main-rect" />
                </clipPath>
                <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="627"
                    height="484"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="16" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.509804 0 0 0 0 0.509804 0 0 0 0 0.509804 0 0 0 0.2 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}
