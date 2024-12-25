"use client";

import { Card, Link, HStack, Badge } from "@chakra-ui/react";
import { SiGooglemaps } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface CustomCardProps {
  type: string;
  title: string;
  description: string;
  badges: string[]; // Just an array of badge labels
  googleMapsLink?: string;
  websiteLink?: string;
}

const CustomCard = ({
  type,
  title,
  description,
  badges,
  googleMapsLink,
  websiteLink,
}: CustomCardProps) => {
  const t = useTranslations(type);
  return (
    <Card.Root
      size={{ base: "md", "2xl": "lg" }}
      minW="269px"
      variant="elevated"
      overflow="hidden"
    >
      <Card.Body gap="1">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{t(description)}</Card.Description>
        <HStack mt="2">
          {badges.map((badge, index) => (
            <Badge key={index} variant="subtle">
              {t(badge)}
            </Badge>
          ))}
        </HStack>
      </Card.Body>
      <Card.Footer gap="4" mt="-2">
        {googleMapsLink && (
          <Link
            href={googleMapsLink}
            target="_blank"
            display="flex"
            alignItems="center"
            color="blue.500"
            _hover={{ color: "blue.600" }}
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
            color="blue.500"
            _hover={{ color: "blue.600" }}
          >
            <FaExternalLinkAlt size="1.2em" />
            Website
          </Link>
        )}
      </Card.Footer>
    </Card.Root>
  );
};

export default CustomCard;
