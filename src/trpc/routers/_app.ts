import { createTRPCRouter } from '../init'
import { authRouter } from '@/modules/auth/server/procedures'
import { categoriesRouter } from '@/modules/categories/server/procedures'
import { checkoutRouter } from '@/modules/checkout/server/procedures'
import { libraryRouter } from '@/modules/library/server/procedures'
import { productsRouter } from '@/modules/products/server/procedures'
import { reviewsRouter } from '@/modules/reviews/server/procedres'
import { tagsRouter } from '@/modules/tags/server/procedures'
import { tenantsRouter } from '@/modules/tenants/server/procedures'
export const appRouter = createTRPCRouter({
  auth: authRouter,
  tags: tagsRouter,
  library: libraryRouter,
  reviews: reviewsRouter,
  products: productsRouter,
  categories: categoriesRouter,
  tenants: tenantsRouter,
  checkout: checkoutRouter,
})
// export type definition of API
export type AppRouter = typeof appRouter
