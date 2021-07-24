import React from "react";

export default function HomeSVG({ main, left, right }) {
    return (
        <svg viewBox="0 0 659 469" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M375.952 9H459.89C486.4 9 507.89 30.4903 507.89 57V193.713H375.952V9Z" fill="#1F7AE0" />
            <path
                d="M468.309 459.238H402.759C380.667 459.238 362.759 441.33 362.759 419.238V340.494H468.309V459.238Z"
                fill="#2ECC71"
            />
            <g filter="url(#filter0_d)">
                <rect x="385.848" y="221.75" width="240.529" height="214.399" rx="20" fill="white" />
            </g>
            <image href={right} x="397" y="232" width="219.089" height="192.959" clipPath="url(#right-clip)" />
            <rect
                id="right-rect"
                opacity="0.24"
                x="397"
                y="232"
                width="219.089"
                height="192.959"
                rx="16"
                fill="#2ECC71"
            />
            <g filter="url(#filter1_d)">
                <rect x="188.765" y="32.0891" width="296.036" height="263.876" rx="24" fill="white" />
            </g>
            <image href={main} x="201.959" y="47.2829" width="269.648" height="237.488" clipPath="url(#main-clip)" />
            <rect
                id="main-rect"
                x="201.959"
                y="47.2829"
                width="269.648"
                height="237.488"
                rx="20"
                fill="#1F7AE0"
                fillOpacity="0.24"
            />
            <g filter="url(#filter2_d)">
                <rect x="32.0891" y="155.781" width="216.476" height="192.959" rx="18" fill="white" />
            </g>
            <image href={left} x="41.7371" y="165.429" width="197.18" height="173.663" clipPath="url(#left-clip)" />
            <rect
                id="left-rect"
                x="41.7371"
                y="165.429"
                width="197.18"
                height="173.663"
                rx="14"
                fill="#2ECC71"
                fillOpacity="0.24"
            />
            <path
                opacity="0.4"
                d="M101.357 132.692H49C26.9086 132.692 9 150.6 9 172.692V238.242H101.357V132.692Z"
                fill="#227ADE"
            />
            <defs>
                <clipPath id="left-clip">
                    <use href="#left-rect" />
                </clipPath>
                <clipPath id="main-clip">
                    <use href="#main-rect" />
                </clipPath>
                <clipPath id="right-clip">
                    <use href="#right-rect" />
                </clipPath>
                <filter
                    id="filter0_d"
                    x="353.848"
                    y="189.75"
                    width="304.529"
                    height="278.399"
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
                <filter
                    id="filter1_d"
                    x="156.765"
                    y="0.0891418"
                    width="360.036"
                    height="327.876"
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
                <filter
                    id="filter2_d"
                    x="0.0891266"
                    y="123.781"
                    width="280.476"
                    height="256.959"
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
