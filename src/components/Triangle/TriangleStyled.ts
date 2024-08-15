import styled from "styled-components";

export const TriangleStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  transform: translateY(100%) translateX(124px);

  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid ${({ theme }) => theme.color.title};
`;
