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
	<footer class="text-content text-center p-4 py-8 border-t-2 border-border lg:px-16">
		<div class="flex justify-between items-end opacity-30">
			<a href="#">
				<img src="../../../public/go-form-logo-white.svg" alt="GoForm" />
			</a>
			<p class="flex justify-center items-center">
				Projekt wykonany przez
				<a href="https://www.abwebproject.com/" target="_blank">
					<img src="../../../public/ab-white-logo.svg" alt="AB Web Project" width="30" class="ms-2" />
				</a>
			</p>
			<span>&copy; {{ handleCurrentYear() }}</span>
		</div>
	</footer>
</template>
