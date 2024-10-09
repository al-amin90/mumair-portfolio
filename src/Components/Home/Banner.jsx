import React from "react";
import banner from "../../assets/bannerImg.png";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse mt-10 lg:mt-0 justify-between items-center lg:h-[calc(100vh-88px)] h-[130vh] lg:flex-row gap-8 lg:gap-3 text-justify">
      {/* banner left side */}
      <div className="text-[#000000] flex-1">
        <h6 className="text-base font-semibold"> Hi I am </h6>
        <h6 className="text-[#FD6F00] text-base lg:text-xl mt-2 font-semibold">
          Muhammad Umair{" "}
        </h6>
        <h1 className="text-6xl lg:text-7xl font-bold">
          UI & UX <br /> <span className="lg:ml-40">Designer</span>
        </h1>

        <p className="text-sm lg:text-base  font-medium mb-4 mt-6 ">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        <button className="bg-[#FD6F00] text-base hidden lg:flex text-white px-9 py-2 rounded-[5px] whitespace-nowrap">
          Hire Me
        </button>
      </div>

      {/* banner right side */}
      <div className="flex-1">
        <div className="relative ">
          <img
            src={banner}
            className="w-fit h-[calc(100vh-210px)] ml-auto"
            alt=""
          />
          <div className="bg-[#FD6F0099]  h-[7vh] absolute ml-auto py-3 lg:py-7 w-[35vh] lg:w-[40vh] top-[8vh] 2xl:top-[10vh] px-0 lg:px-10 right-[27vh] lg:right-[29vh] 2xl:right-[33vh] 2xl:py-8 translate-x-1/2 "></div>
        </div>

        <div className="flex items-center justify-center gap-5 w-full relative lg:left-20 *:cursor-pointer mt-5">
          {/* facebook */}
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1039_175)">
              <path
                d="M32.4752 16.2376C32.4752 7.26983 25.2054 0 16.2376 0C7.26983 0 0 7.26983 0 16.2376C0 24.3422 5.93783 31.0598 13.7005 32.278V20.9313H9.57766V16.2376H13.7005V12.6603C13.7005 8.59072 16.1247 6.34282 19.8337 6.34282C21.6097 6.34282 23.4684 6.65996 23.4684 6.65996V10.6559H21.421C19.404 10.6559 18.7748 11.9077 18.7748 13.1931V16.2376H23.2782L22.5582 20.9313H18.7748V32.278C26.5374 31.0598 32.4752 24.3422 32.4752 16.2376Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1039_175">
                <rect width="32.4752" height="32.4752" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {/* twitter */}
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1039_174)">
              <path
                d="M10.7246 29.4304C22.9764 29.4304 29.6795 19.2774 29.6795 10.4755C29.6795 10.1901 29.6732 9.8983 29.6605 9.61287C30.9645 8.66987 32.0897 7.50184 32.9835 6.16365C31.7691 6.70395 30.4797 7.05683 29.1594 7.21021C30.5496 6.37691 31.5905 5.06784 32.0892 3.52567C30.7813 4.30073 29.3511 4.84747 27.8598 5.14245C26.8549 4.07476 25.5264 3.36782 24.0794 3.13093C22.6325 2.89405 21.1479 3.14041 19.855 3.83192C18.5622 4.52343 17.5331 5.62159 16.927 6.9566C16.3209 8.29161 16.1714 9.78912 16.5017 11.2176C13.8535 11.0847 11.2629 10.3968 8.89767 9.19846C6.53245 8.00011 4.44546 6.31809 2.77201 4.26143C1.92147 5.72786 1.6612 7.46313 2.04411 9.11455C2.42701 10.766 3.42435 12.2097 4.83343 13.1522C3.77557 13.1186 2.7409 12.8338 1.81488 12.3213V12.4037C1.81393 13.9426 2.34595 15.4344 3.32049 16.6254C4.29503 17.8164 5.65196 18.6331 7.16061 18.9368C6.18067 19.2049 5.15219 19.244 4.15474 19.051C4.58045 20.3745 5.40873 21.532 6.52398 22.3621C7.63924 23.1921 8.98581 23.6533 10.3758 23.6812C8.01602 25.5349 5.10103 26.5403 2.1003 26.5355C1.56815 26.5347 1.03652 26.5021 0.508255 26.4378C3.55667 28.3936 7.1028 29.4323 10.7246 29.4304Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1039_174">
                <rect
                  width="32.4752"
                  height="32.4752"
                  fill="white"
                  transform="translate(0.50827 -0.00012207)"
                />
              </clipPath>
            </defs>
          </svg>
          {/* instragram */}
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1039_173)">
              <path
                d="M16.2542 2.92392C20.5927 2.92392 21.1064 2.94295 22.8126 3.01906C24.3983 3.08883 25.2546 3.35523 25.8255 3.57723C26.5803 3.869 27.1258 4.2242 27.6903 4.78871C28.2611 5.35956 28.61 5.8987 28.9018 6.6535C29.1237 7.22435 29.3901 8.08698 29.4599 9.66634C29.536 11.3789 29.5551 11.8927 29.5551 16.2248C29.5551 20.5633 29.536 21.0771 29.4599 22.7833C29.3901 24.369 29.1237 25.2253 28.9018 25.7961C28.61 26.5509 28.2548 27.0964 27.6903 27.6609C27.1194 28.2318 26.5803 28.5806 25.8255 28.8724C25.2546 29.0944 24.392 29.3608 22.8126 29.4306C21.1001 29.5067 20.5863 29.5257 16.2542 29.5257C11.9157 29.5257 11.4019 29.5067 9.69569 29.4306C8.10998 29.3608 7.2537 29.0944 6.68285 28.8724C5.92805 28.5806 5.38257 28.2254 4.81806 27.6609C4.2472 27.0901 3.89835 26.5509 3.60658 25.7961C3.38458 25.2253 3.11818 24.3627 3.04841 22.7833C2.9723 21.0707 2.95327 20.557 2.95327 16.2248C2.95327 11.8863 2.9723 11.3726 3.04841 9.66634C3.11818 8.08063 3.38458 7.22435 3.60658 6.6535C3.89835 5.8987 4.25355 5.35322 4.81806 4.78871C5.38891 4.21785 5.92805 3.869 6.68285 3.57723C7.2537 3.35523 8.11632 3.08883 9.69569 3.01906C11.4019 2.94295 11.9157 2.92392 16.2542 2.92392ZM16.2542 -0.00012207C11.8459 -0.00012207 11.2941 0.0189064 9.56249 0.0950202C7.83724 0.171134 6.65113 0.450218 5.62359 0.849816C4.55166 1.26844 3.64463 1.82027 2.74395 2.72729C1.83693 3.62797 1.2851 4.535 0.866479 5.60059C0.466881 6.63447 0.187797 7.81423 0.111683 9.53948C0.035569 11.2774 0.0165405 11.8292 0.0165405 16.2375C0.0165405 20.6458 0.035569 21.1976 0.111683 22.9292C0.187797 24.6544 0.466881 25.8405 0.866479 26.8681C1.2851 27.94 1.83693 28.847 2.74395 29.7477C3.64463 30.6484 4.55166 31.2066 5.61725 31.6188C6.65113 32.0184 7.8309 32.2975 9.55614 32.3736C11.2877 32.4498 11.8396 32.4688 16.2478 32.4688C20.6561 32.4688 21.2079 32.4498 22.9395 32.3736C24.6647 32.2975 25.8509 32.0184 26.8784 31.6188C27.944 31.2066 28.851 30.6484 29.7517 29.7477C30.6524 28.847 31.2105 27.94 31.6228 26.8744C32.0224 25.8405 32.3015 24.6608 32.3776 22.9355C32.4537 21.2039 32.4728 20.6521 32.4728 16.2438C32.4728 11.8356 32.4537 11.2838 32.3776 9.55217C32.3015 7.82692 32.0224 6.64081 31.6228 5.61328C31.2232 4.535 30.6714 3.62797 29.7644 2.72729C28.8637 1.82661 27.9567 1.26844 26.8911 0.856159C25.8572 0.456561 24.6774 0.177477 22.9522 0.101363C21.2143 0.0189064 20.6624 -0.00012207 16.2542 -0.00012207Z"
                fill="black"
              />
              <path
                d="M16.2541 7.89667C11.6493 7.89667 7.91333 11.6326 7.91333 16.2375C7.91333 20.8424 11.6493 24.5783 16.2541 24.5783C20.859 24.5783 24.595 20.8424 24.595 16.2375C24.595 11.6326 20.859 7.89667 16.2541 7.89667ZM16.2541 21.6479C13.2667 21.6479 10.8437 19.2249 10.8437 16.2375C10.8437 13.25 13.2667 10.8271 16.2541 10.8271C19.2416 10.8271 21.6646 13.25 21.6646 16.2375C21.6646 19.2249 19.2416 21.6479 16.2541 21.6479Z"
                fill="black"
              />
              <path
                d="M26.872 7.56669C26.872 8.64498 25.9967 9.51394 24.9248 9.51394C23.8465 9.51394 22.9775 8.63863 22.9775 7.56669C22.9775 6.48841 23.8528 5.61945 24.9248 5.61945C25.9967 5.61945 26.872 6.49476 26.872 7.56669Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1039_173">
                <rect
                  width="32.4752"
                  height="32.4752"
                  fill="white"
                  transform="translate(0.0165405 -0.00012207)"
                />
              </clipPath>
            </defs>
          </svg>
          {/* linkdin */}
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1039_172)">
              <path
                d="M30.5961 -0.00012207H2.92234C1.59669 -0.00012207 0.52475 1.04644 0.52475 2.34038V30.1283C0.52475 31.4222 1.59669 32.4751 2.92234 32.4751H30.5961C31.9217 32.4751 33 31.4222 33 30.1346V2.34038C33 1.04644 31.9217 -0.00012207 30.5961 -0.00012207ZM10.1595 27.6736H5.33895V12.1718H10.1595V27.6736ZM7.74922 10.0596C6.20158 10.0596 4.95204 8.81006 4.95204 7.26875C4.95204 5.72745 6.20158 4.47791 7.74922 4.47791C9.29053 4.47791 10.5401 5.72745 10.5401 7.26875C10.5401 8.80371 9.29053 10.0596 7.74922 10.0596ZM28.1985 27.6736H23.3843V20.1383C23.3843 18.3433 23.3526 16.0282 20.8789 16.0282C18.3734 16.0282 17.9929 17.9881 17.9929 20.0115V27.6736H13.185V12.1718H17.8026V14.2903H17.866C18.5066 13.0724 20.0797 11.7848 22.4202 11.7848C27.2978 11.7848 28.1985 14.9943 28.1985 19.1679V27.6736Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1039_172">
                <rect
                  width="32.4752"
                  height="32.4752"
                  fill="white"
                  transform="translate(0.52475 -0.00012207)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
