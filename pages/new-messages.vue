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
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-blue-300 text-white">
				<tr>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N°</th>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom
					</th>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Contact
					</th>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Secteur
					</th>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Date
					</th>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Actions
					</th>
				</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
				<!-- Ligne 1 -->
				<tr class="hover:bg-gray-50" v-for="(message, index) in newMessages" :key="message.id">
					<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ index + 1 }}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ message.fullName }}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ message.email }}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ message.business }}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ message.createdAt }}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
						<button class="text-blue-300 hover:text-blue-400 focus:outline-none">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
								<path fill-rule="evenodd"
								      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
								      clip-rule="evenodd"/>
							</svg>
						</button>
					</td>
				</tr>
				</tbody>
			</table>
		</div>

		<!-- Version mobile (cartes) -->
		<div class="mt-6 md:hidden space-y-4">
			<!-- Carte 1 -->
			<div class="bg-white p-4 rounded-lg shadow hover:bg-gray-50 hover:border hover:border-blue-300">
				<div class="flex justify-between">
					<span class="text-md font-bold text-gray-900">1. Jean Dupont</span>
					<button class="text-gray-400 hover:text-gray-500 focus:outline-none">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
							<path fill-rule="evenodd"
							      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
							      clip-rule="evenodd"/>
						</svg>
					</button>
				</div>
				<div class="mt-2 text-md text-gray-500 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
					     stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
					</svg> &nbsp;:
					jean.dupont@example.com
				</div>
				<div class="text-md text-gray-500 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m18 0v-7a2 2 0 00-2-2h-2m-2-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v10m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12"/>
					</svg> &nbsp;:
					Informatique
				</div>

				<div class="text-md text-gray-500 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
					</svg>
					&nbsp;:
					19 Juin 2023
				</div>
			</div>

			<!-- Carte 2 -->
			<div class="bg-white p-4 rounded-lg shadow hover:bg-gray-50 hover:border hover:border-blue-300">
				<div class="flex justify-between">
					<span class="text-md font-medium text-gray-900">2. Marie Martin</span>
					<button class="text-gray-400 hover:text-gray-500 focus:outline-none">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
							<path fill-rule="evenodd"
							      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
							      clip-rule="evenodd"/>
						</svg>
					</button>
				</div>
				<div class="mt-2 text-md text-gray-500">Contact: marie.m@example.com</div>
				<div class="text-md text-gray-500">Secteur: Finance</div>
			</div>
		</div>
	</MainVue>
</template>

<script setup lang="js">
import MainVue from "~/componants/main-vue.vue";
import {useNewMessagesStore} from "~/stores/newMessagesStore";
import Toastify from "toastify-js";

const newMessagesStore = useNewMessagesStore();

const newMessages = ref([]);
const responseMessage = ref("");

const toastify = Toastify({
	text: responseMessage.value || "Default message",
	duration: 3000,
	gravity: "top",
	position: "right",
	stopOnFocus: true,
	close: true,
	backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
});

newMessagesStore.getNewMessages().then(_ => {
	newMessages.value = newMessagesStore.newMessages;
	responseMessage.value = newMessagesStore.message;
	showToastify();
	localStorage.setItem("newMessagesCount", JSON.stringify(newMessages.value.length));
	console.log("localStorage:", localStorage.getItem("newMessagesCount"));
});

const showToastify = _ => {
	toastify.options.text = responseMessage.value;
	toastify.showToast();
};


</script>