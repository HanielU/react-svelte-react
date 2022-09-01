<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { slide } from "svelte/transition";

  export let email = "";

  //one way to pass trigger external functions using props
  // export let onAChange: (value: any) => void;
  // $: onAChange(email);

  let loading = false;
  let toastMsg = "";

  const context = getContext<Writable<string>>("context");

  const sleep = (timeout: number) =>
    new Promise(resolve => setTimeout(() => resolve(true), timeout));

  export async function handleLogin() {
    try {
      loading = true;

      await sleep(1000);

      showToast("Check your email for the login link!", 3000);
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  }

  function showToast(msg: string, timeout = 2000) {
    toastMsg = msg;
    setTimeout(() => (toastMsg = ""), timeout);
  }
</script>

<form class="mx-auto mt-12 mb-10 flex max-w-xs flex-col" on:submit|preventDefault={handleLogin}>
  <h1 class="text-2xl font-bold">React + Svelte</h1>

  <p class="mb-5"><strong>Context:</strong> {$context}</p>

  <input
    class="input input-bordered mb-4 w-full"
    type="email"
    placeholder="Your email"
    bind:value={email}
  />

  <input
    type="submit"
    class="btn rounded-md"
    value={loading ? "Loading" : "Send magic link"}
    disabled={loading}
  />
</form>

{#if !!toastMsg}
  <div class="toast" transition:slide>
    <div class="alert alert-success">
      <div>
        <span>{toastMsg}</span>
      </div>
    </div>
  </div>
{/if}
