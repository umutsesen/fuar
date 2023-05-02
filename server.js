
const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors')


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }))

app.use(express.json())
/* 
app.use(cookieParser())

 */
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ilkguncark.html'));
  });
  

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    /*     logger.info(`Server started and running on port: ${PORT}`) */
    });
