"use client";

import { useState, useEffect } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface FilterProps {
  options: string[];
  type: string;
  onFilterChange: (selectedFilters: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ options, type, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const t = useTranslations(type);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => {
      const newFilters = prev.includes(filter)
        ? prev.filter((f) => f !== filter) // Remove if already selected
        : [...prev, filter]; // Add if not selected
      return newFilters;
    });
  };

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  return (
    <HStack gap={3} wrap="wrap" justifyContent="center">
      {options.map((filter) => (
        <Button
          size={{ base: "xs", sm: "sm", lg: "md" }}
          key={filter}
          onClick={() => toggleFilter(filter)}
          variant={selectedFilters.includes(filter) ? "solid" : "outline"}
          colorScheme={selectedFilters.includes(filter) ? "teal" : "gray"}
        >
          {t(filter)}
        </Button>
      ))}
    </HStack>
  );
};

export default Filter;
