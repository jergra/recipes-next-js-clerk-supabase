Jan 23, 2023

C:/dev/recipes-nextjs-clerk-supabase

derived from live tutorial:
    Lets build a Recipe App from scratch - Next.js Clerk Supabase
    https://www.youtube.com/watch?v=en5HXArBwkM&t=5658s&ab_channel=JamesPerkins
    https://www.youtube.com/watch?v=WRsT874OHQU&ab_channel=JamesPerkins

    by James Perkins 

recipes collection website built with nextjs, clerk, supabase, tailwind, with help from chatgpt

start:
    npm run dev

deployed:
	https://recipes-next-js-clerk-supabase.vercel.app/

update:
    git add .
    git commit -m 'message'
    git push


after creating a project at supabase, copy the JWT secret key
go to clerk.dev and set up authentication
under 'JWT Templates' at clerk.dev, click 'New template', 
click 'supabase', paste in the supabase JWT secret key


.env.local looks like this:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_KEY=

