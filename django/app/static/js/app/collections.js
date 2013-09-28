app.FriendsCollection = Backbone.Collection.extend({
	url: '/facebook/api/friend/',
	model: app.FriendModel
});

app.MutualPhotosCollection = Backbone.Collection.extend({
	url: '/facebook/api/photo/with/1463116885/',
	model: app.MutualPhotosModel
});

app.MutualLikesCollection = Backbone.Collection.extend({
	url: '/facebook/api/like/with/1463116885/',
	model: app.MutualPhotosModel
});