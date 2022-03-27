import * as Styled from './styles';

const ModuleHtml = ({ ...props }: any) => {
    const { html } = props.moduleHtml;

    return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ModuleHtml;
