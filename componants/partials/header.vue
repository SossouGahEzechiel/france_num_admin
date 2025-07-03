<template>
	<header class="bg-white shadow-sm border-b border-gray-200">
		<div class="px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<h2 class="text-lg font-semibold text-gray-900 ml-12 lg:ml-0"></h2>
				</div>
				<div class="flex items-center space-x-4">
					<button class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M15 17h5l-3.5-3.5a1.5 1.5 0 010-2.12L20 8h-5M9 17H4l3.5-3.5a1.5 1.5 0 000-2.12L4 8h5"></path>
						</svg>
					</button>
					<div class="relative">
						<button @click="toggleUserMenu"
						        class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center focus:outline-none">
							<span class="text-white text-sm font-medium">{{ userSymbol }}</span>
						</button>

						<!-- Menu utilisateur -->
						<div v-if="isUserMenuOpen"
						     class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
							<a href="#"
							   class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
								<svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor"
								     viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
								</svg>
								Mon compte
							</a>
							<a :href="AppUrls.LOGIN.path"
							   class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
								<svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor"
								     viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
								</svg>
								{{ AppUrls.LOGIN.text }}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="js" setup>
import {AppUrls} from "~/utils/app-urls.js"

const isUserMenuOpen = ref(false);

const userSymbol = ref("");

const toggleUserMenu = () => {
	isUserMenuOpen.value = !isUserMenuOpen.value;
};

// Fermer le menu quand on clique ailleurs
const handleClickOutside = (event) => {
	const userMenu = document.querySelector('.relative');
	if (userMenu && !userMenu.contains(event.target)) {
		isUserMenuOpen.value = false;
	}
};

// Écouteur d'événement pour fermer le menu
onMounted(() => {
	document.addEventListener('click', handleClickOutside);
	userSymbol.value = localStorage.getItem('user-symbol');
});

onBeforeUnmount(() => {
	document.removeEventListener('click', handleClickOutside);
});
</script>