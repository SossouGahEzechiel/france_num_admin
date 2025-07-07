const getErrorMessage = (error: any) => {
	// Erreur avec data.message (format courant de $fetch)
	if (error.data && error.data.message) {
		return error.data.message;
	}
	// Erreur avec response._data.message (autre format possible)
	if (error.response && error.response._data && error.response._data.message) {
		return error.response._data.message;
	}
	// Message d'erreur par défaut
	return error.message || "Une erreur s'est produite";
};

export default getErrorMessage;