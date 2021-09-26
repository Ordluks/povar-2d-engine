import Povar2dEngine from '../..';

class P2dCanvas {
	#config = Povar2dEngine.config.canvas

	constructor() {
		const element = document.createElement('canvas')
		this.element = element
		this.resize()
	}

	resize() {
		const [ width, height ] = this.#config.fillPage ?
		[ window.innerWidth, window.innerHeight ] : this.#config.size

		this.element.width = width
		this.element.height = height
	}
}

export default P2dCanvas