<script lang="ts">
	import { Link, Heading, CodeBlock, types } from '$lib';
	const levels: [1, 2, 3, 4, 5, 6] = [1, 2, 3, 4, 5, 6];
</script>

<p><Link href="/" color={types.Color.Brand}>Back to Saline Components</Link></p>

<Heading level={1} anchor="heading">Heading</Heading>

<CodeBlock code={`<Heading level={1}>Heading text</Heading>`} lang="svelte" />

{#each levels as level}
	<Heading {level}>Heading level {level}</Heading>
{/each}

<CodeBlock code={`<Heading level={1} anchor="anchor-hash">Heading text</Heading>`} lang="svelte" />

{#each levels as level}
	<Heading {level} anchor="heading-level-{level}">Heading level {level}</Heading>
{/each}
