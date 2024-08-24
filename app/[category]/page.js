"use client"

import LandingCarousel from "@/components/custom/LandingCarousel";
import products from "@/assets/data/products.js";
import Product from "@/components/custom/Product";
import Filters from "@/components/custom/Filters";
import CombinedHeader from "@/components/custom/CombinedHeader";
import CustomPagniation from "@/components/custom/CustomPagniation";
import ProductListHorizontal from "@/components/custom/ProductListHorizontal";
import SortDropdown from "@/components/custom/SortDropdown";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  HamburgerMenuIcon,
  TextAlignBottomIcon,
  ViewGridIcon,
} from "@radix-ui/react-icons";
import { Toggle } from "@/components/ui/toggle";
import { FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { height } from "@/utils/helpers";
import { useState } from "react";

const sortOptions = [
  {
    label: "Price - High to Low",
    icon: ArrowUpIcon,
    value: "price:high-to-low",
  },
  {
    label: "Price - Low to High",
    icon: ArrowDownIcon,
    value: "price:low-to-high",
  },
];

function page() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <CombinedHeader />
      <div className="container">
        <LandingCarousel />
        <div className="my-5 md:my-10">
          <div className="grid gap-5 grid-flow-col lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <Filters
              className={`${showFilters ? "fixed top-0 z-20 bg-white left-0" : "hidden"} lg:block col-span-1 rounded-md`}
              isSticky
              showFiltersAsOverlay={showFilters}
            />
            <div className="col-span-4 lg:col-span-3 flex flex-col gap-5 relative">
              <div className="flex justify-between border-b items-center px-0 bg-white z-10 sticky top-[7.10rem] lg:static lg:z-0">
                <div>
                  <Button className="block lg:hidden p-3" variant="outline" onClick={() => setShowFilters(p => !p)}>
                    <FilterIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className=" flex py-2 gap-2">
                  <SortDropdown options={sortOptions}>
                    <div className="flex gap-2">
                      <TextAlignBottomIcon />
                      Sort By
                    </div>
                  </SortDropdown>
                  <div className="flex gap-2 items-center">
                    <Button variant="outline" size="icon">
                      <HamburgerMenuIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ViewGridIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid gap-5 xl:grid-cols-3 grid-cols-2">
                {products.map((product, index) => (
                  <Product key={index} product={product} />
                ))}
              </div>
              <div className="border-b py-2">
                <CustomPagniation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
