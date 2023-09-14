import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 18px;
  font-weight: 500;
  color: black;

  &.active {
    font-weight: bold;
    color: teal;
  }
  &:hover {
    font-weight: bold;
    color: teal;
  }
`;
