"use client";
import React from "react";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function TaxonomiesHeader() {
  const taxonomies = [
    {
      name: "All",
    },
    {
      name: "New Arrivals",
    },
    {
      name: "Electronics",
      subcategories: [
        "Smartphones",
        "Laptops",
        "Cameras",
        {
          name: "Audio Devices",
          subcategories: ["Headphones", "Speakers"],
        },
      ],
    },
    {
      name: "Clothing",
      subcategories: [
        {
          name: "Men's Apparel",
          subcategories: ["Shirts", "Pants", "Jackets"],
        },
        {
          name: "Women's Apparel",
          subcategories: ["Dresses", "Skirts", "Blouses"],
        },
      ],
    },
    {
      name: "Home and Kitchen",
      subcategories: [
        {
          name: "Furniture",
          subcategories: ["Living Room", "Bedroom", "Dining Room"],
        },
        {
          name: "Appliances",
          subcategories: ["Kitchen Appliances", "Laundry Appliances"],
        },
      ],
    },
    {
      name: "Health and Beauty",
      subcategories: [
        {
          name: "Skincare",
          subcategories: ["Cleansers", "Moisturizers", "Serums"],
        },
        {
          name: "Haircare",
          subcategories: ["Shampoo", "Conditioner", "Styling Products"],
        },
      ],
    },
    {
      name: "Sports and Outdoors",
      subcategories: [
        {
          name: "Outdoor Gear",
          subcategories: ["Camping", "Hiking", "Fishing"],
        },
        {
          name: "Sports Equipment",
          subcategories: ["Gym Equipment", "Team Sports"],
        },
      ],
    },
    {
      name: "Books and Media",
      subcategories: [
        {
          name: "Books",
          subcategories: ["Fiction", "Non-Fiction", "Science Fiction"],
        },
        {
          name: "Movies",
          subcategories: ["Action", "Drama", "Comedy"],
        },
      ],
    },
    {
      name: "Toys and Games",
      subcategories: ["Board Games", "Outdoor Toys", "Action Figures"],
    },
    {
      name: "Automotive",
      subcategories: [
        "Car Accessories",
        "Motorcycle Parts",
        "Tools and Equipment",
      ],
    },
    {
      name: "Others",
      subcategories: ["Stationery", "Writing Instruments", "Office Furniture"],
    },
  ];

  const navigationMenuTriggerStyle = cva(
    "group inline-flex h-8 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  );

  return (
    <>
      <div className="container">
        <div className="taxonomies-header overflow-auto h-10 flex items-center">
          <NavigationMenu>
            <ScrollArea dir='horizontal'>
              <NavigationMenuList>
                {taxonomies.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href="/abc" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "font-bold"
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </ScrollArea>
          </NavigationMenu>
        </div>
      </div>
      <Separator />
    </>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
