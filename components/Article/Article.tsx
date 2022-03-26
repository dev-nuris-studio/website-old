import { renderComponents } from '@nextful/packages/module-connector';
import { Article as ArticleType } from '@nextful/types/index';
import Modules from '@nextful/modules/mapping';
import * as Styled from './styles';

const Article = ({ modulesCollection }: ArticleType) => {
    return <Styled.Container>{renderComponents(modulesCollection.items, Modules)}</Styled.Container>;
};

export default Article;
