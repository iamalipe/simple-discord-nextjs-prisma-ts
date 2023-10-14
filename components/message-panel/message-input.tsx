"use client";

import axios from "axios";
import { Laugh, PlusCircle } from "lucide-react";
import { useRef, useState } from "react";

const LIMIT = 120; // height limit in px

export interface MessageInputProps {
  channelId: string;
}

export const MessageInput = (props: MessageInputProps) => {
  const { channelId } = props;
  const [inputValue, setInputValue] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onInputValueChange = (value: string) => {
    setInputValue(value);
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "";
    textareaRef.current.style.height =
      Math.min(textareaRef.current.scrollHeight, LIMIT) + "px";
  };

  const onMessageSend = async () => {
    await axios.post("/api/messages", {
      channelId,
      text: inputValue,
      attachment: [],
    });
  };

  return (
    <div className="m-4 flex flex-none items-start gap-2 rounded-daisy-btn bg-base-content/20 px-2 text-base-content">
      <button className="flex-none py-2">
        <PlusCircle />
      </button>
      <textarea
        value={inputValue}
        onChange={(e) => onInputValueChange(e.target.value)}
        onBlur={(e) => onInputValueChange(e.target.value)}
        ref={textareaRef}
        className="h-10 w-full flex-1 resize-none border-none bg-transparent px-1 py-2 text-base-content outline-none"
        placeholder="Message"
      ></textarea>
      <button onClick={onMessageSend} className="flex-none py-2">
        GIF
      </button>
      <button className="flex-none py-2">
        <Laugh />
      </button>
    </div>
  );
};
