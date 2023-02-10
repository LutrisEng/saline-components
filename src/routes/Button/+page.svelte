<script lang="ts">
	import { Link, Heading, Button, CodeBlock, types } from '$lib';
</script>

<p><Link href="/" color={types.Color.Brand}>Back to Saline Components</Link></p>

<Heading level={1} anchor="button">Button</Heading>

<CodeBlock
	code={`<Button href="/otherpage" color={types.Color.Primary}>Link Button Text</Button>`}
	lang="svelte"
/>
<CodeBlock code={`<Button color={types.Color.Primary}>Button Text</Button>`} lang="svelte" />

{#each Object.values(types.Color) as color}
	<Heading level={3} anchor="button-{color}">{color}</Heading>
	<p><Button {color}>Hello, button!</Button></p>
	<p><Button href="#" {color}>Hello, link button!</Button></p>
{/each}
