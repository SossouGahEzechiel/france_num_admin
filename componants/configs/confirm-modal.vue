<template>
	<ModalOverlay>
		<!-- Modal Content -->
		<div
				id="modalContent"
				class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all duration-300 scale-95 opacity-0"
		>
			<!-- Modal Header -->
			<div class="flex items-center justify-between p-6 border-b border-gray-200">
				<h3 class="text-lg font-semibold text-gray-900">
					Attention !
				</h3>
				<button
						id="closeModal"
						class="text-gray-400 hover:text-gray-600 transition duration-200"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>

			<!-- Modal Body -->
			<div class="p-6">
				<div class="flex items-center mb-4">
					<svg class="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
					</svg>
					<p class="text-gray-700 text-md">
						Voulez-vous vraiment valider ces données ?
					</p>
				</div>
				<div class="text-center">
					<p class="text-gray-600 text-sm">
						Celles-ci seront visibles sur votre site à compter de maintenant.
					</p>
				</div>
			</div>

			<!-- Modal Footer -->
			<div class="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
				<button
						id="cancelBtn"
						class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-200"
				>
					Annuler
				</button>
				<button
						@onclick="clickHandler"
						id="confirmBtn"
						class="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200"
				>
					Confirmer
				</button>
			</div>
		</div>
	</ModalOverlay>
</template>

<script lang="js" setup>
import ModalOverlay from "~/componants/modal-overlay.vue";

defineProps({
	clickHandler: {
		type: Function,
		required: true
	}
});
</script>
