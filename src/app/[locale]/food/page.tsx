"use client";

import { useState } from "react";
import { Grid, Flex, Center } from "@chakra-ui/react";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import foodData from "@/data/food.json";

const FoodPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const FilterOptions = [
    "cafe",
    "restaurant",
    "vegetarian",
    "citycenter",
    "€",
    "€€",
    "€€€",
    "bbq",
    "pizza",
    "sushi",
    "kebab",
    "hamburger",
    "chickenwings",
    "pasta",
    "buffet",
  ];

  const filteredData =
    selectedFilters.length > 0
      ? foodData.filter((data) =>
          selectedFilters.every((filter) => data.badges.includes(filter)),
        )
      : foodData;

  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  return (
    <Flex direction="column">
      <Center mt="2" mb="6">
        <Filter
          options={FilterOptions}
          type="Foodpage"
          onFilterChange={handleFilterChange}
        />
      </Center>
      <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(269px, 1fr))", // Dynamically adjust columns
          xl: "repeat(4, 1fr)", // Cap at 4 columns on large screens
        }}
        gap="6"
      >
        {filteredData.map((data, index) => (
          <Card
            key={index}
            type="Foodpage"
            title={data.name}
            descriptionFi={data.descriptionfi}
            descriptionEn={data.descriptionen}
            badges={data.badges}
            googleMapsLink={data.googlemapslink}
            websiteLink={data.websitelink}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default FoodPage;
