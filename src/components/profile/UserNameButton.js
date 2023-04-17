import React from 'react'
import { Button } from "@chakra-ui/react";
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";

const UserNameButton = ({ user }) => {
  return (
    <div>
       <Button
      as={Link}
      to={`${PROTECTED}/profile/${user.id}`}
      colorScheme="teal"
      variant="link"
    >
      {user.username}
    </Button>
      
    </div>
  )
}

export default UserNameButton
