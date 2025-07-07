<template>
	<MainVue>
		<div class="bg-blue-300 rounded-lg shadow-lg p-6 mb-6 flex items-center gap-4">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"
			     stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
			</svg>
			<span class="text-white text-lg font-semibold">Configurations des données de prise de contact</span>
		</div>

		<div class="bg-blue-300 rounded-lg shadow-lg p-6 mb-6">
			<div class="w-full flex justify-end">
				<button type="submit" id="openModal"
				        class="bg-white sm:w-full md:w-auto text-blue-500 px-4 py-2 rounded-lg mb-6 flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24"
					     stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
					</svg>
					<span>Enregistrer</span>
				</button>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				<div class="bg-white rounded-lg shadow-sm p-6 mb-6 border border-dashed border-gray-300">
					<div class="space-y-2">
						<label for="responsibleName" class="block text-md font-medium text-gray-700 mb-3">
							Nom du responsable
						</label>
						<input
								type="text"
								v-model="configs.responsibleName"
								id="responsibleName"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all duration-200"
								placeholder="Entrez le nom du responsable"
						>
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-sm p-6 mb-6 border border-dashed border-gray-300">
					<div class="space-y-2">
						<label for="responsibleName" class="block text-md font-medium text-gray-700 mb-3">
							Poste du responsable
						</label>
						<input
								type="text"
								v-model="configs.positionHeld"
								id="responsibleName"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all duration-200"
								placeholder="Entrez le nom du responsable"
						>
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-sm p-6 mb-6 border border-dashed border-gray-300">
					<div class="space-y-2">
						<label for="responsibleName" class="block text-md font-medium text-gray-700 mb-3">
							Numéro de téléphone
						</label>
						<input
								type="text"
								v-model="configs.phone"
								id="responsibleName"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all duration-200"
								placeholder="Entrez le nom du responsable"
						>
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-sm p-6 mb-6 border border-dashed border-gray-300">
					<div class="space-y-2">
						<label for="responsibleName" class="block text-md font-medium text-gray-700 mb-3">
							Adresse Mail
						</label>
						<input
								type="email"
								v-model="configs.email"
								id="responsibleName"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all duration-200"
								placeholder="Entrez le nom du responsable"
						>
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-sm p-6 mb-6 border border-dashed border-gray-300">
					<div class="space-y-2">
						<label for="responsibleName" class="block text-md font-medium text-gray-700 mb-3">
							Date de dernière mise à jour
						</label>
						<input
								type="text"
								v-model="configs.updatedAt"
								id="responsibleName"
								readonly
								class="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all duration-200"
								placeholder="Entrez le nom du responsable"
						>
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-sm p-6 mb-6 border border-dashed border-gray-300">
					<div class="space-y-2">
						<label for="responsibleName" class="block text-md font-medium text-gray-700 mb-3">
							Dernier modificateur
						</label>
						<input
								type="text"
								v-model="configs.adminName"
								id="responsibleName"
								readonly
								class="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all duration-200"
								placeholder="Entrez le nom du responsable"
						>
					</div>
				</div>
			</div>
		</div>
		<ConfirmModal :click-handler="formSubmitHandler"/>
	</MainVue>
</template>

<script setup lang="js">
import {usePageTitle} from "~/composables/use-page-title.js";

definePageMeta({
	middleware: 'auth'
});

usePageTitle(AppUrls.CONFIGURATIONS.text);

import {toastify} from "~/composables/toastify.js";
import MainVue from "~/componants/main-vue.vue";
import {useContactDataStore} from "~/stores/ContactDataStore";
import ConfirmModal from "~/componants/configs/confirm-modal.vue";

const contactDataStore = useContactDataStore();

const configs = ref({
	phone: "",
	email: "",
	responsibleName: "",
	positionHeld: "",
	createdAt: "",
	updatedAt: "",
	adminName: ""
});
const message = ref("");

contactDataStore.get().then(_ => {
	configs.value = contactDataStore.contactData;
	message.value = contactDataStore.message;
	toastify(message.value, contactDataStore.isSuccess ? "success" : "error");
});

onMounted(() => {
	const openModalBtn = document.getElementById('openModal');
	const modalOverlay = document.getElementById('modalOverlay');
	const modalContent = document.getElementById('modalContent');
	const closeModalBtn = document.getElementById('closeModal');
	const cancelBtn = document.getElementById('cancelBtn');
	const confirmBtn = document.getElementById('confirmBtn');

	// Fonction pour ouvrir le modal
	function openModal() {
		modalOverlay.classList.remove('hidden');
		setTimeout(() => {
			modalContent.classList.remove('scale-95', 'opacity-0');
			modalContent.classList.add('scale-100', 'opacity-100');
		}, 10);
	}

	// Fonction pour fermer le modal
	function closeModal() {
		modalContent.classList.remove('scale-100', 'opacity-100');
		modalContent.classList.add('scale-95', 'opacity-0');
		setTimeout(() => {
			modalOverlay.classList.add('hidden');
		}, 300);
	}

	// Event listeners
	openModalBtn.addEventListener('click', openModal);
	closeModalBtn.addEventListener('click', closeModal);
	cancelBtn.addEventListener('click', closeModal);

	// Fermer le modal en cliquant sur l'overlay
	modalOverlay.addEventListener('click', (e) => {
		if (e.target === modalOverlay) {
			closeModal();
		}
	});

	// Fermer le modal avec la touche Escape
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
			closeModal();
		}
	});

	// Action du bouton confirmer
	confirmBtn.addEventListener('click', () => {
		formSubmitHandler()
		closeModal();
	});
});

const formSubmitHandler = () => {
	contactDataStore.update(configs.value).then(_ => {
		message.value = contactDataStore.message;
		contactDataStore.value = contactDataStore.contactData;
		toastify(message.value, contactDataStore.isSuccess ? "success" : "error");
	});
};

</script>
