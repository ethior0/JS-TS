exports.middlewareGlobal = (req, res, next) => {
  if(req.body.nome) {
    req.body.nome = req.body.nome.replace("Miranda", "NÃO USE MIRANDA");
    console.log();
    console.log(`Vi que você postou ${req.body.nome}`);
    console.log();
  }
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log("Sou seu outro middleware");
  next();
};