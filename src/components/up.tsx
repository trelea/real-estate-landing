"use client";

import React, { useState } from "react";
import { ArrowUp, ChevronsUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const Up: React.FC = () => {
  const t = useTranslations("up");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-10 left-10 z-[100] hover:cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div
        className={cn(
          "bg-primary/90 backdrop-blur-sm rounded-lg p-2.5 shadow-lg hover:shadow-xl transition-shadow w-14 h-14 flex items-center justify-center",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex flex-col items-center space-y-0.5">
          <div className="text-white">
            <ChevronsUp className="size-5" />
          </div>
          <span className="text-white font-bold text-sm">{t("up")}</span>
        </div>
      </div>
    </div>
  );
};
