

var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

exports.getID = (req,res,next) => {
  res.send('The id you specified is ' + req.params.id);

}
exports.getNameId = (req,res,next) => {
  res.send('id: ' + req.params.id + ' and name: ' + req.params.name)
}
exports.err = (req,res,next) => {
  res.send('Sorry, this is an invalid URL.');
}
exports.timeLogg = (req,res,next) => {
  console.log("tg logg " +utc)
  
  next();
}
exports.thing = (req,res,next) => {
  res.send('Things')
  
  next();
}