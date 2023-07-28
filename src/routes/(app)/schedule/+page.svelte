
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: ({ upcomingJobs, completedJobs } = data);
</script>

<div class="bg-gray-900 min-h-screen py-8">
  <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 text-center">
    Schedule
  </h1>

  <div class="max-w-3xl mx-auto">
    <div class="bg-gray-800 rounded-lg p-6 mb-4">
      <div class="text-white text-xl mb-2">Upcoming Jobs:</div>
      {#each upcomingJobs as upcomingJob}
        <div class="border-b border-gray-600 pb-4 mb-4">
          <p class="text-white">User: {upcomingJob.user?.email}</p>
          <p class="text-white">Listing Title: {upcomingJob.listing?.title}</p>
          <p class="text-gray-300">Job Type: {upcomingJob.listing?.jobType}</p>
          <p class="text-gray-300">Start Date: {upcomingJob.listing.startDate}</p>
          <p class="text-gray-300">End Date: {upcomingJob.listing.endDate}</p>
          <p class="text-gray-300">Price: {upcomingJob.jobAmount}</p>
        </div>
      {/each}
    </div>

    <div class="bg-gray-800 rounded-lg p-6">
      <div class="text-white text-xl mb-2">Completed Jobs:</div>
      {#each completedJobs as completedJob}
        <div class="border-b border-gray-600 pb-4 mb-4">
          <p class="text-white">User: {completedJob.user?.email}</p>
          <p class="text-white">Listing Title: {completedJob.listing?.title}</p>
          <p class="text-gray-300">Job Type: {completedJob.listing?.jobType}</p>
          <p class="text-gray-300">Start Date: {completedJob.listing.startDate}</p>
          <p class="text-gray-300">End Date: {completedJob.listing.endDate}</p>
          <p class="text-gray-300">Price: {completedJob.jobAmount}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

