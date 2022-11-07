import { Node } from "./Node";
import { Sortable } from "./Sortable";

export class CustomLinkedList extends Sortable {
	public head: Node | null;

	constructor() {
		super();
		this.head = null;
	}

	get length(): number {
		let length = 0;
		let ptr = this.head;
		while (ptr) {
			++length;
			ptr = ptr.next;
		}
		return length;
	}

	add(item: number): void {
		const newNode = new Node(item);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let ptr = this.head;
		while (ptr.next) {
			ptr = ptr.next;
		}
		ptr.next = newNode;
	}

	at(index: number): Node {
		if (!this.head) {
			throw new Error("Index out of bounds");
		}
		let atIndex: Node | null = this.head;
		let indexCounter = 0;
		while (atIndex) {
			if (index === indexCounter) {
				return atIndex;
			}
			indexCounter++;
			atIndex = atIndex.next;
		}
		throw new Error("Index out of bounds");
	}

	print(): void {
		let ptr: Node | null = this.head;
		const values = [];
		while (ptr) {
			values.push(ptr.data);
			ptr = ptr.next;
		}
		console.log(values);
	}

	compare(letfIndex: number, rightIndex: number): boolean {
		const leftHand = this.at(letfIndex);
		const rightHand = this.at(rightIndex);
		return leftHand.data > rightHand.data;
	}

	swap(letfIndex: number, rightIndex: number): void {
		const leftHand = this.at(letfIndex);
		const rightHand = this.at(rightIndex);
		const leftHandData = leftHand.data;
		leftHand.data = rightHand.data;
		rightHand.data = leftHandData;
	}
}
