
const public = require('./public')

module.exports = (server) => {


    server.get('/api/calendar/me/2016-10-01',(req,res)=>{
        res.send(JSON.stringify([
            {acronym:'ES',start:'2016-10-01 10:00',end:'2016-10-01 11:30'}
        ]))
    })
    server.get('/api/calendar/me/2016-10-02',(req,res)=>{
        res.send(JSON.stringify([
            {acronym:'ES',start:'2016-10-02 10:00',end:'2016-10-02 11:30'}
        ]))
    })
    server.get('/api/calendar/me/2016-10-03',(req,res)=>{
        res.send(JSON.stringify([
            {acronym:'ES',start:'2016-10-03 10:00',end:'2016-10-03 11:30'}
        ]))
    })
    server.get('/api/calendar/me/2016-10-04',(req,res)=>{
        res.send(JSON.stringify([
            {acronym:'ES',start:'2016-10-04 10:00',end:'2016-10-04 11:30'}
        ]))
    })
    // public static files
    public(server)

}
