<script setup lang="ts">
defineProps<{ label: string; id: string; type?: string; minValue?: string; maxValue?: string }>();
</script>

<template>
	<div class="mb-6">
		<label :for="id" class="block mb-2 text-sm font-medium text-content">{{ label }}</label>
		<input
			:type="type || 'text'"
			:min="minValue"
			:max="maxValue"
			id="base-input"
			class="bg-background-input border border-gray-300 text-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
			@input="(e: Event) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
		/>
	</div>
</template>
