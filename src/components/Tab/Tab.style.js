import styled from "styled-components";

export const StyledTab = styled.ul`
  ${({
  theme: { colors, space, borderRadius, fontWeight },
  variant,
  textColor,
  orientation,
}) => `
  max-width: max(35%, 500px);
  margin: 0 auto;
  display: flex;
  flex-direction: ${orientation === "vertical" ? "column" : "row"};
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: ${variant === "primary" ? "1px solid gray" : "none"};
  border-radius: 24px;
  background-color: ${variant === "primary" ? "gray" : "white"};
  color: ${textColor === "primary" ? "black" : "white"};
  font-weight: 600;
  padding: 0;
`}
`;

export const TabItem = styled.li`
  ${({
  disabled,
  variant,
}) => `
  max-width: 100%;
  flex: 1;
  margin: 4px;
  padding: 8px 24px;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.7s;
  border-radius: 24px;
  white-space: nowrap;
  color: ${variant === "primary" ? "black" : "gray"};

  pointer-events: ${disabled && "none"};
  opacity:${disabled ? "0.5" : "1"};

  &:nth-child(2) {
    border-radius: 24px;
  }

  &.active {
    background: ${variant === "secondary" ? "blue" : "white"};
    color: ${variant === "secondary" ? "white" : "black"};
    font-weight: 600;
  }
`}
`;

export const TabContentWrapper = styled.div`
  ${({
    space
}) => `
  margin: 10px;
  `}
`;

export const TabPanel = styled.div`
  ${({
    space
}) => `
  margin: 10px;
  `}
`;