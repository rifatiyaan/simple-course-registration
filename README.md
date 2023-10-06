3 project features : 
 * This project handles duplicate addition to the cart.
 * This project handles the requirements limit through state management.
 * This project holds data dynamically, and shows error message while not meeting the requiremnets. 
 
 
 State management : 
 I have used useState() react hooks for 
 *getting all the items 
 *updating the selected items by throwing eventHandler at the select button and using the updated state and passing through the another component which was Cart component 
 * I used forEach loops to throw the conditions for not adding in Cart component also used find loop to ensuring the unique data value and removing the duplicates.