<template>
	<div class="bg-white p-4 rounded-lg shadow hover:bg-gray-50 hover:border hover:border-blue-300"
	     v-for="(message, index) in messages" :key="message.id" @click="displayModal(message)">
		<div class="flex justify-between">
			<span class="text-md font-bold text-gray-900">{{ ++index }}- {{ message.fullName }}</span>
			<button class="text-blue-300 hover:text-blue-400 focus:outline-none p-1 border border-gray-300 rounded"
			        @click="displayModal(message)" v-show="showActionColumn">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd"
					      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					      clip-rule="evenodd"/>
				</svg>
			</button>
		</div>
		<div class="mt-2 mb-2 text-md text-gray-500 flex items-center">
			<a :href="`mailto:${message.email}`" class="text-blue-500 hover:text-blue-600"
			   target="_blank">{{ message.email }}</a> &nbsp;|
			<a :href="`tel:${message.phone}`" class="text-blue-500 hover:text-blue-600" target="_blank">{{
					message.phone
				}}</a> &nbsp;
		</div>
		<div class="mt-2text mb-2-md text-gray-500 flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m18 0v-7a2 2 0 00-2-2h-2m-2-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v10m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12"/>
			</svg> &nbsp;:
			{{ message.business }}
		</div>

		<div class="mt-2text mb-2-md text-gray-500 flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
			</svg>
			&nbsp;:
			{{ message.createdAt }}
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	messages: {
		type: Array,
		default: [],
		required: true
	},
	displayModal: {
		type: Function,
		required: false,
		default: () => {}
	},
	showActionColumn: {
		type: Boolean,
		default: true
	}
})
</script>
