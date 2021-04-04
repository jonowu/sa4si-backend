import { list } from '@keystone-next/keystone/schema';
import { relationship, text } from '@keystone-next/fields';

export const Idea = list({
  ui: {
    listView: {
      initialColumns: ['title', 'body'],
    },
  },
  fields: {
    title: text(),
    body: text(),
    user: relationship({
      ref: 'User',
    }),
  },
});
