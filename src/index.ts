import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { CustomLinkedList } from "./CustomLinkedList";

const numbersCollection = new NumbersCollection([-2, 10, 3, -5, 0, 8]);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("xacbar");
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new CustomLinkedList();
linkedList.add(-2);
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);
linkedList.add(8);

linkedList.print();
linkedList.sort();
linkedList.print();
