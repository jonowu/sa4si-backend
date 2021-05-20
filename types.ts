export type Session = {
  itemId: string;
  listKey: string;
  data: {
    name: string;
    isAdmin: boolean;
  };
};

export type ListAccessArgs = {
  itemId?: string;
  session?: Session;
};
