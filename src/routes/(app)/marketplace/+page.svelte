
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: ({ listings } = data);
</script>

<div class=" min-h-screen py-8">
  <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4 text-center">
    Marketplace
  </h1>

  <div class="max-w-4xl mx-auto">
    {#each listings as listing}
      <a href="/marketplace/{listing.id}" class="block mb-4 
      rounded-lg p-6">
        <div class="mb-4">
          <img
            src="/path/to/your-image.jpg" 
            alt="Listing Image"
            class="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div class="text-black">
          <p class="text-xl font-semibold">Title: {listing.title}</p>
          <p class="">Budget: {listing.budget}</p>
          <p class="">Description: {listing.description}</p>
          <p class="">Start Date: {listing.startDate}</p>
          <p class="">End Date: {listing.endDate}</p>
          <p class="">Ready to Hire: {listing.readyToHire}</p>
          <p class="">Job Type: {listing.jobType}</p>
        </div>
      </a>
    {/each}
  </div>
</div>

