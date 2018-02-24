module.exports = function(app){
    
    app.get('/library', function(req, res){
        res.render('library');
        
    });
    
    app.post('/library', function(req, res){
        
    });
    
    app.delete('/library', function(req, res){
        
    });
    
}