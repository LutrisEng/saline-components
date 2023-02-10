<script lang="ts">
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-tomorrow.css';
	import 'prism-svelte';

	export let code: string;
	export let lang: string;
</script>

<pre><code>{@html Prism.highlight(code, Prism.languages[lang], lang)}</code></pre>

<style>
	pre {
		overflow-x: auto;
		font-family: var(--sc-mono-font-family);
	}
</style>
