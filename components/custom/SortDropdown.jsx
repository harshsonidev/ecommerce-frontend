import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

export default function SortDropdown({
  label,
  children,
  position = "default",
  options = [],
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ring-0 p-2">
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {label && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuRadioGroup value={position}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                {option.icon ? (
                  <option.icon></option.icon>
                ) : (
                  <div className="ps-4"></div>
                )}
                {option.label}
              </div>
            </DropdownMenuRadioItem>
          ))}
          {options.length > 0 && (
            <DropdownMenuRadioItem value="default">
              <div className="flex items-center gap-2 ps-6">Default</div>
            </DropdownMenuRadioItem>
          )}
        </DropdownMenuRadioGroup>
        {/* <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator /> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
