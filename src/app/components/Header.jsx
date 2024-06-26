"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div class=" shadow-xl" style={{ background: "#0e385e" }}>
        <header class="absolute inset-x-0 top-0 z-50">
          <nav
            class="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div class="flex lg:flex-1">
              <a href="#">
                {/* <Image src="/logo.png" alt="Your Company" width={100} height={100} /> */}
                <span class="sr-only">Your Company</span>
                <h1
                  class="-m-1.5 font-bold
               p-1.5 text-orange-400 text-2xl	"
                >
                  {" "}
                  Dev
                  <span
                    class="text-[#0e385e] 
              text-3xl font-bold italic"
                  >
                    Tech
                  </span>
                </h1>

                <span class="text-[#0e385e] font-bold text-sm">
                  {" "}
                  Development Tech
                </span>
              </a>
            </div>

            <div class="flex lg:hidden">
              <button
                onClick={() => setShow(!show)}
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  color="orange"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <div class="hidden lg:flex lg:gap-x-12">
              <a
                href="#"
                class="text-sm font-semibold leading-6 text-white hover:text-orange-400"
              >
                Product
              </a>
              <a
                href="#"
                class="text-sm font-semibold leading-6 text-white hover:text-orange-400"
              >
                Features
              </a>
              <a
                href="#"
                class="text-sm font-semibold leading-6 text-white hover:text-orange-400"
              >
                Marketplace
              </a>
              <a
                href="#"
                class="text-sm font-semibold leading-6 text-white hover:text-orange-400"
              >
                Company
              </a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                class="text-sm font-semibold leading-6 text-white py-2 px-4 rounded-xl bg-orange-400 hover:bg-orange-700"
              >
                Login <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>

          <div class={show ? "block" : "hidden"}>
            <div class="lg:hidden" role="dialog" aria-modal="true">
              <div class="fixed inset-0 z-50"></div>
              <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                <div class="flex lg:flex-1">
              <a href="#">
                {/* <Image src="/logo.png" alt="Your Company" width={100} height={100} /> */}
                <span class="sr-only">Your Company</span>
                <h1
                  class="-m-1.5 font-bold
               p-1.5 text-orange-400 text-2xl	"
                >
                  {" "}
                  Dev
                  <span
                    class="text-[#0e385e] 
              text-3xl font-bold italic"
                  >
                    Tech
                  </span>
                </h1>

                <span class="text-[#0e385e] font-bold text-sm">
                  {" "}
                  Development Tech
                </span>
              </a>
            </div>
                  <button
                    onClick={() => setShow(!show)}
                    type="button"
                    class="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span class="sr-only">Close menu</span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div class="mt-6 flow-root">
                  <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                      <a
                        href="#"
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Product
                      </a>
                      <a
                        href="#"
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Features
                      </a>
                      <a
                        href="#"
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Marketplace
                      </a>
                      <a
                        href="#"
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Company
                      </a>
                    </div>
                    <div class="py-6">
                      <a
                        href="#"
                        class="-mx-3 block text-base font-semibold leading-7 text-gray-900  py-2 px-4 rounded-xl bg-orange-400 hover:bg-orange-700"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="relative isolate px-6 pt-14 lg:px-8">
          <div
            class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2
             rotate-[30deg] bg-gradient-to-tr from-[#ff8d80] to-[#fcdd89]
              opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            ></div>
          </div>
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Data to enrich your online business
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  class="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  class="text-sm font-semibold leading-6 text-gray-400"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="s1.svg"
        alt="My Image"
        width={2800}
        height={300}
        class=" absolute inset-x-0 -bottom-4 w-full hidden lg:block "
      />
    </>
  );
}

export default Header;
