var form =document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')


//Form submit event
form.addEventListener('submit' , addItem);
// delete item
itemList.addEventListener('click', deleteItem);
//filter event
filter.addEventListener('keyup' , filterItems);

// addItem 
function addItem(e){
 e.preventDefault();

 //get input value
 var newItem = document.getElementById('item').value;

// create new li element 
var li = document.createElement('li')

// add items
li.className = 'list-group-item';

// add text node with input value
li.appendChild(document.createTextNode(newItem));

//create del button element 
var deletebtn = document.createElement('button')

//add class name of button
deletebtn.classList ='red1';

//add text node 
deletebtn.appendChild(document.createTextNode('X'));

// append button to li
li.appendChild(deletebtn);

// append li to list 
itemList.appendChild(li);

}

// delete item
function deleteItem(e){
    if(e.target.classList.contains('red1')){
        if(confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

 // filter
function filterItems(e){

    // covert text to lowercase
    var text = e.target.value.toLowerCase();
    //get lis
    var items = itemList.getElementsByTagName('li');
    //convert to an array 
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        });
    } 