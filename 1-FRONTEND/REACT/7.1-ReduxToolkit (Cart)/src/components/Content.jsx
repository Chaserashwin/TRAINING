import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ShopCard from "./ShopCard";

function Content() {
  return (
    <div>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </SimpleGrid>
    </div>
  );
}

export default Content;
