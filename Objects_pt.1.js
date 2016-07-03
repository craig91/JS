var hotel = {
	name:'Quay',    /* property: Name Value: string */
	rooms: 40,                        //Value: number
	booked: 25,                       //Value: number
	gym: true,                        //Value: Boolean
	roomTypes: ['twin', 'double', 'suite'],  //Value: Array

	checkAvailability: function() {             //Method: checkAvailability Value: function
		return this.rooms - this.booked;
	}

};


/* Objects group together a set of variables and functions to create a model of something
you would recognize from the real world. In an object, variables and functions take on new
names. 

VARIABLES BECOME KNOWN AS POPERTIES
- Properties tell us about the object, such as the name of a hotel or the number of rooms 
it has. 

FUNCTIONS BECOME KNOWN AS METHODS
- Methods represent tasks that are associated with the object. For example, you can check 
how many rooms are available by subtracting the number of booked rooms from the total number
of rooms. 