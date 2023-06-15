const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./Model/ShortUrl')
const app = express()

//mangodb connection
mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

//registering ejs template
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


//loads the requested data from DB to display
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls })
})

//finds the full link in DB from the selected short link
//Error handling and redirects
app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
  
    shortUrl.clicks++
    shortUrl.save()
  
    res.redirect(shortUrl.full)
})
  
//Creates new entry for a ShortURl in DB 
app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})

app.listen(5500, ()=> {console.log("live on localhost/5500")})

