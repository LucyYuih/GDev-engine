gdjs.PRELOADMUSICSCode = {};
gdjs.PRELOADMUSICSCode.localVariables = [];
gdjs.PRELOADMUSICSCode.GDNewTextObjects1= [];
gdjs.PRELOADMUSICSCode.GDNewTextObjects2= [];
gdjs.PRELOADMUSICSCode.GDStatisticsObjects1= [];
gdjs.PRELOADMUSICSCode.GDStatisticsObjects2= [];
gdjs.PRELOADMUSICSCode.GDComboNumbersObjects1= [];
gdjs.PRELOADMUSICSCode.GDComboNumbersObjects2= [];
gdjs.PRELOADMUSICSCode.GDNotesSplashObjects1= [];
gdjs.PRELOADMUSICSCode.GDNotesSplashObjects2= [];
gdjs.PRELOADMUSICSCode.GDfpsObjects1= [];
gdjs.PRELOADMUSICSCode.GDfpsObjects2= [];
gdjs.PRELOADMUSICSCode.GDEngineTextObjects1= [];
gdjs.PRELOADMUSICSCode.GDEngineTextObjects2= [];
gdjs.PRELOADMUSICSCode.GDLongUpscrollBFObjects1= [];
gdjs.PRELOADMUSICSCode.GDLongUpscrollBFObjects2= [];
gdjs.PRELOADMUSICSCode.GDLongUpscrollOPPObjects1= [];
gdjs.PRELOADMUSICSCode.GDLongUpscrollOPPObjects2= [];
gdjs.PRELOADMUSICSCode.GDHitboxLeftObjects1= [];
gdjs.PRELOADMUSICSCode.GDHitboxLeftObjects2= [];
gdjs.PRELOADMUSICSCode.GDHitboxDownObjects1= [];
gdjs.PRELOADMUSICSCode.GDHitboxDownObjects2= [];
gdjs.PRELOADMUSICSCode.GDHitboxUpObjects1= [];
gdjs.PRELOADMUSICSCode.GDHitboxUpObjects2= [];
gdjs.PRELOADMUSICSCode.GDhitrightObjects1= [];
gdjs.PRELOADMUSICSCode.GDhitrightObjects2= [];
gdjs.PRELOADMUSICSCode.GDBFIconObjects1= [];
gdjs.PRELOADMUSICSCode.GDBFIconObjects2= [];
gdjs.PRELOADMUSICSCode.GDOppIconObjects1= [];
gdjs.PRELOADMUSICSCode.GDOppIconObjects2= [];
gdjs.PRELOADMUSICSCode.GDPauseButtonObjects1= [];
gdjs.PRELOADMUSICSCode.GDPauseButtonObjects2= [];
gdjs.PRELOADMUSICSCode.GDPauseButton2Objects1= [];
gdjs.PRELOADMUSICSCode.GDPauseButton2Objects2= [];
gdjs.PRELOADMUSICSCode.GDBlackScreenObjects1= [];
gdjs.PRELOADMUSICSCode.GDBlackScreenObjects2= [];
gdjs.PRELOADMUSICSCode.GDPauseTextObjects1= [];
gdjs.PRELOADMUSICSCode.GDPauseTextObjects2= [];
gdjs.PRELOADMUSICSCode.GDExitTextObjects1= [];
gdjs.PRELOADMUSICSCode.GDExitTextObjects2= [];
gdjs.PRELOADMUSICSCode.GDRestartTextObjects1= [];
gdjs.PRELOADMUSICSCode.GDRestartTextObjects2= [];
gdjs.PRELOADMUSICSCode.GDmisses_9595challenge_9595textObjects1= [];
gdjs.PRELOADMUSICSCode.GDmisses_9595challenge_9595textObjects2= [];
gdjs.PRELOADMUSICSCode.GDBfRightNoteObjects1= [];
gdjs.PRELOADMUSICSCode.GDBfRightNoteObjects2= [];
gdjs.PRELOADMUSICSCode.GDBfUpNoteObjects1= [];
gdjs.PRELOADMUSICSCode.GDBfUpNoteObjects2= [];
gdjs.PRELOADMUSICSCode.GDBfDownNoteObjects1= [];
gdjs.PRELOADMUSICSCode.GDBfDownNoteObjects2= [];
gdjs.PRELOADMUSICSCode.GDBfLeftNoteObjects1= [];
gdjs.PRELOADMUSICSCode.GDBfLeftNoteObjects2= [];
gdjs.PRELOADMUSICSCode.GDBfLeftNote4Objects1= [];
gdjs.PRELOADMUSICSCode.GDBfLeftNote4Objects2= [];
gdjs.PRELOADMUSICSCode.GDBfDownNote5Objects1= [];
gdjs.PRELOADMUSICSCode.GDBfDownNote5Objects2= [];
gdjs.PRELOADMUSICSCode.GDBfUpNote6Objects1= [];
gdjs.PRELOADMUSICSCode.GDBfUpNote6Objects2= [];
gdjs.PRELOADMUSICSCode.GDBfRightNote7Objects1= [];
gdjs.PRELOADMUSICSCode.GDBfRightNote7Objects2= [];


gdjs.PRELOADMUSICSCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Song", "Name", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.PRELOADMUSICSCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.PRELOADMUSICSCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.PRELOADMUSICSCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()) * 100), 0, 4) + "%");
}
}}

}


};

gdjs.PRELOADMUSICSCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PRELOADMUSICSCode.GDNewTextObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDNewTextObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDStatisticsObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDStatisticsObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDComboNumbersObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDComboNumbersObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDNotesSplashObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDNotesSplashObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDfpsObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDfpsObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDEngineTextObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDEngineTextObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxLeftObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxLeftObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxDownObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxDownObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxUpObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxUpObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDhitrightObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDhitrightObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBFIconObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBFIconObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDOppIconObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDOppIconObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseButtonObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseButtonObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseButton2Objects1.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseButton2Objects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBlackScreenObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBlackScreenObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseTextObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseTextObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDExitTextObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDExitTextObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDRestartTextObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDRestartTextObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfRightNoteObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfRightNoteObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfUpNoteObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfUpNoteObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfDownNoteObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfDownNoteObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfLeftNoteObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfLeftNoteObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfLeftNote4Objects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfLeftNote4Objects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfDownNote5Objects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfDownNote5Objects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfUpNote6Objects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfUpNote6Objects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfRightNote7Objects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfRightNote7Objects2.length = 0;

gdjs.PRELOADMUSICSCode.eventsList0(runtimeScene);
gdjs.PRELOADMUSICSCode.GDNewTextObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDNewTextObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDStatisticsObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDStatisticsObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDComboNumbersObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDComboNumbersObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDNotesSplashObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDNotesSplashObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDfpsObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDfpsObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDEngineTextObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDEngineTextObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxLeftObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxLeftObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxDownObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxDownObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxUpObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDHitboxUpObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDhitrightObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDhitrightObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBFIconObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBFIconObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDOppIconObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDOppIconObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseButtonObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseButtonObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseButton2Objects1.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseButton2Objects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBlackScreenObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBlackScreenObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseTextObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDPauseTextObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDExitTextObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDExitTextObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDRestartTextObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDRestartTextObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfRightNoteObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfRightNoteObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfUpNoteObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfUpNoteObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfDownNoteObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfDownNoteObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfLeftNoteObjects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfLeftNoteObjects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfLeftNote4Objects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfLeftNote4Objects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfDownNote5Objects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfDownNote5Objects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfUpNote6Objects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfUpNote6Objects2.length = 0;
gdjs.PRELOADMUSICSCode.GDBfRightNote7Objects1.length = 0;
gdjs.PRELOADMUSICSCode.GDBfRightNote7Objects2.length = 0;


return;

}

gdjs['PRELOADMUSICSCode'] = gdjs.PRELOADMUSICSCode;
