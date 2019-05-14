import { Component } from '@angular/core'

import { LogService } from './service/log.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private _logService: LogService) { }

	async onBtnClick() {
		await this._logService.log('hello, core-js')
		console.log('logged')
	}
}
