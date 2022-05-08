import React, { useState } from "react";
import hot from "../../assets/hot.png";
import newImg from "../../assets/new.png";
import top from "../../assets/top.png";
import rising from "../../assets/rising.png";
import favs from "../../assets/favs.png";
import collaspe from "../../assets/collaspe.png";
import arrowLeft from "../../assets/arrowLeft.png";
import startLad from "../../assets/startLad.png";
import lame from "../../assets/lame.png";
import live from "../../assets/live.png";
import livePlayer from "../../assets/livePlayer.png";
import onlinePlayer from "../../assets/online-live.png";
import send from "../../assets/send.png";
import lolImage from "../../assets/recommand/lolImage.png";
import lolProfile from "../../assets/recommand/lolProfile.png";
import warcraft from "../../assets/recommand/warcraft.png";
import warcraftLogo from "../../assets/recommand/warcraftLogo.png";
import fortnite from "../../assets/recommand/fortnite.png";
import fortniteLogo from "../../assets/recommand/fortniteLogo.png";
import lol2 from "../../assets/recommand/lol2.png";
import eye from "../../assets/eye.png";
import liveGame from "../../assets/liveGame.png";
import csgo from "../../assets/games/csgo.png";
import csgoIcon from "../../assets/games/csgoIcon.png";
import dota2 from "../../assets/games/dota2.png";
import dota2Icon from "../../assets/games/dota2Icon.png";
import lol from "../../assets/games/lol.png";
import lolIcon from "../../assets/games/lolIcon.png";
import hearhtone from "../../assets/games/hearhtone.png";
import hearhtoneIcon from "../../assets/games/hearhtoneIcon.png";
import wow from "../../assets/games/wow.png";
import wowIcon from "../../assets/games/wowIcon.png";

const menu = [
  { name: "Hot", imgLink: hot },
  { name: "new", imgLink: newImg },
  { name: "rising", imgLink: rising },
  { name: "top", imgLink: top },
  { name: "favs", imgLink: favs },
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

const recommanded = [
  {
    name: "League of Legends",
    user: "Starladder5",
    profileLink: lolProfile,
    imageLink: lolImage,
    properties: {
      watched: 1016422,
      uploaded: "2h ago",
      language: "English",
      type: "Joint games",
    },
  },
  {
    name: "World of Warcraft",
    user: "just9n",
    profileLink: warcraftLogo,
    imageLink: warcraft,
    properties: {
      watched: 1016422,
      language: "English",
      liveStatus: true,
    },
  },
  {
    name: "Fortnite",
    user: "ninja",
    profileLink: fortniteLogo,
    imageLink: fortnite,
    properties: {
      watched: 3916422,
      liveStatus: true,
      type: "Joint games",
    },
  },
  {
    name: "Fortnite",
    user: "ninja",
    profileLink: fortniteLogo,
    imageLink: fortnite,
    properties: {
      watched: 3916422,
      liveStatus: true,
      type: "Joint games",
    },
  },
];

const suggestions = [
  {
    name: "League of Legends",
    user: "Starladder5",
    profileLink: lolProfile,
    imageLink: lolImage,
    properties: {
      watched: 1016422,
      uploaded: "2h ago",
      language: "English",
      type: "Joint games",
    },
  },
  {
    name: "Fortnite",
    user: "ninja",
    profileLink: fortniteLogo,
    imageLink: fortnite,
    properties: {
      watched: 3916422,
      liveStatus: true,
      type: "Joint games",
    },
  },
  {
    name: "League of Legends",
    user: "k9",
    profileLink: lolProfile,
    imageLink: lol2,
    properties: {
      watched: 1691482,
      uploaded: "3h ago",
      language: "English",
      liveStatus: false,
      type: "ebox games",
    },
  },
  {
    name: "Among Us",
    user: "mortal",
    profileLink: lolProfile,
    imageLink: lol2,
    properties: {
      watched: 9049,
      language: "English",
      liveStatus: true,
    },
  },
  {
    name: "World of Warcraft",
    user: "just9n",
    profileLink: warcraftLogo,
    imageLink: warcraft,
    properties: {
      watched: 1016422,
      language: "English",
      liveStatus: true,
    },
  },
  {
    name: "World of Warcraft",
    user: "just9n",
    profileLink: warcraftLogo,
    imageLink: fortnite,
    properties: {
      watched: 1016422,
      language: "English",
      liveStatus: true,
    },
  },
];
const games = [
  { full: csgo, icon: csgoIcon },
  { full: dota2, icon: dota2Icon },
  { full: lol, icon: lolIcon },
  { full: hearhtone, icon: hearhtoneIcon },
  { full: wow, icon: wowIcon },
];

function Index() {
  const [activeMenu, setActiveMenu] = useState(0);

  const [moreRecommanded, setMoreRecommanded] = useState(false);
  const [moreSuggestion, setMoreSuggestion] = useState(false);
  // const sideMenuHandler = (e) => {
  //   e.preventDefault();
  // };
  return (
    <section className="grid grid-cols-12 gap-5">
      {/* Sidebar section */}
      <div className="col-span-3 h-fit hidden md:flex flex-col flex-grow pb-4 bg-[#261D55] overflow-y-auto rounded-r-3xl">
        <div className="ml-3">
          <div className="flex justify-between relative">
            <h3 className="uppercase mb-3 mt-3">Menu</h3>
            <img src={collaspe} className="cursor-pointer" alt="" />
            <img
              src={arrowLeft}
              className="absolute top-4 cursor-pointer right-4"
              alt=""
            />
          </div>
          <div className="flex flex-col text-gray-400">
            {menu.map((item, index) => (
              <div
                key={index}
                className={`flex my-4 cursor-pointer ${
                  index === activeMenu ? "text-white" : ""
                }`}
                onClick={() => setActiveMenu(index)}
              >
                <img src={item.imgLink} alt="menu" />
                <p className="ml-5">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-3">
          <div className="flex justify-between relative">
            <h3 className="uppercase mb-3 mt-3">Top Streamers</h3>
          </div>
          {streamers.map((item, index) => (
            <div className="flex text-gray-400 my-2">
              <div className="rounded-full mr-1 w-2/12 flex justify-center items-center">
                <img src={item.imgLink} alt="startLad" className="mt-2" />
              </div>
              <div className="w-10/12">
                <div className="flex justify-between items-center mr-2">
                  <h1 className="text-lg text-white font-semibold hover:underline cursor-pointer">
                    {item.name}
                  </h1>
                  <div className="bg-[#1E1647] py-1 rounded-3xl px-4 flex justify-center items-center">
                    <div className="h-4 w-4 bg-red-600 rounded-full mr-2"></div>
                    <p>
                      <span className="text-white">{item.live}</span>
                    </p>
                  </div>
                </div>
                <div className="">
                  <p>{item.game}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-9 h-fit">
        {/* Rising Star */}
        <div className="flex gap-1 mb-10">
          <div className="w-8/12 p-3">
            <h1 className="text-xl font-bold drop-shadow-xl mb-3">
              Rising Stars
            </h1>
            <div className="border-4 border-[#302666] rounded-[50px] overflow-hidden h-96 relative">
              <img
                src={live}
                alt="rising-star"
                className="h-full w-full object-cover"
              />
              <img
                src={livePlayer}
                alt="livePlayer"
                className="absolute top-0 left-0 rounded-br-3xl h-28 w-42 object-cover"
              />
              <div className="absolute bottom-0 left-0 rounded-br-3xl h-16 w-full bg-gradient-to-r to-[#9186FF] from-[#574AFF] opacity-90 flex justify-between px-10 items-center">
                <div className="flex gap-2">
                  <div className="h-20 w-20 rounded-full -mt-10 overflow-hidden">
                    <img
                      src={onlinePlayer}
                      alt="online"
                      className="object-cover"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-white font-bold hover:underline cursor-pointer">
                      Fortnite
                    </h1>
                    <p className="hover:underline cursor-pointer">StarLadder</p>
                  </div>
                </div>
                <div className="w-28 h-10 bg-[#735AF0] rounded-full px-5 flex justify-between items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <p>99999</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12 p-3">
            <h1 className="text-xl font-bold drop-shadow-xl mb-3">Live Chat</h1>
            <div className="bg-[#302666] h-96 rounded-[50px] overflow-hidden relative">
              <div className="flex justify-between items-center mx-5 my-4">
                <div className="flex justify-between items-center gap-3">
                  <div className="border border-dashed border-yellow-500 rounded-full flex justify-center items-center relative h-12 w-12">
                    <img
                      src={startLad}
                      alt=""
                      className="h-12 w-12 absolute top-[3px] left-[3px]"
                    />
                  </div>
                  <h1>StarLadder</h1>
                </div>
                <div className="bg-[#1E1647] w-14 h-6 rounded-3xl flex justify-between items-center px-1 gap-1">
                  <div className="h-2 w-2 rounded-full bg-[#EA4C5F]"></div>
                  <p>3k</p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-[rgba(70,57,140,0.05)] via-[#3E327F] to-[rgba(53,42,113,0.05)] "></div>
              <div className="absolute left-0 bottom-0 h-[66px] w-full bg-gradient-to-r from-[rgb(145,134,255,0.27)] via-[rgb(109,97,255,0.27)] to-[rgb(87,74,255,0.27)] px-8 flex items-center gap-3">
                <input
                  type="text"
                  className="bg-[#1E1647] h-10 w-60 rounded-3xl px-3 placeholder:px-5 focus:px-2"
                  placeholder="White a message"
                />
                <img src={send} alt="sendMsg" className="" />
              </div>
            </div>
          </div>
        </div>
        {/* Rising Star */}

        {/* Recommended section */}
        <div className="p-3">
          <h1 className="text-xl font-bold drop-shadow-xl mb-3">
            Recommanded for you
          </h1>
          <div
            className={`my-3 flex justify-between gap-4 flex-wrap overflow-hidden ${
              !moreRecommanded ? "h-[344px]" : ""
            }`}
          >
            {recommanded.map((item, index) => (
              <div className="w-[340px] overflow-hidden" key={index}>
                <div className="rounded-[50px] w-[340px] h-[220px] relative overflow-hidden mb-1">
                  <img
                    src={item.imageLink}
                    alt="recommanded"
                    className="h-full w-full object-fill"
                  />
                  {item.properties.liveStatus && (
                    <img
                      src={liveGame}
                      alt="live game"
                      className="absolute top-4 right-8"
                    />
                  )}
                </div>
                <div className="flex items-start gap-3">
                  <div className="border border-dashed border-yellow-500 rounded-full flex justify-center items-center relative h-12 w-12 p-5">
                    <img
                      src={item.profileLink}
                      alt=""
                      className="h-12 w-12 absolute p-1"
                    />
                  </div>
                  <div className="">
                    <h1>{item.name}</h1>
                    <p className="text-[#7162BF] text-[13px]">{item.user}</p>
                    <div className="flex flex-wrap gap-3">
                      {item.properties && (
                        <>
                          {item.properties.watched && (
                            <div className="bg-[#735AF0] rounded-[50px] px-3 flex items-center gap-2">
                              <img src={eye} alt="eye" />
                              <p>{item.properties.watched}</p>
                            </div>
                          )}
                          {item.properties.uploaded && (
                            <div className="bg-[#D99951] rounded-[50px] px-3">
                              <p>{item.properties.uploaded}</p>
                            </div>
                          )}
                          {item.properties.language && (
                            <div className="bg-[#D96151] rounded-[50px] px-3">
                              <p>{item.properties.language}</p>
                            </div>
                          )}
                          {item.properties.type && (
                            <div className="bg-[#94A33B] rounded-[50px] px-3">
                              <p>{item.properties.type}</p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center my-5">
            <div className="bg-gradient-to-l from-[#46398C] to-[rgba(53,42,113,0)] h-[1px] w-5/12"></div>
            <div className="h-12 w-36 bg-gradient-to-bl from-[#9186FF] via-[#6D61FF] to-[#574AFF] p-[1.5px] rounded-[50px] cursor-pointer">
              <div
                className="w-full h-full bg-[#1D1546] rounded-[50px] flex justify-center items-center"
                onClick={() => setMoreRecommanded(!moreRecommanded)}
              >
                {moreRecommanded ? "Less" : "More"}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#46398C] to-[rgba(53,42,113,0)] h-[1px] w-5/12"></div>
          </div>
        </div>
        {/* Recommended section */}

        {/* Games you might love */}
        <div className="mb-10">
          <div className="p-3">
            <h1 className="text-xl font-bold drop-shadow-xl mb-3">
              Games that you might like
            </h1>
            <div className="flex flex-nowrap gap-5 overflow-x-auto">
              {games.length > 0 &&
                games.map((game, index) => (
                  <div
                    className="w-[234px] h-[274px] flex-shrink-0 rounded-[50px] bg-slate-400 overflow-hidden relative cursor-pointer mb-6"
                    key={index}
                  >
                    <img
                      src={game.full}
                      alt="game"
                      className="w-full h-full object-cover"
                    />
                    <img
                      src={game.icon}
                      alt="game"
                      className="w-16 h-16 object-cover absolute left-5 top-5"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Games you might love */}

        {/* Suggestions section */}
        <div className="p-3">
          <h1 className="text-xl font-bold drop-shadow-xl mb-3">Suggestions</h1>
          <div
            className={`my-3 flex justify-between gap-4 flex-wrap overflow-hidden ${
              !moreSuggestion ? "h-[344px]" : ""
            }`}
          >
            {suggestions.map((item, index) => (
              <div className="w-[340px] overflow-hidden" key={index}>
                <div className="rounded-[50px] w-[340px] h-[220px] relative overflow-hidden mb-1">
                  <img
                    src={item.imageLink}
                    alt="suggestions"
                    className="h-full w-full object-fill"
                  />
                  {item.properties.liveStatus && (
                    <img
                      src={liveGame}
                      alt="live game"
                      className="absolute top-4 right-8"
                    />
                  )}
                </div>
                <div className="flex items-start gap-3">
                  <div className="border border-dashed border-yellow-500 rounded-full flex justify-center items-center relative h-12 w-12 p-5">
                    <img
                      src={item.profileLink}
                      alt=""
                      className="h-12 w-12 absolute p-1"
                    />
                  </div>
                  <div className="">
                    <h1>{item.name}</h1>
                    <p className="text-[#7162BF] text-[13px]">{item.user}</p>
                    <div className="flex flex-wrap gap-3">
                      {item.properties && (
                        <>
                          {item.properties.watched && (
                            <div className="bg-[#735AF0] rounded-[50px] px-3 flex items-center gap-2">
                              <img src={eye} alt="eye" />
                              <p>{item.properties.watched}</p>
                            </div>
                          )}
                          {item.properties.uploaded && (
                            <div className="bg-[#D99951] rounded-[50px] px-3">
                              <p>{item.properties.uploaded}</p>
                            </div>
                          )}
                          {item.properties.language && (
                            <div className="bg-[#D96151] rounded-[50px] px-3">
                              <p>{item.properties.language}</p>
                            </div>
                          )}
                          {item.properties.type && (
                            <div className="bg-[#94A33B] rounded-[50px] px-3">
                              <p>{item.properties.type}</p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center my-5">
            <div className="bg-gradient-to-l from-[#46398C] to-[rgba(53,42,113,0)] h-[1px] w-5/12"></div>
            <div className="h-12 w-36 bg-gradient-to-bl from-[#9186FF] via-[#6D61FF] to-[#574AFF] p-[1.5px] rounded-[50px] cursor-pointer">
              <div
                className="w-full h-full bg-[#1D1546] rounded-[50px] flex justify-center items-center"
                onClick={() => setMoreSuggestion(!moreSuggestion)}
              >
                {moreSuggestion ? "Less" : "More"}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#46398C] to-[rgba(53,42,113,0)] h-[1px] w-5/12"></div>
          </div>
        </div>
        {/* Suggestions section */}
      </div>
    </section>
  );
}

export default Index;
