export class Node {
	next: Node | null;

	constructor(public data: number) {
		this.next = null;
	}
}
