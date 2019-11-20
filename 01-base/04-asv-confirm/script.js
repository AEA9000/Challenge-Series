let confirm = false;

while(confirm == false) {

    let age = prompt("What is your age?");
    let gender = prompt("What is your sex?");
    let town = prompt("Where do you live?");

    if(confirm(age + " " + gender + " " + town)) {
        confirm = true;
    }


}