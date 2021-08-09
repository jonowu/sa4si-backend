import { KeystoneContext } from '@keystone-next/types';
import { Session } from '../types';

async function leaderboard(
  root: any,
  { userId }: { userId: string },
  context: KeystoneContext
): Promise<any> {
  const users = await context.lists.User.findMany({
    query: `id name completionsCount`,
  });

  const leaderboard = [...users]
    .sort((a, b) => b.completionsCount - a.completionsCount)
    .map((user, index) => ({ position: index + 1, user }));

  return leaderboard;
}

export default leaderboard;
