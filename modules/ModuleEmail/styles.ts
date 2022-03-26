import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 40px;
    max-width: ${({ theme }) => theme.maxWidth}px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

export const Headline = styled.div`
    font-size: 48px;
    line-height: 58px;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.headlines};
    margin-bottom: 30px;
`;

export const Link = styled.a`
    font-size: 36px;
    line-height: 46px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.headlines};
    color: ${({ theme }) => theme.colors.black};
`;
