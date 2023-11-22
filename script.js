//your code here!
let list= document.getElementById("infi-list");
// console.log(list);


let count=1;
for(let i=1;i<=10;i++){
	let li= document.createElement("li");
	li.innerText= `Item ${count++}`;
	list.append(li);
}
// console.log(list);
// console.log(list.scrollTop, list.scrollHeight, list.clientHeight)

const maximumScrollableHeight=list.scrollHeight - list.clientHeight;
// console.log(maximumScrollableHeight);


list.addEventListener("scroll",()=>{
	let scrolledHeight= maximumScrollableHeight-list.scrollTop;
	if(scrolledHeight<=5){
	addTwoItems();
}
});


function addTwoItems(){
	for(let i=1;i<=2;i++){
		let li= document.createElement("li");
		li.innerText= `Item ${count++}`;
		list.append(li);
	}
	
	
}



