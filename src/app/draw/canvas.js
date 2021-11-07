import Povar2dEngine from '../..';

class P2dCanvas {
	#config = Povar2dEngine.config.canvas

	constructor() {
		const element = document.createElement('canvas')

		if (this.#config.fillPage) {
			const styles = {
				position: 'absolute',
				top: 0,
				left: 0
			}
			Object.assign(element.style, styles)
		}

		this.element = element
		this.context = element.getContext('2d')
		this.resize()

		Povar2dEngine.globalActions.windowResize.subscribe(this.resize, this)
	}

	resize() {
		const [ width, height ] = this.#config.fillPage ?
		[ window.innerWidth, window.innerHeight ] : this.#config.size

		this.element.width = width
		this.element.height = height
	}
}

export default P2dCanvas