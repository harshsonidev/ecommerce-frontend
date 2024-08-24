"use client";
import Header from "@/components/custom/Header";
import ImageGallery from "react-image-gallery";
import Rating from "react-rating";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { HeartIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductListHorizontal from "@/components/custom/ProductListHorizontal";
import products from "@/assets/data/products.js";
import { ScrollArea } from "@/components/ui/scroll-area";

console.log(products)
export default function page() {
  const product = {
    name: "Seeds of Change Organic Quinoa, Brown",
    description: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Mi bibendum neque egestas congue quisque egestas
        diam in. Mi in nulla posuere sollicitudin aliquam ultrices
        sagittis orci. Amet aliquam id diam maecenas ultricies mi
        eget. Mauris in aliquam sem fringilla ut morbi tincidunt
        augue interdum. Scelerisque mauris pellentesque pulvinar
        pellentesque.
      </p>
      <p>
        Tellus pellentesque eu tincidunt tortor
        aliquam nulla facilisi cras fermentum. Ipsum a arcu cursus
        vitae congue mauris rhoncus aenean vel. Morbi tincidunt
        augue interdum velit euismod. Aliquet bibendum enim
        facilisis gravida neque. Id leo in vitae turpis massa sed
        elementum tempus. Nisl suscipit adipiscing bibendum est
        ultricies integer quis auctor elit.
      </p>
    `,
    price: "150",
    brandName: "XYZ Company",
    discountedPrice: "100",
    images: [
      "/assets/images/product/product-1.jpg",
      "/assets/images/product/product-2.jpg",
      "/assets/images/product/product-3.jpg",
      "/assets/images/product/product-4.jpg",
      "/assets/images/product/product-5.jpg",
      "/assets/images/product/product-6.jpg",
      "/assets/images/product/product-7.jpg",
      "/assets/images/product/product-8.jpg",
      "/assets/images/product/product-9.jpg",
    ],
  };

  return (
    <>
      <div className="sticky top-0 z-10 bg-background">
        <Header />
      </div>
      <div className="container">
        <div className="flex gap-5 md:gap-10 mt-5 md:mt-10 flex-col md:flex-row">
          <div className="product-images md:w-[350px] lg:w-[500px] xl:w-[650px] shrink-0 rounded-md">
            <ImageGallery
              items={product.images.map((imageURL) => ({
                thumbnail: imageURL,
                original: imageURL,
              }))}
              thumbnailPosition="bottom"
              showNav={false}
              showPlayButton={false}
              showFullscreenButton={false}
              disableThumbnailScroll
              slideInterval={4000}
            ></ImageGallery>
          </div>
          <div className="product-details w-full md:px-5 flex flex-col gap-3 md:gap-5">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter lg:text-4xl xl:text-5xl lg:leading-[1.1]">
              {product.name}
            </h1>
            <h1 className="text-slate-400 text-xs md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              rem officia, corrupti reiciendis minima nisi modi, quasi, odio
              minus dolore impedit fuga eum eligendi? Officia doloremque facere
              quia. Voluptatum, accusantium!
            </h1>
            <div className="flex gap-2 text-xs md:text-base">
              <Rating
                className="text-yellow-300"
                emptySymbol={
                  <img
                    src="/assets/svg/Star_Empty.svg"
                    className="w-[20px] h-[20px]"
                  />
                }
                fullSymbol={
                  <img
                    src="/assets/svg/Star_Filled.svg"
                    className="w-[20px] h-[20px]"
                  />
                }
                readonly
                initialRating={4}
              />
              (32 Reviews)
            </div>
            <div className="flex gap-4 items-end">
              <span className="font-black text-3xl md:text-4xl">
                Rs. {product.discountedPrice}
              </span>{" "}
              <span className="line-through text-gray-400 text-xl font-bold">
                Rs. {product.price}
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex">
                <Button variant="outline" size="icon">
                  <MinusIcon className="h-4 w-8" />
                </Button>
                <div className="border w-12 flex items-center justify-center rounded pointer-events-none select-none">
                  1
                </div>
                <Button variant="outline" size="icon">
                  <PlusIcon className="h-4 w-8" />
                </Button>
              </div>
              <div className="action-buttons flex gap-2">
                <Button className="font-bold tracking-wider">
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <HeartIcon className="h-6 w-8" color="red" />
                  {/* <HeartFilledIcon className="h-6 w-8" color='red' /> */}
                </Button>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-2 text-sm font-bold">
              <p className="text-zinc-400">
                SKU: <span className="text-zinc-950">ABCD1234</span>
              </p>
              <p className="text-zinc-400">
                Tags: <span className="text-zinc-950">Cloths, Women</span>
              </p>
              <p className="text-zinc-400">
                Availability:{" "}
                <span className="text-zinc-950">10 Items In Stock</span>
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-5" />
        <div className="bg-background">
          <Tabs defaultValue="description" className="w-full">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional-info">Additional Info</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="border rounded p-2">
              {!product.description ? (
                <div className="flex h-[300px] shrink-0 items-center justify-center">
                  <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <h3 className="mt-4 text-lg font-semibold">
                      No Description
                    </h3>
                  </div>
                </div>
              ) : (
                <ScrollArea>
                  <div className="min-h-[300px] max-h-[400px] shrink-0">
                    <h3
                      className="text-md"
                      dangerouslySetInnerHTML={{
                        __html: product.description,
                      }}
                    ></h3>
                  </div>
                </ScrollArea>
              )}
            </TabsContent>
            <TabsContent value="additional-info" className="border rounded p-2">
              <div className="flex h-[300px] shrink-0 items-center justify-center">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                  <h3 className="mt-4 text-lg font-semibold">
                    No Additional Info
                  </h3>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="border rounded p-2">
              <div className="flex h-[300px] shrink-0 items-center justify-center">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                  <h3 className="mt-4 text-lg font-semibold">No Reviews yet</h3>
                  <p className="mb-4 mt-2 text-sm text-muted-foreground">
                    This product don&apos;t have any reviews. Add one below.
                  </p>
                  <Button>Add a Review</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="my-5 mt-10">
          <ProductListHorizontal
            products={products.splice(0, 10)}
            title="Related Products"
            description="Products related to your search"
          />
        </div>
      </div>
    </>
  );
}
