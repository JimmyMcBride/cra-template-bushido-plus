import React from "react";

import { Wrapper, Linkton, FlexBox, Button } from "bushido-strap";

import { useDispatch } from "react-redux";

import { signOut } from "../../store/actions/auth";

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Wrapper height="100vh">
      <h1>Hello, world!</h1>
      <Button onClick={handleSignOut}>Sign Out</Button>
      <FlexBox height="90%" align="center">
        <Linkton to="/counter">Redux Counter</Linkton>
      </FlexBox>
    </Wrapper>
  );
}
