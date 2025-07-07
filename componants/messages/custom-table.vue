<template>
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="bg-blue-300 text-white">
		<tr>
			<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N°</th>
			<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
			<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
				Contact
			</th>
			<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
				Secteur
			</th>
			<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
				Date
			</th>
			<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
			    v-show="showActionColumn">
				Actions
			</th>
		</tr>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
		<MessageRow v-for="(message, index) in messages" :key="message.id" :index="index" :message="message"
		            @click="displayModal(message)" :show-action-column="showActionColumn"/>
		<tr v-if="messages.length === 0">
			<td :colspan="showActionColumn ? 6 : 5">
				<div class="text-center bg-orange-300 text-white text-md p-5">
					Aucun message à afficher
				</div>
			</td>
		</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import MessageRow from "~/componants/messages/message-row.vue";

defineProps({
	messages: {
		type: Array,
		default: [],
		required: true
	},
	displayModal: {
		type: Function,
		required: false,
		default: () => {
		}
	},
	showActionColumn: {
		type: Boolean,
		default: true
	}
})
</script>