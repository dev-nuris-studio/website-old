import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import Scrollbar from 'react-smooth-scrollbar';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const ScrollWrapper = styled(Scrollbar)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
