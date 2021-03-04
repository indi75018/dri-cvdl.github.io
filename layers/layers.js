var wms_layers = [];

var format_deptcvdl_0 = new ol.format.GeoJSON();
var features_deptcvdl_0 = format_deptcvdl_0.readFeatures(json_deptcvdl_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptcvdl_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptcvdl_0.addFeatures(features_deptcvdl_0);
var lyr_deptcvdl_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deptcvdl_0, 
                style: style_deptcvdl_0,
                interactive: false,
                title: '<img src="styles/legend/deptcvdl_0.png" /> dept-cvdl'
            });
var format_RegionCVDL_1 = new ol.format.GeoJSON();
var features_RegionCVDL_1 = format_RegionCVDL_1.readFeatures(json_RegionCVDL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionCVDL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionCVDL_1.addFeatures(features_RegionCVDL_1);
var lyr_RegionCVDL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RegionCVDL_1, 
                style: style_RegionCVDL_1,
                interactive: false,
                title: '<img src="styles/legend/RegionCVDL_1.png" /> Region-CVDL'
            });
var format_LigneferroviaireToursOrlans_2 = new ol.format.GeoJSON();
var features_LigneferroviaireToursOrlans_2 = format_LigneferroviaireToursOrlans_2.readFeatures(json_LigneferroviaireToursOrlans_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LigneferroviaireToursOrlans_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LigneferroviaireToursOrlans_2.addFeatures(features_LigneferroviaireToursOrlans_2);
var lyr_LigneferroviaireToursOrlans_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LigneferroviaireToursOrlans_2, 
                style: style_LigneferroviaireToursOrlans_2,
                interactive: true,
                title: '<img src="styles/legend/LigneferroviaireToursOrlans_2.png" /> Ligne ferroviaire Tours-Orléans'
            });
var format_ProjetsRnovationthermique_3 = new ol.format.GeoJSON();
var features_ProjetsRnovationthermique_3 = format_ProjetsRnovationthermique_3.readFeatures(json_ProjetsRnovationthermique_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetsRnovationthermique_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetsRnovationthermique_3.addFeatures(features_ProjetsRnovationthermique_3);
var lyr_ProjetsRnovationthermique_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjetsRnovationthermique_3, 
                style: style_ProjetsRnovationthermique_3,
                interactive: true,
                title: '<img src="styles/legend/ProjetsRnovationthermique_3.png" /> Projets Rénovation thermique'
            });
var format_ProjetsMobilitsduquotidien_4 = new ol.format.GeoJSON();
var features_ProjetsMobilitsduquotidien_4 = format_ProjetsMobilitsduquotidien_4.readFeatures(json_ProjetsMobilitsduquotidien_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetsMobilitsduquotidien_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetsMobilitsduquotidien_4.addFeatures(features_ProjetsMobilitsduquotidien_4);
var lyr_ProjetsMobilitsduquotidien_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjetsMobilitsduquotidien_4, 
                style: style_ProjetsMobilitsduquotidien_4,
                interactive: true,
                title: '<img src="styles/legend/ProjetsMobilitsduquotidien_4.png" /> Projets Mobilités du quotidien'
            });

lyr_deptcvdl_0.setVisible(true);lyr_RegionCVDL_1.setVisible(true);lyr_LigneferroviaireToursOrlans_2.setVisible(true);lyr_ProjetsRnovationthermique_3.setVisible(true);lyr_ProjetsMobilitsduquotidien_4.setVisible(true);
var layersList = [lyr_deptcvdl_0,lyr_RegionCVDL_1,lyr_LigneferroviaireToursOrlans_2,lyr_ProjetsRnovationthermique_3,lyr_ProjetsMobilitsduquotidien_4];
lyr_deptcvdl_0.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts3': 'nuts3', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_RegionCVDL_1.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts2': 'nuts2', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_LigneferroviaireToursOrlans_2.set('fieldAliases', {'code_ligne': 'code_ligne', 'rg_troncon': 'rg_troncon', 'pk_debut_r': 'pk_debut_r', 'pk_fin_r': 'pk_fin_r', 'libelle': 'libelle', 'mnemo': 'mnemo', 'Projet': 'Projet', 'Cout': 'Cout', 'Subvention': 'Subvention', 'C euro': 'C euro', 'Sub euro': 'Sub euro', 'Type': 'Type', });
lyr_ProjetsRnovationthermique_3.set('fieldAliases', {'Thématiqu': 'Thématiqu', 'Départeme': 'Départeme', 'Code Commu': 'Code Commu', 'Adresse': 'Adresse', 'Type de b�': 'Type de b�', 'Subvention': 'Subvention', 'Cout': 'Cout', 'date débu': 'date débu', 'date fin d': 'date fin d', 'Observatio': 'Observatio', 'latitude': 'latitude', 'longitude': 'longitude', 'c eu': 'c eu', 'su eu': 'su eu', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', });
lyr_ProjetsMobilitsduquotidien_4.set('fieldAliases', {'Thématiqu': 'Thématiqu', 'Départeme': 'Départeme', 'Code Commu': 'Code Commu', 'Adresse': 'Adresse', 'Type de b�': 'Type de b�', 'Subvention': 'Subvention', 'Coût': 'Coût', 'date débu': 'date débu', 'date fin d': 'date fin d', 'Projet': 'Projet', 'latitude': 'latitude', 'longitude': 'longitude', 'Cou': 'Cou', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_symbol_size': 'auxiliary_storage_symbol_size', });
lyr_deptcvdl_0.set('fieldImages', {'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts3': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_RegionCVDL_1.set('fieldImages', {'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts2': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_LigneferroviaireToursOrlans_2.set('fieldImages', {'code_ligne': 'Hidden', 'rg_troncon': 'Hidden', 'pk_debut_r': 'Hidden', 'pk_fin_r': 'Hidden', 'libelle': 'Hidden', 'mnemo': 'Hidden', 'Projet': 'TextEdit', 'Cout': 'Hidden', 'Subvention': 'Hidden', 'C euro': 'TextEdit', 'Sub euro': 'TextEdit', 'Type': 'TextEdit', });
lyr_ProjetsRnovationthermique_3.set('fieldImages', {'Thématiqu': 'TextEdit', 'Départeme': 'Hidden', 'Code Commu': 'Hidden', 'Adresse': 'Hidden', 'Type de b�': 'Hidden', 'Subvention': 'TextEdit', 'Cout': 'TextEdit', 'date débu': 'Hidden', 'date fin d': 'Hidden', 'Observatio': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', 'c eu': 'Hidden', 'su eu': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', });
lyr_ProjetsMobilitsduquotidien_4.set('fieldImages', {'Thématiqu': 'TextEdit', 'Départeme': 'Hidden', 'Code Commu': 'Hidden', 'Adresse': 'Hidden', 'Type de b�': 'Hidden', 'Subvention': 'TextEdit', 'Coût': 'TextEdit', 'date débu': 'Hidden', 'date fin d': 'Hidden', 'Projet': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', 'Cou': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_symbol_size': 'Hidden', });
lyr_deptcvdl_0.set('fieldLabels', {'code_insee': 'no label', 'nom': 'no label', 'nuts3': 'no label', 'wikipedia': 'no label', 'surf_km2': 'no label', });
lyr_RegionCVDL_1.set('fieldLabels', {'code_insee': 'no label', 'nom': 'no label', 'nuts2': 'no label', 'wikipedia': 'no label', 'surf_km2': 'no label', });
lyr_LigneferroviaireToursOrlans_2.set('fieldLabels', {'Projet': 'inline label', 'C euro': 'inline label', 'Sub euro': 'inline label', 'Type': 'inline label', });
lyr_ProjetsRnovationthermique_3.set('fieldLabels', {'Thématiqu': 'inline label', 'Subvention': 'inline label', 'Cout': 'inline label', 'Observatio': 'inline label', });
lyr_ProjetsMobilitsduquotidien_4.set('fieldLabels', {'Thématiqu': 'inline label', 'Subvention': 'inline label', 'Coût': 'inline label', 'Projet': 'inline label', });
lyr_ProjetsMobilitsduquotidien_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});