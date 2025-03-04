const mongoose = require('./db');
//唐帅磊
const PeopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
})
const People = mongoose.model('People', PeopleSchema,'People');
//李昊璇


//刘佳瑶


//王素怡


//张马超



//孙展翅



//赵欣乐



//甄天豪



module.exports = {
    People
}