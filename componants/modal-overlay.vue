<template>
	<div
			id="modalOverlay"
			class="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 bg-black/30 z-50 flex items-center justify-center hidden transition-opacity duration-300"
	>
		<slot/>
	</div>
</template>
