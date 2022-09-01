<script lang="ts">
  import { createElement, StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import Rxt from "./Rxt";

  let num = 0;
  function createReactRoot(node: HTMLDivElement) {
    const root = createRoot(node);
    root.render(createElement(StrictMode, { children: createElement(Rxt, null, null) }));
  }
</script>

<div class="border border-solid mb-5 p-8" use:createReactRoot />

<div class="border border-solid p-8">
  <button on:click={() => num++} class="btn">Hello Svelte, {num}</button>
</div>
