import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  margin: auto;
  max-height: 100%;
  overflow: auto;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const Form = styled.form``;

export const Or = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.4rem 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

export const OrText = styled.p`
  padding: 10px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 1rem;
`;
