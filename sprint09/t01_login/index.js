const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const PORT = process.env.PORT ?? 3000

const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))

const User = require('./models/user')

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

app.get('/', function (req, res    ) {
    res.render('./public/login')
})

app.post('/login', (req, res) => {
    let get = req.body
    if (!get) {
        return res.sendStatus(400)
    }
    let user = new User(get.login, get.password, get.full_name, get.email)
    user.request(res)
})

app.post('/user', function (req, res    ) {
    res.render('./public/user')
})