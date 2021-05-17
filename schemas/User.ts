import { list } from '@keystone-next/keystone/schema';
import { text, relationship, password, checkbox } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';

import { permissions, rules } from '../access';

const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder: 'keystone',
};

export const User = list({
  access: {
    create: true,
    read: true,
    update: rules.canUpdateUsers,
    delete: permissions.isAdmin,
  },
  ui: {
    listView: {
      initialColumns: ['email', 'name', 'isAdmin'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password({
      isRequired: true,
      access: {
        update: ({ session, item }) =>
          permissions.isAdmin({ session }) || session.itemId === item.id,
      },
    }),
    profilePicture: cloudinaryImage({
      cloudinary,
      label: 'Profile Picture',
    }),
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
    // This is used for access control, both in the schema and for the Admin UI
    isAdmin: checkbox({
      access: {
        // Only Admins can set the isAdmin flag for any users
        create: permissions.isAdmin,
        update: permissions.isAdmin,
      },
    }),
    /* role: relationship({
      ref: 'Role.assignedTo',
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers,
      },
      ui: {
        itemView: {
          fieldMode: (args) =>
            permissions.canManageUsers(args) ? 'edit' : 'read',
        },
      },
    }), */
  },
});
