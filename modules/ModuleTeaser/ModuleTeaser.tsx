import { ReactPropTypes } from 'react';
import * as Styled from './styles';
import Grid from '@nextful/components/Grid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ModuleTeaser = ({ ...props }: any) => {
    const { items } = props.moduleTeaser.itemsCollection;

    return (
        <Styled.Container>
            <Grid>
                {items.map((item: any) => {
                    return (
                        <Styled.Item key={item.headline}>
                            <Styled.Headline>{item.headline}</Styled.Headline>
                            <Styled.Text>{documentToReactComponents(item?.text?.json)}</Styled.Text>
                        </Styled.Item>
                    );
                })}
            </Grid>
        </Styled.Container>
    );
};

export default ModuleTeaser;
