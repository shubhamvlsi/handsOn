var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope){
	$scope.slides = [
	                 {image: 'img/img1.jpg', description: 'Image 00'},
	                 {image: 'img/img2.jpg', description: 'Image 01'},
	                 {image: 'img/img3.jpg', description: 'Image 02'},
	                 {image: 'img/img4.jpg', description: 'Image 03'},
	                 {image: 'img/img5.jpg', description: 'Image 04'}
	             ];
});