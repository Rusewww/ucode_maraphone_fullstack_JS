let animal;
let gender;
let age;
animal = prompt('What animal is the superhero most similar to?');
if(!(animal.length <= 20) || animal.includes(" ") || !(animal.match(/^[A-Za-z]*$/))){
    alert("Wrong animal name!");
}else{
    gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
    if(!(gender.match(/^[A-Za-z]*$/))){
        alert("Wrong gender type!");
    } else {
        age = prompt('How old is the superhero?');
        if (!(age.match(/^[1-9]+[0-9]*$/)) || age > 99999){
            alert("Wrong age!");
        } else if (gender.match(/^male$/) && age < 18){
            alert(animal+"-boy");
        } else if (gender.match(/^male$/) && age > 18){
            alert(animal+"-man");
        } else if (gender.match(/^female$/) && age < 18){
            alert(animal+"-girl");
        } else if (gender.match(/^female$/) && age > 18){
            alert(animal+"-woman");
        } else if (age > 18){
            alert(animal+"-hero");
        } else if (age < 18){
            alert(animal+"-kid");
        }
    }
}
