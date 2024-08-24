import Header from "./Header";
import TaxonomiesHeader from "./TaxonomiesHeader";

export default function CombinedHeader({ searchBar = false }) { 
  return (
    <div className="sticky top-0 z-10 bg-background" id="topbar">
      <Header searchBar={searchBar} />
      <TaxonomiesHeader />
    </div>
  );
}
