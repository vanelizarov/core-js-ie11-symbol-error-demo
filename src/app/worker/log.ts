import 'core-js/es6/symbol'
import 'core-js/es6/weak-set'
import { expose } from '../comlink'

export class Log {
	log(value: string): Promise<void> {
		return new Promise<void>(resolve => {
			const t = setTimeout(() => {
				console.log(value)
				clearTimeout(t)
				resolve()
			}, 1000)
		})
	}
}

expose(Log)
