<script lang="ts">
	import { Link, Heading, CodeBlock, types } from '$lib';
</script>

<p><Link href="/" color={types.Color.Brand}>Back to Saline Components</Link></p>

<Heading level={1} anchor="container">Container</Heading>

<CodeBlock code={`<Container>Contents</Container>`} lang="svelte" />

<p>Containers restrict contents' width. This page's width is restricted by a container.</p>
