"use client";

import { Card, Link, Flex, Badge, VStack } from "@chakra-ui/react";
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SiGooglemaps } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

interface CustomCardProps {
  type: string; // We use this to get translations
  title: string; // Title of the card
  descriptionFi: string; // Description in Finnish
  descriptionEn: string; // Description in English
  badges?: string[]; // An array of badge labels
  googleMapsLink?: string; // Google Maps link
  websiteLink?: string; // Website link
}

// Custom card component that has distinct sizes and has a popover for long descriptions
const CustomCard = ({
  type,
  title,
  descriptionFi,
  descriptionEn,
  badges,
  googleMapsLink,
  websiteLink,
}: CustomCardProps) => {
  const t = useTranslations(type);
  const c = useTranslations("Common");
  const locale = useLocale();

  // Determine the description based on locale
  const description = locale === "en" ? descriptionEn : descriptionFi;

  // Check if the description is long
  const isLongDescription = description.length > 300;

  // Truncated description for the collapsed view
  const truncatedDescription = isLongDescription
    ? description.slice(0, 300) + "..."
    : description;

  return (
    <Card.Root
      size={{ base: "md", "2xl": "lg" }}
      minW="269px"
      minH="269px"
      maxW="450px"
      maxH="400px"
      variant="elevated"
      overflow="hidden"
      className="card"
      colorPalette="red"
    >
      <Card.Body gap="1">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          <PopoverRoot
            lazyMount
            unmountOnExit
            size="lg"
            positioning={{ sameWidth: true }}
          >
            <PopoverTrigger textAlign="left" outline="none">
              {truncatedDescription}
            </PopoverTrigger>
            <PopoverContent
              textAlign="left"
              fontSize="1rem"
              lineHeight="1.7"
              width="fill-available"
            >
              <PopoverBody>{description}</PopoverBody>
            </PopoverContent>
          </PopoverRoot>
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="4" mt="-2">
        <VStack gap="3" width="100%" align="start">
          <Flex wrap="wrap" gap="2" mt="1" width="100%">
            {badges?.map((badge, index) => (
              <Badge
                key={index}
                variant="subtle"
                size={{ base: "sm", "2xl": "md" }}
              >
                {t(badge)}
              </Badge>
            ))}
          </Flex>
          <Flex gap="4">
            {googleMapsLink && (
              <Link
                href={googleMapsLink}
                target="_blank"
                display="flex"
                alignItems="center"
                colorPalette="red"
                _hover={{ color: "red.600" }}
              >
                <SiGooglemaps size="1.2em" />
                Google Maps
              </Link>
            )}
            {websiteLink && (
              <Link
                href={websiteLink}
                target="_blank"
                display="flex"
                alignItems="center"
                colorPalette="red"
                _hover={{ color: "red.600" }}
              >
                <FaExternalLinkAlt size="1.2em" />
                {c("website")}
              </Link>
            )}
          </Flex>
        </VStack>
      </Card.Footer>
    </Card.Root>
  );
};

export default CustomCard;
