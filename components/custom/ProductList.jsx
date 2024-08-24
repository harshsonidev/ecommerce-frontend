import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import Product from "./Product";
import SectionTitle from "./SectionTitle";

export default function ProductList({
  title = "",
  description = "",
  products = [],
}) {
  return (
    <div>
      <SectionTitle {...{ title, description }} />
      <div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
