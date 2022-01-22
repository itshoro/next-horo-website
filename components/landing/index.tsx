import PrimaryButton from "../button/primary-button";
import { Link } from "../link";

const Landing = () => {
  return (
    <>
      <div className="mt-48 px-4 lg:px-0 max-w-[720px] w-full">
        <div className="text-white mx-4 lg:mx-0 text-left">
          <div className="font-semibold text-2xl md:text-4xl inline-block mb-2">
            Ohayō, my name is{" "}
            <span className="inline-block">
              <span className="inline-block relative">
                Tim Nelke
                <svg
                  className="absolute -left-3 md:-left-6 -top-6 md:-top-4 -z-10 w-[120%] md:w-[130%]"
                  width="285"
                  height="97"
                  viewBox="0 0 285 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M215.289 81.46C227.61 84.1423 239.939 88.016 252.562 84.1217C268.788 79.1156 281.561 71.0094 282.936 52.2967C284.604 29.5824 253.388 20.0106 237.653 15.0905C180.058 -2.91835 115.273 -0.898132 56.9658 12.3709C40.9719 16.0106 -16.4426 36.5429 7.9556 63.7537C26.3154 76.3649 50.019 81.6556 71.2071 85.8576C105.847 92.7274 140.219 93.2773 175.236 95"
                    stroke="#F20C3A"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              .
            </span>
          </div>
          <div className="text-lg">
            However you may also find me with the alias Horo.
          </div>
        </div>
      </div>
      <div className="px-8 py-8 lg:px-0 max-w-[720px] w-full">
        <div className="space-y-4 lg:max-w-prose leading-relaxed">
          <p>
            Fascinated with Japan and best described as a walking book filled
            with trivia about videos you would watch at 3am.
          </p>
          <p>
            I'm a Junior Web Developer{" "}
            <Link external={true} href="https://publicplan.de/">
              @ publicplan GmbH
            </Link>
            , however I also enjoy learning about new concepts in the general
            field of computer science.
          </p>
        </div>

        <PrimaryButton>View my Resume</PrimaryButton>
      </div>
    </>
  );
};

export default Landing;
