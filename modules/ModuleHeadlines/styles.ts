import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    margin-bottom: 40px;
    max-width: ${({ theme }) => theme.maxWidth}px;
    margin-left: auto;
    margin-right: auto;
`;

export const Headlines = styled.div`
    ${up('xl')} {
        width: 50%;
    }
`;

export const Headline = styled.div`
    font-size: 48px;
    line-height: 58px;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.headlines};
`;

export const Subheadline = styled.div`
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.headlines};
    text-transform: uppercase;
    margin-bottom: 20px;
`;
