const data = [
    "parent1/parent1child",
    "parent1/parent1child2",
    "parent2/parent2child",
    "parent2/parent2child2",
    "parent1/parent1child3",
    "parent3",
    "parent3/parent3child1",
    "parent4"
  ];

function createMenuData(data) {
    var expectedResults = {};
  
    for (var i=0; i<data.length; i++){
      split_results = data[i].split('/');
   
      if (split_results.length > 1){
          parent = split_results[0];
          child = split_results[1];
      }
  
      //Skips this iteration of the loop there is no child listed.
      if (split_results.length == 1){
        continue;
      }
  
      if (Object.keys(expectedResults).indexOf(parent)==-1) {
        var parent_child={title: parent, data: [child]}   
        expectedResults[parent] = parent_child;
      } else { 
          expectedResults[parent]["data"].push(child);
        }
    }
  
    return Object.values(expectedResults);
  }

console.log(createMenuData(data))