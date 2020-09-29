import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 40px;
  align-items: center;
  padding: 0px 10px;
  background-color: black;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: 80px;
  height: 40px;
  text-align: center;
  color: whitesmoke;
  &:not(:last-child) {
    margin-right: 10px;
  }
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "trasparent")};
  /* transition: border-bottom 0.5s ease-in-out; */
`;
const Slink = styled(Link)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter((props) => {
  const {
    location: { pathname },
  } = props;
  return (
    <Header>
      <List>
        <Item current={pathname === "/"}>
          <Slink to="/">Movies</Slink>
        </Item>
        <Item current={pathname === "/tv"}>
          <Slink to="/tv">TV</Slink>
        </Item>
        <Item current={pathname === "/search"}>
          <Slink to="/search">Search</Slink>
        </Item>
      </List>
    </Header>
  );
});
