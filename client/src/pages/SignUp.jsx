import React from "react";
import ServiceProviderButton from "../components/ServiceProviderButton";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import OAuth from "../components/OAuth";
const SignUp = () => {
  return (
    <section className="flex bg-indigo-500 font-poppins ">
      {/* left side div */}
      <section className="bg-indigo-500 h-screen w-1/2 p-10 flex flex-col justify-between">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6HlBGiFyJj4hHitHUrF4FoU3M0ezgY5qChD1f4tggV4L4rdkr"
          alt="base_logo"
          className="w-16"
        />
        <h1 className="text-5xl font-semibold text-center text-white">BASE</h1>
        <div className="text-white flex space-x-10 items-center justify-center">
          {/* github icon */}
          <a
            href=""
            target="_blank"
            title="GitHub"
            className="hover:text-indigo-950"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.5.25a7.25 7.25 0 0 0-2.292 14.13c.363.066.495-.158.495-.35c0-.172-.006-.628-.01-1.233c-2.016.438-2.442-.972-2.442-.972c-.33-.838-.805-1.06-.805-1.06c-.658-.45.05-.441.05-.441c.728.051 1.11.747 1.11.747c.647 1.108 1.697.788 2.11.602c.066-.468.254-.788.46-.969c-1.61-.183-3.302-.805-3.302-3.583a2.8 2.8 0 0 1 .747-1.945c-.075-.184-.324-.92.07-1.92c0 0 .61-.194 1.994.744A6.963 6.963 0 0 1 7.5 3.756A6.97 6.97 0 0 1 9.315 4c1.384-.938 1.992-.743 1.992-.743c.396.998.147 1.735.072 1.919c.465.507.745 1.153.745 1.945c0 2.785-1.695 3.398-3.31 3.577c.26.224.492.667.492 1.343c0 .97-.009 1.751-.009 1.989c0 .194.131.42.499.349A7.25 7.25 0 0 0 7.499.25"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          {/* twitter icon */}
          <a
            href=""
            target="_blank"
            title="Twitter"
            className="hover:text-indigo-950"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60"></rect>
                <rect
                  width="256"
                  height="256"
                  fill="currentColor"
                  rx="60"
                ></rect>
                <path
                  fill="#6366f1"
                  d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677c2.918.351 5.85.526 8.79.533a74.154 74.154 0 0 0 45.865-15.839a36.976 36.976 0 0 1-34.501-25.645a36.811 36.811 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.705 36.705 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.814 104.814 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.105 74.105 0 0 0 23.451-8.965a37.061 37.061 0 0 1-16.234 20.424A73.446 73.446 0 0 0 218 72.282a75.023 75.023 0 0 1-18.428 19.13"
                ></path>
              </g>
            </svg>
          </a>

          {/* linkedin icon */}
          <a
            href=""
            target="_blank"
            title="Linkedin"
            className="hover:text-indigo-950"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32m-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43m264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"
              ></path>
            </svg>
          </a>

          {/* discord icon */}
          <a
            href=""
            target="_blank"
            title="Discord"
            className="hover:text-indigo-950"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 18 20"
            >
              <path
                fill="currentColor"
                d="M15.45 0c1.118 0 2.031.901 2.05 2.025V20l-2.15-1.9l-1.21-1.12l-1.28-1.19l.53 1.85H2.05A2.055 2.055 0 0 1 0 15.615V2.06C0 .932.901.019 2.015 0zM7.32 4.78l-.1-.12h-.057c-.273.009-1.486.1-2.753 1.05l-.048.092c-.251.49-1.392 2.872-1.392 5.738l.02.033c.142.217 1.019 1.423 3.03 1.487l.295-.361l.375-.469c-1.166-.349-1.666-1.051-1.74-1.164l-.01-.016l.041.027c.045.03.127.08.239.143c.01.01.02.02.04.03c.03.02.06.03.09.05c.25.14.5.25.73.34c.41.16.9.32 1.47.43c.729.136 1.58.187 2.508.025l.082-.015c.47-.08.95-.22 1.45-.43c.35-.13.74-.32 1.15-.59l-.016.025c-.096.14-.62.833-1.794 1.165l.165.207c.253.314.495.603.495.603c2.21-.07 3.06-1.52 3.06-1.52c0-3.22-1.44-5.83-1.44-5.83c-1.238-.929-2.425-1.037-2.733-1.049L10.4 4.66l-.14.16c1.508.461 2.3 1.103 2.46 1.243l.03.027a8.152 8.152 0 0 0-5.03-.94c-.06 0-.11.01-.17.02l-.056.005c-.38.039-1.197.179-2.214.625l-.145.068c-.182.086-.314.153-.385.19l-.06.032s.813-.774 2.576-1.294zm-.38 3.61c.57 0 1.03.5 1.02 1.11c0 .61-.45 1.11-1.02 1.11c-.56 0-1.02-.5-1.02-1.11c0-.61.45-1.11 1.02-1.11m3.65 0c.57 0 1.02.5 1.02 1.11c0 .61-.45 1.11-1.02 1.11c-.56 0-1.02-.5-1.02-1.11c0-.61.45-1.11 1.02-1.11"
              ></path>
            </svg>
          </a>
        </div>
      </section>
      <section className=" border border-l-[265px] border-l-indigo-500 border-b-[744px] border-b-indigo-100 w-0 h-0  outline-none"></section>
      {/* right side bar */}
      <section className="bg-indigo-100 px-36 flex flex-col justify-center   flex-shrink-0 flex-wrap  w-1/2 ">
        <div className="mb-5 ">
          <h1 className="text-black font-extrabold text-xl">Sign Up</h1>
          <span className="text-black font-normal text-sm">
            Create your account
          </span>
        </div>
        <div className="flex space-x-5 w-96">
          <OAuth />
          <ServiceProviderButton
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png"
            }
            providerName={"Sign in with apple"}
          />
        </div>
        <SignUpForm />
        <div className="my-5 ">
          <span className="text-sm text-gray-500">
            Have an account ?{" "}
            <Link to="/sign-in">
              {" "}
              <strong className="text-blue-500">Sign in</strong>
            </Link>
          </span>
        </div>
      </section>
    </section>
  );
};

export default SignUp;
