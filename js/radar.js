zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "ee6b7db5b51705a13dc2339db3edaf6d"];

var myConfig = {
    type : 'radar',
    plot : {
        aspect : 'area',
        animation: {
            effect:3,
            sequence:1,
            speed:700
        }
    },
    scaleV : {
        visible : true
    },
    scaleK : {
        values : '0:8:1',
        labels : ['Java','C++','Python','JavaScript','Ruby', 'Php', 'Android' , 'SQL','HTML5+CSS'],
        item : {
            fontColor : '#607D8B',
            backgroundColor : "white",
            borderColor : "#aeaeae",
            borderWidth : 1,
            padding : '5 10',
            borderRadius : 10
        },
        refLine : {
            lineColor : '#c10000'
        },
        tick : {
            lineColor : '#59869c',
            lineWidth : 2,
            lineStyle : 'dotted',
            size : 20
        },
        guide : {
            lineColor : "#607D8B",
            lineStyle : 'solid',
            alpha : 0.3,
            backgroundColor : "#c5c5c5 #718eb4"
        }
    },
    series : [
        {
            values : [3, 1,3, 3, 1 , 3, 1,3,1 ],
            text:'farm'
        }
    ]
};

zingchart.render({
    id : 'myChart',
    data : myConfig,
    height: '100%',
    width: '100%'
});

