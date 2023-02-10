<script lang="ts">
	import { Link, Heading, VSpacer, CodeBlock, types } from '$lib';
</script>

<p><Link href="/" color={types.Color.Brand}>Back to Saline Components</Link></p>

<Heading level={1} anchor="vertical-spacer">Vertical Spacer</Heading>

<CodeBlock code={`<VSpacer pixels={10} />`} lang="svelte" />

<p>VSpacers add pixels of vertical space.</p>

<VSpacer pixels={50} />

<p>See? That was 50 pixels of vertical space.</p>
