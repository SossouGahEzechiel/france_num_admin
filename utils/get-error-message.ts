const getErrorMessage = (error) => {
	// Erreur avec data.message (format courant de $fetch)
	if (error.data && error.data.message) {
		console.log("1", error.data.message)
		return error.data.message;
	}
	// Erreur avec response._data.message (autre format possible)
	if (error.response && error.response._data && error.response._data.message) {
		console.log(2)
		return error.response._data.message;
	}
	console.log(3)
	// Message d'erreur par défaut
	return error.message || "Une erreur s'est produite";
};

export default getErrorMessage;