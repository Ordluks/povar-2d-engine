import App from './app'
import Actions from './app/actions'
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
	globalActions: new Actions(),

	init(config = defaultConfig, root) {
		if (this.app !== null) throw new Error('Application already init')

		config = deepMerge(defaultConfig, config)
		this.config = config

		this.app = new App()

		try {
			root.appendChild(this.app.getCanvas().element)
		} catch (error) {
			throw new Error(`Fail to inject canvas into ${root}; \n ${error.message}`)
		}

		return this.app
	}
}

export default Povar2dEngine