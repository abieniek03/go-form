<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
	<header class="relative h-screen w-full flex justify-center items-center z-0">
		<div
			class="h-full w-full bg-center bg-cover bg-no-repeat bg-[url('https://go-form.vercel.app/src/assets/header-mobile.jpg')] bg-gray-700 bg-blend-multiply before:absolute before:h-screen before:w-full before:bg-gradient-to-t before:from-background before:to-transparent lg:bg-[url('https://go-form.vercel.app/src/assets/header-desktop.jpg')]"
		></div>
		<div class="absolute z-10 py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-16">
			<h1 class="mb-2 text-white text-4xl font-bold tracking-tight leading-none md:text-5xl lg:mb-4 lg:text-6xl">
				Zrób formę marzeń!
			</h1>
			<p class="mb-8 text-lg text-gray-200 lg:text-xl sm:px-16 lg:px-48">
				Wypełnij ankietę i otrzymaj plan dietetyczny i treningowy. Śledź swoje postępy na naszej platformie.
			</p>
			<Button type="link" label="Zacznij już teraz!" path="#form" />
		</div>
	</header>
</template>
