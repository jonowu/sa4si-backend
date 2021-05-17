import { list } from '@keystone-next/keystone/schema';
import { timestamp, relationship } from '@keystone-next/fields';
import { isSignedIn } from '../access';

export const Completion = list({
  access: {
    create: isSignedIn,
  },
  fields: {
    action: relationship({ ref: 'Action' }),
    user: relationship({
      ref: 'User.completions',
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
    completionDate: timestamp({ defaultValue: () => new Date().toISOString() }),
    kudos: relationship({ ref: 'User', many: true }),
  },
});
