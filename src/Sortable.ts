export abstract class Sortable {
	abstract length: number;
	abstract compare(letfIndex: number, rightIndex: number): boolean;
	abstract swap(letfIndex: number, rightIndex: number): void;

	sort() {
		const { length } = this;

		for (let iMax = length, i = iMax - 1; i > 0; i--) {
			for (let j = 0; j < i; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
