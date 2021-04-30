import { ListAccessArgs } from './types';

/*
  The basic level of access to the system is being signed in as a valid user. This gives you access
  to the Admin UI, access to your own User and other schema items, and read access to roles.
*/
export const isSignedIn = ({ session }: ListAccessArgs) => {
  return !!session;
};

/*
  Permissions are shorthand functions for checking that the current user's role has the specified
  permission boolean set to true
*/
export const permissions = {
  canManageUsers: ({ session }: ListAccessArgs) =>
    !!session?.data.role?.canManageUsers,
  canManageRoles: ({ session }: ListAccessArgs) =>
    !!session?.data.role?.canManageRoles,
};

/*
  Rules are logical functions that can be used for list access, and may return a boolean (meaning
  all or no items are available) or a set of filters that limit the available items
*/
export const rules = {
  canUpdateUsers: ({ session }: ListAccessArgs) => {
    if (!session) {
      // No session? No Users.
      return false;
    } else if (session.data.role?.canEditOtherUsers) {
      // Can update everyone
      return true;
    } else {
      // Can update yourself
      return { id: session.itemId };
    }
  },
};
