import styled from 'styled-components';

export const Container = styled.a`
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-weight: 900;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
`;
