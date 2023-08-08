<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData
</script>

<h1 class="w-full text-center text-3xl font-bold text-pink-400">
  {data.content.Header}
</h1>
<div>
{#each data.content.Content as section}
<article>
  <h2>
    {section.Header}
  </h2>
  <p>
    {section.Paragraph}
  </p>
</article>
{/each}
</div>
