import Image from "next/image";
import Link from "next/link";

export default function Product({ product, fixedWidth }) {
  return (
    <div className="flex-col w-full">
      <div
        className={`overflow-hidden relative rounded-md border ${
          !fixedWidth
            ? "w-full md:h-80 sm:h-48 h-40"
            : "w-48 h-48 md:w-80 md:h-80"
        }`}
      >
        <Link href="/product/ABC">
          <Image
            className="object-cover transition-all duration-300 hover:scale-105 rounded-md"
            src={product.images[0]}
            alt=""
            fill
          />
        </Link>
      </div>
      <div className="p-2 pb-0">
        <Link href="/product/ABC">
          <h1 className="text-base md:text-xl font-semibold">{product.name}</h1>
        </Link>
        <h1 className="text-gray-500 text-xs md:text-base">
          {product.brandName || ""}
        </h1>
        <h1 className="font-bold">
          {product.discountedPrice ? (
            <span className="flex gap-2 items-baseline">
              <span className="font-black">Rs.{product.discountedPrice}</span>
              <span className="line-through text-gray-400 text-xs sm:text-base">
                Rs.{product.price}
              </span>
            </span>
          ) : (
            <span className="font-black">Rs. {product.price}</span>
          )}
        </h1>
      </div>
    </div>
  );
}
