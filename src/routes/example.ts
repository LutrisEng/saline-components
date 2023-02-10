export default `<script lang="ts">
    // Import a theme in your layout
    import '@lutris/saline-components/themes/lutris';
    // Import components on your pages
    import { Container, Heading, ProjectBadge } from '@lutris/saline-components';
</script>

<Container>
    <Heading level={1}>My Page</Heading>
    <ProjectBadge code="FBOX" name="Fleetbox" />
</Container>`;
