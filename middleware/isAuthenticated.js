exports.isAuthenticated = (req, res, next) => {
    let checker =
      req.body &&
      req.authentication &&
      req.body.userId == req.authentication._id;
    if (!checker) {
      return res.status(403).json({
        error: "ACCESS DENIED",
      });
    }
    next();
  };
  