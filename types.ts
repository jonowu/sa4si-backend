export type Session = {
  itemId: string;
  listKey: string;
  data: {
    name: string;
    role?: {
      id: string;
      name: string;
      canEditOtherUsers: boolean;
      canManageUsers: boolean;
      canManageRoles: boolean;
    };
  };
};

export type ListAccessArgs = {
  itemId?: string;
  session?: Session;
};
