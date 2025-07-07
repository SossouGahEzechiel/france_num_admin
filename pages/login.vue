<template>
	<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-5">
		<div class="hidden md:block w-0.5">
			<img src="~/public/assets/images/Connected%20world-amico.png" alt="">
		</div>
		<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
				<div class="sm:mx-auto sm:w-full sm:max-w-md mb-6">
					<h3 class="mt-6 text-center text-lg font-bold text-gray-900">
						Connectez-vous à votre compte
					</h3>
					<p class="bg-red-300 text-center text-lg text-white mt-3 p-2 border border-red-500 rounded" v-if="message">
						{{ message }}</p>
					<!--					<p class="bg-red-300 text-center text-lg font-bold text-white">{{ message}}</p>-->
				</div>
				<form class="space-y-6" @submit.prevent="handleLogin" method="post">
					<!-- Champ Email -->
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">
							Adresse email
						</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
								     fill="currentColor">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
								</svg>
							</div>
							<input
									id="email"
									v-model="email"
									name="email"
									type="email"
									autocomplete="email"
									required
									class="py-2 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
									placeholder="email@exemple.com"
							>
						</div>
					</div>

					<!-- Champ Mot de passe -->
					<div>
						<label for="password" class="block text-sm font-medium text-gray-700">
							Mot de passe
						</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
								     fill="currentColor">
									<path fill-rule="evenodd"
									      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									      clip-rule="evenodd"/>
								</svg>
							</div>
							<input
									id="password"
									v-model="password"
									name="password"
									type="password"
									autocomplete="current-password"
									required
									class="py-2 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
									placeholder="••••••••"
							>
<!--							<div class="absolute inset-y-0 right-0 pr-3 flex items-center">-->
<!--								<button type="button" @click="togglePasswordVisibility" class="text-gray-400 hover:text-gray-500">-->
<!--									<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">-->
<!--										<path v-if="showPassword" d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>-->
<!--										<path v-if="showPassword" fill-rule="evenodd"-->
<!--										      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"-->
<!--										      clip-rule="evenodd"/>-->
<!--										<path v-else fill-rule="evenodd"-->
<!--										      d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"-->
<!--										      clip-rule="evenodd"/>-->
<!--										<path v-else-->
<!--										      d="M9.9 4.24A9.12 9.12 0 0110 3c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.064 5.413l-1.474-1.473A5.99 5.99 0 0016 10a6 6 0 00-9.94-4.54l-1.16-1.16z"/>-->
<!--									</svg>-->
<!--								</button>-->
<!--							</div>-->
						</div>
					</div>

					<!-- Options supplémentaires -->
					<div class="flex items-center justify-between">
						<div class="flex items-center">
							<input id="remember-me" name="remember-me" type="checkbox"
							       class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
							<label for="remember-me" class="ml-2 block text-sm text-gray-900">
								Se souvenir de moi
							</label>
						</div>

						<div class="text-sm">
							<a href="#" class="font-medium text-blue-300 hover:text-blue-400">
								Mot de passe oublié ?
							</a>
						</div>
					</div>

					<!-- Bouton de connexion -->
					<div>
						<button
								type="submit"
								class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
								:disabled="loading"
						>
							<span v-if="!loading">Se connecter</span>
							<Loader v-else/>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="js" setup>
import Loader from "~/componants/loader.vue";

definePageMeta({
	middleware: 'guest'
})

import {useAuthStore} from "~/stores/AuthStore.js";
import getErrorMessage from "~/utils/get-error-message.js";

const authStore = useAuthStore();

const email = ref('');
const password = ref('');
// const showPassword = ref(false);
const loading = ref(false);
const message = ref("");

// const togglePasswordVisibility = () => {
// 	showPassword.value = !showPassword.value;
// };

const handleLogin = async () => {
	loading.value = true;
	message.value = '';
	try {
		authStore.login({email: email.value, password: password.value})
				.then(async _ => {
					loading.value = false;
					message.value = getErrorMessage(authStore.message)
				})
				.catch(error => {
					message.value = getErrorMessage(error)
					loading.value = false;
					password.value = '';
					// message.value = authStore.message;
				});
	} catch (error) {
		console.error('Erreur de connexion', error);
	}
};
</script>