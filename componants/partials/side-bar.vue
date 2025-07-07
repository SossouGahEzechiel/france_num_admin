<template>
	<div id="sidebar"
	     class="fixed left-0 top-0 h-full w-64 bg-white shadow-xl transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-50">
		<!-- Header -->
		<div class="p-6 border-b border-gray-200">
			<NuxtLink :to="AppUrls.DASHBOARD.path">
				<h1 class="text-xl font-bold text-gray-800">{{ AppUrls.DASHBOARD.text }}</h1>
			</NuxtLink>
			<!-- Close button for mobile -->
			<button id="close-sidebar" class="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</button>
		</div>

		<nav class="mt-6 px-3">
			<!-- Messages Section -->
			<div class="mb-6">
				<h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Messages</h3>
				<ul class="space-y-1">
					<li>
						<NuxtLink :to="AppUrls.NEW_MESSAGES.path"
						   :class="getActiveClasses(AppUrls.NEW_MESSAGES.path)">
							<svg class="w-5 h-5 mr-3" :class="getIconClasses(AppUrls.NEW_MESSAGES.path)" fill="none" stroke="currentColor"
							     viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
							</svg>
							{{ AppUrls.NEW_MESSAGES.text }}
							<span class="ml-auto bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-full" id="unread-messages-count">0</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink :to="AppUrls.OLD_MESSAGES.path"
						   :class="getActiveClasses(AppUrls.OLD_MESSAGES.path)">
							<svg class="w-5 h-5 mr-3" :class="getIconClasses(AppUrls.OLD_MESSAGES.path)" fill="none" stroke="currentColor"
							     viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
							{{ AppUrls.OLD_MESSAGES.text }}
						</NuxtLink>
					</li>
					<li>
						<NuxtLink :to="AppUrls.MESSAGES.path"
						   :class="getActiveClasses(AppUrls.MESSAGES.path)">
							<svg class="w-5 h-5 mr-3" :class="getIconClasses(AppUrls.MESSAGES.path)" fill="none" stroke="currentColor"
							     viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
							</svg>
							{{ AppUrls.MESSAGES.text }}
						</NuxtLink>
					</li>
				</ul>
			</div>

			<!-- Administrateurs Section -->
			<div class="mb-6">
				<h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Administrateurs</h3>
				<ul class="space-y-1">
					<li>
						<NuxtLink :to="AppUrls.ADMINISTRATORS.path"
						   :class="getActiveClasses(AppUrls.ADMINISTRATORS.path)">
							<svg class="w-5 h-5 mr-3" :class="getIconClasses(AppUrls.ADMINISTRATORS.path)" fill="none" stroke="currentColor"
							     viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
							</svg>
							{{ AppUrls.ADMINISTRATORS.text }}
						</NuxtLink>
					</li>
				</ul>
			</div>

			<!-- Configurations Section -->
			<div class="mb-6">
				<h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Configuration</h3>
				<ul class="space-y-1">
					<li>
						<NuxtLink :to="AppUrls.CONFIGURATIONS.path"
						   :class="getActiveClasses(AppUrls.CONFIGURATIONS.path)">
							<svg class="w-5 h-5 mr-3" :class="getIconClasses(AppUrls.CONFIGURATIONS.path)" fill="none" stroke="currentColor"
							     viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
							{{ AppUrls.CONFIGURATIONS.text }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script lang="js" setup>
import { AppUrls } from "~/utils/app-urls";
import { useRoute } from 'vue-router';

const $route = useRoute();

const newMessagesCount = ref(0);

// Fonction pour les classes du lien
const getActiveClasses = (path) => {
	const baseClasses = 'group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors';
	const activeClasses = 'bg-blue-50 text-blue-800 border border-sm border-blue-300';
	const inactiveClasses = 'text-gray-700 hover:bg-blue-50 hover:text-blue-700';

	return `${baseClasses} ${$route.path === path ? activeClasses : inactiveClasses}`;
};

onMounted(() => {
	newMessagesCount.value = parseInt(localStorage.getItem('newMessagesCount'));
	document.getElementById('unread-messages-count').textContent = (newMessagesCount.value || 0).toString();
});

// Fonction pour les classes des icônes
const getIconClasses = (path) => {
	return $route.path === path ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-500';
};
</script>