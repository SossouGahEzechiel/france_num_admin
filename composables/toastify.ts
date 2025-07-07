import Toastify from "toastify-js";

export const toastify = (message: string, type: string = "info") => {

	let background: string;
	switch (type) {
		case "success":
			background = "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)";
			break;
		case "error":
			background = "linear-gradient(90deg, #d53369 0%, #daae51 100%)";
			break;
		case "info":
			background = "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)";
			break;
		default:
			background = "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)";
	}

	return Toastify({
		text: message,
		duration: 3000,
		close: true,
		gravity: "top",
		position: "right",
		stopOnFocus: true,
		style: {
			background,
		},
	}).showToast();
};