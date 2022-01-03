module.exports = {
    index: async(req, res) => {
        try {
           res.render('index', {
               title: 'ExpressJS '
           }); 
        } catch (err) {
            console.log(err);
        }
    }
}