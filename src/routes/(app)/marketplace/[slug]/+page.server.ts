import type { PageServerLoad,Actions } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";
import { request } from "http";

export const load: PageServerLoad = async ({ params }) => {
    const listingId = params.slug;
    const listing = await prisma.listing.findUnique({
        where: { id: listingId },
        include: { property: true },
    });
    return {
        listing: listing 
    };
}

export const actions: Actions = {
    createBid: async ({ params, request, locals }) => {
        const formData = Object.fromEntries(await request.formData());
        const userId = locals.user.id
        const {
            bidAmount,
            bidMessage,
        } = formData;

      

        const listingId = params.slug;
        const listing = await prisma.listing.findUnique({
            where: { id: listingId },
            include: { property: true },
        });

        if (!listing) {
            return fail(403, { error: { message: "listing not found" } });
        }

        const bid = await prisma.bid.create({
           data: {
                userId: userId,
                bidAmount: Number(bidAmount),
                bidMessage: String(bidMessage),
                listingId: String(listingId),
                bidStatus: "pending",
           } 
        });
        return {
            status: 201,
            body: bid,
        };
    }
}