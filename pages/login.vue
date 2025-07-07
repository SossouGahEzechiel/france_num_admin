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
						{{ message }}
					</p>
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
definePageMeta({
	middleware: 'guest',
	title: AppUrls.LOGIN.text,
	ssr: false
});
import Loader from "~/componants/loader.vue";
import {useAuthStore} from "~/stores/AuthStore.js";

const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const loading = ref(false);
const message = ref('');

const handleLogin = async () => {
	loading.value = true;

	authStore.login({email: email.value, password: password.value})
		.then(() => {
			loading.value = false;
			message.value = authStore.message;
		});
};
</script>
