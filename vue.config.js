module.exports = {
  devServer: {
    publicPath:
      process.env.NODE_ENV === "production" ? "/marvelProjectJS/" : "/"
  }
};
