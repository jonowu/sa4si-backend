import { list } from '@keystone-next/keystone/schema';
import { timestamp, relationship } from '@keystone-next/fields';

export const Completion = list({
  fields: {
    action: relationship({ ref: 'Action' }),
    user: relationship({ ref: 'User.completions' }),
    completionDate: timestamp(),
    kudos: relationship({ ref: 'User', many: true }),
  },
});
