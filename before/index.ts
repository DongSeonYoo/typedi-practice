class LapTop {
	public turnOn() { }
}

class MacBook extends LapTop { }

class Gram extends LapTop { }

class Programmer {
	private laptop: LapTop;

	constructor(laptop: LapTop) {
		this.laptop = laptop;
	}

	public programming() {
		this.laptop.turnOn();
	}
}

const programmer1 = new Programmer(new MacBook);
const programmer2 = new Programmer(new Gram);

programmer1.programming();
programmer2.programming();

