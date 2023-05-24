<template>
    <nuxt-link
        v-bind="props"
        class="[&>svg]:tw-h-6 [&>svg]:tw-w-6 lg:[&>svg]:tw-h-7 lg:[&>svg]:tw-w-7 xl:[&>svg]:tw-h-8 xl:[&>svg]:tw-w-8 2xl:[&>svg]:tw-h-10 2xl:[&>svg]:tw-w-10 tw-drop-shadow-md hover:tw-drop-shadow-none [&>svg]:tw-fill-yellow-500 [&>svg]:hover:tw-fill-yellow-500/75 [&>svg]:tw-duration-500"
    >
        <component :is="icon" />
    </nuxt-link>
</template>

<script lang="ts" setup>
import { SocialIcon } from 'types/socialicons';

const props = defineProps<{
    type: SocialIcon;
}>();

const icon = defineAsyncComponent(() => import(`~/components/icon/social/${props.type}.vue`));
</script>
