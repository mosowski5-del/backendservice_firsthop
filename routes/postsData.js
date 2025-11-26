const userRoutes = (app, fs) => {



    // READ
    app.post('/update', (req, res) => {
        console.log(req.headers);
        console.log(req.body);

        res.send(req.body);
    });
};

module.exports = userRoutes;
