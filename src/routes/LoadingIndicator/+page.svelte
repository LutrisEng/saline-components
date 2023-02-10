<script lang="ts">
	import { Link, Heading, CodeBlock, types } from '$lib';
</script>

<p><Link href="/" color={types.Color.Brand}>Back to Saline Components</Link></p>

<Heading level={1} anchor="loading-indicator">Loading Indicator</Heading>

<CodeBlock code={`<LoadingIndicator />`} lang="svelte" />

<p>
	Add this component to your layout to show a loading progress bar at the top of the page when
	navigating to a new page.
</p>
