// var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// var AuthorSchema = Schema(
// 	{
// 		first_name: {type:String, required: true, max: 100},
// 		family_name: {type: String, required: true, max: 100}, 
// 		date_of_birth: {type: Date}, 
// 		date_of_death: {type: Date},
// 	}
// );

// // Virtual for author's full name
// AuthorSchema
// .virtual('name')
// .get(function () {
// 	return this.family_name + ', ' + this.first_name;
// });

// // Virtual for author's url 
// // - we will use this property whenever we need to get a link to a particular author.
// // - declaring urls as a virtaul schema is a good idea because then the URL for an item 
// // only ever needs to be chnaged in one place. 
// AuthorSchema
// .virtual('url')
// .get(function () {
// 	return '/catalog/author/' + this._id;
// });

// // Export model
// module.exports = mongoose.model('Author', AuthorSchema);

var moment = require('moment');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

AuthorSchema
.virtual('date_of_birth_formatted')
.get(function () {
	return this.date_of_birth ? moment(this.date_of_birth).format('MMMM Do, YYYY') : '';
});

AuthorSchema
.virtual('date_of_death_formatted')
.get(function () {
	return this.date_of_death ? moment(this.date_of_death).format('MMMM Do, YYYY') : '';
});

// BookInstanceSchema
// .virtual('due_back_formatted')
// .get(function () {
//   return moment(this.due_back).format('MMMM Do, YYYY');
// });

//Export model
module.exports = mongoose.model('Author', AuthorSchema);