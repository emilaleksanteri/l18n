<script lang="ts">
  import "../app.css"
  import { page } from "$app/stores"
  import { enhance } from "$app/forms";
</script>

<div>
  <p>current language {$page.data.lang}</p>
  {#each $page.data.languageOptions as lang}
  <form method="POST" action="?/setNewLang" use:enhance>
    <button type="submit" name="lang" value={lang}>
      <option value={lang}>
        {lang}
      </option>
    </button>
  </form>
  {/each}
</div>

<slot />
