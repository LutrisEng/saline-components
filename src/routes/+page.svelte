<script>
	import { Heading, Link, CodeBlock, types } from '$lib';
	import example from './example';
</script>

<Heading level={1} anchor="saline-components">Saline Components</Heading>
<p>Components used by Lutris</p>

<ul>
	<li><Link href="/Button" color={types.Color.Brand}>Button</Link></li>
	<li><Link href="/CodeBlock" color={types.Color.Brand}>CodeBlock</Link></li>
	<li><Link href="/Container" color={types.Color.Brand}>Container</Link></li>
	<li><Link href="/Heading" color={types.Color.Brand}>Heading</Link></li>
	<li><Link href="/ImagetoolsPicture" color={types.Color.Brand}>ImagetoolsPicture</Link></li>
	<li><Link href="/Link" color={types.Color.Brand}>Link</Link></li>
	<li><Link href="/LutrisIcon" color={types.Color.Brand}>LutrisIcon</Link></li>
	<li><Link href="/LutrisLogo" color={types.Color.Brand}>LutrisLogo</Link></li>
	<li><Link href="/ProjectBadge" color={types.Color.Brand}>ProjectBadge</Link></li>
	<li><Link href="/VSpacer" color={types.Color.Brand}>VSpacer</Link></li>
</ul>

<CodeBlock code={example} lang="svelte" />
