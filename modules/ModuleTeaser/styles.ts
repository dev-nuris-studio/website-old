import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 40px;
    max-width: ${({ theme }) => theme.maxWidth}px;
    margin-left: auto;
    margin-right: auto;
`;

export const Item = styled.div``;

export const Headline = styled.div`
    font-size: 22px;
    line-height: 27px;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.headlines};
    margin-bottom: 20px;
`;

export const Text = styled.div`
    p {
        font-size: 18px;
        line-height: 30px;
    }
`;
