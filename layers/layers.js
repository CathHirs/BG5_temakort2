var wms_layers = [];

var lyr_Skrmkortdmpet_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://api.dataforsyningen.dk/topo_skaermkort_DAF",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dtk_skaermkort_daempet",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Skærmkort - dæmpet',
                            popuplayertitle: 'Skærmkort - dæmpet',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Skrmkortdmpet_0, 0]);
var format_Strandbeskyttelse_1 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_1 = format_Strandbeskyttelse_1.readFeatures(json_Strandbeskyttelse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_1.addFeatures(features_Strandbeskyttelse_1);
var lyr_Strandbeskyttelse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_1, 
                style: style_Strandbeskyttelse_1,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/Strandbeskyttelse_1.png" /> Strandbeskyttelse'
            });
var format_Hvidovre_Lokalplaner_vedtaget_cahi_2 = new ol.format.GeoJSON();
var features_Hvidovre_Lokalplaner_vedtaget_cahi_2 = format_Hvidovre_Lokalplaner_vedtaget_cahi_2.readFeatures(json_Hvidovre_Lokalplaner_vedtaget_cahi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovre_Lokalplaner_vedtaget_cahi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovre_Lokalplaner_vedtaget_cahi_2.addFeatures(features_Hvidovre_Lokalplaner_vedtaget_cahi_2);
var lyr_Hvidovre_Lokalplaner_vedtaget_cahi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovre_Lokalplaner_vedtaget_cahi_2, 
                style: style_Hvidovre_Lokalplaner_vedtaget_cahi_2,
                popuplayertitle: 'Hvidovre_Lokalplaner_vedtaget_cahi',
                interactive: true,
    title: 'Hvidovre_Lokalplaner_vedtaget_cahi<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_0.png" /> <br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_1.png" /> 001<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_2.png" /> 101-1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_3.png" /> 102<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_4.png" /> 103<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_5.png" /> 104<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_6.png" /> 105<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_7.png" /> 106<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_8.png" /> 108<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_9.png" /> 109-1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_10.png" /> 112<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_11.png" /> 115<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_12.png" /> 116<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_13.png" /> 118<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_14.png" /> 119<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_15.png" /> 120<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_16.png" /> 121<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_17.png" /> 122<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_18.png" /> 124<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_19.png" /> 126<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_20.png" /> 127<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_21.png" /> 128<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_22.png" /> 131<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_23.png" /> 132<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_24.png" /> 133<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_25.png" /> 134<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_26.png" /> 135<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_27.png" /> 137<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_28.png" /> 139<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_29.png" /> 140<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_30.png" /> 141<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_31.png" /> 142<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_32.png" /> 143<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_33.png" /> 144<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_34.png" /> 147<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_35.png" /> 148<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_36.png" /> 149<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_37.png" /> 150<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_38.png" /> 151<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_39.png" /> 152<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_40.png" /> 154<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_41.png" /> 202<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_42.png" /> 203<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_43.png" /> 206<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_44.png" /> 207<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_45.png" /> 208<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_46.png" /> 209<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_47.png" /> 210<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_48.png" /> 211<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_49.png" /> 216<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_50.png" /> 220<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_51.png" /> 221<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_52.png" /> 225<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_53.png" /> 226<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_54.png" /> 228<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_55.png" /> 229<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_56.png" /> 230<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_57.png" /> 231<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_58.png" /> 232<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_59.png" /> 233<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_60.png" /> 234<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_61.png" /> 236<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_62.png" /> 237<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_63.png" /> 238<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_64.png" /> 239<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_65.png" /> 240<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_66.png" /> 241<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_67.png" /> 301-1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_68.png" /> 303<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_69.png" /> 304<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_70.png" /> 305<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_71.png" /> 306<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_72.png" /> 313<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_73.png" /> 314<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_74.png" /> 316<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_75.png" /> 322<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_76.png" /> 323<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_77.png" /> 324<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_78.png" /> 325<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_79.png" /> 326<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_80.png" /> 327<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_81.png" /> 328<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_82.png" /> 329<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_83.png" /> 330<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_84.png" /> 331<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_85.png" /> 332<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_86.png" /> 335<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_87.png" /> 338<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_88.png" /> 339<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_89.png" /> 340<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_90.png" /> 341<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_91.png" /> 342<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_92.png" /> 343<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_93.png" /> 345<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_94.png" /> 403-1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_95.png" /> 404<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_96.png" /> 405<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_97.png" /> 407<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_98.png" /> 408<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_99.png" /> 409<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_100.png" /> 411<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_101.png" /> 412<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_102.png" /> 418<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_103.png" /> 423<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_104.png" /> 429<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_105.png" /> 432<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_106.png" /> 433<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_107.png" /> 440<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_108.png" /> 441<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_109.png" /> 447<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_110.png" /> 448<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_111.png" /> 452<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_112.png" /> 454<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_113.png" /> 455<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_114.png" /> 456<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_115.png" /> 457<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_116.png" /> 458<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_117.png" /> 459<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_118.png" /> 462<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_119.png" /> 463<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_120.png" /> 464<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_121.png" /> 466<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_122.png" /> 467<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_123.png" /> 468<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_124.png" /> 469<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_125.png" /> 470<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_126.png" /> 471<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_127.png" /> 472<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_128.png" /> 473<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_129.png" /> 475<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_130.png" /> 476<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_131.png" /> 504<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_132.png" /> 507<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_133.png" /> 508<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_134.png" /> 510<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_135.png" /> 511<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_136.png" /> 516<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_137.png" /> 518<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_138.png" /> 519<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_139.png" /> A1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_140.png" /> A10<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_141.png" /> A11<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_142.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_143.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_144.png" /> A13<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_145.png" /> A14<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_146.png" /> A15<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_147.png" /> A3<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_148.png" /> A5<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_149.png" /> A7<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_150.png" /> A8<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_151.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_152.png" /> B17<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_153.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_154.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_155.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_156.png" /> H10<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_157.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_158.png" /> H11<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_159.png" /> H12<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_160.png" /> H13<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_161.png" /> H14<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_162.png" /> H15<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_163.png" /> H16<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_164.png" /> H17<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_165.png" /> H18<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_166.png" /> H20<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_167.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_168.png" /> H3<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_169.png" /> H4<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_170.png" /> H5<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_171.png" /> H9<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_2_172.png" /> Lokalplan 127 med Tillæg nr. 1<br />' });
var format_Hvidovre_lokalplaner_forslag_cahi_3 = new ol.format.GeoJSON();
var features_Hvidovre_lokalplaner_forslag_cahi_3 = format_Hvidovre_lokalplaner_forslag_cahi_3.readFeatures(json_Hvidovre_lokalplaner_forslag_cahi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovre_lokalplaner_forslag_cahi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovre_lokalplaner_forslag_cahi_3.addFeatures(features_Hvidovre_lokalplaner_forslag_cahi_3);
var lyr_Hvidovre_lokalplaner_forslag_cahi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovre_lokalplaner_forslag_cahi_3, 
                style: style_Hvidovre_lokalplaner_forslag_cahi_3,
                popuplayertitle: 'Hvidovre_lokalplaner_forslag_cahi',
                interactive: true,
    title: 'Hvidovre_lokalplaner_forslag_cahi<br />\
    <img src="styles/legend/Hvidovre_lokalplaner_forslag_cahi_3_0.png" /> 153<br />\
    <img src="styles/legend/Hvidovre_lokalplaner_forslag_cahi_3_1.png" /> 155<br />\
    <img src="styles/legend/Hvidovre_lokalplaner_forslag_cahi_3_2.png" /> 242<br />\
    <img src="styles/legend/Hvidovre_lokalplaner_forslag_cahi_3_3.png" /> <br />' });
var format_FrededeomrderHvidovre_4 = new ol.format.GeoJSON();
var features_FrededeomrderHvidovre_4 = format_FrededeomrderHvidovre_4.readFeatures(json_FrededeomrderHvidovre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrededeomrderHvidovre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrededeomrderHvidovre_4.addFeatures(features_FrededeomrderHvidovre_4);
var lyr_FrededeomrderHvidovre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrededeomrderHvidovre_4, 
                style: style_FrededeomrderHvidovre_4,
                popuplayertitle: 'Fredede områder, Hvidovre',
                interactive: false,
                title: '<img src="styles/legend/FrededeomrderHvidovre_4.png" /> Fredede områder, Hvidovre'
            });
var format_kommuneplan_5 = new ol.format.GeoJSON();
var features_kommuneplan_5 = format_kommuneplan_5.readFeatures(json_kommuneplan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_5.addFeatures(features_kommuneplan_5);
var lyr_kommuneplan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_5, 
                style: style_kommuneplan_5,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_5.png" /> kommuneplan'
            });
var format_Religion_6 = new ol.format.GeoJSON();
var features_Religion_6 = format_Religion_6.readFeatures(json_Religion_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Religion_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Religion_6.addFeatures(features_Religion_6);
var lyr_Religion_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Religion_6, 
                style: style_Religion_6,
                popuplayertitle: 'Religion',
                interactive: true,
                title: '<img src="styles/legend/Religion_6.png" /> Religion'
            });
var format_Sejlklubber_7 = new ol.format.GeoJSON();
var features_Sejlklubber_7 = format_Sejlklubber_7.readFeatures(json_Sejlklubber_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sejlklubber_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sejlklubber_7.addFeatures(features_Sejlklubber_7);
var lyr_Sejlklubber_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sejlklubber_7, 
                style: style_Sejlklubber_7,
                popuplayertitle: 'Sejlklubber',
                interactive: true,
                title: '<img src="styles/legend/Sejlklubber_7.png" /> Sejlklubber'
            });
var format_Rideklubber_8 = new ol.format.GeoJSON();
var features_Rideklubber_8 = format_Rideklubber_8.readFeatures(json_Rideklubber_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rideklubber_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rideklubber_8.addFeatures(features_Rideklubber_8);
var lyr_Rideklubber_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rideklubber_8, 
                style: style_Rideklubber_8,
                popuplayertitle: 'Rideklubber',
                interactive: true,
                title: '<img src="styles/legend/Rideklubber_8.png" /> Rideklubber'
            });
var format_Brnehaver_9 = new ol.format.GeoJSON();
var features_Brnehaver_9 = format_Brnehaver_9.readFeatures(json_Brnehaver_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_9.addFeatures(features_Brnehaver_9);
var lyr_Brnehaver_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_9, 
                style: style_Brnehaver_9,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_9.png" /> Børnehaver'
            });
var format_Togstationer_10 = new ol.format.GeoJSON();
var features_Togstationer_10 = format_Togstationer_10.readFeatures(json_Togstationer_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_10.addFeatures(features_Togstationer_10);
var lyr_Togstationer_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_10, 
                style: style_Togstationer_10,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_10.png" /> Togstationer'
            });
var format_folkeskoler_11 = new ol.format.GeoJSON();
var features_folkeskoler_11 = format_folkeskoler_11.readFeatures(json_folkeskoler_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskoler_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskoler_11.addFeatures(features_folkeskoler_11);
var lyr_folkeskoler_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskoler_11, 
                style: style_folkeskoler_11,
                popuplayertitle: 'folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/folkeskoler_11.png" /> folkeskoler'
            });
var format_idrtsforeninger_12 = new ol.format.GeoJSON();
var features_idrtsforeninger_12 = format_idrtsforeninger_12.readFeatures(json_idrtsforeninger_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_idrtsforeninger_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_idrtsforeninger_12.addFeatures(features_idrtsforeninger_12);
var lyr_idrtsforeninger_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_idrtsforeninger_12, 
                style: style_idrtsforeninger_12,
                popuplayertitle: 'idrætsforeninger',
                interactive: true,
                title: '<img src="styles/legend/idrtsforeninger_12.png" /> idrætsforeninger'
            });
var format_indkb_13 = new ol.format.GeoJSON();
var features_indkb_13 = format_indkb_13.readFeatures(json_indkb_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indkb_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indkb_13.addFeatures(features_indkb_13);
var lyr_indkb_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_indkb_13, 
                style: style_indkb_13,
                popuplayertitle: 'indkøb',
                interactive: true,
                title: '<img src="styles/legend/indkb_13.png" /> indkøb'
            });

lyr_Skrmkortdmpet_0.setVisible(true);lyr_Strandbeskyttelse_1.setVisible(true);lyr_Hvidovre_Lokalplaner_vedtaget_cahi_2.setVisible(true);lyr_Hvidovre_lokalplaner_forslag_cahi_3.setVisible(true);lyr_FrededeomrderHvidovre_4.setVisible(true);lyr_kommuneplan_5.setVisible(true);lyr_Religion_6.setVisible(true);lyr_Sejlklubber_7.setVisible(true);lyr_Rideklubber_8.setVisible(true);lyr_Brnehaver_9.setVisible(true);lyr_Togstationer_10.setVisible(true);lyr_folkeskoler_11.setVisible(true);lyr_idrtsforeninger_12.setVisible(true);lyr_indkb_13.setVisible(true);
var layersList = [lyr_Skrmkortdmpet_0,lyr_Strandbeskyttelse_1,lyr_Hvidovre_Lokalplaner_vedtaget_cahi_2,lyr_Hvidovre_lokalplaner_forslag_cahi_3,lyr_FrededeomrderHvidovre_4,lyr_kommuneplan_5,lyr_Religion_6,lyr_Sejlklubber_7,lyr_Rideklubber_8,lyr_Brnehaver_9,lyr_Togstationer_10,lyr_folkeskoler_11,lyr_idrtsforeninger_12,lyr_indkb_13];
lyr_Strandbeskyttelse_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Hvidovre_Lokalplaner_vedtaget_cahi_2.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Hvidovre_lokalplaner_forslag_cahi_3.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_FrededeomrderHvidovre_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_kommuneplan_5.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Religion_6.set('fieldAliases', {'fid': 'fid', 'Kirke': 'Kirke', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Sejlklubber_7.set('fieldAliases', {'fid': 'fid', 'Sejlklub': 'Sejlklub', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Rideklubber_8.set('fieldAliases', {'fid': 'fid', 'Rideklub': 'Rideklub', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Brnehaver_9.set('fieldAliases', {'fid': 'fid', 'Børnepasn': 'Børnepasn', 'Adresse': 'Adresse', 'By': 'By', 'telefonnum': 'telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_folkeskoler_11.set('fieldAliases', {'fid': 'fid', 'skolenavn': 'skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_idrtsforeninger_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_indkb_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Strandbeskyttelse_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Hvidovre_Lokalplaner_vedtaget_cahi_2.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Hvidovre_lokalplaner_forslag_cahi_3.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_FrededeomrderHvidovre_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_kommuneplan_5.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Religion_6.set('fieldImages', {'fid': 'TextEdit', 'Kirke': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Sejlklubber_7.set('fieldImages', {'fid': 'TextEdit', 'Sejlklub': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Rideklubber_8.set('fieldImages', {'fid': 'TextEdit', 'Rideklub': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Brnehaver_9.set('fieldImages', {'fid': '', 'Børnepasn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'telefonnum': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Togstationer_10.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_folkeskoler_11.set('fieldImages', {'fid': '', 'skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_idrtsforeninger_12.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_indkb_13.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Strandbeskyttelse_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Hvidovre_Lokalplaner_vedtaget_cahi_2.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Hvidovre_lokalplaner_forslag_cahi_3.set('fieldLabels', {'fid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_FrededeomrderHvidovre_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_kommuneplan_5.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_Religion_6.set('fieldLabels', {'fid': 'no label', 'Kirke': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefon': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Sejlklubber_7.set('fieldLabels', {'fid': 'no label', 'Sejlklub': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Rideklubber_8.set('fieldLabels', {'fid': 'no label', 'Rideklub': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Brnehaver_9.set('fieldLabels', {'fid': 'no label', 'Børnepasn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'telefonnum': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Togstationer_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_folkeskoler_11.set('fieldLabels', {'fid': 'no label', 'skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_idrtsforeninger_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_indkb_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_indkb_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});