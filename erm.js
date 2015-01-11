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
							, entityName: "MRQR_ORDERS"
							, type: "int"
							, length: 11
							, relations: []
						}
						,{
							id: 2
							, name: "ORDER_NAME"
							, entityName: "MRQR_ORDERS"
							, type: "varchar"
							, length: 150
							, relations: []
						}
						,{
							id: 9
							, name: "BUDGET_LINE_ID"
							, entityName: "MRQR_ORDERS"
							, type: "int"
							, length: 11
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
							, entityName: "MRQR_INVOICES"
							, type: "int"
							, length: 11
							, relations: []
						}
						,{
							id: 4
							, name: "ORDER_ID"
							, entityName: "MRQR_INVOICES"
							, type: "int"
							, length: 1
							, relations: [
											{
												id: 1
												, name: "ID"
												, entityName: "MRQR_ORDERS"
												, type: "int"
												, length: 11
												, relations: []
											}
										]
						},{
							id: 5
							, name: "INVOICE_NAME"
							, entityName: "MRQR_INVOICES"
							, type: "varchar"
							, length: 150
							, relations: []
						}
						,{
							id: 6
							, name: "BUDGET_LINE_ID"
							, entityName: "MRQR_INVOICES"
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
							, entityName: "MRQR_BUDGET_LINES"
							, type: "int"
							, relations: []
						}
						,{
							id: 8
							, name: "BUDGET_LINE_NAME"
							, entityName: "MRQR_BUDGET_LINES"
							, type: "varchar"
							, length: 150
							, relations: []
						}
					]
				}
		];

		$scope.selectedEntity = $scope.entities[1];
		$scope.relatedEntity = new Object();
		$scope.relatedAttribute = new Object();

		$scope.newfqn = "";

		$scope.chooseRelation = function(){

		};

		$scope.addRelation = function(){
			attribute.relations.push($scope.relatedAttribute);
		};

		$scope.changeEntity = function(){

		};
	}]);