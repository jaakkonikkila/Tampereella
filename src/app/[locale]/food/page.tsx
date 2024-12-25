"use client";

import { useState } from "react";
import { Grid, Flex } from "@chakra-ui/react";
import Card from "@/components/Card";
import Filter from "@/components/Filter";

const FoodPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const FilterOptions = [
    "cafe",
    "restaurant",
    "vegetarian",
    "breakfast",
    "citycenter",
    "€",
    "€€",
    "€€€",
    "Hervanta",
    "Pirkkala",
  ];
  

  const mockData = [
    {
      type: "Foodpage",
      title: "Burger Palace",
      description: "Best burgers in town",
      googleMapsLink: "https://maps.google.com/?q=Burger+Palace",
      websiteLink: "https://burgerpalace.example.com",
      badges: ["Hamburger", "€€"]
    },
    {
      type: "Foodpage",
      title: "Pizza Heaven",
      description: "Delicious wood-fired pizzas",
      googleMapsLink: "https://maps.google.com/?q=Pizza+Heaven",
      websiteLink: "https://pizzaheaven.example.com",
      badges: ["Pizza", "€€"]
    },
    {
      type: "Foodpage",
      title: "Sushi World",
      description: "Fresh sushi and sashimi",
      googleMapsLink: "https://maps.google.com/?q=Sushi+World",
      websiteLink: "https://sushiworld.example.com",
      badges: ["Sushi", "€€€"]
    },
    {
      type: "Foodpage",
      title: "Taco Town",
      description: "Authentic Mexican tacos",
      googleMapsLink: "https://maps.google.com/?q=Taco+Town",
      websiteLink: "https://tacotown.example.com",
      badges: ["Taco", "€"]
    }
  ];

  const filteredData = selectedFilters.length > 0
    ? mockData.filter((data) =>
        selectedFilters.every((filter) => data.badges.includes(filter))
      )
    : mockData;

  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  return (
    <Flex direction="column" p="6">
      <Filter options={FilterOptions} type="Foodpage" onFilterChange={handleFilterChange} />
      <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(269px, 1fr))", // Dynamically adjust columns
          xl: "repeat(4, 1fr)", // Cap at 4 columns on large screens
        }}
        gap="6"
      >
        {filteredData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Grid>
    </Flex>
  );
};

export default FoodPage;
