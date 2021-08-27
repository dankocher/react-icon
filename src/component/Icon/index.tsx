import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";

import cog from "./svg/cog.svg";
import people from "./svg/people.svg";

const icons = { cog, people }

interface SVGProps {
    color: string;
    hoverColor: string;
    name: string;
    size: number;
    width: number;
    height: number;
}

const StyledSVG = styled(SVG)<SVGProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  & path {
    fill: ${({ color }) => color};
  }
  &:hover {
    path {
      fill: ${({ hoverColor }) => hoverColor};
    }
  }
`;

export default ({name = "cog", color = "gray", size = 32}) => {
    return <StyledSVG color={color} src={icons[name]} width={size} height={size}/>;
}
