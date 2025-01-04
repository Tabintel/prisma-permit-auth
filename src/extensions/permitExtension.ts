import { Prisma } from '@prisma/client'
import { permit } from '../lib/permit'

export const permitExtension = Prisma.defineExtension({
  name: 'permitAuthorization',
  query: {
    resource: {
      async create({ args, query }) {
        // Direct resource check without additional formatting
        const allowed = await permit.check(args.data.ownerId, 'create', args.data.category);
        if (!allowed) throw new Error('Unauthorized');
        return query(args);
      }
    }
  }
})