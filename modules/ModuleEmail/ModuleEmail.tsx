import { ReactPropTypes } from 'react';
import * as Styled from './styles';

const ModuleEmail = ({ ...props }: any) => {
    return (
        <Styled.Container>
            <Styled.Headline>Du hast ein Projekt für Nuris Studio?</Styled.Headline>
            <Styled.Link href='mailto:hi@nuris.studio'>hi@nuris.studio</Styled.Link>
        </Styled.Container>
    );
};

export default ModuleEmail;
