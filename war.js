function Character(name, strength, health){
    this.name = name;
    this.strength = strength;
    this.health = health;

    this.attackBtn = document.querySelector(`#${this.name}-attack`);
    this.healthBtn = document.querySelector(`#${this.name}-make-health`);
    this.progress = document.querySelector(`.${this.name}-health span`);

}
Character.prototype.attack = function(enemy){
    // this = Naruto
    // enemy = Sasuke
    enemy.health -= this.strength;
    console.log(enemy.health);
}
Character.prototype.status = function(){
    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Health: ${this.health}`)
    
}
Character.prototype.makeHealth = function(){
    if(this.health <=90){
        this.health += 10;
    }
    else if(this.health == 100){
        console.log('Full Health');
    }
    else if(this.health > 90 && this.health < 100){
        this.health +=5;
    }
}
let Naruto = new Character('Naruto', 10, 100);
let Sasuke = new Character('Sasuke', 5, 100);

Naruto.attackBtn.addEventListener('click', function(){
    Naruto.attack(Sasuke);
    Sasuke.status();
})    
