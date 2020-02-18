import React from "react";

import { Wrapper, Linkton, Button, Flex, Box } from "bushido-strap";

import { useDispatch } from "react-redux";

import { signOut } from "../../store/actions/auth";

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Wrapper>
      <Flex jc_between stretch ai_center>
        <Box w="112.84px" />
        <h1>Hello, world!</h1>
        <Button h="100%" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Flex>
      <Flex>
        <Linkton to="/counter">Redux Counter</Linkton>
      </Flex>
    </Wrapper>
  );
}
