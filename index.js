const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params;
    let sound;
    if (name == "dog") {
        sound = "멍멍";
    } else if (name == "cat") {
        sound = '야옹';
    } else if (name == "pig") {
        sound = '꿀꿀';
    } else {
        sound = '알 수 없음';
    }
    res.json({ sound });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
