module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Acsess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acsess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}