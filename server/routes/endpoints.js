const ctrl = require('./ctrl.js')

module.exports = app => {
    app.post('/api/cardset', ctrl.createCardset)
}