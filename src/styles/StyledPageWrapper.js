import styled from 'styled-components';

const StyledAppWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  background: ${(props) => props.theme.fernGreen};
`;

export default StyledAppWrapper;
