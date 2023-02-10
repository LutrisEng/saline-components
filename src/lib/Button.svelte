<script lang="ts">
	import { Color } from './types';

	export let href: string | undefined = undefined;
	export let color: Color;
</script>

{#if href}
	<a
		{href}
		class="sc-button"
		class:sc-button-brand={color === Color.Brand}
		class:sc-button-primary={color === Color.Primary}
		class:sc-button-secondary={color === Color.Secondary}
		class:sc-button-light={color === Color.Light}
		class:sc-button-dark={color === Color.Dark}
		class:sc-button-foreground={color === Color.Foreground}
		class:sc-button-background={color === Color.Background}><slot /></a
	>
{:else}
	<button
		class="sc-button"
		class:sc-button-brand={color === Color.Brand}
		class:sc-button-primary={color === Color.Primary}
		class:sc-button-secondary={color === Color.Secondary}
		class:sc-button-light={color === Color.Light}
		class:sc-button-dark={color === Color.Dark}
		class:sc-button-foreground={color === Color.Foreground}
		class:sc-button-background={color === Color.Background}><slot /></button
	>
{/if}

<style>
	button {
		border: none;
		margin: 0;
		padding: 0;
		width: auto;
		overflow: visible;

		background: transparent;

		/* inherit font & color from ancestor */
		color: inherit;
		font: inherit;

		/* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
		line-height: normal;

		/* Corrects font smoothing for webkit */
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;

		/* Corrects inability to style clickable `input` types in iOS */
		appearance: none;
	}

	a {
		cursor: default;
		color: inherit;
		font: inherit;
		text-decoration: none;
	}

	.sc-button {
		display: inline-block;
		font-family: var(--sc-ui-font-family);
		padding: 0.25em 0.5em;
		border-radius: 1px;
		--sc-button-box-shadow-color: var(--sc-colors-foreground, black);
		box-shadow: 2.5px 2.5px 0 0 var(--sc-button-box-shadow-color);
		border: 1px dashed var(--sc-colors-foreground);
	}

	.sc-button:hover {
		translate: 1px 1px;
		box-shadow: 1.5px 1.5px 0 0 var(--sc-button-box-shadow-color);
	}

	.sc-button:active {
		translate: 2px 2px;
		/* box-shadow: none; */
		box-shadow: 0.5px 0.5px 0 0 var(--sc-button-box-shadow-color);
	}

	.sc-button-brand {
		background-color: var(--sc-colors-brand);
		color: var(--sc-colors-brand-contrast);
	}

	.sc-button-primary {
		background-color: var(--sc-colors-primary);
		color: var(--sc-colors-primary-contrast);
	}

	.sc-button-secondary {
		background-color: var(--sc-colors-secondary);
		color: var(--sc-colors-secondary-contrast);
	}

	.sc-button-light {
		background-color: var(--sc-colors-light);
		color: var(--sc-colors-dark);
		border-color: var(--sc-colors-dark);
	}

	.sc-button-dark {
		background-color: var(--sc-colors-dark);
		color: var(--sc-colors-light);
		border-color: var(--sc-colors-light);
		--sc-button-box-shadow-color: var(--sc-colors-primary);
	}

	@media (prefers-color-scheme: dark) {
		.sc-button-light {
			--sc-button-box-shadow-color: var(--sc-colors-primary);
		}

		.sc-button-dark {
			--sc-button-box-shadow-color: var(--sc-colors-light);
		}
	}

	.sc-button-foreground {
		background-color: var(--sc-colors-foreground);
		color: var(--sc-colors-background);
		border-color: var(--sc-colors-background);
		--sc-button-box-shadow-color: var(--sc-colors-primary);
	}

	.sc-button-background {
		background-color: var(--sc-colors-background);
		color: var(--sc-colors-foreground);
	}

	@media (prefers-color-scheme: dark) {
		.sc-button-foreground {
			--sc-button-box-shadow-color: var(--sc-colors-primary);
		}

		.sc-button-background {
			--sc-button-box-shadow-color: var(--sc-colors-foreground);
		}
	}
</style>
