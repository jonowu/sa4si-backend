import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, text } from '@keystone-next/fields';
import { document } from '@keystone-next/fields-document';

export const Sdg = list({
  ui: {
    listView: {
      initialColumns: ['sdgNo', 'title'],
    },
  },
  fields: {
    sdgNo: integer(),
    title: text(),
    description: text(),
    content: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
    }),
    actions: relationship({ ref: 'Action.relatedSdgs', many: true }),
  },
});
