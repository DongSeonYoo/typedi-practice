class LapTop {
	public turnOn() { }
}

class Programmer {
	private laptop: LapTop;

	constructor() {
		this.laptop = new LapTop();
	}

	public programming() {
		this.laptop.turnOn();
	}
}

const programmer = new Programmer();
programmer.programming();
