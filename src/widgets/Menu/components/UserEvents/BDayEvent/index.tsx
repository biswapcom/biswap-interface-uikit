import React, { FC } from "react";
import styled from "styled-components";

// components
import { Button, ButtonProps, ButtonScales } from "../../../../../components/Button";
import { GobletSolidIcon } from "../../../../../components/Svg";

// hooks
import { useMatchBreakpoints } from "../../../../../contexts";

interface Props {
  account?: string;
  logout: () => void;
  callback?: () => void;
  isSwap?: boolean;
  href?: string;
}

const Wrapper = styled.div`
  margin-right: 0;
  height: 40px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: 10px;
  }
`;

const StyledLink = styled.a<{ width?: string; flat: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: ${({ width }) => width || "auto"};

  padding: 0 16px 0 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ flat }) => (flat ? 0 : "8px")};
  background: linear-gradient(77.58deg, #2359aa -8.83%, #3a2281 71.19%, #84227e 124.82%);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    background: linear-gradient(79.91deg, #1263f1 -19.82%, #543fd7 48.01%, #f93b5d 173.07%);
  }
`;

const StyledBtn = styled(Button)<ButtonProps>`
  background: linear-gradient(77.58deg, #2359aa -8.83%, #3a2281 71.19%, #84227e 124.82%);

  &:hover {
    opacity: 0.8;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    background: linear-gradient(79.91deg, #1263f1 -19.82%, #543fd7 48.01%, #f93b5d 173.07%);
  }
`;

const BDayEvent: FC<Props> = ({ account, callback, href = "/" }) => {
  const { isMobile } = useMatchBreakpoints();
  const buttonText = "B-Day Presents";
  const isAbsoluteUrl = href.startsWith("http");
  const pathWithEventParam = isAbsoluteUrl ? `${href}?event=bDay` : href;

  const onClickHandler = () => {
    if (account && callback) callback();
  };

  return (
    <Wrapper>
      {isAbsoluteUrl ? (
        <StyledLink width={isMobile ? "100%" : "auto"} flat={isMobile} href={pathWithEventParam}>
          <GobletSolidIcon width="24px" mr="12px" color="white" />
          {buttonText}
        </StyledLink>
      ) : (
        <StyledBtn flat={isMobile} width={isMobile ? "100%" : "auto"} scale={ButtonScales.LG} onClick={onClickHandler}>
          <GobletSolidIcon width="24px" mr="12px" color="white" />
          {buttonText}
        </StyledBtn>
      )}
    </Wrapper>
  );
};

export default BDayEvent;
