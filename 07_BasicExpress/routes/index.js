﻿
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express' });

    console.log('request arrived at index');
};