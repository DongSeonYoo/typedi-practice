// interface LapTop {
// 	turnOn(): void;
// }

// class MacBook implements LapTop {
// 	public turnOn() {
// 		console.log('using macbook');
// 	}
// }

// class Gram implements LapTop {
// 	public turnOn() {
// 		console.log('using gram');
// 	}
// }

// class Lenono implements LapTop {
// 	turnOn(): void {
// 		console.log('using lenovo');
// 	}
// }

// class Programmer {
// 	private laptop: LapTop;

// 	constructor(laptop: LapTop) {
// 		this.laptop = laptop;
// 	}

// 	public programming() {
// 		this.laptop.turnOn();
// 	}
// }

// const programmer1 = new Programmer(new MacBook());
// const programmer2 = new Programmer(new Gram());
// const programmer3 = new Programmer(new Lenono());

// programmer1.programming();
// programmer2.programming();
// programmer3.programming();

