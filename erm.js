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

		$scope.drawERD = function(){
			$("#erd").html("");

			var width = 800;
			var height = 200;

			var graph = new joint.dia.Graph;
			var paper = new joint.dia.Paper({
				el: $("#erd")
				, width: width
				, height: height
				, gridSize: 1
				, model: graph
			});

			var erd = joint.shapes.erd;

			var element = function(elm, x, y, label){
				var cell = new elm({position: {x: x, y: y}
									, attrs: {text: { text: label}}});
				graph.addCell(cell);
				return cell;
			};

			var link = function(elm1, elm2){
				var myLink = new erd.Line({ source: {id: elm1.id}, target: {id: elm2.id}});
				graph.addCell(myLink);
				return myLink;
			};

			var centerElement = element(erd.Entity, width/2, height/2, $scope.selectedEntity.name);

			// see if there are relations
			
			var relations = new Array();
			$scope.selectedEntity.attributes.forEach(function(attribute){
				attribute.relations.forEach(function(relation){
					relations.push(relation);
				});
			});

			var elements = new Array();
			for(i = 0; i < relations.length; i++){
				elements.push(element(erd.Entity, width/2 + 80*Math.cos((360/relations.length)*i/180*Math.PI), height/2 + 80*Math.sin((360/relations.length)*i/180*Math.PI), relations[i].entityName));
				link(centerElement, elements[i]).cardinality(relations[i].entityName + "." + relations[i].name);
			};
		}

		$scope.chooseRelation = function(){

		};

		$scope.addRelation = function(){
			attribute.relations.push($scope.relatedAttribute);
		};

		$scope.changeEntity = function(){

		};
	}]);