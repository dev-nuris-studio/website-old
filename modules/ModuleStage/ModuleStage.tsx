import { ReactPropTypes } from 'react';
import * as Styled from './styles';

const ModuleStage = ({ ...props }: any) => {
    const { headline, image } = props.moduleStage;

    return (
        <Styled.Container>
            <Styled.HeadlineWrapper>
                <Styled.Headline>{headline}</Styled.Headline>
            </Styled.HeadlineWrapper>
            <Styled.ImageWrapper>
                <Styled.Image src={image.url} layout='fill' priority objectFit='cover' />
            </Styled.ImageWrapper>
        </Styled.Container>
    );
};

export default ModuleStage;
