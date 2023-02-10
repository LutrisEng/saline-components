<div class="sc-container"><slot /></div>

<style>
	.sc-container {
		--sc-container-padding: 1.5rem;
		width: calc(100% - var(--sc-container-padding));
		max-width: 1000px;
		padding-right: calc(var(--sc-container-padding) / 2);
		padding-left: calc(var(--sc-container-padding) / 2);
		margin-right: auto;
		margin-left: auto;
	}
</style>
