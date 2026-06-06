var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: true,
    title: 'building<br />\
    <img src="styles/legend/building_1_0.png" /> church<br />\
    <img src="styles/legend/building_1_1.png" /> construction<br />\
    <img src="styles/legend/building_1_2.png" /> house<br />\
    <img src="styles/legend/building_1_3.png" /> residential<br />\
    <img src="styles/legend/building_1_4.png" /> school<br />\
    <img src="styles/legend/building_1_5.png" /> All<br />' });
var format_Riverstream_2 = new ol.format.GeoJSON();
var features_Riverstream_2 = format_Riverstream_2.readFeatures(json_Riverstream_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riverstream_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riverstream_2.addFeatures(features_Riverstream_2);
var lyr_Riverstream_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riverstream_2, 
                style: style_Riverstream_2,
                popuplayertitle: 'River stream',
                interactive: true,
                title: '<img src="styles/legend/Riverstream_2.png" /> River stream'
            });
var format_road_3 = new ol.format.GeoJSON();
var features_road_3 = format_road_3.readFeatures(json_road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_3.addFeatures(features_road_3);
var lyr_road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_3, 
                style: style_road_3,
                popuplayertitle: 'road',
                interactive: true,
                title: '<img src="styles/legend/road_3.png" /> road'
            });
var format_Mainroad_4 = new ol.format.GeoJSON();
var features_Mainroad_4 = format_Mainroad_4.readFeatures(json_Mainroad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mainroad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mainroad_4.addFeatures(features_Mainroad_4);
var lyr_Mainroad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mainroad_4, 
                style: style_Mainroad_4,
                popuplayertitle: 'Main road',
                interactive: true,
                title: '<img src="styles/legend/Mainroad_4.png" /> Main road'
            });
var format_Wards_5 = new ol.format.GeoJSON();
var features_Wards_5 = format_Wards_5.readFeatures(json_Wards_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wards_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_5.addFeatures(features_Wards_5);
var lyr_Wards_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wards_5, 
                style: style_Wards_5,
                popuplayertitle: 'Wards',
                interactive: true,
                title: '<img src="styles/legend/Wards_5.png" /> Wards'
            });
var format_Iwawa_Boundary_6 = new ol.format.GeoJSON();
var features_Iwawa_Boundary_6 = format_Iwawa_Boundary_6.readFeatures(json_Iwawa_Boundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Iwawa_Boundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iwawa_Boundary_6.addFeatures(features_Iwawa_Boundary_6);
var lyr_Iwawa_Boundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Iwawa_Boundary_6, 
                style: style_Iwawa_Boundary_6,
                popuplayertitle: 'Iwawa_Boundary',
                interactive: true,
                title: '<img src="styles/legend/Iwawa_Boundary_6.png" /> Iwawa_Boundary'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_building_1.setVisible(true);lyr_Riverstream_2.setVisible(true);lyr_road_3.setVisible(true);lyr_Mainroad_4.setVisible(true);lyr_Wards_5.setVisible(true);lyr_Iwawa_Boundary_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_building_1,lyr_Riverstream_2,lyr_road_3,lyr_Mainroad_4,lyr_Wards_5,lyr_Iwawa_Boundary_6];
lyr_building_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_Riverstream_2.set('fieldAliases', {'fid': 'fid', 'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', });
lyr_road_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_Mainroad_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'Road name': 'Road name', });
lyr_Wards_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'reg_code': 'reg_code', 'reg_name': 'reg_name', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'counc_code': 'counc_code', 'counc_name': 'counc_name', 'const_code': 'const_code', 'const_name': 'const_name', 'div_code': 'div_code', 'div_name': 'div_name', 'ward_code': 'ward_code', 'ward_name': 'ward_name', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Iwawa_Boundary_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AREA': 'AREA', 'AREAA': 'AREAA', });
lyr_building_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_Riverstream_2.set('fieldImages', {'fid': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_road_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', });
lyr_Mainroad_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'Road name': 'TextEdit', });
lyr_Wards_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'reg_code': 'TextEdit', 'reg_name': 'TextEdit', 'dist_code': 'TextEdit', 'dist_name': 'TextEdit', 'counc_code': 'TextEdit', 'counc_name': 'TextEdit', 'const_code': 'TextEdit', 'const_name': 'TextEdit', 'div_code': 'TextEdit', 'div_name': 'TextEdit', 'ward_code': 'TextEdit', 'ward_name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Iwawa_Boundary_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AREA': 'Range', 'AREAA': 'TextEdit', });
lyr_building_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_Riverstream_2.set('fieldLabels', {'fid': 'no label', 'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', });
lyr_road_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', });
lyr_Mainroad_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', 'Road name': 'no label', });
lyr_Wards_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'reg_code': 'no label', 'reg_name': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'counc_code': 'no label', 'counc_name': 'no label', 'const_code': 'no label', 'const_name': 'no label', 'div_code': 'no label', 'div_name': 'no label', 'ward_code': 'no label', 'ward_name': 'hidden field', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Iwawa_Boundary_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'AREA': 'no label', 'AREAA': 'no label', });
lyr_Iwawa_Boundary_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});