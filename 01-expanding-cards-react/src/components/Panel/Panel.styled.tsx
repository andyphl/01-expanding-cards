import styled from "styled-components";

type StyledPanelProps = {
  active?: boolean;
};

const StyledPanel = styled.div<StyledPanelProps>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 3rem;
  flex: ${(props) => (props.active ? 5 : 1)};
  height: 80vh;
  margin: 0.5rem;
  cursor: pointer;
  position: relative;
  transition: flex 0.5s ease-in-out;

  &:nth-of-type(4),
  &:nth-of-type(5) {
    display: none;

    @media screen and (min-width: 375px) {
      display: flex;
    }
  }

  h3 {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: #fff;
    text-shadow: 0 0 10px #000;
    opacity: ${(props) => (props.active ? "1" : "0")};
    transition: opacity 0.3s ease-in;
  }
`;

export default StyledPanel;
