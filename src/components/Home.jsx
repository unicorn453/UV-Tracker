import React from "react";
import UVDataFetch from "./UvDataFethch";
import SearchButton from "./SearchButton";
import HeroSection from "./HeroSection";
import SkinTypeTable from "./SkinTypeTable";
SkinTypeTable;
function Home() {
  return (
    <>
      <HeroSection />
      <UVDataFetch />
      <SkinTypeTable />
    </>
  );
}

export default Home;
