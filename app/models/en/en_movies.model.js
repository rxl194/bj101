// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'EnMovieSchema'
var enMovieSchema = {
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	year: {
		type: String,
		default: '',
		trim: true,
		required: 'Year cannot be blank'
	},
	imdb: {
		type: String,
		default: '',
		trim: true
	},

};
var EnMovieSchema = new Schema(enMovieSchema);

// Create the 'EnMovie' model out of the 'EnMovieSchema'
exports.Schema = enMovieSchema;
exports.Model = mongoose.model('enMovie', EnMovieSchema);
