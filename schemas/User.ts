import { list } from '@keystone-next/keystone/schema';
import { text, relationship, password } from '@keystone-next/fields';

export const User = list({
  ui: {
    listView: {
      initialColumns: ['name', 'email'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    biography: text(),
    areasOfInterest: text(),
    funFacts: text(),
    favouriteSdgs: relationship({
      ref: 'Sdg',
      many: true,
    }),
    completions: relationship({
      ref: 'Completion.user',
      many: true,
    }),
  },
});
