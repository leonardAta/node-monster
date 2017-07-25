function autocomplete(input, latInput, lngInput) {
	if(!input) return; //skip this fn from running if there is no input on the page
	//console.log(input, latInput, lngInput); 
	const dropdown = new google.map.places.Autocomplete(input);

	dropdown.addListener('place_changed', () => {
		const place = dropdown.getPlace();
		latInput.value = place.geometry.location.lat();
		lngInput.value = place.geometry.location.lng();
	});
	// if someone hits enter on the address field, dont submit the form
	input.on('keydown', (e) => {
		if(e.keycode === 13) e.preventDefault();
	});
}

exports default autocomplete;