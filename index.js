import express from 'express';
import bodyParser from 'body-parser';
import dayjs from 'dayjs';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const date = dayjs().format('D MMMM YYYY');


app.listen(port, () => {
    console.log(`Port running on server ${port}`);
})


let tasks = [];


//running homepage
app.get('/', (req, res) => {
    res.render('index.ejs', {tasks, date});
})

//add new task
app.post('/add', (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    res.redirect('/');
})

app.post('/delete:index', (req, res) =>{
    const index = parseInt(req.params.index);
    if (index >= 0 && index < tasks.length){
        tasks.splice(index, 1);
    }
    res.redirect('/');
})

//reset tasks
app.post('/reset', (req, res) => {
    tasks = [];
    res.redirect('/')
})


