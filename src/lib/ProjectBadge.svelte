<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
	import LutrisIcon from './LutrisIcon.svelte';

	export let code: string;
	export let name: string;

	let infoElement: HTMLSpanElement;
	let tooltipElement: HTMLSpanElement;
	let showTooltipFromHover = false;
	let showTooltipFromFocus = false;
	let tooltipX: number, tooltipY: number;

	function setTooltipLocation(x: number, y: number) {
		const width = 300;
		const height = tooltipElement ? tooltipElement.getBoundingClientRect().height : 0;
		const tryX = x - width / 2;
		if (tryX < 0) {
			tooltipX = 0;
		} else {
			tooltipX = tryX;
		}
		const documentHeight = document.documentElement.scrollHeight;
		if (y + 10 - height < 0) {
			tooltipY = documentHeight - height - 35;
		} else {
			tooltipY = documentHeight - y + 10;
		}
	}

	function mouseOver(event: MouseEvent) {
		showTooltipFromHover = true;
		setTooltipLocation(event.pageX, event.pageY);
	}
	function mouseLeave() {
		showTooltipFromHover = false;
	}
	function mouseMove(event: MouseEvent) {
		setTooltipLocation(event.pageX, event.pageY);
	}
	function focus() {
		showTooltipFromFocus = true;
		const rect = infoElement.getBoundingClientRect();
		tooltipX = rect.left;
		tooltipY = rect.top;
	}
	function blur() {
		showTooltipFromFocus = false;
	}
</script>

<span class="project-badge">
	<LutrisIcon fill="currentColor" class="icon" />
	<a class="code" href="https://lutris.engineering/projects/{code.toLowerCase()}">{code}</a>
	<span
		class="info"
		role="button"
		on:mouseover={mouseOver}
		on:mouseleave={mouseLeave}
		on:mousemove={mouseMove}
		on:focus={focus}
		on:blur={blur}
		tabindex="0"
		bind:this={infoElement}
	>
		<Fa icon={faCircleInfo} />
	</span>

	{#if showTooltipFromFocus || showTooltipFromHover}
		<span
			class="tooltip"
			role="tooltip"
			style="bottom: {tooltipY}px; left: {tooltipX}px;"
			bind:this={tooltipElement}
		>
			<slot name="tooltip">
				<span class="code">{code}</span> is the Lutris project code for <em>{name}</em>, used both
				internally and externally as a shorthand to refer to this project. Click
				<span class="code">{code}</span> in the badge to go to <em>{name}</em>'s project page.
			</slot>
		</span>
	{/if}
</span>

<style>
	.project-badge {
		background-color: #469b91;
		border-radius: 0.375rem;
		color: white;
		padding: 0.35em 0.65em;
		font-size: 12px;
		font-weight: 700;
	}

	.code {
		font-family: 'Overpass Mono', monospace;
		text-decoration: none;
		color: inherit;
	}

	@supports (font-variation-settings: normal) {
		.project-badge {
			font-variation-settings: 'wght' 600;
		}

		.code {
			font-family: 'Overpass MonoVariable', 'Overpass Mono', monospace;
		}
	}

	.project-badge :global(.icon) {
		top: -0.1em;
	}

	.info {
		opacity: 0.75;
		margin-left: 0.3em;
		font-size: 0.8em;
		position: relative;
		top: -0.1em;
	}

	.tooltip {
		position: absolute;
		background-color: white;
		color: black;
		font-weight: normal;
		width: 300px;
		border: 1px dashed black;
		padding: 4px;
	}
</style>
