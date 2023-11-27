class LapTop {
	public turnOn() { }
}

class MacBook extends LapTop { }

class Programmer {
	private laptop: LapTop;

	constructor() {
		this.laptop = new MacBook();
	}

	public programming() {
		this.laptop.turnOn();
	}
}

const programmer = new Programmer();
programmer.programming();
