export { default as Button } from './Button.svelte';
export { default as CodeBlock } from './CodeBlock.svelte';
export { default as Container } from './Container.svelte';
export { default as Heading } from './Heading.svelte';
export { default as ImagetoolsPicture } from './ImagetoolsPicture.svelte';
export { default as Link } from './Link.svelte';
export { default as LutrisIcon } from './LutrisIcon.svelte';
export { default as LutrisLogo } from './LutrisLogo.svelte';
export { default as ProjectBadge } from './ProjectBadge.svelte';
export { default as VSpacer } from './VSpacer.svelte';

export * as types from './types';

if (globalThis.window) {
	console.log(`------------------------------------------------
This website uses Saline Components by Lutris!
https://github.com/lutriseng/saline-components
https://oss.lutris.engineering/saline-components

Saline Components were made primarily for use
by Lutris, so this message exists as attribution
if they are used elsewhere.
------------------------------------------------`);
}
