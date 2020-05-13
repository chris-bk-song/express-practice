const express = require('express');
const app = express();
const port = 8000;

app.get("/", (req, res)=>res.send(`
<!DOCTYPE html>
<html>
<head><title>Hey this is cool</title></head>
<body>
<h1>Hello World!</h1>
${req.query.page ? req.query.page: "No Page asked for"}
</body>
</html>
`));

app.listen(port, ()=>console.log(`listening on port http://localhost:${port}`));