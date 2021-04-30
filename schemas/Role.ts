import { list } from '@keystone-next/keystone/schema';
import { checkbox, relationship, text } from '@keystone-next/fields';

import { isSignedIn, permissions } from '../access';

export const Role = list({
  access: {
    create: permissions.canManageRoles,
    read: isSignedIn,
    update: permissions.canManageRoles,
    delete: permissions.canManageRoles,
  },
  ui: {
    hideCreate: (args) => !permissions.canManageRoles(args),
    hideDelete: (args) => !permissions.canManageRoles(args),
    listView: {
      initialColumns: ['name', 'assignedTo'],
    },
    itemView: {
      defaultFieldMode: (args) =>
        permissions.canManageRoles(args) ? 'edit' : 'read',
    },
  },
  fields: {
    /* The name of the role */
    name: text({ isRequired: true }),
    /* Edit Other Users means:
         - edit other users in the database (users can always edit their own item) */
    canEditOtherUsers: checkbox({ defaultValue: false }),
    /* Manage Users means:
         - change passwords (users can always change their own password)
         - assign roles to themselves and other users */
    canManageUsers: checkbox({ defaultValue: false }),
    /* Manage Roles means:
         - create, edit, and delete roles */
    canManageRoles: checkbox({ defaultValue: false }),
    /* This list of Users assigned to this role */
    assignedTo: relationship({
      ref: 'User.role',
      many: true,
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
  },
});
