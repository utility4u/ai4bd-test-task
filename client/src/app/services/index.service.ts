import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class IndexService {
	private documentIndex: number;
	private pageIndex: number;

	constructor() {}

	getDocumentIndex(): number {
		return this.documentIndex;
	}

	setDocumentIndex(index: number): void {
		this.documentIndex = index;
	}

	getPageIndex(): number {
		return this.pageIndex;
	}

	setPageIndex(index: number): void {
		this.pageIndex = index;
	}
}