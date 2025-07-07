<script setup lang="ts">
defineProps({
	isDataLoading: {
		type: Boolean,
		default: true
	},
	showActionColumn: {
		type: Boolean,
		default: false
	},
	items: {
		type: Number,
		default: 3
	}
});
</script>

<template>
	<tr class="hover:bg-gray-50" v-show="isDataLoading" v-for="item in items" :key="item++">
		<td class="px-6 py-4 whitespace-nowrap">
			<div class="skeleton skeleton-text w-8"></div> <!-- Placeholder pour index -->
		</td>
		<td class="px-6 py-4 whitespace-nowrap">
			<div class="skeleton skeleton-text w-32"></div> <!-- Placeholder pour fullName -->
		</td>
		<td class="px-6 py-4 whitespace-nowrap">
			<div class="skeleton skeleton-text w-48 mb-1"></div> <!-- Placeholder pour email -->
			<div class="skeleton skeleton-text w-40"></div> <!-- Placeholder pour phone -->
		</td>
		<td class="px-6 py-4 whitespace-nowrap">
			<div class="skeleton skeleton-text w-24"></div> <!-- Placeholder pour business -->
		</td>
		<td class="px-6 py-4 whitespace-nowrap">
			<div class="skeleton skeleton-text w-28"></div> <!-- Placeholder pour createdAt -->
		</td>
		<td class="px-6 py-4 whitespace-nowrap" v-show="showActionColumn">
			<div class="skeleton skeleton-icon"></div> <!-- Placeholder pour le bouton/icône -->
		</td>
	</tr>
</template>
