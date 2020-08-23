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
    var result_data = {};
  
    for (var i=0; i<data.length; i++){
        split_results = data[i].split('/');
    
        if (split_results.length < 2 ){
          continue;
        }
    
        parent = split_results[0];
        child = split_results[1];
        
        if (Object.keys(result_data).indexOf(parent)==-1) {
          var parent_child={title: parent, data: [child]}   
          result_data[parent] = parent_child;
        } 
        else { 
            result_data[parent]["data"].push(child);
          }
      }
  
    return Object.values(result_data);
  }

console.log(createMenuData(data))