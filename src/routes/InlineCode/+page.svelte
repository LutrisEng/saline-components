<script lang="ts">
	import { Link, Heading, InlineCode, CodeBlock, types } from '$lib';
</script>

<p><Link href="/" color={types.Color.Brand}>Back to Saline Components</Link></p>

<Heading level={1} anchor="inline-code">Inline Code</Heading>

<CodeBlock code={`<InlineCode>const a = 1;</InlineCode>`} lang="svelte" />

<p>This is basically just an HTML <InlineCode>code</InlineCode> element.</p>
