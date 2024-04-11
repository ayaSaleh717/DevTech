import React from "react";
import Image from "next/image";

function About () {
  return (
    <>
    <section id="author" class="py-20 lg:flex sm:grid ">
      {/* <div class="container px-5 mx-auto my-32 text-center flex"> */}

      <div
        class=" flex rounded-tr-sm
        lg:w-[50%]
        sm:w-[100%]
          flex-col  space-y-5 md:flex-row
           md:space-x-5
            md:space-y-0 bg-orange-400"
        style={{
          // height: "500px",
          // width: "800px",
          borderTopRightRadius: "200px",
          borderBottomRightRadius: "50px",
          borderTopRightRadius: "100%",
          borderBottomLeftRadius: "100%",
          color: "#fff",
        }}
      >
        <div
          class=" my-10  
          lg:w-[90%]
          sm:w-[100%]
         bg-gradient-to-tr from-[#ff8d80] to-[#fcdd89]
               "
          style={{
            background: "#0e385e",
            // height: "500px",
            // width: "800px",
            borderTopRightRadius: "100px",
            borderRightRadius: "100px",
            borderBottomRightRadius: "100%",
          }}
        >
          <div class="grid " style={{}}>
            <h1 class=" text-4xl sm:text-2xl font-bold text-center py-10  text-orange-400">
              About Us
            </h1>
            <p class="py-10 sm:py-5 text-xl text-center px-10 sm:text-sm">
              Lorem ipsum is placeholder text commonly used <br /> in the graphic,
              print, and publishing industries for previewing <br /> layouts and visual
              mockups.
              <br />
            </p>
          </div>
        </div>
      </div>

      <div class=" lg:flex  grid lg:p-20 sm:p-10 " style={{}}>
        <div
          class=" bg-orange-400 m-10 flex "
          style={{
            justifyContent: "center",
            alignItems: "start",
            width: "300px",
            height: "300px",
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
            borderBottomRightRadius: "100px",
            marginTop: "80px",
          }}
        >
          <div class="grid my-10 justify-center px-10 " >
            <div class="flex py-5">
              <Image
                src="/marcel.jpg"
                width={60}
                height={50}
                class="rounded-full"
              />
              <h2 class="text-center text-2xl my-4 mx-5"> Ali Ali</h2>
            </div>

            <div>
              {" "}
              <p>very oph assl alalsm vsbeh smsmdk sksksle skdmdn d dmkdld </p>
            </div>
          </div>
        </div>
        <div
          class=" bg-[#0e385e]"
          style={{
            width: "300px",
            height: "300px",
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
            borderBottomRightRadius: "100px",
          }}
        >
           <div class="grid my-10 justify-center px-10" >
            <div class="flex py-5">
              <Image
                src="/adam.jpg"
                width={60}
                height={50}
                class="rounded-full"
              />
              <h2 class="text-center 
              text-2xl my-4 mx-1 text-orange-400"> Mohamed Ali</h2>
            </div>

            <div>
              {" "}
              <p class="text-gray-300">very oph assl alalsm vsbeh smsmdk sksksle skdmdn d dmkdld </p>
            </div>
          </div>
        </div>
      </div>
</section >
{/* sm:left-[80%] sm:-bottom-[130%] */}
      <svg
        class="absolute opacity-10 left-[60%] top-[170%]   "
        width="150px"
        height="153px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#A98057"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#A98057"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
      <svg
      class="absolute opacity-10 left-[50%]  top-[130%] z-0 "
        width="153px"
        height="153px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0e385e"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#0e385e"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
      <svg
        class="absolute opacity-15 lg:left-[30%]  lg:top-[100%] sm:left-[50%]  sm:top-[200%] "
        width="150px"
        height="153px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0e385e"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#e68428"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
      <svg
        class="absolute opacity-15 left-[80%]  top-[100%] "
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0e385e"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#0e385e"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>

      {/* </div> */}
    </>
  );
}

export default About;
