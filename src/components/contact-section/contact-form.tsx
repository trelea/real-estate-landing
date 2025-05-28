"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { formAction } from "./form-action";

interface Props {}

export const ContactForm: React.FC<Props> = ({}) => {
  return (
    <form className="flex flex-col gap-6 w-full" action={formAction}>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <Label className="text-sm text-foreground/80">Name</Label>
          <Input
            required
            type="text"
            name="name"
            className="w-full text-sm focus-visible:ring-0 focus-visible:outline-none py-2.5 h-fit"
            placeholder="Name"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Label className="text-sm text-foreground/80">Phone</Label>
          <Input
            required
            type="tel"
            name="tel"
            className="w-full text-sm focus-visible:ring-0 focus-visible:outline-none py-2.5 h-fit"
            placeholder="+373 699 84 245"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Label className="text-sm text-foreground/80">Email</Label>
          <Input
            required
            type="email"
            name="email"
            className="w-full text-sm focus-visible:ring-0 focus-visible:outline-none py-2.5 h-fit"
            placeholder="email@mail.mail"
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Trimite
      </Button>
    </form>
  );
};
