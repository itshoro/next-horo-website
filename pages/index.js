import { AnimatedLink } from "@/components/links";
import { Carousell, CarousellItems } from "@/components/containers";
import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import NowPlaying from "@/components/spotify/NowPlaying";

const EducationItem = ({ from, to, location, isJob, major, title }) => (
  <article className="whitespace-nowrap">
    <div className="pb-6 space-y-2">
      <div className="text-xs text-[#4F4F4F]">
        {from} &ndash; {to} {!isJob && <>&middot; {major}</>}
      </div>
      <div className="text-white">{location}</div>
    </div>
    {title && (
      <div className="inline-flex rounded-lg py-1 px-3 select-none cursor-default text-[#b7b7b7] border border-white border-opacity-10 hover:bg-opacity-10 hover:border-transparent hover:bg-white hover:text-white transition-colors text-xs items-center gap-1">
        <object>
          {isJob ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="url(#b)"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="url(#b)"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          )}
        </object>
        {title}
      </div>
    )}
  </article>
);

export default function Home() {
  const educationItems = (
    <CarousellItems className="space-x-12 px-6">
      <EducationItem
        from={2018}
        to={2021}
        isJob={false}
        location="Hochschule Niederrhein"
        major="Computer Science"
        title="Bachelor of Science"
      />
      <EducationItem
        from={2017}
        to={2018}
        isJob={false}
        location="Heinrich Heine Universität"
        major="Computer Science"
      />
    </CarousellItems>
  );

  const experienceItems = (
    <CarousellItems className="space-x-12 px-6">
      <EducationItem
        from={2021}
        to={2021}
        isJob={true}
        location="Limegreen IT"
        title="Intern / Web Developer"
      />
      <EducationItem
        from={2020}
        to={2020}
        isJob={true}
        location="eEvolution GmbH"
        title="Student Job / .NET Developer"
      />
    </CarousellItems>
  );

  const toolItems = (
    <CarousellItems className="space-x-12 px-6 inline-flex">
      <div className="flex flex-col flex-auto whitespace-nowrap pt-6 gap-4 text-white text-sm">
        <div className="flex gap-1">
          <object>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M5.33561 16.4998C6.04286 16.4998 6.72113 16.2189 7.22123 15.7188C7.72133 15.2187 8.00228 14.5404 8.00228 13.8332V11.1665H5.33561C4.62837 11.1665 3.95009 11.4475 3.44999 11.9476C2.9499 12.4476 2.66895 13.1259 2.66895 13.8332C2.66895 14.5404 2.9499 15.2187 3.44999 15.7188C3.95009 16.2189 4.62837 16.4998 5.33561 16.4998Z"
                  fill="#0ACF83"
                />
                <path
                  d="M2.66895 8.50016C2.66895 7.79292 2.9499 7.11464 3.44999 6.61455C3.95009 6.11445 4.62837 5.8335 5.33561 5.8335H8.00228V11.1668H5.33561C4.62837 11.1668 3.95009 10.8859 3.44999 10.3858C2.9499 9.88568 2.66895 9.20741 2.66895 8.50016Z"
                  fill="#A259FF"
                />
                <path
                  d="M8.00195 0.5H10.6686C11.3759 0.5 12.0541 0.780952 12.5542 1.28105C13.0543 1.78115 13.3353 2.45942 13.3353 3.16667C13.3353 3.87391 13.0543 4.55219 12.5542 5.05228C12.0541 5.55238 11.3759 5.83333 10.6686 5.83333H8.00195V0.5Z"
                  fill="#FF7262"
                />
                <path
                  d="M13.3353 8.50016C13.3353 9.20741 13.0543 9.88569 12.5542 10.3858C12.0541 10.8859 11.3759 11.1668 10.6686 11.1668C9.96138 11.1668 9.2831 10.8859 8.783 10.3858C8.2829 9.88569 8.00195 9.20741 8.00195 8.50016C8.00195 7.79292 8.2829 7.11464 8.783 6.61455C9.2831 6.11445 9.96138 5.8335 10.6686 5.8335C11.3759 5.8335 12.0541 6.11445 12.5542 6.61455C13.0543 7.11464 13.3353 7.79292 13.3353 8.50016V8.50016Z"
                  fill="#1ABCFE"
                />
                <path
                  d="M2.66895 3.16667C2.66895 2.45978 2.94961 1.78182 3.44926 1.28178C3.9489 0.781748 4.62665 0.500552 5.33353 0.5L8.0002 0.5V5.83333H5.33561C4.62837 5.83333 3.95009 5.55238 3.44999 5.05228C2.9499 4.55219 2.66895 3.87391 2.66895 3.16667Z"
                  fill="#F24E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </object>
          Figma
        </div>
        <div className="flex gap-1">
          <object>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.90476 0.500131C7.24501 0.503163 6.61496 0.558815 6.06059 0.65584C4.42746 0.941206 4.13095 1.5385 4.13095 2.64002V4.09479H7.99022V4.57971H4.13095H2.6826C1.56099 4.57971 0.578876 5.2465 0.271683 6.51495C-0.0826599 7.9689 -0.098377 8.87618 0.271683 10.3943C0.546014 11.5244 1.20115 12.3296 2.32276 12.3296H3.64967V10.5856C3.64967 9.32574 4.7518 8.21441 6.06059 8.21441H9.91536C10.9884 8.21441 11.845 7.34056 11.845 6.27472V2.64002C11.845 1.60556 10.9627 0.828486 9.91536 0.65584C9.25239 0.546687 8.56451 0.497099 7.90476 0.500131ZM5.8177 1.67017C6.21633 1.67017 6.54187 1.99742 6.54187 2.39978C6.54187 2.80072 6.21633 3.12494 5.8177 3.12494C5.41763 3.12494 5.09352 2.80072 5.09352 2.39978C5.09352 1.99742 5.41763 1.67017 5.8177 1.67017Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M12.3262 4.57959V6.2746C12.3262 7.58871 11.1998 8.69476 9.91527 8.69476H6.06049C5.00461 8.69476 4.13086 9.58858 4.13086 10.6345V14.2691C4.13086 15.3036 5.04033 15.9121 6.06049 16.2088C7.28212 16.5641 8.4536 16.6283 9.91527 16.2088C10.8869 15.9306 11.8449 15.3707 11.8449 14.2691V12.8144H7.99013V12.3295H11.8449H13.7745C14.8961 12.3295 15.3141 11.5557 15.7042 10.3942C16.1071 9.19853 16.0899 8.04868 15.7042 6.51483C15.427 5.41046 14.8976 4.57959 13.7745 4.57959H12.3262ZM10.1582 13.7842C10.5582 13.7842 10.8823 14.1084 10.8823 14.5094C10.8823 14.9118 10.5582 15.239 10.1582 15.239C9.75952 15.239 9.43398 14.9118 9.43398 14.5094C9.43398 14.1084 9.75952 13.7842 10.1582 13.7842Z"
                fill="url(#paint1_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-2.46428e-08"
                  y1="0.5"
                  x2="8.81665"
                  y2="8.09601"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5A9FD4" />
                  <stop offset="1" stopColor="#306998" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="10.0654"
                  y1="14.3871"
                  x2="6.91909"
                  y2="9.92943"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFD43B" />
                  <stop offset="1" stopColor="#FFE873" />
                </linearGradient>
              </defs>
            </svg>
          </object>
          Python
        </div>
      </div>
      <div className="flex flex-col flex-auto whitespace-nowrap pt-6 gap-4 text-white text-sm">
        <div className="flex gap-1">
          <object>
            <svg
              width="16"
              height="16"
              viewBox="0 0 456 456"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="456" height="456" fill="#512BD4" />
              <path
                d="M81.2738 291.333C78.0496 291.333 75.309 290.259 73.052 288.11C70.795 285.906 69.6665 283.289 69.6665 280.259C69.6665 277.173 70.795 274.529 73.052 272.325C75.309 270.121 78.0496 269.019 81.2738 269.019C84.5518 269.019 87.3193 270.121 89.5763 272.325C91.887 274.529 93.0424 277.173 93.0424 280.259C93.0424 283.289 91.887 285.906 89.5763 288.11C87.3193 290.259 84.5518 291.333 81.2738 291.333Z"
                fill="white"
              />
              <path
                d="M210.167 289.515H189.209L133.994 202.406C132.597 200.202 131.441 197.915 130.528 195.546H130.044C130.474 198.081 130.689 203.508 130.689 211.827V289.515H112.149V171H134.477L187.839 256.043C190.096 259.57 191.547 261.994 192.192 263.316H192.514C191.977 260.176 191.708 254.859 191.708 247.365V171H210.167V289.515Z"
                fill="white"
              />
              <path
                d="M300.449 289.515H235.561V171H297.87V187.695H254.746V221.249H294.485V237.861H254.746V272.903H300.449V289.515Z"
                fill="white"
              />
              <path
                d="M392.667 187.695H359.457V289.515H340.272V187.695H307.143V171H392.667V187.695Z"
                fill="white"
              />
            </svg>
          </object>
          C#
        </div>
        <div className="flex gap-1">
          <object>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="16"
              height="16"
              viewBox="0 0 54 33"
            >
              <g clipPath="url(#prefix__clip0)">
                <path
                  fill="#06B6D4"
                  fillRule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="prefix__clip0">
                  <path fill="#fff" d="M0 0h54v32.4H0z" />
                </clipPath>
              </defs>
            </svg>
          </object>
          Tailwind CSS
        </div>
      </div>
      <div className="flex flex-col flex-auto whitespace-nowrap pt-6 gap-4 text-white text-sm">
        <div className="flex gap-1">
          <object>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              x="0"
              y="0"
              version="1.1"
              width="16"
              height="16"
              xmlSpace="preserve"
              viewBox="0 0 97 97"
            >
              <path
                fill="#F05133"
                d="M92.7 44.4L52.6 4.3a6 6 0 00-8.4 0L36 12.6l10.6 10.6a7 7 0 018.9 9l10.1 10.1a7 7 0 11-4.2 4l-9.5-9.5v25a7 7 0 11-5.8-.2V36.4a7 7 0 01-3.8-9.2L31.8 16.6 4.3 44.2a6 6 0 000 8.4l40.1 40.1a6 6 0 008.4 0l40-40a6 6 0 000-8.3z"
              />
            </svg>
          </object>
          git
        </div>
        <div className="flex gap-1">
          <object className="text-black dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox=".5 -.2 1023 1024.1"
              fill="currentColor"
            >
              <path d="M478.5.6c-2.2.2-9.2.9-15.5 1.4C317.7 15.1 181.6 93.5 95.4 214c-48 67-78.7 143-90.3 223.5C1 465.6.5 473.9.5 512s.5 46.4 4.6 74.5C32.9 778.6 169.6 940 355 999.8c33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5L487 587.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5C991.1 245.4 854.4 84 669 24.2 636.3 13.6 601.5 6.3 562.5 1.9c-9.6-1-75.7-2.1-84-1.3zM687.9 310c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6V457.2c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
              <path d="M784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
            </svg>
          </object>
          Next.js
        </div>
      </div>
      <div className="flex flex-col flex-auto whitespace-nowrap pt-6 gap-4 text-white text-sm">
        <div className="flex gap-1">
          <object>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="16"
              height="16"
              viewBox="0 0 256 256"
            >
              <mask
                id="a"
                width="256"
                height="256"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M181.53 254.25a15.93 15.93 0 0012.7-.49l52.71-25.36a16 16 0 009.06-14.42V42.02a16 16 0 00-9.06-14.42l-52.7-25.36a15.94 15.94 0 00-18.2 3.1L75.15 97.38 31.2 64.02a10.66 10.66 0 00-13.61.61L3.49 77.45a10.67 10.67 0 00-.01 15.78L41.59 128 3.48 162.77a10.67 10.67 0 000 15.78l14.1 12.82a10.66 10.66 0 0013.62.6l43.95-33.36 100.9 92.06c1.6 1.6 3.47 2.8 5.48 3.58zm10.5-184.36L115.49 128l76.56 58.12V69.89z"
                  clipRule="evenodd"
                />
              </mask>
              <g mask="url(#a)">
                <path
                  fill="#0065A9"
                  d="M246.94 27.64l-52.75-25.4a15.95 15.95 0 00-18.2 3.1L3.33 162.76a10.67 10.67 0 00.02 15.78l14.1 12.82a10.67 10.67 0 0013.62.6L239 34.24c6.98-5.3 17-.32 17 8.44v-.62a16 16 0 00-9.06-14.41z"
                />
                <g filter="url(#filter0_d)">
                  <path
                    fill="#007ACC"
                    d="M246.94 228.36l-52.75 25.4a15.95 15.95 0 01-18.2-3.1L3.33 93.24a10.67 10.67 0 01.02-15.78l14.1-12.82a10.67 10.67 0 0113.62-.6L239 221.76c6.98 5.3 17 .32 17-8.44v.62a16 16 0 01-9.06 14.41z"
                  />
                </g>
                <g filter="url(#filter1_d)">
                  <path
                    fill="#1F9CF0"
                    d="M194.2 253.76a15.95 15.95 0 01-18.2-3.1c5.9 5.91 16 1.73 16-6.62V11.96c0-8.35-10.1-12.53-16-6.63a15.95 15.95 0 0118.2-3.1l52.73 25.37A16 16 0 01256 42.02v171.96a16 16 0 01-9.07 14.42l-52.73 25.36z"
                  />
                </g>
                <path
                  fill="url(#paint0_linear)"
                  fillRule="evenodd"
                  d="M181.38 254.25a15.94 15.94 0 0012.7-.49l52.7-25.36a16 16 0 009.06-14.42V42.02a16 16 0 00-9.06-14.42l-52.7-25.36a15.94 15.94 0 00-18.19 3.1L75 97.38 31.04 64.02a10.66 10.66 0 00-13.61.61L3.33 77.45a10.67 10.67 0 000 15.78L41.42 128l-38.1 34.77a10.67 10.67 0 000 15.78l14.1 12.82a10.66 10.66 0 0013.61.6L75 158.62l100.9 92.06c1.6 1.6 3.47 2.8 5.49 3.58zm10.5-184.36L115.32 128l76.56 58.12V69.89z"
                  clipRule="evenodd"
                  opacity=".25"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  width="298.82"
                  height="236.15"
                  x="-21.49"
                  y="40.52"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10.67" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="overlay"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d"
                  width="122.67"
                  height="297.35"
                  x="154.67"
                  y="-20.67"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10.67" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="overlay"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear"
                  x1="127.84"
                  x2="127.84"
                  y1=".66"
                  y2="255.34"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </object>
          VS Code
        </div>
      </div>
    </CarousellItems>
  );

  return (
    <>
      <Head>
        <title>Tim Nelke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative px-4 pb-12">
        <section className="flex min-h-screen flex-col justify-center pt-[80px]">
          <div className="my-auto">
            <div className="mb-16 px-2">
              <h1 className="font-bold text-white text-5xl">
                Ohayo, my name is <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-foxfire to-ember">
                  Tim Nelke
                </span>
                .
              </h1>
            </div>
            <div className="text-sm leading-normal px-2 space-y-6">
              <div>
                Based in Willich, Germany, I’m a computer science student in my
                last year of university, who realizes dreams as reality.
              </div>

              <div>
                <AnimatedLink
                  className="font-medium"
                  title="View my resume"
                  href="#"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start px-2">
          <div className="flex rounded-full overflow-hidden">
            <Image
              layout="fixed"
              objectFit="cover"
              src="/profile.jpg"
              quality={100}
              width={96}
              height={96}
            />
          </div>
          <div className="text-white my-6">
            <h2 className="text-2xl font-semibold mb-4">A Quick Summary</h2>
            <div className="text-sm leading-normal space-y-3 text-[#b7b7b7]">
              <p>
                Currently I’m threading the needle between being a
                jack-of-all-trades and becoming an expert, who blends design
                knowledge and application development.
              </p>
              <p>
                So check out some of the things I’m great at, what I’ve achieved
                and what I’ve done. If you’re looking for some more casual
                achievements you can also{" "}
                <Link href="/dashboard">
                  <a className="font-medium hover:px-2 hover:py-1 focus:px-2 focus:py-1 underline rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all">
                    take a look at my dashboard
                  </a>
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="divide-y divide-white divide-opacity-10 rounded-lg overflow-hidden">
        <section className="pt-6 pb-4 hover:bg-white hover:bg-opacity-5 transition-colors">
          <h3 className="font-semibold text-xl px-6 mb-2 text-white">
            Education
          </h3>
          <Carousell
            mobileHideScrollbars={true}
            direction="x"
            className="py-2"
            style={{ scrollPaddingInline: "1.5rem" }}
            align="start"
            type="mandatory"
            items={educationItems}
          />
        </section>
        <section className="pt-6 pb-4 hover:bg-white hover:bg-opacity-5 transition-colors">
          <h3 className="font-semibold text-xl px-6 mb-2 text-white">
            Experience
          </h3>
          <Carousell
            mobileHideScrollbars={true}
            direction="x"
            className="py-2"
            style={{ scrollPaddingInline: "1.5rem" }}
            align="start"
            type="mandatory"
            items={experienceItems}
          />
        </section>
        <section className="pt-6 pb-4 hover:bg-white hover:bg-opacity-5 transition-colors">
          <h3 className="font-semibold text-xl px-6 mb-2 text-white">
            Favorite Tools
          </h3>
          <Carousell
            mobileHideScrollbars={true}
            direction="x"
            className="py-2"
            style={{ scrollPaddingInline: "1.5rem" }}
            align="start"
            type="mandatory"
            items={toolItems}
          />
        </section>
      </div>
    </>
  );
}
