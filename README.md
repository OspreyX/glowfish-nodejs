
glowfi.sh in a Node Way
-----------

**Installation**

    npm install glowfish

**Setup**

    var Glower = require('glowfish');
    var glower = new Glower('<GLOWFISH_SID>', '<GLOWFISH_AUTH_TOKEN>')

**Useage**

Get ready for some simple machine learning...

*Training*

    glower.train({ # the data set
	    'feature_name1': [1, 2, 3, 4, ...etc],
	    'feature_name2': [9, 4, 5, 6, ...etc]
    }, { # the response set
	    'class': [4, 3, 5, 6, ...etc]
	  }, function(err, response){
      if(err){
        // UH OH!
      } else {
        // all good here
      }
    })

*Training using CSVs*

    glower.train_csv('./data_set.csv', './response.csv', function(err, response){
      if(err){
        // UH OH!
      } else {
        // all good here
      }
    })

*Predict*
It's important to note that predicting will throw an error if you have not trained against a data set first.

    glower.predict({ # the data set
	    'feature_name1': [1, 2, 3, 4, ...etc],
	    'feature_name2': [9, 4, 5, 6, ...etc]
    }, function(err, response){
      if(err){
        // UH OH!
      } else {
        // all good here
      }
    })
    
*Predict using CSVs*

    glower.predict_csv('./data_set.csv', function(err, response){
      if(err){
        // UH OH!
      } else {
        // all good here
      }
    })

*Clustering*

    glower.cluster({ # the data set
	    'feature_name1': [1, 2, 3, 4, ...etc],
	    'feature_name2': [9, 4, 5, 6, ...etc]
    }, function(err, response){
      if(err){
        // UH OH!
      } else {
        // all good here
      }
    })

*Clustering using CSVs*

    glower.cluster_csv('./data_set.csv', function(err, response){
      if(err){
        // UH OH!
      } else {
        // all good here
      }
    })

*Feature Selection*

    glower.feature_select({ # the data set
	    'feature_name1': [1, 2, 3, 4, ...etc],
	    'feature_name2': [9, 4, 5, 6, ...etc]
    }, { # the response set
	    'class': [4, 3, 5, 6, ...etc]
    }, function(err, response){
      if(err){
        // UH OH!
      } else {
        // all good here
      }
    })
    
*Feature Selection using CSVs*

    glower.feature_select_csv('./data_set.csv', './response.csv', function(err, response){
      if(err){
        // UH OH!
      } else {
        // all good here
      }
    });

**CSV File Format**

*Data Set*

    Feature 1, Feature 2, Feature 3,
    1, 2, 3,
    4, 5, 6,
    7, 8, 9

*Response Set*

    Response Key
    1
    2
    3

**Further Documentation**

Docs - http://glowfish.readme.io/  
Registration - http://glowfi.sh/
