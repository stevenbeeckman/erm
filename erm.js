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
						}
						,{
							id: 2
							, name: "ORDER_NAME"
							, type: "varchar"
							, length: 150
						}
					]
				}
			,{
				id: 2
				, name: "MRQR_INVOICES"
				, attributes: [
						{
							id: 4
							, name: "ID"
							, type: "int"
							, length: 11
						}
						,{
							id: 5
							, name: "INVOICE_NAME"
							, type: "varchar"
							, length: 150
						}
						,{
							id: 6
							, name: "BUDGET_LINE_ID"
							, type: "int"
							, length: 11
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
						}
						,{
							id: 8
							, name: "BUDGET_LINE_NAME"
							, type: "varchar"
							, length: 150
						}
					]
				}
		];
	}]);