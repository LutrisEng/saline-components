<script lang="ts">
	import { Link, Heading, CodeBlock, types } from '$lib';
</script>

<p><Link href="/" color={types.Color.Brand}>Back to Saline Components</Link></p>

<Heading level={1} anchor="link">Link</Heading>

<CodeBlock
	code={`<Link href="/otherpage" color={types.Color.Primary}>Link Text</Link>`}
	lang="svelte"
/>

{#each Object.values(types.Color) as color}
	<Heading level={3} anchor="link-{color}">{color}</Heading>
	<p><Link href="#" {color}>Hello, link button!</Link></p>
{/each}
