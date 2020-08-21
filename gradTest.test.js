function createMenuData(data) {

  // console.log(data)
  var result_data = {};

  for (var i=0; i<data.length; i++){
    //console.log(data[i])//
    split_results = data[i].split('/');
    //console.log(split_results)
      //Skips this iteration of the loop there is no child listed.
      if (split_results.length < 2 ){
        continue;
      }

     var parent = split_results[0];
     var child = split_results[1];
      //console.log(parent, achild)

      if (Object.keys(result_data).indexOf(parent)==-1) {
        var parent_child={title: parent, data: [child]}   
        result_data[parent] = parent_child;
      } else { 
          result_data[parent]["data"].push(child);
        }
    }

  return Object.values(result_data);
}



describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
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
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      // console.log(expectedResult)
      expect(actualResult).toMatchObject(expectedResult);
      
    });
  });

