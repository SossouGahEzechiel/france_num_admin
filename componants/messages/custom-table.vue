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
		<TablePlaceholder v-if="isDataLoading" :show-action-column="showActionColumn"/>
		<tbody class="bg-white divide-y divide-gray-200" v-else>
		<MessageRow v-for="(message, index) in messages" :key="message.id" :index="index" :message="message"
		            @click="displayModal(message)" :show-action-column="showActionColumn"/>
		<tr v-if="messages.length === 0">
			<td :colspan="showActionColumn ? 6 : 5">
				<EmptyDataCard :has-border="false" :show="messages.length === 0"/>
			</td>
		</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">

import MessageRow from "~/componants/messages/message-row.vue";
import EmptyDataCard from "~/componants/empty-data-card.vue";
import TablePlaceholder from "~/componants/table-placeholder.vue";


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
	},
	isDataLoading: {
		type: Boolean,
		default: true
	}
})
</script>
