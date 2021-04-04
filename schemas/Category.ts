import { list } from '@keystone-next/keystone/schema';
import { relationship, text } from '@keystone-next/fields';

export const Category = list({
  fields: {
    title: text(),
    actions: relationship({ ref: 'Action.categories', many: true }),
  },
});
