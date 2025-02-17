"use client";

import { useState, useEffect } from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface FilterProps {
  options: string[]; // Array of filter options
  type: string; // We use this to get translations
  singleSelect?: boolean; // for single selection mode
  onFilterChange: (selectedFilters: string[]) => void; // Callback function
}

const Filter: React.FC<FilterProps> = ({
  options,
  type,
  singleSelect = false,
  onFilterChange,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const t = useTranslations(type);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => {
      if (singleSelect) {
        // If singleSelect is true, select only one filter
        return prev.includes(filter) ? [] : [filter];
      }
      // If singleSelect is false, toggle the filter normally
      return prev.includes(filter)
        ? prev.filter((f) => f !== filter) // Remove if already selected
        : [...prev, filter]; // Add if not selected
    });
  };

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  return (
    <HStack gap={3} wrap="wrap" justifyContent="center">
      {options.map((filter) => (
        <Button
          colorPalette="red"
          size={{ base: "xs", sm: "sm", lg: "md" }}
          key={filter}
          onClick={() => toggleFilter(filter)}
          variant={selectedFilters.includes(filter) ? "surface" : "outline"}
        >
          <Text color={{ base: "black", _dark: "white" }}>{t(filter)}</Text>
        </Button>
      ))}
    </HStack>
  );
};

export default Filter;
