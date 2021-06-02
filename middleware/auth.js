// it is the middle ware 

module.exports = {

	// here the next is just a fuction which will just move it to next middleware
	ensureAuth: function(req,res,next) {
          if (req.isAuthenticated()){
          	return next()
          } else{
          	res.redirect('/')
          }
	},

	ensureGuest: function(req,res,next) {
		if (req.isAuthenticated()){
          	res.redirect('/dashboard')
          } else{
          	return next()
          }
	}

}