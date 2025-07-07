<template>
	<transition name="fade">
		<div
				v-if="show"
				@click="emits('close')"
				class="fixed inset-0 z-50 flex items-center justify-center
             backdrop-blur-sm backdrop-brightness-75 bg-black/30"
		>
			<div @click.stop class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md m-3">
				<h2 class="text-xl font-semibold mb-4 flex items-center">
					Voulez-vous désactiver ce compte ?
				</h2>

				<div class="flex items-center mb-4">
					<p class="text-gray-700 text-md">
						Vous êtes sur le point de désactiver le compte de <b>{{ selectedAdministrator.name }}</b>.
						Cette action empêchera l’utilisateur de se connecter ou d’accéder à ses données.
					</p>
				</div>

				<div class="text-center">
					<p class="text-gray-600 text-sm">
						Souhaitez-vous vraiment continuer ?
					</p>
				</div>

				<div class="my-3 flex justify-center gap-2">
					<button @click="emits('confirm')" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
						<span v-if="!isLoading">Oui, {{ selectedAdministrator.isActive ? "désactiver" : "activer" }}</span>
						<Loader v-else/>
					</button>

					<button
							@click="emits('close')"
							class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-200"
					>
						Annuler
					</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="js" setup>

import Loader from "~/componants/loader.vue";

defineProps({
	selectedAdministrator: {
		type: Object,
		required: true
	},
	show: {
		type: Boolean,
		required: true
	},
	isLoading: {
		type: Boolean,
		required: true
	}
});

const emits = defineEmits(["confirm", "close"])
</script>
