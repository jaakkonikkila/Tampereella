import { useState, useEffect } from "react";
import { IconButton, Center } from "@chakra-ui/react";
import { GoArrowUp } from "react-icons/go";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll event
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Center mt="4">
      {isVisible && (
        <IconButton
          aria-label="Scroll to top"
          onClick={scrollToTop}
          size="lg"
          boxShadowColor="lg"
          outline={{ _light: "solid 1px" }}
          outlineColor="red.700"
          bgColor={{ _light: "red.100", _dark: "red.800" }}
          color={{ _light: "red.700", _dark: "#fca5a5" }}
          borderRadius="full"
          boxShadow="md"
          _hover={{ boxShadow: "xl", transform: "scale(1.1)" }}
          transition="all 0.3s"
        >
          <GoArrowUp />
        </IconButton>
      )}
    </Center>
  );
}
