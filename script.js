//your JS code here. If required.
function removeSelectedColor() {
            // Get a reference to the select element
            var selectElement = document.getElementById("colorSelect");
            
            // Get the selected option
            var selectedOption = selectElement.options[selectElement.selectedIndex];
            
            // Check if an option is selected
            if (selectedOption) {
                // Remove the selected option
                selectElement.removeChild(selectedOption);
            }
        }