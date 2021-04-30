import { createSchema, config } from '@keystone-next/keystone/schema';
import {
  statelessSessions,
  withItemData,
} from '@keystone-next/keystone/session';
import { createAuth } from '@keystone-next/auth';

import { Action } from './schemas/Action';
import { Category } from './schemas/Category';
import { Completion } from './schemas/Completion';
import { Idea } from './schemas/Idea';
import { Sdg } from './schemas/Sdg';
import { User } from './schemas/User';
import { Role } from './schemas/Role';

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production'
    );
  } else {
    sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --';
  }
}

let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const auth = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    itemData: {
      /*
        This creates a related role with full permissions, so that when the first user signs in
        they have complete access to the system (without this, you couldn't do anything)
      */
      role: {
        create: {
          name: 'Super Admin',
          canEditOtherUsers: true,
          canManageUsers: true,
          canManageRoles: true,
        },
      },
    },
  },
});

export default auth.withAuth(
  config({
    db: {
      adapter: 'prisma_postgresql',
      url:
        process.env.DATABASE_URL ||
        'postgres://jonathanwu@localhost/sa4si-backend',
    },
    ui: {
      // Restrict access to the Admin UI to users with the isAdmin permission
      // isAccessAllowed: (context) => (isAdmin(context) ? true : false),
    },
    lists: createSchema({
      // Schema items go in here
      Action,
      Category,
      Completion,
      Idea,
      Role,
      Sdg,
      User,
    }),
    session: withItemData(
      statelessSessions({
        maxAge: sessionMaxAge,
        secret: sessionSecret,
      }),
      {
        User: `name role {
          id
          name
          canEditOtherUsers
          canManageUsers
          canManageRoles
        }`,
      }
    ),
  })
);
