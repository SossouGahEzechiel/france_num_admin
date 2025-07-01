<template>
	<div class="bg-white rounded-lg shadow-sm p-6 mb-6 border border-dashed border-gray-300">
		<div class="space-y-2">
			<label for="responsibleName" class="block text-md font-medium text-gray-700 mb-3">
				{{ label }}
			</label>
			<input
					type="text"
					v-model="model"
					id="responsibleName"
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
					placeholder="Entrez le nom du responsable"
			>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	model: {
		type: String,
		default: ""
	},
	label: {
		type: String,
		default: ""
	}
});
</script>