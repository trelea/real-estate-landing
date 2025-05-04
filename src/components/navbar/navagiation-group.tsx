import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Link } from "@/i18n/navigation";
import { UrlObject } from "url";

interface Props {
  label: string;
  items: {
    href: UrlObject;
    label: string;
    icon?: React.ReactNode;
  }[];
  width?: number;
}

export const NavigationGroup: React.FC<Props> = ({
  label,
  items,
  width = "sm",
}) => {
  return (
    <NavigationMenu suppressHydrationWarning>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:bg-transparent data-[state=open]:hover:bg-transparent data-[state=closed]:focus:bg-transparent data-[state=closed]:focus-visible:bg-transparent font-normal m-0 px-1 hover:text-primary data-[state=open]:hover:text-primary data-[state=closed]:focus:text-primary data-[state=closed]:focus-visible:text-primary ">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent suppressHydrationWarning>
            <ul className={width ? `w-[${width}px]` : "w-fit"}>
              {items.map(({ href, label, icon }) => (
                <li key={label}>
                  {/* <Link href={href}> */}
                  <NavigationMenuLink
                    href={href.pathname as string}
                    suppressHydrationWarning
                    className="text-xs flex flex-row justify-start items-center gap-2 hover:text-primary"
                  >
                    {icon && icon}
                    {label}
                  </NavigationMenuLink>{" "}
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
