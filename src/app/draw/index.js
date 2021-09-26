import P2dCanvas from './canvas'


class Draw {
	#canvas = new P2dCanvas()

	getCanvas() {
		return this.#canvas
	}
}

export default Draw