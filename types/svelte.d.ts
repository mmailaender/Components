/// <reference types="svelte" />

import { SvelteComposition as SvelteCompositionOriginal} from '@bitdev/svelte.dev-services.preview.svelte-mounter';

export {};

declare global {
    type SvelteComposition = SvelteCompositionOriginal;
}
