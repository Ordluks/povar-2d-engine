import Povar2dEngine from '../src'


const game = Povar2dEngine.init(
	{
		canvas: {
			fillPage: true
		}
	},
	document.querySelector('.game-root')
)

game.start()

window.game = game