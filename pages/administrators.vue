<template>
	<MainVue>
		<div class="bg-blue-300 rounded-lg shadow-lg p-6 mb-6 flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
			     stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
			</svg>
			<span class="text-white text-lg font-semibold">Liste des administrateurs</span>
		</div>
		<div class="my-3 flex justify-end">
			<button class="px-4 py-2 bg-blue-300 hover:bg-blue-400 text-white rounded-md" @click="showCreateModal = true">
				Ajouter un administrateur
			</button>
		</div>
		<div class="overflow-x-auto bg-white rounded-lg shadow hidden md:block">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-blue-300 text-white">
				<tr>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N°</th>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom
					</th>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Mail
					</th>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Date de création
					</th>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Actions
					</th>
				</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
				<TablePlaceholder v-if="isDataLoading" :is-data-loading="isDataLoading"/>
				<tr v-for="(administrator, index) in administrators" :key="administrator.id" v-else
				    :class="['hover:bg-gray-100', adminId === administrator.id ? 'bg-green-50' : '']">
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
						{{ ++index }}
					</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
						{{ administrator.name }}
					</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
						{{ administrator.email }}
					</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
						{{ administrator.createdAt }}
					</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
						<span v-show="adminId !== administrator.id">
							<button class="border rounded border-gray-300 p-1" @click="showActivationModal(administrator)">
								<svg v-if="administrator.isActive" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500"
								     fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
								</svg>
								<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none"
								     viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
								</svg>
							</button>
							&nbsp;&nbsp;
							<button class="border rounded border-gray-300 p-1" @click="handleShowDeleteModal(administrator)">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24"
								     stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
								</svg>
							</button>
						</span>
					</td>
				</tr>
				</tbody>
			</table>
		</div>

		<div class="shadow md:hidden">
			<CardPlaceholder :items="3" v-if="isDataLoading"/>
			<div v-else>
				<ItemCard
						v-for="(administrator, index) in administrators"
						:administrator="administrator"
						:key="administrator.id"
						:index="++index"
						:showButtons="ad"
						@delete="handleShowDeleteModal(administrator)"
						@control="showActivationModal(administrator)"
				/>
				<EmptyDataCard :show="emptyData"/>
			</div>
		</div>
		<CreateModal
				:show="showCreateModal"
				:newAdministrator="newAdministrator"
				:isLoading="isCreateModalLoading"
				@close="showCreateModal = false; isCreateModalLoading = false"
				@confirm="confirmSave"
				@stopLoader="isCreateModalLoading = false"
		/>

		<ActivationModal
				:selectedAdministrator="selectedAdmin"
				:show="actionModalShow"
				@confirm="handleActionModalSubmit"
				@close="actionModalShow = false; isActivationModalLoading = false"
				:isLoading="isActivationModalLoading"
		/>

		<DeleteModal
				:is-loading="isDeleteModalLoading"
				:show="showDeleteModal"
				:selected-administrator="selectedAdmin"
				@close="showDeleteModal = false; isDeleteModalLoading = false"
				@confirm="handleDeleteModalSubmit"
		/>

	</MainVue>
</template>
<script setup lang="ts">

import CardPlaceholder from "~/componants/card-placeholder.vue";
import MainVue from "~/componants/main-vue.vue";
import {useAdminStore} from "~/stores/AdminStore";
import CreateModal from "~/componants/administrators/create-modal.vue";
import ActivationModal from "~/componants/administrators/activation-modal.vue";
import DeleteModal from "~/componants/administrators/delete-modal.vue";
import EmptyDataCard from "~/componants/empty-data-card.vue";
import ItemCard from "~/componants/administrators/item-card.vue";
import TablePlaceholder from "~/componants/table-placeholder.vue";
import {usePageTitle} from "~/composables/use-page-title";

definePageMeta({
	middleware: 'auth',
});

usePageTitle(AppUrls.ADMINISTRATORS.text);


const administrators = ref<Array<{ id: number, name: string, email: string, isActive: boolean }>>([]);
const showCreateModal = ref<Boolean>(false);
const isCreateModalLoading = ref<Boolean>(false);
const adminId = useAuthStore().user?.id;

const actionModalShow = ref<Boolean>(false);
const isActivationModalLoading = ref<Boolean>(false);

const showDeleteModal = ref<Boolean>(false);
const isDeleteModalLoading = ref<Boolean>(false);
const isDataLoading = ref<Boolean>(true);
const selectedAdmin = ref<{ id: number, name: string, email: string, isActive: boolean }>({});
const newAdministrator = ref<{ name: string, email: string }>({
	name: "",
	email: "",
});
const emptyData = computed(() => administrators.value.length === 0);

const adminStore = useAdminStore();

adminStore.getAdministrators().then(() => {
	administrators.value = adminStore.administrators;
	toastify(adminStore.message, adminStore.isSuccess ? "success" : "error");
	isDataLoading.value = false;
});

async function confirmSave() {
	isCreateModalLoading.value = true;
	adminStore.add(newAdministrator.value)
			.then(() => {
				toastify(adminStore.message, adminStore.isSuccess ? "success" : "error");
				console.log("administrators.newAdministrator:", adminStore.newAdministrator);
				if (adminStore.isSuccess) {
					showCreateModal.value = false;
					administrators.value.push(adminStore.newAdministrator);
					newAdministrator.value = {name: "", email: ""};
				}
				isCreateModalLoading.value = false;
			});
	message.value = adminStore.message;
}

function showActivationModal(administrator) {
	selectedAdmin.value = administrator;
	actionModalShow.value = true;
}

function handleActionModalSubmit() {
	isActivationModalLoading.value = true;
	adminStore.updateAccess(selectedAdmin.value.id)
			.then(() => {
				actionModalShow.value = false;
				isActivationModalLoading.value = false;
				toastify(adminStore.message, adminStore.isSuccess ? "success" : "error");
				administrators.value = administrators.value.map((admin) => {
					if (admin.id === selectedAdmin.value.id) {
						admin.isActive = !admin.isActive;
					}
					return admin;
				});
			}).catch(
			() => {
				actionModalShow.value = false;
				isActivationModalLoading.value = false;
				toastify(adminStore.message, adminStore.isSuccess ? "success" : "error");
			}
	);
}

function handleShowDeleteModal(administrator) {
	selectedAdmin.value = administrator;
	showDeleteModal.value = true;
}

function handleDeleteModalSubmit() {
	isDeleteModalLoading.value = true;
	adminStore.delete(selectedAdmin.value.id)
			.then(
					() => {
						showDeleteModal.value = false;
						isDeleteModalLoading.value = false;
						toastify(adminStore.message, adminStore.isSuccess ? "success" : "error");
						administrators.value = administrators.value.filter((admin) => admin.id !== selectedAdmin.value.id);
					}
			);
}
</script>

<style>
@keyframes shimmer {
	0% {
		background-position: -200px 0;
	}
	100% {
		background-position: calc(200px + 100%) 0;
	}
}

.skeleton {
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200px 100%;
	animation: shimmer 1.5s infinite;
}

.skeleton-text {
	height: 1em;
	border-radius: 4px;
}

.skeleton-button {
	height: 2rem;
	width: 2rem;
	border-radius: 4px;
}

.skeleton-icon {
	height: 1.25rem;
	width: 1.25rem;
	border-radius: 2px;
}
</style>
