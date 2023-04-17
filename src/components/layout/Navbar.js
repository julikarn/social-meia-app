import React from "react";
import { Button, Flex, Link } from "@chakra-ui/react";
import { DASHBOARD } from "../../lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "../../hooks/auth";


const Navbar = () => {
    const { logout, isLoading } = useLogout();
  return (
    <div>
      <Flex
        shadow="sm"
        pos="fixed"
        width="full"
        borderTop="6px solid"
        borderTopColor="teal.400"
        height="16"
        zIndex="3"
        justify="center"
        bg="purple"
      >
        <Flex px="4" w="full" align="center" maxW="1200" bg="red">
          <Link color="black" as={RouterLink} to={DASHBOARD} fontWeight="bold">
            Home
          </Link>
          <Button
            ml="auto"
            colorScheme="teal"
            size="sm"
              onClick={logout}
              isLoading={isLoading}
          >
            Logout
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
