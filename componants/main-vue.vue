<template>
	<div class="bg-gray-50 min-h-screen">
		<!-- Mobile menu button -->
		<MobileMenu/>

		<!-- Overlay for mobile -->
		<Overlay/>

		<!-- Sidebar -->
		<SideBar/>

		<!-- Main Content -->
		<div class="lg:ml-64 flex-1">
			<!-- Top Bar -->
			<CustomHeader/>

			<!-- Page Content -->
			<main class="p-4 sm:p-6 lg:p-8">
				<div class="max-w-7xl mx-auto">
					<slot/>
				</div>
			</main>
		</div>
	</div>
</template>
<script setup lang="ts">
import SideBar from "~/componants/partials/side-bar.vue";
import Overlay from "~/componants/partials/overlay.vue";
import CustomHeader from "~/componants/partials/header.vue";
import MobileMenu from "~/componants/partials/mobile-menu.vue";

onMounted(_ => {
	// Mobile menu functionality
	const mobileMenuBtn = document.getElementById('mobile-menu-btn');
	const sidebar = document.getElementById('sidebar');
	const overlay = document.getElementById('overlay');
	const closeSidebar = document.getElementById('close-sidebar');

	function openSidebar() {
		sidebar.classList.remove('-translate-x-full');
		overlay.classList.remove('hidden');
		document.body.classList.add('overflow-hidden');
	}

	function closeSidebarFn() {
		sidebar.classList.add('-translate-x-full');
		overlay.classList.add('hidden');
		document.body.classList.remove('overflow-hidden');
	}

	mobileMenuBtn.addEventListener('click', openSidebar);
	closeSidebar.addEventListener('click', closeSidebarFn);
	overlay.addEventListener('click', closeSidebarFn);

	// Close sidebar when clicking outside on mobile
	document.addEventListener('click', function (e) {
		if (window.innerWidth < 1024) {
			if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
				closeSidebarFn();
			}
		}
	});

	// Handle resize
	window.addEventListener('resize', function () {
		if (window.innerWidth >= 1024) {
			sidebar.classList.remove('-translate-x-full');
			overlay.classList.add('hidden');
			document.body.classList.remove('overflow-hidden');
		} else {
			if (!overlay.classList.contains('hidden')) {
				closeSidebarFn();
			}
		}
	});

});
</script>