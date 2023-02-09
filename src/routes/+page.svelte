<script>
	import LutrisIcon from '$lib/LutrisIcon.svelte';
	import LutrisLogo from '$lib/LutrisLogo.svelte';
	import ProjectBadge from '$lib/ProjectBadge.svelte';
</script>

<h1>Saline Components</h1>
<p>Components used by Lutris</p>

<h2>Lutris Icon</h2>
<p>Here is a Lutris icon in a paragraph: <LutrisIcon /></p>
<h3>Here is a Lutris icon in a header: <LutrisIcon /></h3>

<h2>Lutris Logo</h2>
<LutrisLogo width="150px" />

<h2>Project Badge</h2>
<p><ProjectBadge code="FBOX" name="Fleetbox" /></p>
<p><ProjectBadge code="FLOW" name="Accuflow" /></p>
