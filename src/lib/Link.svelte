<script lang="ts">
	import { base } from '$app/paths';
	import { Color } from './types';

	let klass = '';
	export { klass as class };
	export let href: string;
	export let color: Color = Color.Primary;
	$: realHref = href.startsWith('/') ? `${base}${href}` : href;
</script>

<a
	class="sc-link {klass}"
	href={realHref}
	class:sc-link-brand={color === Color.Brand}
	class:sc-link-primary={color === Color.Primary}
	class:sc-link-secondary={color === Color.Secondary}
	class:sc-link-light={color === Color.Light}
	class:sc-link-dark={color === Color.Dark}
	class:sc-link-foreground={color === Color.Foreground}
	class:sc-link-background={color === Color.Background}><slot /></a
>

<style>
	.sc-link-brand {
		color: var(--sc-colors-brand);
	}
	.sc-link-primary {
		color: var(--sc-colors-primary);
	}
	.sc-link-secondary {
		color: var(--sc-colors-secondary);
	}
	.sc-link-light {
		color: var(--sc-colors-light);
	}
	.sc-link-dark {
		color: var(--sc-colors-dark);
	}
	.sc-link-foreground {
		color: var(--sc-colors-foreground);
	}
	.sc-link-background {
		color: var(--sc-colors-background);
	}
</style>
