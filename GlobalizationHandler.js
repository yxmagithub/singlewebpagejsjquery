var BindTags = {
    textBind:'text-bind'
}

var SupportedLanguages = {
    english: "English",
    spanish: "Spanish",
    french: "French",
    simplechinese: "SimpleChinese",
    traditionalchinese: "TraditionalChinese"
}

var GlobalizationHandler = {
    language: null,
    englishStrings: [],
    initialize:function(){
        //initialize English Strings
        $.getJSON( './english.json', function( data ) {
            data.English.forEach(function(entry){
                GlobalizationHandler.englishStrings[entry.id] = entry.text;
            });
        });

        //Set the Current Language
        GlobalizationHandler.language = SupportedLanguages.english;
    },

    getString:function(stringId){
        switch(GlobalizationHandler.language){
            case SupportedLanguages.english:
                return GlobalizationHandler.englishStrings[stringId];
        }
    }
}

GlobalizationHandler.initialize();
