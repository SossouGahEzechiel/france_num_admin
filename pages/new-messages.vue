<template>
	<MainVue>
		<div class="bg-blue-300 rounded-lg shadow-lg p-6 mb-6 flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
			     stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
			</svg>
			<span class="text-white text-lg font-semibold">Nouveaux messages</span>
		</div>

		<div class="overflow-x-auto bg-white rounded-lg shadow hidden md:block">
			<CustomTable :messages="newMessages" :display-modal="displayModal"/>
		</div>

		<!-- Version mobile (cartes) -->
		<div class="mt-6 md:hidden space-y-4">
			<MessageCard :display-modal="displayModal" :messages="newMessages"/>
		</div>

		<ConfirmModal
				:show="modalVisible"
				@confirm="handleConfirm"
				@close="modalVisible = false"
				:message="selectMessage"
		/>
	</MainVue>
</template>

<script setup lang="js">
definePageMeta({
	middleware: 'auth',
	title: AppUrls.NEW_MESSAGES.text
});
import {toastify} from "~/composables/toastify.js";
import MainVue from "~/componants/main-vue.vue";
import {useNewMessagesStore} from "~/stores/NewMessagesStore.js";
import ConfirmModal from "~/componants/messages/confirm-modal.vue";
import CustomTable from "~/componants/messages/custom-table.vue";
import MessageCard from "~/componants/messages/message-card.vue";


const newMessagesStore = useNewMessagesStore();
const newMessages = ref([]);
const responseMessage = ref("");
const selectMessage = ref({
	fullName: null,
	id: null
});
const modalVisible = ref(false)

newMessagesStore.getNewMessages().then(_ => {
	newMessages.value = newMessagesStore.newMessages;
	responseMessage.value = newMessagesStore.message;
	localStorage.setItem("newMessagesCount", newMessages.value.length);
	toastify(responseMessage.value, newMessagesStore.isSuccess ? "success" : "error");
});

function handleConfirm() {
	modalVisible.value = false;
	newMessages.value = newMessages.value.filter(message => message.id !== selectMessage.value.id);
	localStorage.setItem("newMessagesCount", newMessages.value.length);
}

function displayModal(message) {
	selectMessage.value.fullName = message.fullName;
	selectMessage.value.id = message.id;
	modalVisible.value = true;
}

</script>