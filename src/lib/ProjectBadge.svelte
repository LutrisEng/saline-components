<script lang="ts">
	import '@fontsource/overpass-mono';
	import '@fontsource/overpass-mono/variable.css';
	import Fa from 'svelte-fa';
	import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
	import { createPopper, type Instance as PopperInstance } from '@popperjs/core/lib/popper-lite';
	import flip from '@popperjs/core/lib/modifiers/flip';
	import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
	import offset from '@popperjs/core/lib/modifiers/offset';
	import LutrisIcon from './LutrisIcon.svelte';
	import { onMount, onDestroy } from 'svelte';

	export let code: string;
	export let name: string;
	export let urlBase = 'https://lutris.engineering';

	let infoElement: HTMLSpanElement;
	let tooltipElement: HTMLSpanElement;
	let showTooltipFromHover = false;
	let showTooltipFromFocus = false;

	async function show() {
		await popper?.setOptions((options) => ({
			...options,
			modifiers: [...(options.modifiers ?? []), { name: 'eventListeners', enabled: true }]
		}));
	}

	async function hide() {
		await popper?.setOptions((options) => ({
			...options,
			modifiers: [...(options.modifiers ?? []), { name: 'eventListeners', enabled: false }]
		}));
	}

	function mouseOver() {
		showTooltipFromHover = true;
		show();
	}
	function mouseLeave() {
		showTooltipFromHover = false;
		hide();
	}
	function focus() {
		showTooltipFromFocus = true;
		show();
	}
	function blur() {
		showTooltipFromFocus = false;
		hide();
	}

	let popper: PopperInstance | undefined;

	onMount(() => {
		popper = createPopper(infoElement, tooltipElement, {
			modifiers: [
				flip,
				preventOverflow,
				{
					...offset,
					options: {
						offset: [0, 10]
					}
				}
			]
		});
	});

	onDestroy(() => {
		popper?.destroy();
	});
</script>

<span class="sc-project-badge">
	<LutrisIcon fill="currentColor" class="sc-project-badge-icon" />
	<a class="sc-project-badge-code" href="{urlBase}/projects/{code.toLowerCase()}">{code}</a>
	<span
		class="sc-project-badge-info"
		class:sc-project-badge-info-active={showTooltipFromHover || showTooltipFromFocus}
		role="button"
		on:mouseover={mouseOver}
		on:mouseleave={mouseLeave}
		on:focus={focus}
		on:blur={blur}
		tabindex="0"
		bind:this={infoElement}
	>
		<Fa icon={faCircleInfo} />
	</span>
</span>

<span
	class="sc-project-badge-tooltip"
	class:sc-project-badge-tooltip-show={showTooltipFromHover || showTooltipFromFocus}
	role="tooltip"
	bind:this={tooltipElement}
>
	<slot name="tooltip">
		<span class="sc-project-badge-code">{code}</span> is the Lutris project code for
		<em>{name}</em>, used both internally and externally as a shorthand to refer to this project.
		Click
		<span class="sc-project-badge-code">{code}</span> in the badge to go to <em>{name}</em>'s
		project page.
	</slot>
</span>

<style>
	.sc-project-badge {
		cursor: default;
		background-color: var(--sc-colors-brand, #469b91);
		border-radius: 0.375rem;
		color: var(--sc-colors-brand-contrast, white);
		padding: 0.35em 0.65em;
		font-size: 12px;
	}

	.sc-project-badge a {
		cursor: pointer;
		color: inherit;
		text-decoration: none;
	}

	.sc-project-badge-code {
		font-family: 'Overpass Mono', monospace;
		font-weight: 600;
	}

	@supports (font-variation-settings: normal) {
		.sc-project-badge-code {
			font-family: 'Overpass MonoVariable', 'Overpass Mono', monospace;
			font-variation-settings: 'wght' 600;
		}
	}

	.sc-project-badge :global(.sc-project-badge-icon) {
		top: -0.1em;
	}

	.sc-project-badge-info {
		cursor: pointer;
		opacity: 0.75;
		margin-left: 0.3em;
		font-size: 0.8em;
		position: relative;
		top: -0.1em;
	}

	.sc-project-badge-info-active {
		opacity: 1;
	}

	.sc-project-badge-tooltip {
		display: none;
		font-size: 12px;
		font-weight: normal;
		background-color: var(--sc-colors-foreground, white);
		color: var(--sc-colors-background, black);
		max-width: 300px;
		border: 1px dashed var(--sc-colors-background, black);
		padding: 4px;
		z-index: 100;
	}

	.sc-project-badge-tooltip.sc-project-badge-tooltip-show {
		display: block;
	}
</style>
