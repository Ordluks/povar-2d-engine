import P2dCanvas from './canvas'


class Draw {
	#canvas = new P2dCanvas()
	#fillColor = '#000'

	getCanvas() {
		return this.#canvas
	}

	setFillColor(color) {
		this.#fillColor = color
	}

	drawFrame() {
		const { context } = this.#canvas
		const { width, height } = this.#canvas.element

		context.beginPath()
		context.fillStyle = this.#fillColor
		context.fillRect(0, 0, width, height)
		context.closePath()
	}
}

export default Draw