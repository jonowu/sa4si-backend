import { list } from '@keystone-next/keystone/schema';
import { text, relationship, password } from '@keystone-next/fields';
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
    delete: permissions.canManageUsers,
  },
  ui: {
    hideCreate: (args) => !permissions.canManageUsers(args),
    hideDelete: (args) => !permissions.canManageUsers(args),
    listView: {
      initialColumns: ['name', 'role'],
    },
    itemView: {
      defaultFieldMode: ({ session, item }) => {
        // Users with canEditOtherUsers can always edit Users
        if (session.data.role?.canEditOtherUsers) return 'edit';
        // Users can also always edit themselves
        else if (session.itemId === item.id) return 'edit';
        // Otherwise, default all fields to read mode
        return 'read';
      },
    },
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password({
      isRequired: true,
      access: {
        update: ({ session, item }) =>
          permissions.canManageUsers({ session }) || session.itemId === item.id,
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
    role: relationship({
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
    }),
  },
});
