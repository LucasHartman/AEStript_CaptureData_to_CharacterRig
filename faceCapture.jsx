 // setup interface
var resourceString = 
"group{orientation:'column',\
    mainTextGroup: Group{orientation:'row',\
        mainTextLabel:StaticText{text:'Images Folder'},\
        mainText: EditText{text:'enter path Images Folder here'}\
    },\
    mainTextGroup: Group{orientation:'row',\
        mainTextLabel:StaticText{text:'Video Folder'},\
        mainText: EditText{text:'enter path Video Folder here'}\
    },\
    applyButton: Button{text:'Import'}\
    animButton: Button{text:'Animate Character'}\
}";

// setup window
function createUserInterface (thisObj,userInterfaceString,scriptName){
    var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", scriptName,
								undefined,{resizeable: true});
    if (pal == null) return pal;
    
    var UI=pal.add(userInterfaceString);
    
    pal.layout.layout(true);
    pal.layout.resize();
    pal.onResizing = pal.onResize = function () {
        this.layout.resize();
    }
    if ((pal != null) && (pal instanceof Window)) {
            pal.show();
	}
    return UI;
};



// setup button interface
//var myUI = "group{myButton : Button {text:'Apply'}}";

// run function
//createUserInterface (this,myUI,'lower third script');
 

//================================================================================================ 

 
 function setup () {

    var folderTarget  = app.project.items.addFolder("AA_Character"); // create folder (1)
    var width = 1000;
    var height = 1000;
    var time = 16;
    
     var CharacterComp = app.project.items.addComp("AA_Character", width, height, 1, time, 24); // create comp (2)
     var compositionToMove = app.project.item(2); // select comp
     var moveComp = compositionToMove.parentFolder = folderTarget; // comp to folder
     
    var bodyComp = app.project.items.addComp("AB_Body", width, height, 1, time, 24); // create comp (3)
    var compositionToMove = app.project.item(3); // select comp
    var moveComp = compositionToMove.parentFolder = folderTarget; // comp to folder
    var insertComp = app.project.item(2).layers.add(compositionToMove); // insert comp into Charactercomp
    
     var headComp = app.project.items.addComp("AC_Head", width, height, 1, time, 24); // create comp (3)
    var compositionToMove = app.project.item(4); // select comp
    var moveComp = compositionToMove.parentFolder = folderTarget; // comp to folder
    var insertComp = app.project.item(2).layers.add(compositionToMove); // insert comp into Charactercomp
    
    var mouthcomp = app.project.items.addComp("AC_mouth", width, height, 1, time, 24); // create comp (3)
    var compositionToMove = app.project.item(5); // select comp
    var moveComp = compositionToMove.parentFolder = folderTarget; // comp to folder
    var insertComp = app.project.item(4).layers.add(compositionToMove); // insert comp into Charactercomp

    // set Time Remap on Layer
    (function remapper() {
        app.beginUndoGroup("Time Remap Layer");
        var comp = app.project.item(4); // select comp
        var layer = comp.layer('AC_mouth'); // select layer
        layer.timeRemapEnabled = true;
        var timeRemapProp = layer.property("ADBE Time Remapping");
        var times = [0, 0, 4, time];
        var values = [0, 0, 4, time];
        timeRemapProp.setValuesAtTimes(times, values);
        app.endUndoGroup();
    })();

    var pupcomp = app.project.items.addComp("AD_pupils", width, height, 1, time, 24); // create comp (3)
    var compositionToMove = app.project.item(6); // select comp
    var moveComp = compositionToMove.parentFolder = folderTarget; // comp to folder
    var insertComp = app.project.item(4).layers.add(compositionToMove); // insert comp into Charactercomp
    
    var pupcomp = app.project.items.addComp("AD_lids", width, height, 1, time, 24); // create comp (3)
    var compositionToMove = app.project.item(7); // select comp
    var moveComp = compositionToMove.parentFolder = folderTarget; // comp to folder
    var insertComp = app.project.item(4).layers.add(compositionToMove); // insert comp into Charactercomp
    
        // set Time Remap on Layer
    (function remapper() {
        app.beginUndoGroup("Time Remap Layer");
        var comp = app.project.item(4); // select comp
        var layer = comp.layer('AD_lids'); // select layer
        layer.timeRemapEnabled = true;
        var timeRemapProp = layer.property("ADBE Time Remapping");
        var times = [0, 0, 4, time];
        var values = [0, 0, 4, time];
        timeRemapProp.setValuesAtTimes(times, values);
        app.endUndoGroup();
    })();



    function startTime(comp) {
        // set start time on each layer in the comp
        var time = 0; // initial time (in seconds)
        // loop through all layers in comp
        for(var i = 1; i <= comp.layers.length; i++) {
            // set layer startTime based on current time value
            comp.layers[i].startTime = time;
            // update time to hold outPoint time of this layer
            // which will next layer's start time
            time = comp.layers[i].outPoint;
        }
    }
    
    var newFolder  = app.project.items.addFolder("AE_subMouth"); // create folder (1)
    var compositionToMove = app.project.item(8); // select comp
    var moveComp = compositionToMove.parentFolder = folderTarget; // comp to folder
    
    var mouthCompA = app.project.items.addComp("AF_mouthA", width, height, 1, 1, 24); // create comp (3)
    var compositionToMove = app.project.item(9); // select comp
    var moveComp = compositionToMove.parentFolder = newFolder; // comp to folder
    var insertComp = app.project.item(5).layers.add(compositionToMove); // insert comp into Charactercomp
    
    var mouthCompA = app.project.items.addComp("AG_mouthB", width, height, 1, 1, 24); // create comp (3)
    var compositionToMove = app.project.item(10); // select comp
    var moveComp = compositionToMove.parentFolder = newFolder; // comp to folder
    var insertComp = app.project.item(5).layers.add(compositionToMove); // insert comp into Charactercomp
    
    var mouthCompA = app.project.items.addComp("AH_mouthC", width, height, 1, 1, 24); // create comp (3)
    var compositionToMove = app.project.item(11); // select comp
    var moveComp = compositionToMove.parentFolder = newFolder; // comp to folder
    var insertComp = app.project.item(5).layers.add(compositionToMove); // insert comp into Charactercomp
    
    var mouthCompA = app.project.items.addComp("AI_mouthD", width, height, 1, 1, 24); // create comp (3)
    var compositionToMove = app.project.item(12); // select comp
    var moveComp = compositionToMove.parentFolder = newFolder; // comp to folder
    var insertComp = app.project.item(5).layers.add(compositionToMove); // insert comp into Charactercomp

    startTime(app.project.item(5))
    
    
    var newFolder  = app.project.items.addFolder("AJ_subLids"); // create folder (1)
    var compositionToMove = app.project.item(13); // select comp
    var moveComp = compositionToMove.parentFolder = folderTarget; // comp to folder
    
    var mouthCompA = app.project.items.addComp("AK_LidA", width, height, 1, 1, 24); // create comp (3)
    var compositionToMove = app.project.item(14); // select comp
    var moveComp = compositionToMove.parentFolder = newFolder; // comp to folder
    var insertComp = app.project.item(6).layers.add(compositionToMove); // insert comp into Charactercomp
    
    var mouthCompA = app.project.items.addComp("AL_LidB", width, height, 1, 1, 24); // create comp (3)
    var compositionToMove = app.project.item(15); // select comp
    var moveComp = compositionToMove.parentFolder = newFolder; // comp to folder
    var insertComp = app.project.item(6).layers.add(compositionToMove); // insert comp into Charactercomp
    
    var mouthCompA = app.project.items.addComp("AM_LidC", width, height, 1, 1, 24); // create comp (3)
    var compositionToMove = app.project.item(16); // select comp
    var moveComp = compositionToMove.parentFolder = newFolder; // comp to folder
    var insertComp = app.project.item(6).layers.add(compositionToMove); // insert comp into Charactercomp
    
    var mouthCompA = app.project.items.addComp("AN_LidD", width, height, 1, 1, 24); // create comp (3)
    var compositionToMove = app.project.item(17); // select comp
    var moveComp = compositionToMove.parentFolder = newFolder; // comp to folder
    var insertComp = app.project.item(6).layers.add(compositionToMove); // insert comp into Charactercomp
    
    startTime(app.project.item(6))

    var comp = app.project.item(2);
    comp.openInViewer();
    }



function importImages () {
    var newFolder  = app.project.items.addFolder("BA_Images"); // create folder (1)
    var folderTarget = app.project.item(1);
    var compositionToMove = app.project.item(18); // select comp
    var moveComp = compositionToMove.parentFolder = folderTarget; // comp to folder

    var item;
    var files = Folder("C:/Users/12213119/Documents/Projects/faceTracking/person").getFiles(); // get files from folder
    
    for (var i=0; i<files.length; i++) {
        // import 1 file        
        item = app.project.importFile(new ImportOptions(files[i]));
        var compositionToMove = app.project.item(19+i); // select comp
        var moveComp = compositionToMove.parentFolder = newFolder; // comp to folder
    }
}


function insertImages() {

    app.project.item(3).layers.add(app.project.item(19)); // body
    app.project.item(4).layers.add(app.project.item(20)); // head
    app.project.item(7).layers.add(app.project.item(21)); // pupils
    app.project.item(9).layers.add(app.project.item(22)); // sub mouth
    app.project.item(10).layers.add(app.project.item(23)); // sub mouth
    app.project.item(11).layers.add(app.project.item(24)); // sub mouth
    app.project.item(12).layers.add(app.project.item(25)); // sub mouth
    app.project.item(14).layers.add(app.project.item(26)); // sub lid
    app.project.item(15).layers.add(app.project.item(27)); // sub lid
    app.project.item(16).layers.add(app.project.item(28)); // sub lid
    }

function arrangeLayers() {
    // arrange layers
    app.project.item(4).layer(1).moveToEnd();
    //app.project.item(4).layer(3).moveToBeginning();
    //app.project.item(4).layer(5).moveToBeginning();
    }


function importVideo () {
    var newFolder  = app.project.items.addFolder("CA_Videos"); // create folder (1)
    var folderTarget = app.project.item(1);
    var compositionToMove = app.project.item(29); // select comp
    var moveComp = compositionToMove.parentFolder = folderTarget; // comp to folder

    var item;
    var files = Folder("C:/Users/12213119/Documents/Projects/faceTracking/video").getFiles(); // get files from folder
    
    for (var i=0; i<files.length; i++) {
        // import 1 file        
        item = app.project.importFile(new ImportOptions(files[i]));
        var compositionToMove = app.project.item(30+i); // select comp
        var moveComp = compositionToMove.parentFolder = newFolder; // comp to folder
    }

}


function motionHead(){
    
    // Utilities
    var layerName = "test.mp4" // footage layer name
    var layer = app.project.item(2).layer(layerName)("Effects")("Face Track Points") // get Layer root
    var numKeys = layer("Left Pupil").numKeys; // number of keys
    var fd=  app.project.activeItem.frameDuration // duration of a frame in second


    for (var i=1; i < numKeys; i++) {
        
        getKey = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Nose Tip").keyValue(i);

         // motion pos
        addKey = app.project.item(2).layer("AC_Head").property("Transform").property("Position").addKey(fd*i); // key 
        setval =app.project.item(2).layer("AC_Head").property("Transform").property("Position").setValueAtKey( i, [getKey[0].toFixed(2)/5+400, getKey[1].toFixed(2)/5+400] );       
         // motion rot
        addKey = app.project.item(2).layer("AC_Head").property("Transform").property("Rotation").addKey(fd*i); // key 
        setVal = app.project.item(2).layer("AC_Head").property("Transform").property("Rotation").setValueAtKey( i, getKey[0].toFixed(2)/30-10);
        }
}


function motionMouth() {
    
    // Utilities
    var layerName = "test.mp4" // footage layer name
    var layer = app.project.item(2).layer(layerName)("Effects")("Face Track Points") // get Layer root
    var numKeys = layer("Left Pupil").numKeys; // number of keys
    var fd=  app.project.activeItem.frameDuration // duration of a frame in second

    min = 9999;
    max = 0;

    for (var i=1; i < numKeys; i++) {
         // get Pos
        getKeyTop = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Mouth Top").keyValue(i);
        getKeyBtm = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Mouth Bottom").keyValue(i);
        
        ib = getKeyBtm[1].toFixed(2) - getKeyTop[1].toFixed(2)   ;
        //$.writeln("ib =");
        //$.writeln( ib.toFixed(2) );
        
        if (ib > max) { max = ib.toFixed(2) }
        if (ib < min) { min = ib.toFixed(2) }
    }

    $.writeln("max =");
    $.writeln( max );
    
    $.writeln("min =");
    $.writeln( min);
    
     mid = max + min;
     mid = parseFloat(mid).toFixed(2) / 2;
    $.writeln("middle =");
    $.writeln( mid );
    
    
     tq = max + mid;
     tq = parseFloat(tq).toFixed(2) / 2;
     tq = tq.toFixed(2);
    $.writeln("tq =");
    $.writeln( tq);

     q = min + mid;
     q = parseFloat(q).toFixed(2) / 2;
     q = q.toFixed(2);
    $.writeln("q =");
    $.writeln( q);    
   
    
    for (var i=1; i < numKeys; i++) {
         // get Pos
        getKeyTop = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Mouth Top").keyValue(i);
        getKeyBtm = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Mouth Bottom").keyValue(i);
        
        ib = getKeyBtm[1].toFixed(2) - getKeyTop[1].toFixed(2)   ;
        //$.writeln("ib =");
        //$.writeln( ib.toFixed(2) );
        
        if (ib < q ) { 
            addKey = app.project.item(4).layer("AC_mouth").property("Time Remap").addKey(fd*i); // key 
            setval = app.project.item(4).layer("AC_mouth").property("Time Remap").setValueAtKey( i, 3 );       
            }
        
        if ( ib > q && ib < mid ) { 
            addKey = app.project.item(4).layer("AC_mouth").property("Time Remap").addKey(fd*i); // key 
            setval = app.project.item(4).layer("AC_mouth").property("Time Remap").setValueAtKey( i, 2);       
            }
        
        if ( ib > mid && ib < tq) { 
            addKey = app.project.item(4).layer("AC_mouth").property("Time Remap").addKey(fd*i); // key 
            setval = app.project.item(4).layer("AC_mouth").property("Time Remap").setValueAtKey( i,1);       
            }
        
        if ( ib >tq ) { 
            addKey = app.project.item(4).layer("AC_mouth").property("Time Remap").addKey(fd*i); // key 
            setval = app.project.item(4).layer("AC_mouth").property("Time Remap").setValueAtKey( i, 0);       
            }
    }
}


function eyes() {
    
    // Utilities
    var layerName = "test.mp4" // footage layer name
    var layer = app.project.item(2).layer(layerName)("Effects")("Face Track Points") // get Layer root
    var numKeys = layer("Left Pupil").numKeys; // number of keys
    var fd=  app.project.activeItem.frameDuration // duration of a frame in second
    
     for (var i=1; i < numKeys; i++) {
        inner = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Left Eyebrow Inner").keyValue(i);
        mid = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Left Eyebrow Middle").keyValue(i);
        out = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Left Eyebrow Outer").keyValue(i);

        disA = mid - inner;
        disA = parseInt(disA);
        disB = out - mid;
        disB = parseInt(disB);

        maxA = 0;
        minA = 9999;

        maxB = 0;
        minB = 9999

        if (disA > maxA) {maxA = disA }
        if (disA < minA) {minA = disA }

        if (disB > maxA) {maxB = disB }
        if (disB < minA) {minB = disB }
    
    }

    $.writeln(" maxA=");
    $.writeln( maxA);

    $.writeln(" minA=");
    $.writeln( minA);

    $.writeln(" maxB=");
    $.writeln( maxB);

    $.writeln(" minB=");
    $.writeln( minB);    
      
    for (var i=1; i < numKeys; i++) {
         
        inner = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Left Eyebrow Inner").keyValue(i);
        mid = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Left Eyebrow Middle").keyValue(i);
        out = app.project.item(2).layer("test.mp4").property("Effects").property("Face Track Points").property("Left Eyebrow Outer").keyValue(i);

        disA = mid - inner;
        disA = parseInt(disA);
        disB = out - mid;
        disB = parseInt(disB);

        a = mid[0] - inner[0];

         addKey = app.project.item(7).layer("BD_pupils.png").property("Transform").property("Position").addKey(fd*i); // key 
         setVal = app.project.item(7).layer("BD_pupils.png").property("Transform").property("Position").setValueAtKey( i, [ 560-a , 500 ] ); 
        }   


    }





//===============================================================

 // run function
 UI = createUserInterface (this,resourceString,'motiontrack Character');
 
 UI.applyButton.onClick = function() {
     
     setup();
    importImages();
    insertImages();
    arrangeLayers();
    importVideo();
    
    alert("Setup is complete, next facetrack the  vidoe file in the AA_Character composition");
    }

UI.animButton.onClick = function() {
    motionHead();
    motionMouth();
    eyes();   
    }

/*
setup()
importImages()
insertImages()
arrangeLayers()
importVideo()
//motionHead()
//motionMouth()
//eyes()
*/