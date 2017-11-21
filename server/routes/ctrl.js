module.exports = {

    createCardset: (req, res) => {
        req.app
        .get('db')
        .postcardset(req.body)
        .then(cardset => res.json(data))
        .catch(err => res.json(err))
    }
}