"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { height } from "@/utils/helpers";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";
import { PlusCircledIcon, RocketIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Electronics",
    subcategories: [
      "Smartphones",
      "Laptops",
      "Cameras",
      "Smartphones",
      "Laptops",
      "Cameras",
      "Smartphones",
      "Laptops",
      "Cameras",
      "Smartphones",
      "Laptops",
      "Cameras",
      "Smartphones",
      "Laptops",
      "Cameras",
      "Smartphones",
      "Laptops",
      "Cameras",
      "Smartphones",
      "Laptops",
      "Cameras",
      "Headphones",
      "Speakers",
    ],
  },
  {
    name: "Clothing",
    subcategories: [
      "Shirts",
      "Pants",
      "Jackets",
      "Dresses",
      "Skirts",
      "Blouses",
    ],
  },
  {
    name: "Home and Kitchen",
    subcategories: [
      "Living Room",
      "Bedroom",
      "Dining Room",
      "Kitchen Appliances",
      "Laundry Appliances",
    ],
  },
  {
    name: "Health and Beauty",
    subcategories: [
      "Cleansers",
      "Moisturizers",
      "Serums",
      "Shampoo",
      "Conditioner",
      "Styling Products",
    ],
  },
  {
    name: "Sports and Outdoors",
    subcategories: [
      "Camping",
      "Hiking",
      "Fishing",
      "Gym Equipment",
      "Team Sports",
    ],
  },
  {
    name: "Books and Media",
    subcategories: [
      "Fiction",
      "Non-Fiction",
      "Science Fiction",
      "Action",
      "Drama",
      "Comedy",
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
    name: "Food and Beverages",
    subcategories: [
      "Fresh Produce",
      "Canned Goods",
      "Snacks",
      "Soft Drinks",
      "Coffee",
      "Tea",
    ],
  },
  {
    name: "Office Supplies",
    subcategories: ["Stationery", "Writing Instruments", "Office Furniture"],
  },
];

const priceRanges = [
  "Rs.0 - Rs.500",
  "Rs.500 - Rs.1000",
  "Rs.1000 - Rs.5000",
  "Rs.5000 - Rs.10000",
  "> Rs.10000",
];

const colors = [
  {
    name: "Yellow",
    colorCode: "#fde047",
  },
  {
    name: "Lime",
    colorCode: "#bef264",
  },
  {
    name: "Cyan",
    colorCode: "#a5f3fc",
  },
  {
    name: "Sky",
    colorCode: "#bae6fd",
  },
  {
    name: "Blue",
    colorCode: "#93c5fd",
  },
  {
    name: "Purple",
    colorCode: "#d8b4fe",
  },
  {
    name: "Green",
    colorCode: "#86efac",
  },
  {
    name: "Fuchsia",
    colorCode: "#f0abfc",
  },
  {
    name: "Rose",
    colorCode: "#fda4af",
  },

  {
    name: "Purple",
    colorCode: "#d8b4fe",
  },
  {
    name: "Green",
    colorCode: "#86efac",
  },
  {
    name: "Fuchsia",
    colorCode: "#f0abfc",
  },
  {
    name: "Rose",
    colorCode: "#fda4af",
  },
  {
    name: "Yellow",
    colorCode: "#fde047",
  },
  {
    name: "Lime",
    colorCode: "#bef264",
  },
];

const otherFilters = [
  {
    name: "Top Rated",
    icon: RocketIcon,
  },
  {
    name: "Recently Added",
    icon: PlusCircledIcon,
  },
];

export default function Filters({
  isSticky = false,
  stickyHeight = 100,
  className = "",
  showFiltersAsOverlay = false,
}) {
  // const stickyStyle = ;

  const generateQuery = (category, subcategory) => {
    console.log(category, subcategory);
  };

  return (
    <div className={cn(className)}>
      <div
        className={isSticky ? "sticky" : ""}
        style={
          isSticky
            ? {
                top: `${stickyHeight + 20}px !important`,
              }
            : {}
        }
      >
        <div className="border rounded-md">
          <div className="border-b px-3 py-2">
            <h1 className="text-xl font-bold">Filters</h1>
          </div>
          <div className="py-3">
            <ScrollArea>
              <div
                className={cn({
                  "max-h-[520px]": isSticky && !showFiltersAsOverlay,
                  "h-screen": showFiltersAsOverlay,
                })}
              >
                <div className="px-3">
                  <Accordion
                    type="multiple"
                    collapsible="true"
                    className="w-full"
                  >
                    <div className="flex flex-col gap-3 pb-2">
                      <div id="categories">
                        <div className="px-2 font-black">
                          <h1 className="mb-1">Categories</h1>
                          <Separator />
                        </div>
                        <div>
                          <ScrollArea>
                            <div className="ps-4 px-2 max-h-52">
                              {categories.map((category, categoryIndex) => (
                                <AccordionItem
                                  value={`item-${categoryIndex}`}
                                  key={categoryIndex}
                                  className=""
                                >
                                  <AccordionTrigger className="py-4">
                                    <h4 className="text-sm font-bold leading-none">
                                      {category.name}
                                    </h4>
                                  </AccordionTrigger>
                                  <AccordionContent className="pb-0">
                                    <ScrollArea className="rounded-md">
                                      <div>
                                        {category.subcategories.map(
                                          (subcategory, subcategoryIndex) => (
                                            <div
                                              key={subcategoryIndex}
                                              className="ps-2 text-sm mb-2"
                                            >
                                              <div
                                                className="flex gap-2 pb-1"
                                                onClick={(e) => {
                                                  console.log("dsadsads");
                                                  generateQuery(
                                                    category.name,
                                                    subcategory
                                                  );
                                                }}
                                              >
                                                <Checkbox
                                                  id={subcategoryIndex}
                                                />
                                                <label
                                                  htmlFor={subcategoryIndex}
                                                  className="text-sm font-bold leading-none select-none"
                                                >
                                                  {subcategory}
                                                </label>
                                              </div>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </ScrollArea>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </div>
                          </ScrollArea>
                        </div>
                      </div>
                      <div id="price-range">
                        <div className="px-2 font-black mb-2">
                          <h1 className="mb-1">Price</h1>
                          <Separator />
                        </div>
                        <div className="ps-4 px-2 py-2">
                          <ScrollArea>
                            <div className="max-h-48">
                              {priceRanges.map((price, index) => (
                                <div
                                  className="flex gap-2 pb-3 ps-2"
                                  key={index}
                                >
                                  <Checkbox id={index} />
                                  <label
                                    htmlFor={index}
                                    className="text-sm font-bold leading-none select-none"
                                  >
                                    {price}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </div>
                      </div>
                      <div id="colors">
                        <div className="px-2 font-black mb-1">
                          <h1 className="mb-1">Colors</h1>
                          <Separator />
                        </div>
                        <div className="ps-4 px-2">
                          <ScrollArea>
                            <div className="max-h-48">
                              <div className="flex flex-row gap-2 px-2 py-2 flex-wrap">
                                {colors.map((color, index) => (
                                  <Toggle
                                    key={index}
                                    className="cursor-pointer transition-all rounded-full ring-[#000000] hover:ring-2 ring-offset-2 p-0 h-auto"
                                  >
                                    <div
                                      style={{
                                        backgroundColor: color.colorCode,
                                      }}
                                      className="w-[20px] h-[20px] rounded-full"
                                    ></div>
                                  </Toggle>
                                ))}
                              </div>
                            </div>
                          </ScrollArea>
                        </div>
                      </div>
                      <div id="others">
                        <div className="px-2 font-black mb-2">
                          <h1 className="mb-1">Others</h1>
                          <Separator />
                        </div>
                        <div className="px-2">
                          <ScrollArea>
                            <div className="max-h-48">
                              <div className="flex flex-row gap-2 px-2 py-2">
                                {otherFilters.map((filter, index) => (
                                  <Toggle
                                    key={index}
                                    className="font-bold border h-auto p-1 px-2 flex gap-2"
                                  >
                                    {filter.icon && <filter.icon />}
                                    {filter.name}
                                  </Toggle>
                                ))}
                              </div>
                            </div>
                          </ScrollArea>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
