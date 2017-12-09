module.exports= {
  getUsers: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_users()
      .then(response=> res.status(200).json(response))
      .catch(res.status(500).json());
  }
}
