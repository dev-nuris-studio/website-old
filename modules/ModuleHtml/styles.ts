import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    margin-bottom: 40px;
    max-width: ${({ theme }) => theme.maxWidth}px;
    margin-left: auto;
    margin-right: auto;
`;
