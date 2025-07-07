<script setup lang="ts">
defineProps({
	items: {
		type: Number,
		default: 1
	},
	rows: {
		type: Number,
		default: 2
	}
});
</script>

<template>
	<div class="bg-white p-4 rounded-lg shadow mb-4" v-for="item in items" :key="item">
		<div class="flex justify-between">
			<div class="skeleton skeleton-text w-36"></div>
			<div class="flex justify-center space-x-2">
				<div class="skeleton skeleton-button"></div>
				<div class="skeleton skeleton-button"></div>
			</div>
		</div>
		<div class="mt-2 mb-2 flex items-center" v-for="row in rows" :key="row">
			<div class="skeleton skeleton-icon"></div>
			<div class="ml-2 skeleton skeleton-text w-4"></div>
			<div class="ml-2 skeleton skeleton-text w-44"></div>
		</div>
	</div>
</template>

<style scoped>
@keyframes shimmer {
	0% {
		background-position: -200px 0;
	}
	100% {
		background-position: calc(200px + 100%) 0;
	}
}

.skeleton {
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200px 100%;
	animation: shimmer 1.5s infinite;
}

.skeleton-text {
	height: 1em;
	border-radius: 4px;
}

.skeleton-button {
	height: 2rem;
	width: 2rem;
	border-radius: 4px;
}

.skeleton-icon {
	height: 1.25rem;
	width: 1.25rem;
	border-radius: 2px;
}
</style>