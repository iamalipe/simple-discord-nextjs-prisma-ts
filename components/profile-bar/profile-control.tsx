"use client";

import qs from "query-string";
import { useState } from "react";
import { Mic, MicOff, Settings, Ear, EarOff } from "lucide-react";
import { useClerk } from "@clerk/nextjs";

import { getThemeValues } from "@/lib/get-theme-values";
import axios from "axios";

const ProfileControl = () => {
  const clerk = useClerk();
  const [isMute, setIsMute] = useState(false);
  const [isDeafen, setIsDeafen] = useState(false);

  const onMuteClick = async () => {
    console.log("onMuteClick");
    setIsMute((prev) => !prev);

    const url = qs.stringifyUrl(
      {
        url: "/api/messages",
        query: {
          cursor: null,
          channelId: "6522ddcfa8ddd08a06c78278",
        },
      },
      { skipNull: true },
    );

    const res = await axios.get(url);
    console.log(res.data);
  };
  const onDeafenClick = () => {
    console.log("onDeafenClick");
    setIsDeafen((prev) => !prev);
  };
  const onUserSettingClick = () => {
    const colorValues = getThemeValues(["b3", "bc", "p", "su", "er", "wa"]);
    clerk.openUserProfile({
      appearance: {
        variables: {
          colorBackground: `hsl(${colorValues[0]})`,
          colorText: `hsl(${colorValues[1]})`,
          colorPrimary: `hsl(${colorValues[2]})`,
          colorSuccess: `hsl(${colorValues[3]})`,
          colorDanger: `hsl(${colorValues[4]})`,
          colorWarning: `hsl(${colorValues[5]})`,
        },
      },
    });
  };

  return (
    <div className="flex items-center gap-0.5">
      <button
        title="Mute"
        className="rounded-md p-1 hover:bg-[#3d3e45]"
        onClick={onMuteClick}
      >
        {isMute ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
      </button>
      <button
        title="Deafen"
        className="rounded-md p-1 hover:bg-[#3d3e45]"
        onClick={onDeafenClick}
      >
        {isDeafen ? (
          <EarOff className="h-5 w-5" />
        ) : (
          <Ear className="h-5 w-5" />
        )}
      </button>
      <button
        title="Setting"
        className="rounded-md p-1 hover:bg-[#3d3e45]"
        onClick={onUserSettingClick}
      >
        <Settings className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ProfileControl;
