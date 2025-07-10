import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface Props {
  member: { name: string; surname: string; thumbnail?: string };
}

export const MemberCard: React.FC<Props> = ({ member }) => {
  return (
    <Card className="m-0 p-0 w-full h-[400px] relative border/50 rounded-2xl brightness-90 shadow-lg z-0">
      <Image
        src={member.thumbnail || "/assets/logo-blue.png"}
        fill
        alt=""
        className={`rounded-2xl h-full w-full ${
          member.thumbnail ? "p-0 object-cover" : "p-20 object-contain"
        }`}
      />

      {member.thumbnail && (
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent rounded-b-2xl" />
      )}

      <CardContent className="m-0 p-0 absolute bottom-0 left-0 pb-4 px-6 text-foreground z-10">
        <h1
          className={`font-bold text-xl ${
            member.thumbnail ? "text-white" : "text-black"
          }`}
        >
          {member.surname} {member.name}
        </h1>
      </CardContent>
    </Card>
  );
};
