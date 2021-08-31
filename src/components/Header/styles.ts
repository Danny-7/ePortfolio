import { Link } from "react-scroll";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease-out;
  &:hover {
    color: #3498db;
  }
`;