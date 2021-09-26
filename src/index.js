import App from './app'
import deepMerge from './utilities/deepMerge'


const defaultConfig = {
	canvas: {
		size: [600, 450],
		fillPage: false
	}
}

const Povar2dEngine = {
	app: null,
	config: null,

	init(config = defaultConfig, root) {
		config = deepMerge(defaultConfig, config)
		this.config = config

		this.app = new App()

		try {
			root.appendChild(this.app.draw.getCanvas().element)
		} catch (error) {
			throw new Error(`Fail to inject canvas into ${root}; \n ${error.message}`)
		}

		return this.app
	}
}

export default Povar2dEngine