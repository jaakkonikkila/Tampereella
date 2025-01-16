"use client";

import { useState } from "react";
import { Grid, Flex, Center } from "@chakra-ui/react";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import activitiesData from "@/data/activities.json";
import ScrollToTop from "@/components/ScrollToTopButton";

const ActivitiesPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const FilterOptions = [
    "shopping",
    "publicsauna",
    "sports",
    "hiking",
    "special",
    "escaperoom",
  ];

  const filteredData =
    selectedFilters.length > 0
      ? activitiesData.filter((data) =>
          selectedFilters.every((filter) => data.badges.includes(filter)),
        )
      : activitiesData;

  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  return (
    <Flex direction="column">
      <Center mt="2" mb="6">
        <Filter
          options={FilterOptions}
          type="Activitiespage"
          onFilterChange={handleFilterChange}
          singleSelect={true}
        />
      </Center>
      <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(269px, 1fr))", // Dynamically adjust columns
          "2xl": "repeat(5, 1fr)", // Cap at 5 columns on large screens
        }}
        gapX={{ base: "4", xl: "8" }}
        gapY={{ base: "6", xl: "8" }}
        mx={{ base: "0", md: "8" }}
        mt="2"
        justifyItems="center"
      >
        {filteredData.map((data, index) => (
          <Card
            key={index}
            type="Activitiespage"
            title={data.name}
            descriptionFi={data.descriptionfi}
            descriptionEn={data.descriptionen}
            badges={data.badges}
            googleMapsLink={data.googlemapslink}
            websiteLink={data.websitelink}
          />
        ))}
      </Grid>
      <ScrollToTop />
    </Flex>
  );
};

export default ActivitiesPage;
