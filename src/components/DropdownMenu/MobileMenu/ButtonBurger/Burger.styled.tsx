import styled, { css } from "styled-components";

// config
import { menuAnimationConfig } from "./animationConfig";

type StyledBurgerProps = {
  open: boolean;
  isLoaded: boolean;
  isTablet: boolean;
};

export const StyledBurger = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 22px;
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s linear;
  z-index: 10;

  ${({ open, isLoaded }) => {
    if (open) {
      return css`
        animation: ${menuAnimationConfig.boxAnimationForward} 0.5s ease-in 0s normal;
        animation-fill-mode: forwards;
      `;
    } else if (isLoaded) {
      return css`
        animation: ${menuAnimationConfig.boxAnimationBackwards} 0.5s ease-out 0s normal;
      `;
    }
  }}

  span {
    position: relative;
    width: 22px;
    height: 2px;
    border-radius: 10px;
    background: ${({ open, isTablet, theme }) =>
      open ? (isTablet ? theme.colors.white : theme.colors.dark800) : theme.colors.white};
    transition: all 0.5s linear;
    transform-origin: center;

    ${({ open, isLoaded }) => {
      if (open) {
        return css`
          :first-child {
            animation: ${menuAnimationConfig.firstLineAnimationForward} 0.3s ease-in-out 0s normal;
            animation-fill-mode: forwards;
          }

          :nth-child(2) {
            animation: ${menuAnimationConfig.secondLineAnimationForward} 0.3s linear 0s normal;
            animation-fill-mode: forwards;
          }

          :nth-child(3) {
            animation: ${menuAnimationConfig.thirdLineAnimationForward} 0.3s ease-in-out 0s normal;
            animation-fill-mode: forwards;
          }
        `;
      } else if (isLoaded) {
        return css`
          :first-child {
            animation: ${menuAnimationConfig.firstLineAnimationBackwards} 0.3s ease-in-out 0s normal;
            animation-fill-mode: forwards;
          }
          
          :nth-child(2) {
            animation: ${menuAnimationConfig.secondLineAnimationBackwards} 0.3s linear 0s normal;
            animation-fill-mode: forwards;
          }
      
          :nth-child(3) {
            animation: ${menuAnimationConfig.thirdLineAnimationBackwards} 0.3s ease-in-out 0s normal; 
            animation-fill-mode: forwards;
          `;
      }
    }}
  }
`;
