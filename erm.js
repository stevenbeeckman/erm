angular.module("ermApp", [])
	.controller("ERMController", ["$scope", function($scope){
		$scope.entities = [
			{
				id: 1
				, name: "MRQR_ORDERS"
				, attributes: [
						{
							id: 1
							, name: "ID"
							, type: "int"
							, length: 11
							, relations: []
						}
						,{
							id: 2
							, name: "ORDER_NAME"
							, type: "varchar"
							, length: 150
							, relations: []
						}
					]
				}
			,{
				id: 2
				, name: "MRQR_INVOICES"
				, attributes: [
						{
							id: 3
							, name: "ID"
							, type: "int"
							, length: 11
							, relations: []
						}
						,{
							id: 4
							, name: "ORDER_ID"
							, type: "int"
							, length: 1
							, relations: [{fqn: "MRQR_ORDERS.ID"}]
						},{
							id: 5
							, name: "INVOICE_NAME"
							, type: "varchar"
							, length: 150
							, relations: []
						}
						,{
							id: 6
							, name: "BUDGET_LINE_ID"
							, type: "int"
							, length: 11
							, relations: []
						}
					]
				}
			,{
				id: 3
				, name: "MRQR_BUDGET_LINES"
				, attributes: [
						{
							id: 7
							, name: "ID"
							, type: "int"
							, relations: []
						}
						,{
							id: 8
							, name: "BUDGET_LINE_NAME"
							, type: "varchar"
							, length: 150
							, relations: []
						}
					]
				}
		];

		$scope.selectedEntity = $scope.entities[1];
		$scope.newfqn = "";

		$scope.chooseRelation = function(){

		};

		$scope.addRelation = function(){
			attribute.relations.push($scope.fqn);
		};

		$scope.changeEntity = function(){

		};
	}]);