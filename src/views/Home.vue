<script setup lang="ts">
import Header from '../components/elements/Header.vue';
import About from '../components/sections/About.vue';
import Form from '../components/sections/Form.vue';
import Footer from '../components/elements/Footer.vue';
</script>

<template>
	<Header />
	<div class="bg-background">
		<div
			class="relative before:absolute before:h-80 before:w-64 before:bg-primary before:top-32 before:-left-20 before:rounded-full before:blur-[10rem] after:absolute after:h-80 after:w-64 after:bg-primary after:bottom-0 after:right-0 after:rounded-full after:blur-[10rem] lg:before:top-0"
		>
			<About />
		</div>
		<Form />
		<Footer />
	</div>
</template>
