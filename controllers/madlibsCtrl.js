 app.controller('MadlibsCtrl', ['$scope', function($scope) {
    $scope.directions = "Provide the following words:";
    $scope.showInputs = true;
    $scope.gender = 'male';
    
    $scope.changeGender = function(gender) {
     $scope.gender = gender;

  	 };
    
    $scope.createStory = function(){
     //$scope.submitted = true;
 		  if($scope.madlibsInputs.$valid){
 			  $scope.showInputs = false;
 			  console.log('madlibInputs form object:', $scope.madlibsInputs);
 		  }
 	  };
 
 //so this reads: 'if form has been submitted 'and' if the required error is true, display the specified message.
    $scope.inputs = [
   		{error: "madlibsInputs.$submitted && madlibsInputs.person_name.$error.required", name: "person_name"},
   		{error: "madlibsInputs.$submitted && madlibsInputs.job_title.$error.required", name: "job_title"},
   		{error: "madlibsInputs.$submitted && madlibsInputs.tedious_task.$error.required", name: "tedious_task"},
   		{error: "madlibsInputs.$submitted && madlibsInputs.dirty_task.$error.required", name: "dirty_task"},
   		{error: "madlibsInputs.$submitted && madlibsInputs.celebrity.$error.required", name: "celebrity"},
   		{error: "madlibsInputs.$submitted && madlibsInputs.useless_skill.$error.required", name: "useless_skill"},
   		{error: "madlibsInputs.$submitted && madlibsInputs.obnoxious_celebrity.$error.required", name: "obnoxious_celebrity"},
   		{error: "madlibsInputs.$submitted && madlibsInputs.huge_number.$error.required", name: "huge_number"},
   		{error: "madlibsInputs.$submitted && madlibsInputs.adjective.$error.required", name: "adjective"}
	  ];
	  
 	  $scope.changeLibs = function(){
 		  $scope.showInputs = true;
 		  $scope.submitted = false;
 		  $scope.person_name = '';
 		  $scope.job_title = '';
 		  $scope.tedious_task = '';
 		  $scope.dirty_task = '';
 		  $scope.celebrity =  '';
 		  $scope.useless_skill = '';
 		  $scope.obnoxious_celebrity = '';
 		  $scope.huge_number = '';
 		  $scope.adjective =  '';
 	 };
    
}]);