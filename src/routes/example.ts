export default `<script lang="ts">
    // Import a theme in your layout
    import LutrisTheme from '@lutris/saline-components/themes/lutris.svelte';
    // Import components on your pages
    import { Container, Heading, ProjectBadge } from '@lutris/saline-components';
</script>

<LutrisTheme />

<Container>
    <Heading level={1}>My Page</Heading>
    <ProjectBadge code="FBOX" name="Fleetbox" />
</Container>`;
