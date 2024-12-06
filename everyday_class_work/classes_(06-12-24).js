class user {
    constructor (name,email){  //constructor
        this.name= name;
        this.email= email;
        console.log("here i am");
    }
    viewData (){
        console.log(`your name is "${this.name}" and email is "${this.email}`);
    }

}
class admin extends user{
    edit_data(name=this.name, email=this.email){
        return [name,email];
    }
}
// 2 user class objects
let user1= new user("arpan","123@gmail.com");
let user2= new user("non","32109@gmail.com");
// to view the data
user1.viewData();
// printing whole object
console.log(user2);
// making a new inherited class object  
let admin1 = new admin("arpan","123@gmail.com");
// logging after editing the data
console.log(admin1.edit_data("pop","dop@gmail.com"));

