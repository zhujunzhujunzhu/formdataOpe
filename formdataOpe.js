var formdataOpe = {
    // json to formdata
    JSON2FormData:function(json) {
        var formdata = new FormData();
        for (let key in json) {
            formdata.append(key, json[key])
        }
        return formdata
    },
     // formdata to json
     FormData2JSON: function(formdata) {
        var json = {}
        var entries = formdata.entries();
        var item = entries.next();
        console.log(item)
        while (!item.done) {
            json[item.value[0]] = item.value[1];
            item = entries.next();
        }
        return json;
    },
    //go through formdata
    EachFormData: function(formdata) {
        var entries = formdata.entries();
        var item = entries.next();
        console.log(item)
        while (!item.done) {
            console.log(item.value)
            item = entries.next();
        }
    }
}