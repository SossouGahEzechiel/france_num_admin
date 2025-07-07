<script setup lang="ts">
defineProps({
	show: {
		type: Boolean,
		default: false
	},
	hasBorder: {
		type: Boolean,
		default: true
	}
});

function reload() {
	document.location.reload();
}
</script>

<template>
	<div :class="[
			'bg-white rounded-lg shadow-sm p-12 text-center',
			hasBorder ? 'border border-gray-200' : ''
			]" v-show="show">
		<div
				class="mx-auto w-24 h-24 bg-gradient-to-br from-green-50 to-emerald-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
			<svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
				      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
			</svg>
		</div>
		<h3 class="text-xl font-semibold text-gray-900 mb-3">En attente de données</h3>
		<p class="text-gray-600 mb-8 max-w-md mx-auto">Les données sont en cours de chargement ou n'ont pas encore été
			ajoutées au système.</p>
		<div class="flex justify-center">
			<button
					class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
					@click="reload">
				Recharger
			</button>
		</div>
	</div>
</template>
