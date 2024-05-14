const multer = require('multer')
const express = require('express')
const app = express()
const port = 3000
const storage = multer.diskStorage(
	{
		destination: (req, file, cb) => {
			cb(null, 'uploads/');
		},
		filename: (req, file, cb) => {
			cb(null, file.originalname);
		}
    }
)
const upload = multer({storage:storage})

app.use(express.static(__dirname))

app.get('/', (request, response) => {
	response.render("index.html")
})

app.post('/upload', upload.single('file'), (request, response) => {
	response.send("Uploaded!")
})

app.listen(port, () => {
})
