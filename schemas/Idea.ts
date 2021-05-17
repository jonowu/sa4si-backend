import { list } from '@keystone-next/keystone/schema';
import { relationship, text, timestamp } from '@keystone-next/fields';
import { isSignedIn } from '../access';

export const Idea = list({
  access: {
    create: isSignedIn,
  },
  ui: {
    listView: {
      initialColumns: ['title', 'body'],
    },
  },
  fields: {
    title: text(),
    body: text({ isRequired: true }),
    user: relationship({
      ref: 'User',
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
    dateSubmitted: timestamp({ defaultValue: () => new Date().toISOString() }),
  },
});
