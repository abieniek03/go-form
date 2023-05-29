<script setup lang="ts">
defineProps<{ type?: string; label: string; path?: string; styles?: string }>();
const defaultStyles: string =
	' bg-primary hover:bg-primary-hover text-white px-5 py-3 font-medium text-center rounded-lg';
</script>

<template>
	<a v-if="type === 'link'" :href="path" :class="styles + defaultStyles || defaultStyles">{{ label }}</a>
	<button v-else :class="styles + defaultStyles || defaultStyles">{{ label }}</button>
</template>
