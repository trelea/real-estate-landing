"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function OffertDesc({
  desc,
  maxLength = 500,
}: {
  desc: string;
  maxLength?: number;
}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="prose prose-neutral dark:prose-invert max-w-none tiptap-content">
        <div
          dangerouslySetInnerHTML={{
            __html: showMore ? desc : desc.slice(0, maxLength).concat("..."),
          }}
        />
      </div>
      <Button
        variant="link"
        className="text-primary font-semibold text-base m-0 p-0 w-fit h-fit"
        onClick={() => setShowMore(!showMore)}
      >
        <span className="text-primary font-semibold text-base">
          Read more...
        </span>
        {showMore ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </Button>
    </>
  );
}
