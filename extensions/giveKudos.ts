import { KeystoneContext } from '@keystone-next/types';
import { Session } from '../types';

async function giveKudos(
  root: any,
  { completionId }: { completionId: string },
  context: KeystoneContext
): Promise<any> {
  // 1. Query the current user see if they are signed in
  const session = context.session as Session;
  if (!session.itemId) {
    throw new Error('You must be logged in to give kudos!');
  }

  // 2. Add the currently signed in user to the kudos
  return await context.lists.Completion.updateOne({
    id: completionId,
    data: {
      kudos: {
        connect: { id: session.itemId },
      },
    },
  });
}

export default giveKudos;
