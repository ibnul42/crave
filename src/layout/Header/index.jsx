import { Fragment, useState } from "react";
import hot from "../../assets/hot.png";
import newImg from "../../assets/new.png";
import top from "../../assets/top.png";
import rising from "../../assets/rising.png";
import favs from "../../assets/favs.png";
import { Popover, Transition } from "@headlessui/react";

import startLad from "../../assets/startLad.png";
import lame from "../../assets/lame.png";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.png";
import arrow from "../../assets/arrow.png";

const menu = [
  { name: "Hot", imgLink: hot },
  { name: "New", imgLink: newImg },
  { name: "Rising", imgLink: rising },
  { name: "Top", imgLink: top },
  { name: "Favs", imgLink: favs },
];
const menuItems = [
  { name: "popular" },
  { name: "categories" },
  { name: "users" },
];

const streamers = [
  {
    name: "StartLadder5",
    game: "League of Legends",
    live: "7.3k",
    imgLink: startLad,
  },
  { name: "ILame", game: "CounterStrike", live: "9.2k", imgLink: lame },
  { name: "Fallentus", game: "Dota2", live: "1569", imgLink: lame },
  { name: "Justi99", game: "Player Unknown", live: "2.1k", imgLink: startLad },
  { name: "Lurn", game: "Fortnites", live: "3500", imgLink: lame },
];

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

function Index() {
  const [activeMenu, setActiveMenu] = useState(0);
  return (
    <Popover className="relative bg-[#261D55] mb-8">
      <div className="text-gray-400">
        <div className="flex justify-between items-center md:justify-start mx-8 space-x-5">
          <div className="flex justify-start lg:w-0 lg:flex-1 w-2/12">
            <a href="#!">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
            </a>
          </div>
          <div className="md:hidden">Rising</div>
          <div className="mr-2 -my-2 md:hidden">
            <Popover.Button className=" rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <div className="w-7 h-5 flex flex-col justify-between items-end">
                <div className="w-[22px] h-[3px] bg-white rounded-3xl"></div>
                <div className="w-[28px] h-[3px] bg-gradient-to-t from-[#9186FF] via-[#6D61FF] to-[#574AFF] rounded-3xl"></div>
                <div className="w-[16px] h-[3px] bg-white rounded-3xl"></div>
              </div>
              {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
            </Popover.Button>
          </div>
          <div className="hidden md:flex justify-between items-center w-7/12">
            <div className="uppercase">
              <ul className="flex space-x-8">
                {menuItems.map((item, index) => (
                  <li
                    className=" cursor-pointer flex items-center"
                    onClick={() => setActiveMenu(index)}
                  >
                    <p
                      className={`py-6 ${
                        activeMenu === index
                          ? "border-b-2 border-red-400 text-white"
                          : ""
                      }`}
                    >
                      {item.name}
                    </p>
                    {menuItems.length !== index + 1 && (
                      <div className="px-5 h-3 border-r-2 border-gray-600"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <div className="relative mx-auto text-gray-600">
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  className=" bg-[#1E1647] h-10 px-2 rounded-2xl text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-4"
                ></button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-between md:flex-1 lg:w-0 w-3/12">
            <div className="px-5 h-3 border-l-2 border-r-2 border-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <div className="flex text-sm">
              <div className="flex flex-col justify-center items-end mr-2">
                <p className="text-white">Ronin47</p>
                <p>Online</p>
              </div>
              <div className="flex justify-center items-center cursor-pointer">
                <img src={profile} alt="" />
                <img src={arrow} alt="" />
              </div>
            </div>
            {/* <a
              href="#!"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#!"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a> */}
          </div>
        </div>
        <div className="md:hidden flex justify-center m-4">
          <div className="uppercase border-[1px] border-[#3E327F] rounded-3xl px-3 font-semibold text-[#7162BF]">
            <ul className="flex space-x-5">
              {menuItems.map((item, index) => (
                <li
                  className=" cursor-pointer flex items-center"
                  onClick={() => setActiveMenu(index)}
                >
                  <p
                    className={`py-2 ${
                      activeMenu === index
                        ? "border-b-2 border-[#9186FF] text-white"
                        : ""
                    }`}
                  >
                    {item.name}
                  </p>
                  {menuItems.length !== index + 1 && (
                    <div className="px-2 h-3 border-r-2 border-gray-600"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 z-50 inset-x-0 p-2 transition transform origin-top-right flex justify-end md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-[#261D55] divide-gray-50 w-8/12 ">
            <div className="py-5 px-3">
              <div className="flex flex-col text-[#7162BF]">
                {menu.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className={`flex justify-between my-4 cursor-pointer ${
                        index === activeMenu ? "text-white" : ""
                      }`}
                      onClick={() => setActiveMenu(index)}
                    >
                      <p className="font-medium">{item.name}</p>
                      <img src={item.imgLink} alt="menu" />
                    </div>
                    {index !== menu.length - 1 && (
                      <div className="flex justify-center items-center">
                        <div className="h-[1px] w-9/12 bg-gradient-to-l from-[rgba(70,57,140,0.1)] via-[rgb(62,50,127)] to-[rgba(53,42,113,0.1)]"></div>
                      </div>
                    )}
                  </>
                ))}
              </div>
              <div className="flex flex-col">
                <h1 className="uppercase font-medium">Top Streamers</h1>
                <button className="w-full bg-gradient-to-r from-[#9186FF] via-[#6D61FF] to-[#574AFF] rounded-[50px] py-2">
                  Go to full list
                </button>
              </div>
            </div>
            {/* <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div> */}
            {/* <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="#!"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a
                    href="#!"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Index;
