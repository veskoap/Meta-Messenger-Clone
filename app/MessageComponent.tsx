import Image from "next/image";
import React from "react";
import { Message } from "../typings";

type Props = {
  message: Message;
};

function MessageComponent({ message }: Props) {
  return (
    <div className="flex w-fit">
      <div className="flex-shrink-0">
        <Image
          src={message.profilePic}
          className="rounded-full mx-2"
          height={10}
          width={50}
          alt="Profile Picture"
        />
      </div>

      <div>
        <p className="text-[0.65rem] px-[2px] pb-[2px] text-red-400">
          {message.username}
        </p>

        <div className="flex items-end">
          <div className="px-3 py-2 rounded-lg w-fit text-white bg-red-400">
            <p>{message.message}</p>
          </div>

          <p className="text-[0.65rem] italic px-2 text-gray-300">
            {new Date(message.created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
