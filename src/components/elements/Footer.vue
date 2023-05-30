<script setup lang="ts">
import { onMounted } from 'vue';

const handleCurrentYear = () => {
	const date = new Date();
	const year = date.getFullYear();

	return year;
};

onMounted(() => {
	handleCurrentYear();
});
</script>

<template>
	<footer class="text-content text-center p-4 py-8 border-t-2 border-border md:px-16">
		<div class="flex flex-col justify-between items-center opacity-30 md:flex-row">
			<a href="#" class="mb-3 md:mb-0">
				<img src="../../../public/go-form-logo-white.svg" alt="GoForm" />
			</a>

			<div>
				<a class="flex justify-center items-center mb-1 md:mb-0" href="https://www.abwebproject.com/" target="_blank">
					Projekt wykonany przez
					<img src="../../../public/ab-white-logo.svg" alt="AB Web Project" width="30" class="ms-2" />
				</a>
				<p class="mt-1 md:text-right">&copy; {{ handleCurrentYear() }}</p>
			</div>
		</div>
	</footer>
</template>
