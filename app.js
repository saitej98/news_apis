const express= require("express");
const axios= require('axios');
const app = express();


const PORT=process.env.PORT || 8080;

app.get("/", async (req, res)=>{
	apiKey = "36f3e29b704f41339af8439dc1228334";
	var data='';
	var url='https://newsapi.org/v2/everything?q=India&apiKey='+apiKey;
var news =await axios.get(url).then((response)=>{
		console.log(response.status);
		data = response.data;
		return data;
	}).catch(err=>{
		console.log(err)
	})
	// console.log(news);
	res.render('index',{news:news.articles,title:"Home"});
});

app.get('/news',async (req,res)=>{
	apiKey = process.env.API;
	var data='';
	var url='https://newsapi.org/v2/top-headlines?country=in&apiKey='+apiKey;
var news =await axios.get(url).then((response)=>{
		console.log(response.status);
		data = response.data;
		// res.render('index',{news:data.articles})
		return data;
	}).catch(err=>{
		console.log(err)
	})
	// console.log(news);
	res.render('index',{news:news.articles,title:"Top-Headline"});
})

app.post('/search',async (req,res)=>{
	// console.log(req.body.query)
	apiKey = process.env.API;
	var data='';
	var url='https://newsapi.org/v2/everything?q='+req.body.query+'&apiKey='+apiKey;
var news =await axios.get(url).then((response)=>{
		console.log(response.status);
		data = response.data;
		// res.render('index',{news:data.articles})
		return data;
	}).catch(err=>{
		console.log(err)
	})
	// console.log(news);
	res.render('index',{news:news.articles,title:req.body.query});
})


app.listen(PORT,()=>{console.log(`Server is started on http://localhost:${PORT}`);})