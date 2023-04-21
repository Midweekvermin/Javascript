class Animal {
	constructor(name, type, color){
		this.name = name;
		this.type = type;
		this.color = color;
	}
	sound() {
		console.log(`Hello I am ${this.name}, I am a ${this.type} cow, and I am the color ${this.color}. `)
	}
}
class Cow extends Animal {
	constructor(name, type, color){
		super(name, type, color)
	}
}
const cow1 = new Cow('Bessy', 'dairy', 'brown');
cow1.sound();