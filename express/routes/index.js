
/*
 * GET home page.
 */

var requests = 0;

exports.index = function(req, res){
  requests++;
  res.render('index', { title: 'Express', requests: requests })
};