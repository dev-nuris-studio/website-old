import link from 'next/link';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import LogoComponent from '../Logo';

export const Container = styled.footer`
    text-align: center;
    padding: 40px ${({ theme }) => theme.sideSpace}px;
`;

export const Copyright = styled.div`
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.headlines};
    margin-bottom: 40px;
`;

export const Navigation = styled.div`
    ${up('xl')} {
        display: flex;
        justify-content: center;
    }
`;

export const NavigationItem = styled(link)``;

export const NavigationValue = styled.div`
    margin-bottom: 28px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
    cursor: pointer;

    &:last-child {
        margin-bottom: 0;
    }

    ${up('xl')} {
        margin-left: 40px;
        margin-right: 40px;
        font-size: 20px;
        line-height: 20px;
    }
`;
