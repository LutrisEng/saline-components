<script lang="ts">
	import LutrisTheme from '$lib/themes/LutrisTheme.svelte';
	import { Container, LoadingIndicator } from '$lib';
</script>

<LutrisTheme />
<LoadingIndicator />
<Container>
	<slot />
</Container>
