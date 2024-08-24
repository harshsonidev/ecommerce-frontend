import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Product from "./Product";
import SectionTitle from "./SectionTitle";

export default function ProductListHorizontal({
  title = "",
  description = "",
  products = [],
}) {
  return (
    <div>
      <SectionTitle {...{ title, description }} />
      <div className="relative">
        <ScrollArea>
          <div className="flex gap-5 pb-4">
            {products.map((product, index) => (
              <Product key={index} product={product} fixedWidth/>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
