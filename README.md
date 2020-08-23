# Hello! Welcome to my submission for the ECS Technical Test!

You will find my solution in [gradTest.test.js]

## Setup
Use 'git clone' to clone this repository to your local machine

Install yarn or npm globally

Run 'yarn' or 'npm install'

Use the test runner 'jest' to run gradTest.test.js

*(Spoiler Alert: the test passes!)*

## My Process
The language I feel most comfortable with right now is Python so I decided for this challenge, I would write my logic in Python first and then convert the code into JavaScript. 

This is my brain on Python:
    
    expectedResults = {}

    for value in data:

        split_results = value.split('/')

        if len(split_results) > 1:
            parent = split_results[0]
            child = split_results[1]
        
            if parent not in expectedResults.keys():
                
                parent_child={"title": parent, "data": [child]}
                
                expectedResults[parent] = parent_child
                
            else:
                
                expectedResults[parent]["data"].append(child) 
        
            
    print(list(expectedResults.values()))

After successfully getting the desired output in Python, I then used every corner of the internet to help translate this into JavaScript. I used the file [parent_child.js], which simply has the input data and the createMenuData function, to ensure I was getting the correct output in JavaScript. When running [parent_child.js], I did, in fact, get the correct data structure! 

I took time here to look for ways to clean up the code and make it more readable by humans. 

## Mistakes were made... and then fixed. 

Once the code was translated into JavaScript and I was getting the desired output in [parent_child.js], I celebrated because I foolishly thought I was done. 

However, when I put the code into the test suite, the test were not passing. "How dare you make a mockery of me," I yelled at my laptop, yielding no response. 

The error message said the expected output and the actual output didn't match and was producing "title: [Window]."

The issue ended up being that I didn't write 'var' in front of the two variables I created in lines 10 and 11.

    parent = split_results[0];
    child = split_results[1];

Once I fixed this section, the test passed, the heavens opened and the angels sang. 

