import { AnimatedLink } from "@/components/links";
import { Carousell, CarousellItems } from "@/components/containers";
import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import NowPlaying from "@/components/spotify/NowPlaying";

const Navigation = () => {
  return (
    <div className="fixed top-0 w-full px-2">
      <div className="py-6">
        <object className="w-4 h-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 25"
          >
            <g clipPath="url(#clip0)">
              <path
                fill="#fff"
                d="M13.88 18.87c.84-1.4 1.38-1.73 1.38-4.38 0-1.1-.35-2.09-.6-2.86a7.23 7.23 0 00-.3-7.4s.16.9-1.47 1.68a5.2 5.2 0 00-2.1 1.8 7 7 0 00-4.9-.3 7.76 7.76 0 00-2.24-5.1A3.8 3.8 0 013.22.66a.6.6 0 00-.26.54S2.61.16 1.9-.01c.3.7.43 1.46.39 2.21a7.03 7.03 0 00-.75 8.82S-.07 13.09 0 17.1c0 3.8 3.42 7.67 8.45 7.82 3.81.1 3.26.06 5.08.06-1.05-2.56-.69-4.31.36-6.12zM1.95 10.15c-.49-1.74-.3-3.62.52-5.23.35-.81.55-1.68.6-2.55 2.25 1.93 2.07 5.3 2.07 5.3-1.26.1-3.19 2.48-3.19 2.48zm10.07-1.78c.37-.65.9-1.18 1.56-1.53.43-.32.74-.78.88-1.3A4.33 4.33 0 0114.3 11c-1.13-2.12-2.27-2.64-2.27-2.64z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <path fill="#fff" d="M0 0h15.54v25H0z" />
              </clipPath>
            </defs>
          </svg>
        </object>
      </div>
    </div>
  );
};

const EducationItem = ({ from, to, location, isJob, major, title }) => (
  <article className="whitespace-nowrap">
    <div className="pb-4 space-y-2">
      <div className="text-xs text-[#4F4F4F]">
        {from} &ndash; {to} {!isJob && <>&middot; {major}</>}
      </div>
      <div className="text-white">{location}</div>
    </div>
    {title && (
      <div className="inline-flex rounded-full -ml-3 py-1 px-3 bg-ember text-ember bg-opacity-10 text-xs items-center gap-1">
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
          C#
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
          Tailwind CSS
        </div>
      </div>
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
          git
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
          Next.JS
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

      <div className="min-h-screen bg-black text-[#b7b7b7]">
        <div className="relative px-4 pb-8">
          <Navigation />
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
              <div className="text-sm px-2 space-y-6">
                <div>
                  Based in Willich, Germany, I’m a computer science student in
                  my last year of university, who realizes dreams as reality.
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
            <div>
              <h2 className="font-bold text-lg text-white my-6">
                A Quick Summary
              </h2>
              <div className="text-sm space-y-3">
                <p>
                  Currently I’m threading the needle between being a
                  jack-of-all-trades and becoming an expert, who blends design
                  knowledge and application development.
                </p>
                <p>
                  So check out some of the things I’m great at, what I’ve
                  achieved and what I’ve done. If you’re looking for some more
                  casual achievements you can also{" "}
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
            <h3 className="font-semibold px-6 mb-2 text-white">Education</h3>
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
            <h3 className="font-semibold px-6 mb-2 text-white">Experience</h3>
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
            <h3 className="font-semibold px-6 mb-2 text-white">
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
        {/* 
        <section className="px-6 py-8">
          <h2 className="font-bold text-white text-lg">Featured Projects</h2>
        </section> */}
        <footer className="pt-16 pb-6">
          <div className="text-sm">
            <div className="border-t mx-6 ml-6 border-white border-opacity-10" />
            <Carousell
              direction="x"
              align="none"
              type="proximity"
              className="mt-6 py-2 mb-8 ml-6"
              style={{ scrollPadding: "0 0 0 1.5rem" }}
              items={
                <CarousellItems className="inline-flex items-center gap-4 relative pr-6">
                  <div className="inline-flex rounded-full overflow-hidden sticky left-0">
                    <Image
                      objectFit="cover"
                      src="/profile.jpg"
                      layout="fixed"
                      width={48}
                      height={48}
                    />
                  </div>
                  <a
                    className="font-medium px-2 py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-colors"
                    href="#"
                  >
                    Github
                  </a>
                  <a
                    className="font-medium px-2 py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-colors"
                    href="#"
                  >
                    Twitter
                  </a>
                  <NowPlaying />
                </CarousellItems>
              }
            />
            <nav className="px-6 pb-16">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link href="/">
                    <a className="font-medium hover:px-2 focus:px-2 hover:py-1 focus:py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a className="font-medium hover:px-2 focus:px-2 hover:py-1 focus:py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all">
                      Projects
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard">
                    <a className="font-medium hover:px-2 focus:px-2 hover:py-1 focus:py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all">
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/digital_garden">
                    <a className="font-medium hover:px-2 focus:px-2 hover:py-1 focus:py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all">
                      Digital Garden
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
