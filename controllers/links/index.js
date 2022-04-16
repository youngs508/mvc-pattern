const res = require("express/lib/response");
const model = require('../../models').url;
const utils = require('../../modules/utils');
const { url } = require('../../models');

module.exports = {
    get: async (req, res) => { 
      let allUrlLink = await url.findAll();
      console.log(allUrlLink.every(one => one instanceof url))
      res.status(200).json(allUrlLink);
      console.log('All URL Link here:', JSON.stringify(allUrlLink));
    },
    post: async (req, res) => { 
        utils.getUrlTitle(req.body.url, async (err, title) => {
            let result = await url.create({
                url: req.body.url,
                title: title,
            })
            res.status(201).json(result);
        })
    },
    redirect: async (req, res) => {
        let result = await url.findOne({ where: { id: req.params.id } });
        url.update({ visits: result.visits + 1}, { where: { id: req.params.id } });
        res.redirect(result.url);
        res.status(302).send();
    }
}