const express = require('express')

module.exports = function(server){
    // API routers...
    const router = express.Router()
    server.use('/api', router)

    //Rotas da api
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
    router.route('/teste').get(function(req, res, next){
        res.send('Funcionou...')
    })

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}