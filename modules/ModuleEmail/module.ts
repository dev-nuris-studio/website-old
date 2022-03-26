import { createClient } from '@nextful/api/client';
import { createModule } from '@nextful/packages/module-connector';
import gql from 'graphql-tag';
import ModuleEmail from './ModuleEmail';

const client = createClient();

const Module = createModule({
    typename: 'ModuleEmail',
    component: ModuleEmail,
    async fetch(id: string) {
        return {};
    },
});

export default Module;
