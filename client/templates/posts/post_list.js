var postData = [
{
	title: 'Introduction Telescope',
	author: 'Sacha Greif',
	url: 'http://facebook.com/'
},
{
	title: 'Meteor',
	author: 'Kiamat',
	url: 'http://erp.ptcs.co.id'
},
{
	title: 'Corporate Management System',
	author: 'PTCS',
	url: 'http://cms.ptcs.co.id'
}];
Template.postList.helpers({
	posts: function () {
		return Posts.find();
	}
});