import styled from 'styled-components';
import ImageComponent from 'next/image';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    margin-bottom: 40px;
    max-width: ${({ theme }) => theme.maxWidth}px;
    margin-left: auto;
    margin-right: auto;
`;

export const ImageWrapper = styled.div`
    height: 480px;
    position: relative;
`;

export const Image = styled(ImageComponent)``;

export const Headline = styled.div`
    font-size: 100px;
    line-height: 90px;
    font-weight: 900;
    font-family: ${({ theme }) => theme.fonts.headlines};

    ${up('xl')} {
        font-size: 200px;
        line-height: 180px;
        width: 50%;
    }
`;

export const HeadlineWrapper = styled.div`
    margin-bottom: 20px;

    ${up('xl')} {
        margin-bottom: 40px;
    }
`;
