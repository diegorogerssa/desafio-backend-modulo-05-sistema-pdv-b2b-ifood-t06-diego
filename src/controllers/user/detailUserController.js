const detailUserController = async (req, res, next) => {
  try {
    const user = await req.user;

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

module.exports = detailUserController;
