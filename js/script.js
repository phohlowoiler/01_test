angular.module('appBookmarks', [])
	.controller('MainCtrl', function( $scope ){
		$scope.categories = [
			{"id": 0, "name": "Development"},
			{"id": 1, "name": "Design"},
			{"id": 2, "name": "Exercise"},
			{"id": 3, "name": "Useful"},
		];

		$scope.bookmarks = [
			{"id": 0, "title": "AngularJS", "url": "https://angularjs.org", "category": "development"},
			{"id": 1, "title": "jQuery", "url": "https://jquery.com/", "category": "development"},
			{"id": 2, "title": "Behance", "url": "https://www.behance.net/", "category": "design"},
			{"id": 3, "title": "Deviantart", "url": "http://www.deviantart.com/", "category": "design"},
			{"id": 4, "title": "Bootstrap", "url": "http://getbootstrap.com/components/#alerts", "category": "exercise"},
			{"id": 4, "title": "CodePen", "url": "http://codepen.io/", "category": "useful"},
			{"id": 5, "title": "Randomuser", "url": "https://randomuser.me/", "category": "useful"},
		];

		$scope.currentCategory = null;

		function setCurrentCategory(category){
			$scope.currentCategory = category;
		};

		$scope.setCurrentCategory = setCurrentCategory;
	});