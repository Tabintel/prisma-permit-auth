import { Prisma } from '@prisma/client'
import { permit } from '../lib/permit'

export const permitExtension = Prisma.defineExtension({
  name: 'permitAuthorization',
  query: {
    resource: {
      async create({ args, query }) {
        try {
          const allowed = await permit.check(
            args.data.ownerId, 
            'create', 
            args.data.category
          );
          
          if (!allowed) {
            throw new Error('Unauthorized');
          }
          
          return query(args);
        } catch (error) {
          console.error('Permit check error:', error);
          throw new Error('Unauthorized');
        }
      }
    }
  }
})
