import styled from 'styled-components';
import LogoComponent from '../Logo';

// Header
export const Container = styled.header`
    mix-blend-mode: difference;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
`;

export const Inner = styled.div`
    height: 60px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-left: ${({ theme }) => theme.sideSpace}px;
    padding-right: ${({ theme }) => theme.sideSpace}px;
`;

export const Logo = styled(LogoComponent)``;

export const MainContainer = styled.div`
    color: red;
`;
