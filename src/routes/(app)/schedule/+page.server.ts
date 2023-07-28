import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request }) => {

const upcomingJobs = await prisma.job.findMany({
    where: {
      jobStatus: {
        equals: 'pending'
      }
    }, 
    include: {
      user: true,
      listing: true,
    }
  });

  const completedJobs = await prisma.job.findMany({
  where: {
    jobStatus: {
      equals: 'completed'
    }
  },

    include: {
      user: true,
      listing: true,
    }
  });

    return {
      upcomingJobs: upcomingJobs,
      completedJobs: completedJobs,
    }
}



