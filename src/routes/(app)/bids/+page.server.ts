import type { Action, Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request, cookies, locals }) => {
  const userId = locals.user?.id; // Get the userId from the locals object

  return {
    bids: await prisma.bid.findMany(),
  };
};
