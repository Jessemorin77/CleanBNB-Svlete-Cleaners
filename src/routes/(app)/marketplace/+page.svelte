
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: ({ listings } = data);
</script>

<div class="bg-gray-900 min-h-screen py-8">
  <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 text-center">
    Marketplace
  </h1>

  <div class="max-w-4xl mx-auto">
    {#each listings as listing}
      <a href="/marketplace/{listing.id}" class="block mb-4 bg-gray-800 rounded-lg p-6">
        <div class="mb-4">
          <img
            src="/path/to/your-image.jpg"
            alt="Listing Image"
            class="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div class="text-white">
          <p class="text-xl font-semibold">Title: {listing.title}</p>
          <p class="text-gray-300">Budget: {listing.budget}</p>
          <p class="text-gray-300">Description: {listing.description}</p>
          <p class="text-gray-300">Start Date: {listing.startDate}</p>
          <p class="text-gray-300">End Date: {listing.endDate}</p>
          <p class="text-gray-300">Ready to Hire: {listing.readyToHire}</p>
          <p class="text-gray-300">Job Type: {listing.jobType}</p>
        </div>
      </a>
    {/each}
  </div>
</div>

