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
			{"id": 5, "title": "CodePen", "url": "http://codepen.io/", "category": "useful"},
			{"id": 6, "title": "Randomuser", "url": "https://randomuser.me/", "category": "useful"}
		];

		$scope.newBookmark = null;

		$scope.currentCategory = null;

		function setCurrentCategory(category){
			$scope.currentCategory = category;

			cancelEditing();
			cancelCreating();
		};

		function isCurrentCategory( category ){
			//return category !== null && category=== $scope.currentCategory;
			return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
		}

		$scope.setCurrentCategory = setCurrentCategory;
		$scope.isCurrentCategory = isCurrentCategory;

		// CRUD
		
		function resetCreateForm(){
			$scope.newBookmark = {
				'title': '',
				'url': '',
				'category': $scope.currentCategory
			};

		};

		function createBookmark(bookmark){

			$scope.newBookmark = angular.copy(bookmark);
			$scope.newBookmark.id = $scope.bookmarks.length;
			$scope.newBookmark.category = $scope.currentCategory.name;
			console.log($scope.newBookmark);
			$scope.bookmarks.push($scope.newBookmark);

			resetCreateForm();
		};

		$scope.createBookmark = createBookmark;

		$scope.editBookmark = null;

		function setEditingBookmark(bookmark) {
			$scope.editBookmark = angular.copy(bookmark);
		}

		function updateBookmark(bookmark){
			var index = _.findIndex($scope.bookmarks, function(b){
				return b.id == bookmark.id;
			} );

			$scope.bookmarks[index] = bookmark;
			$scope.editBookmark = null;
			$scope.isEditing = false;
		}

		function isSelectedBookmark(bookmarkId){
			return $scope.editBookmark !== null && $scope.editBookmark.id === bookmarkId;
		}

		$scope.isSelectedBookmark = isSelectedBookmark;
		$scope.setEditingBookmark = setEditingBookmark;
		$scope.updateBookmark = updateBookmark;

		// CREATING AND EDITING
		
		$scope.isCreating = false;
		$scope.isEditing = false;

		function startCreating(){
			$scope.isCreating = true;
			$scope.isEditing = false;
		};

		function cancelCreating() {
			$scope.isCreating = false;
		}

		function startEditing() {
			$scope.isCreating = false;
			$scope.isEditing = true;
		};

		function cancelEditing() {
			$scope.isEditing = false;
		}

		function shoulShowCreating(){
			return !$scope.isEditing && $scope.currentCategory;
		}

		function shouldShowEditing(){
			return $scope.isEditing && !$scope.isCreating;
		}

		$scope.startCreating = startCreating;
		$scope.cancelCreating = cancelCreating;
		$scope.startEditing = startEditing;
		$scope.cancelEditing = cancelEditing;
		$scope.shoulShowCreating = shoulShowCreating;
		$scope.shouldShowEditing = shouldShowEditing;

	});