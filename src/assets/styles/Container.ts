import { device } from 'assets/styles';

import styled from 'styled-components';

const ContainerFullWidth = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled(ContainerFullWidth)`
  max-width: 1280px;
  padding-left: 24px;
  padding-right: 24px;

  @media ${device.mobileL} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default { Container, ContainerFullWidth };
