import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";


export const load: PageServerLoad = async ({ request }) => {
    return {
        listings: await prisma.listing.findMany(),
    };
};
