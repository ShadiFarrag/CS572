const tree = {
	name: "home",
	files: ["notes.txt", "todo.txt"],
	subFolders: [
		{
			name: "payroll",
			files: ["paper.pdf", "funds.csv"],
			subFolders: []
		},
		{
			name: "misc",
			files: ["summer1.jpg", "summer2.jpg", "summer3.jpg"],
			subFolders: [
				{
					name: "logs",
					files: ["logs1", "logs2", "logs3", "logs4"],
					subFolders: []
				}]
		}]
};
console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false


function find(fileName) {
	return (searchTree) => {
		if (searchTree.files.find((elm) => elm === fileName)) {
			return true;
		} else {
			for (let key in searchTree.subFolders) {
				if (find(fileName)(searchTree.subFolders[key])) {
					return true;
				}
			}
			return false;
		}
	}
};
