
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: ({ bids } = data);
</script>

<div class="bg-gray-900 min-h-screen py-8">
  <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 text-center">
    Bids
  </h1>

  <div class="max-w-3xl mx-auto">
    {#each bids as bid}
      <div class="bg-gray-800 rounded-lg p-6 mb-4">
        <p class="text-white">Amount: {bid.bidAmount}</p>
        <p class="text-gray-300">Message: {bid.bidMessage}</p>
        <p class="text-gray-300">Status: {bid.bidStatus}</p>
        <div class="flex justify-end mt-4">
          {#if bid.bidStatus === "pending"}
            <button
              type="button"
              class="btn btn-blue mr-2"
              on:click={() => handleAcceptBid(bid.id)}
            >
              Accept
            </button>
            <button
              type="button"
              class="btn btn-red"
              on:click={() => handleDeclineBid(bid.id)}
            >
              Decline
            </button>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>

