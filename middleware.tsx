import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
//   publicRoutes: ["/", "/blog", "/blog/(.*)", "/about", "/contact", "/api/(.*)"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};