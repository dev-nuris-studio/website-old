import { ReactPropTypes } from 'react';
import * as Styled from './styles';

const ModuleHeadlines = ({ ...props }: any) => {
    const { headline, subheadline } = props.moduleHeadlines;

    return (
        <Styled.Container>
            <Styled.Headlines>
                <Styled.Subheadline>{subheadline}</Styled.Subheadline>
                <Styled.Headline>{headline}</Styled.Headline>
            </Styled.Headlines>
        </Styled.Container>
    );
};

export default ModuleHeadlines;
