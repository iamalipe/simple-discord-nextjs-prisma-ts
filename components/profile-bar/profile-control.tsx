"use client";

import { Mic, MicOff, Settings, Ear, EarOff } from "lucide-react";
import { useState } from "react";

const ProfileControl = () => {
  const [isMute, setIsMute] = useState(false);
  const [isDeafen, setIsDeafen] = useState(false);

  const onMuteClick = () => {
    console.log("onMuteClick");
    setIsMute((prev) => !prev);
  };
  const onDeafenClick = () => {
    console.log("onDeafenClick");
    setIsDeafen((prev) => !prev);
  };
  // const onUserSettingClick = () => {
  //   console.log("onUserSettingClick");
  // };

  return (
    <div className="flex items-center gap-0.5">
      <button
        className="p-1 rounded-md hover:bg-[#3d3e45]"
        onClick={onMuteClick}
      >
        {isMute ? (
          <MicOff className="h-5 w-5" color="#dbdee1" />
        ) : (
          <Mic className="h-5 w-5" color="#dbdee1" />
        )}
      </button>
      <button
        className="p-1 rounded-md hover:bg-[#3d3e45]"
        onClick={onDeafenClick}
      >
        {isDeafen ? (
          <EarOff className="h-5 w-5" color="#dbdee1" />
        ) : (
          <Ear className="h-5 w-5" color="#dbdee1" />
        )}
      </button>
      {/* <button
        className="p-1 rounded-md hover:bg-[#3d3e45]"
        onClick={onUserSettingClick}
      >
        <Settings className="h-5 w-5" color="#dbdee1" />
      </button> */}
    </div>
  );
};

export default ProfileControl;
