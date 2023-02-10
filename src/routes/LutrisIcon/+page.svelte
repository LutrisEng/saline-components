<script lang="ts">
	import { Link, Heading, LutrisIcon, CodeBlock, types } from '$lib';
</script>

<p><Link href="/" color={types.Color.Brand}>Back to Saline Components</Link></p>

<Heading level={1} anchor="lutris-icon">Lutris Icon</Heading>

<CodeBlock code={`<LutrisIcon />`} lang="svelte" />

<p>Lutris Icons are text-sized icons of the Lutris otter.</p>
<p>Here is a Lutris icon in a paragraph: <LutrisIcon /></p>
<Heading level={1}>Here is a Lutris icon in a header: <LutrisIcon /></Heading>
