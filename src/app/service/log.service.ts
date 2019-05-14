import { proxy } from '../comlink'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LogService {
	async log(value: string): Promise<void> {
		const LogWorker = proxy<typeof import('../worker/log').Log>(
			new (Worker as any)('../worker/log', { type: 'module' })
		)

		const worker = await new LogWorker()
		await worker.log(value)
	}
}
