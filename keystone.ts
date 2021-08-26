import { createSchema, config } from '@keystone-next/keystone/schema';
import { statelessSessions } from '@keystone-next/keystone/session';
import { createAuth } from '@keystone-next/auth';

import { Action } from './schemas/Action';
import { Category } from './schemas/Category';
import { Completion } from './schemas/Completion';
import { Idea } from './schemas/Idea';
import { Sdg } from './schemas/Sdg';
import { User } from './schemas/User';
import { sendPasswordResetEmail } from './lib/mail';
import { extendGraphqlSchema } from './extensions';
import { permissions } from './access';

let sessionSecret = process.env.SESSION_SECRET;
const domain = process.env.DOMAIN;

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
  sessionData: 'name email isAdmin',
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    itemData: {
      /*
        This creates a related role with full permissions, so that when the first user signs in
        they have complete access to the system (without this, you couldn't do anything)
      */
      isAdmin: true,
    },
  },
});

const envPort = parseInt(process.env.PORT || '');
const port = Number.isInteger(envPort) ? envPort : 4000;

export default auth.withAuth(
  config({
    server: {
      cors: {
        origin: [
          'http://localhost:3000',
          'http://localhost:19006',
          'https://sa4si.vercel.app',
          'https://sa4si-reset-password.vercel.app',
          'https://sa4si-app-reset-password.vercel.app',
          'https://sa4si-app-2tiqw.ondigitalocean.app',
          'https://www.sa4si.org/',
        ],
        credentials: true,
      },
      port: port,
    },
    db: {
      adapter: 'prisma_postgresql',
      url:
        process.env.DATABASE_URL ||
        'postgres://jonathanwu@localhost/sa4si_backend',
    },
    ui: {
      // Restrict access to the Admin UI to users with the isAdmin permission
      isAccessAllowed: (context) => permissions.isAdmin(context),
    },
    lists: createSchema({
      // Schema items go in here
      Action,
      Category,
      Completion,
      Idea,
      Sdg,
      User,
    }),
    session: statelessSessions({
      maxAge: sessionMaxAge,
      secret: sessionSecret,
      domain: domain,
      secure: true,
      sameSite: 'none',
    }),
    extendGraphqlSchema,
  })
);
