'use strict';
const express = require('express');
const handleNotFound = require('./handlers/400');
const handleServerError = require('./handlers/500');
const validator=require('./middlewar/validator');
const logger=require('./middlewar/logger');
const app = express();

// ROUTES *******************/
app.use(logger);

app.get('/', (req, res) => {
    res.status(200).send('hello');
});

app.get('/person',validator(),(req,res)=>{
    res.status(200).json({
        name:req.name
    })
})


////////////////////////////k

app.use('*', handleNotFound);
app.use(handleServerError);

// FUNCTIONS ***************************************************************/

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`server is lestining on port:${PORT}`);
    });
}
// EXPORTS
module.exports = {
    app: app,
    start: start
};
