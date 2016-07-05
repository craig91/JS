var hotel = {
	name:'Quay',    /* Key: Name Value: string */
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

KEY
- Like variables and named functions, properties and methods have a name and value. In an
object, that name is called a key.
- An object cannot have two keys with the same name. This is because keys are used to 
access their corresponding value.