<template>
	<MainVue>
		<div class="bg-blue-300 rounded-lg shadow-lg p-6 mb-6 flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
			     stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
			</svg>
			<span class="text-white text-lg font-semibold">Messages déjà traités</span>
		</div>

		<div class="overflow-x-auto bg-white rounded-lg shadow hidden md:block">
			<CustomTable :messages="newMessages" :show-action-column="false"/>
		</div>

		<!-- Version mobile (cartes) -->
		<div class="mt-6 md:hidden space-y-4">
			<CardPlaceholder :items="3" v-if="isDataLoading"/>
			<div v-else>
				<EmptyDataCard :show="emptyData"/>
				<MessageCard :display-modal="displayModal" :messages="newMessages" :show-action-column="false"/>
			</div>
		</div>
	</MainVue>
</template>

<script setup lang="ts">
import CardPlaceholder from "~/componants/card-placeholder.vue";
import {useNewMessagesStore} from "~/stores/NewMessagesStore";
import MainVue from "~/componants/main-vue.vue";
import CustomTable from "~/componants/messages/custom-table.vue";
import MessageCard from "~/componants/messages/message-card.vue";
import EmptyDataCard from "~/componants/empty-data-card.vue";

definePageMeta({
	middleware: 'auth',
	title: AppUrls.OLD_MESSAGES.text
});

const newMessagesStore = useNewMessagesStore();
const newMessages = ref([]);
const isDataLoading = ref(true);
const emptyData = computed(() => newMessages.value.length === 0);

newMessagesStore.getOldMessages().then(() => {
	newMessages.value = newMessagesStore.newMessages;
	toastify(newMessagesStore.message, newMessagesStore.isSuccess ? "success" : "error");
	isDataLoading.value = false;
});
</script>
