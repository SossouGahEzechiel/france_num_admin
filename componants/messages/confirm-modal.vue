<!-- components/MarkAsProcessedModal.vue -->
<template>
	<transition name="fade">
		<div
				v-if="show"
				@click="close"
				class="fixed inset-0 z-50 flex items-center justify-center
             backdrop-blur-sm backdrop-brightness-75 bg-black/30"
		>
			<div
					@click.stop
					class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md m-3"
			>
				<h2 class="text-xl font-semibold mb-4">Confirmer le traitement de la demande</h2>
				<p class="text-gray-700 mb-6">
					Êtes-vous sûr de vouloir marquer la demande de <b>{{ message.fullName }}</b> prise de contact comme
					<strong>traitée</strong>.<br>Cette
					action indiquera que vous avez pris en compte cette demande et qu’aucune action supplémentaire n’est
					nécessaire.
				</p>
				<div class="flex justify-end space-x-3">
					<button
							@click="confirm"
							class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
					>
						Oui, marquer comme traitée
					</button>
					<button
							@click="close"
							class="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
					>
						Annuler
					</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="js">
const { show, message } = defineProps({
	show: {
		type: Boolean,
		default: false
	},
	message: {
		type: Object,
		default: () => ({
			fullName: null,
			id: null
		}),
		required: true
	},
});

const newMessagesStore = useNewMessagesStore();

const emit = defineEmits(['confirm', 'close'])

function confirm() {
	newMessagesStore.markMessageAsProcessed(message.id);
	emit('confirm');
}

function close() {
	emit('close')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
