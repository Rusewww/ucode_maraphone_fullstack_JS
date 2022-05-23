const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://qwerty:qwerty123@cluster0.b6pb9.mongodb.net/auth_roles?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

app.get('/', function (req, res) {
    res.render('./public/registration')
})

app.post('/singup', function (req, res) {
    res.render('./public/public')
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
