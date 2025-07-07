<template>
	<transition name="fade">
		<div
				v-if="show"
				@click="close"
				class="fixed inset-0 z-50 flex items-center justify-center
             backdrop-blur-sm backdrop-brightness-75 bg-black/30"
		>
			<div @click.stop class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md m-3">
				<h2 class="text-xl font-semibold mb-4">Ajouter un administrateur</h2>

				<form action="javascript:void(0);">
					<label for="responsibleName" class="block text-md font-medium text-gray-700 mb-3">Nom du responsable</label>
					<input type="text"
					       class="min-w-full px-4 py-3 mb-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-200"
					       placeholder="Entrez le nom du responsable" id="responsibleName"
					       v-model="newAdministrator.name">

					<label for="responsibleEmail" class="block text-md font-medium text-gray-700 mb-3">Email du responsable</label>
					<input type="email"
					       class="min-w-full px-4 py-3 mb-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-200"
					       placeholder="Entrez le mail du responsable" id="responsibleEmail"
					       v-model="newAdministrator.email">

					<div class="flex justify-end space-x-3">
						<button @click="confirm" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
							<span v-if="!isLoading">Oui, marquer comme traitée</span>
							<Loader v-else/>
						</button>
						<button @click="close" class="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
							Annuler
						</button>
					</div>
				</form>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import Loader from "~/componants/loader.vue";

defineProps({
	newAdministrator: {
		type: Object,
		required: true
	},
	show: {
		type: Boolean,
		required: true
	},
	isLoading: {
		type: Boolean,
		required: false
	}
});

function confirm() {
	emit('confirm')
}

function close() {
	emit('close');
}

const emit = defineEmits(['close', 'confirm', 'stopLoader']);
</script>
