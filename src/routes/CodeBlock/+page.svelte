<script lang="ts">
	import { Link, Heading, CodeBlock, types } from '$lib';
	import 'prismjs/components/prism-typescript';
</script>

<p><Link href="/" color={types.Color.Brand}>Back to Saline Components</Link></p>

<Heading level={1} anchor="code-block">Code Block</Heading>

<CodeBlock code={`<CodeBlock code="const a = 1;" lang="javascript" />`} lang="svelte" />

<p>
	Highlights code with Prism.js. Before using any languages other than <code>markup</code>,
	<code>css</code>, <code>clike</code>, <code>javascript</code>, or <code>svelte</code>, import
	them:
</p>
<CodeBlock code={`import 'prismjs/components/prism-python';`} lang="typescript" />
