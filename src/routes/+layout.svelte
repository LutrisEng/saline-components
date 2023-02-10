<script lang="ts">
	import '$lib/themes/lutris';
	import { Container, LoadingIndicator } from '$lib';
</script>

<LoadingIndicator />
<Container>
	<slot />
</Container>
