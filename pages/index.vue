<template>
	<MainVue>
		<!-- Welcome Card -->
		<div class="bg-white rounded-lg shadow-sm p-6 mb-6">
			<h3 class="text-lg font-medium text-gray-900 mb-2">Bienvenue sur votre tableau de bord</h3>
			<p class="text-gray-600">Utilisez le menu de navigation à gauche pour accéder aux différentes sections.</p>
		</div>

		<!-- Stats Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
			<div class="bg-white rounded-lg shadow-sm p-6">
				<div class="flex items-center">
					<div class="p-2 bg-blue-100 rounded-lg">
						<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
						</svg>
					</div>
					<div class="ml-4">
						<h4 class="text-lg font-semibold text-gray-900">Messages</h4>
						<p class="text-gray-600">{{ data.messagesCount }} nouveaux</p>
					</div>
				</div>
			</div>

			<div class="bg-white rounded-lg shadow-sm p-6">
				<div class="flex items-center">
					<div class="p-2 bg-green-100 rounded-lg">
						<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
						</svg>
					</div>
					<div class="ml-4">
						<h4 class="text-lg font-semibold text-gray-900">Administrateurs</h4>
						<p class="text-gray-600">{{ data.administratorsCount }} actifs</p>
					</div>
				</div>
			</div>

			<div class="bg-white rounded-lg shadow-sm p-6">
				<div class="flex items-center">
					<div class="p-2 bg-purple-100 rounded-lg">
						<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
						</svg>
					</div>
					<div class="ml-4">
						<h4 class="text-lg font-semibold text-gray-900">Système</h4>
						<p class="text-gray-600">Tout fonctionne</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Content Area -->
		<div class="bg-white rounded-lg shadow-sm p-6">
			<h3 class="text-lg font-medium text-gray-900 mb-4">Contenu principal</h3>
			<p class="text-gray-600 mb-4">Cette zone sera remplacée par le contenu spécifique à chaque section
				sélectionnée dans le menu.</p>
			<div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
				<p class="text-gray-500">Zone de contenu dynamique</p>
			</div>
		</div>
	</MainVue>
</template>
<script setup lang="ts">
definePageMeta({
	middleware: 'auth'
});

usePageTitle(AppUrls.DASHBOARD.text);

import {usePageTitle} from "~/composables/use-page-title";
import MainVue from "~/componants/main-vue.vue";
import {useDashboardStore} from "~/stores/DashboardStore";

const dashboardStore = useDashboardStore();
const data = ref<{ administratorsCount: number, messagesCount: number }>({
	administratorsCount: 0,
	messagesCount: 0,
});

dashboardStore.get().then(() => {
	data.value = dashboardStore.data;
	localStorage.setItem('newMessagesCount', data.value.messagesCount);
	toastify(dashboardStore.message, dashboardStore.isSuccess ? 'success' : 'error');
});

</script>