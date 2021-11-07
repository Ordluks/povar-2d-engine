import Povar2dEngine from '..'
import timer from '../utilities/timer'
import Draw from './draw'


class App {
	actions = Povar2dEngine.globalActions
	#draw = new Draw()

	getCanvas = this.#draw.getCanvas.bind(this.#draw)

	async start() {
		this.#mainLoop()
	}

	async #mainLoop() {
		this.#draw.drawFrame()

		

		await timer(0)
		await this.#mainLoop()
	}

	calcFPS() {

	}
}

export default App