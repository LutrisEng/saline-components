<script lang="ts">
	export let level: 1 | 2 | 3 | 4 | 5 | 6;
	export let anchor: string | true | undefined = undefined;
	$: useAnchor = anchor != null;
	// TODO: see if we can implement this behavior without DOM for SSR and prerender
	let el: HTMLHeadingElement | undefined;
	$: anchorHash =
		anchor === true
			? el?.innerText
					?.replace(/^# /, '')
					?.replace(/\s+/g, '-')
					?.replace(/[^\w-]/g, '')
					?.toLowerCase()
			: anchor;
</script>

{#if level === 1}
	<h1 class="sc-heading" class:sc-heading-with-anchor={useAnchor} id={anchorHash} bind:this={el}>
		{#if useAnchor}
			<a class="sc-heading-anchor" href={`#${anchorHash}`}>#</a>
		{/if}
		<slot />
	</h1>
{:else if level === 2}
	<h2 class="sc-heading" class:sc-heading-with-anchor={useAnchor} id={anchorHash} bind:this={el}>
		{#if useAnchor}
			<a class="sc-heading-anchor" href={`#${anchorHash}`}>#</a>
		{/if}
		<slot />
	</h2>
{:else if level === 3}
	<h3 class="sc-heading" class:sc-heading-with-anchor={useAnchor} id={anchorHash} bind:this={el}>
		{#if useAnchor}
			<a class="sc-heading-anchor" href={`#${anchorHash}`}>#</a>
		{/if}
		<slot />
	</h3>
{:else if level === 4}
	<h4 class="sc-heading" class:sc-heading-with-anchor={useAnchor} id={anchorHash} bind:this={el}>
		{#if useAnchor}
			<a class="sc-heading-anchor" href={`#${anchorHash}`}>#</a>
		{/if}
		<slot />
	</h4>
{:else if level === 5}
	<h5 class="sc-heading" class:sc-heading-with-anchor={useAnchor} id={anchorHash} bind:this={el}>
		{#if useAnchor}
			<a class="sc-heading-anchor" href={`#${anchorHash}`}>#</a>
		{/if}
		<slot />
	</h5>
{:else if level === 6}
	<h6 class="sc-heading" class:sc-heading-with-anchor={useAnchor} id={anchorHash} bind:this={el}>
		{#if useAnchor}
			<a class="sc-heading-anchor" href={`#${anchorHash}`}>#</a>
		{/if}
		<slot />
	</h6>
{/if}

<style>
	.sc-heading {
		font-family: var(--sc-heading-font-family);
	}

	.sc-heading-anchor {
		text-decoration: none;
		color: var(--sc-colors-secondary);
		display: inline-block;
		text-align: right;
		width: 1em;
		font-size: 80%;
	}

	.sc-heading-with-anchor {
		position: relative;
		left: -1em;
	}
</style>
