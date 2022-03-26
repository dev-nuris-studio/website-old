import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.article`
    padding: 40px ${({ theme }) => theme.sideSpace}px;

    &:first-child {
        margin-top: 40px;
    }

    ${up('xl')} {
        padding: 80px 0;
    }
`;
