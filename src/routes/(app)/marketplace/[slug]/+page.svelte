
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: ({ listing } = data);
</script>

<div class="bg-gray-900 min-h-screen py-8">
  <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 text-center">
    {listing.title}
  </h1>

  <div class="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6">
    <div class="mb-4">
      <p class="text-white text-xl">Budget: {listing.budget}</p>
      <p class="text-gray-300">Description: {listing.description}</p>
      <p class="text-gray-300">Start Date: {listing.startDate}</p>
      <p class="text-gray-300">End Date: {listing.endDate}</p>
      <p class="text-gray-300">Ready to Hire: {listing.readyToHire}</p>
      <p class="text-gray-300">Job Type: {listing.jobType}</p>
    </div>
  </div>

  <form action="?/createBid" method="post" class="max-w-3xl mx-auto mt-4">
    <div class="bg-gray-800 rounded-lg p-6">
      <label for="bidAmount" class="text-white">Bid Amount</label>
      <input
        type="number"
        id="bidAmount"
        name="bidAmount"
        min="0"
        max="1000000"
        step="10"
        value="0"
        class="input"
      />

      <label for="bidMessage" class="text-white mt-4">Bid Description</label>
      <input
        type="text"
        id="bidMessage"
        name="bidMessage"
        value=""
        class="input"
      />

      <button
        type="submit"
        class="btn btn-blue mt-4"
      >
        Submit Bid
      </button>
    </div>
  </form>
</div>

