<template>
	<tr class="hover:bg-gray-50">
		<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
			{{ index + 1 }}
		</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
			{{ message.fullName }}
		</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
			<b>Mail:</b> {{ message.email }} <br>
			<b>Téléphone:</b> {{ message.phone }}
		</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
			{{ message.business }}
		</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
			{{ message.createdAt }}
		</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500" v-show="showActionColumn">
			<button
					class="text-blue-300 hover:text-blue-400 focus:outline-none p-1 border border-gray-300 rounded"
					@click="$emit('show', message)"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
					/>
				</svg>
			</button>
		</td>
	</tr>
</template>

<script setup lang="js">
defineProps({
	message: { type: Object, required: true },
	index: { type: Number, required: true },
	showActionColumn: { type: Boolean, required: true, default: false }
});
</script>
