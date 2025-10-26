"use client";
import React from "react";
import { Phone, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SocialIcon } from "react-social-icons";

export const ContactsPopover: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      {/* md:p-9 md:mb-16 */}
      <div className="fixed z-40 bottom-[90px] right-[32px]">
        <DropdownMenuTrigger className="m-0 p-0 h-fit w-fit aspect-square relative">
          {!open ? (
            <div className="rounded-full bg-[#003989] p-4 shadow shadow-[[#003989]/50 relative">
              <Phone className="text-white size-5" />
              <div className="rounded-full bg-[#003989] absolute h-full w-full top-0 right-0 animate-ping opacity-10"></div>
            </div>
          ) : (
            <div className="rounded-full bg-zinc-400 p-4 shadow shadow-zinc-400/50 relative">
              <X className="text-white size-5" />
              <div className="rounded-full bg-zinc-400 absolute h-full w-full top-0 right-0 animate-ping opacity-10"></div>
            </div>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="h-fit w-fit m-0 p-0 max-w-fit min-w-fit bg-transparent border-none shadow-none mb-4"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-4">
            <DropdownMenuItem className="p-0 m-0 h-fit w-fit shadow-none border-none bg-transparent hover:bg-transparent focus:bg-transparent focus-visible:bg-transparent">
              <SocialIcon url="https://www.instagram.com/dialogimobil/" />
            </DropdownMenuItem>

            <DropdownMenuItem className="p-0 m-0 h-fit w-fit shadow-none border-none bg-transparent hover:bg-transparent focus:bg-transparent focus-visible:bg-transparent">
              <SocialIcon url="https://wa.me/qr/RNGI5TVDOWIBO1" />
            </DropdownMenuItem>

            <DropdownMenuItem className="p-0 m-0 h-fit w-fit shadow-none border-none bg-transparent hover:bg-transparent focus:bg-transparent focus-visible:bg-transparent">
              <SocialIcon url="https://www.facebook.com/dialogimobil/"/>
            </DropdownMenuItem>

            <DropdownMenuItem className="p-0 m-0 h-fit w-fit shadow-none border-none bg-transparent hover:bg-transparent focus:bg-transparent focus-visible:bg-transparent">
              <SocialIcon url="https://t.me/veaceslav_dialog" />
            </DropdownMenuItem>

            {/* <SocialIcon /> */}
          </div>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};
