var PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();

var uniqueId= 4;
var items = [{id:1,name:'bread', price: '3,50'}, {id:2,name:'butter', price: '4,50'}, {id:3,name:'milk', price: '2,50'}];

app.use(express.urlencoded());

app.get("/", function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Shopping list!');
});
app.get('/items', (req, res) => {
	var shoppingList = [];
	items.forEach(item => shoppingList.push(item.name));
  res.json(shoppingList);
});
app.post('/items', (req, res) => {    
	const newItem = {...req.body, id:uniqueId++};
	items.push(newItem);
	res.sendStatus(201);
});
app.get('/items/:id', (req, res) => {
	const id = req.params.id;
	const itemFoundById = items.find(x => x.id == id);
	var text = "Product name: "+itemFoundById.name+", price: "+itemFoundById.price+".";
	res.end(text);
});
app.patch('/items/:id', (req, res) => {
	const id = req.params.id;
	const objIndex = items.findIndex((x => x.id == id));
	items[objIndex] = {...items[objIndex], ...req.body }
	res.json(items);
});
app.delete('/items/:id', (req, res) => {
	const id = req.params.id;
	const objIndex = items.findIndex((x => x.id == id));
	items.splice(objIndex, 1);
	res.json(items);
});
app.listen(PORT);



