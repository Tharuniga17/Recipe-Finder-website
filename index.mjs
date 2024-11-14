import express from "express";
const app= express();
app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/about", (req, res) => {
    res.send("I am tharuniga");
});
const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port ${port}.');
})