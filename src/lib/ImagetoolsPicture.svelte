<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	export let picture: Picture;
	export let alt: string;
	let klass = '';
	export { klass as class };
</script>

<picture>
	{#each Object.entries(picture.sources) as [format, images]}
		<source srcset={images.map((i) => `${i.src}`).join(',')} type={`image/${format}`} />
	{/each}
	<img src={picture.fallback.src} {alt} class={klass} />
</picture>
