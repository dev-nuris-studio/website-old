import { createClient } from '@nextful/api/client';
import { createModule } from '@nextful/packages/module-connector';
import gql from 'graphql-tag';
import ModuleTeaser from './ModuleTeaser';

const client = createClient();

const Module = createModule({
    typename: 'ModuleTeaser',
    component: ModuleTeaser,
    async fetch(id: string) {
        const query = gql`
            query moduleTeaserById($id: String!) {
                moduleTeaser(id: $id) {
                    sys {
                        id
                    }
                    __typename
                    itemsCollection {
                        items {
                            ... on TeaserItem {
                                headline
                                text {
                                    json
                                }
                            }
                        }
                    }
                }
            }
        `;

        const moduleData = await client.query({
            query: query,
            variables: {
                id,
            },
        });

        return moduleData.data;
    },
});

export default Module;
