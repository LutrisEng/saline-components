<script lang="ts">
	import { Link, Heading, ProjectBadge, CodeBlock, types } from '$lib';
</script>

<p><Link href="/" color={types.Color.Brand}>Back to Saline Components</Link></p>

<Heading level={1} anchor="project-badge">Project Badge</Heading>

<CodeBlock code={`<ProjectBadge code="FBOX" name="Fleetbox" />`} lang="svelte" />

<p>
	Project badges are usable without a theme, so they can be embedded in websites that don't
	otherwise use Saline.
</p>
<p><ProjectBadge code="FBOX" name="Fleetbox" /></p>
<p><ProjectBadge code="FLOW" name="Accuflow" /></p>
