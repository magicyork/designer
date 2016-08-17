/**
 * Created by chief on 16/7/16.
 */

define('image',[],function(){
    var data = [{
            "imageUrl":ko.observable("http://design.yyuap.com/static/img/designer/sidebar/img_cd.jpg"),
            "borderWidth": ko.observable("1px"),
            "borderColor": ko.observable("#000"),
            "borderRadius": ko.observable("0px"),
            "borderStyle": ko.observable("solid")
        },{
            "imageUrl":ko.observable("http://design.yyuap.com/static/img/designer/sidebar/img_cd.jpg"),
            "borderWidth": ko.observable("1px"),
            "borderColor": ko.observable("#fff"),
            "borderRadius": ko.observable("10px"),
            "borderStyle": ko.observable("solid")
        }];

    var imageModel = function(data) {
        this.image = ko.observableArray(data);
    };

    return new imageModel(data);


    
});