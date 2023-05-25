
//person2
/*const person = {
    talk() {
        var self = this;
        setTimeout(function() {
        console.log("self", self)}, 1000);

        setTimeout(function() {
        console.log("this", this)}, 1000);
    }
};
person.talk();*/


//person1
/*const person = {
    talk() {
        /*setTimeout(function() {}, 1000);
        console.log("this", this);*/
        /*setTimeout(function() {
        console.log("this", this)}, 1000);
    }
};
person.talk();*/

/*jobs
const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
]

const activeJobs = jobs.filter(function(job) {return job.isActive});
const activeJobs2 = jobs.filter(job => job.isActive);
console.log(activeJobs);
console.log(activeJobs2); */


/* square
    const square = function(number) {
        return number * number;
    };

    const square2 = number => number * number;

    console.log(`${square(5)}, ${square2(10)}`);
*/

/* person #2
const person = {
    name: "Fifu",
    walk() {
        console.log(this);
    }
}

person.walk();

const walk = person.walk.bind(person);
walk();
*/

/* person #1
const person = {
    name: 'Fifu',
    walk() {},
    talk() {}
};

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'Lucy';
*/

/*
const x = 1;
x = 2; //nejde 
*/

/*  var -> fce, let, const -> blok
function ahoj(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log("mimo " + i);
}
ahoj(); */
