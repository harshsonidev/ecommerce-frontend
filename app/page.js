import Header from "@/components/custom/Header";
import LandingCarousel from "@/components/custom/LandingCarousel";
import ProductList from "@/components/custom/ProductList";
import ProductListHorizontal from "@/components/custom/ProductListHorizontal";
import TaxonomiesHeader from "@/components/custom/TaxonomiesHeader";
import products from "@/assets/data/products.js";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-10 bg-background">
        <Header searchBar={true} />
        <TaxonomiesHeader />
      </div>
      <div className="container">
        <LandingCarousel />
        <div className="mt-10">
          <ProductListHorizontal
            products={products.splice(0, 10)}
            title="Recently Visited"
            description="Pick where you left"
          />
        </div>
        <div className="my-10">
          <ProductList
            products={products.splice(0, 12)}
            title="Trending"
            description="Get the most popular"
          />
        </div>
      </div>
    </>
  );
}
