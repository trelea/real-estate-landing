import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface Props {
  member: { name: string; surname: string; role: string; src: string };
}

export const MemberCard: React.FC<Props> = ({ member }) => {
  return (
    <Card className="m-0 p-0 w-full h-[400px] relative border/50 rounded-2xl brightness-90 shadow-lg z-0">
      <Image
        src={member.src}
        alt=""
        fill
        className="object-contain rounded-2xl p-20"
      />

      <CardContent className="m-0 p-0 absolute bottom-0 left-0 pb-4 px-6 text-foreground z-10">
        <h1 className="font-bold text-xl">
          {member.surname} {member.name}
        </h1>
        <h1 className="text-base">{member.role}</h1>
      </CardContent>
    </Card>
  );
};
