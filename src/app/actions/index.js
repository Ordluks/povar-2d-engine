class Action {
	#subscribers = []

	constructor(target, type) {
		try {
			target.addEventListener(type, this.#listener.bind(this))
		} catch (error) {
			throw new Error('Target is not EventTarget object')
		}
	}

	#listener(event) {
		this.#subscribers.forEach(value => {
			value(event)
		})
	}

	subscribe(observer, callContext) {
		if (typeof observer == 'function')
		this.#subscribers.push(observer.bind(callContext))
	}
}

class Actions {
	windowResize = new Action(window, 'resize')
}

export default Actions