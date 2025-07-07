<script setup lang="ts">
defineProps({
	administrator: {
		type: Object,
		require: true
	},
	index: {
		type: Number,
		require: true
	},
	showButtons: {
		type: Boolean,
		require: true
	}
});

const emits = defineEmits(["delete", "control"]);
</script>

<template>
	<div class="bg-white p-4 rounded-lg shadow hover:bg-gray-50 hover:border hover:border-blue-300 mb-3">
		<div class="flex justify-between">
			<span class="text-md font-bold text-gray-900">{{ index }} - {{ administrator.name }}</span>
			<div class="flex justify-center" v-show="showButtons">
				<button class="text-blue-300 hover:text-blue-400 focus:outline-none p-1 border border-gray-300 rounded"
				        @click="emits('control')">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<svg v-if="administrator.isActive" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500"
						     fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
						</svg>
						<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none"
						     viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
						</svg>
					</svg>
				</button>&nbsp;
				<button class="border rounded border-gray-300 p-1" @click="emits('delete')">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24"
					     stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
					</svg>
				</button>
			</div>
		</div>
		<div class="mt-2 mb-2 text-gray-500 flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
			     stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m18 0v-7a2 2 0 00-2-2h-2m-2-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v10m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12"/>
			</svg> &nbsp;:
			<a :href="`mailto:${administrator.email}`" class="text-blue-500 hover:text-blue-600" target="_blank">
				{{ administrator.email }}
			</a>
		</div>
		<div class="mt-2 mb-2 text-gray-500 flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
			     stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
			</svg>
			&nbsp;: {{ administrator.createdAt }}
		</div>
	</div>
</template>
