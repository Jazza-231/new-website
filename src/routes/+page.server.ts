import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
   const today = Date.now();
   const birthday = Date.parse("2006-04-07");
   const age = new Date(today - birthday).getFullYear() - 1970;

   return { age };
};
