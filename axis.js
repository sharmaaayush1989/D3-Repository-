function TodoCtrl($scope) {
 $scope.Interpolation=['linear','basis','basis-open','basis-closed'];
$scope.axisoption=[{x:'10',y:'10'},{x:'20',y:'20'},{x:'30',y:'30'}];
$scope.AddNewAxis=function(){

 $scope.axisoption.push({x:'0',y:'0'});
}
$scope.DeleteAxis=function($index){
  $scope.axisoption.splice($index,1);
}
$scope.DrawGraph=function(){


    d3.selectAll("svg").remove();
	
    xMin=$scope.xFrom;
	yMin=$scope.yFrom;
	xMax=$scope.xTo;
	yMax=$scope.xTo;
	xPartition=$scope.xPart;
	yPartition=$scope.yPart;	
	initialise();
	DrawAxis();
	if($scope.GridLines)
	{
		DrawGrid();
	}
	lineChart($scope);
	

}
}
