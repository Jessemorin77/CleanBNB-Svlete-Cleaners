
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: ({ messages } = data);
</script>

<div class="bg-gray-900 min-h-screen py-8">
  <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 text-center">
    Chat Room
  </h1>

  <div class="max-w-3xl mx-auto">
    <div class="bg-gray-800 rounded-lg p-6 mb-4">
      <h2 class="text-white text-xl mb-4">Messages</h2>
      {#each messages as message}
        <div class="border-b border-gray-600 pb-4 mb-4">
          <p class="text-white">Message: {message.content}</p>
          <!-- Display the sender information -->
          <p class="text-gray-300">Sender: {message.sender.email}</p>
          <!-- Display the receiver information -->
          {#if message.receiver}
            <p class="text-gray-300">Receiver: {message.receiver.email}</p>
          {/if}
          <p class="text-gray-300">Time: {message.sentAt}</p>
        </div>
      {/each}
    </div>

    <form action="?/sendMessage" method="POST" class="bg-gray-800 rounded-lg p-6">
      <input
        type="text"
        id="content"
        name="content"
        placeholder="Enter message"
        class="input"
      />
      <button type="submit" class="btn btn-blue mt-4">
        Submit
      </button>
    </form>
  </div>
</div>

