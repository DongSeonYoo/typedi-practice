import Container, { Service } from "typedi";

@Service()
class LapTop {
	public turnOn() { };
}

@Service()
class Programmer {
	constructor(private readonly lapTop: LapTop) { }

	public programming() {
		this.lapTop.turnOn();
	}
}

const programmer1: Programmer = Container.get('Programmer');
programmer1.programming();
