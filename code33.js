gdjs.All_32songs_32Death_32SceneCode = {};
gdjs.All_32songs_32Death_32SceneCode.localVariables = [];
gdjs.All_32songs_32Death_32SceneCode.GDRestartObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDRestartObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDYesObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDYesObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDNoObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDNoObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBackObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBackObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDbflolObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDbflolObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDStatisticsObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDStatisticsObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDComboNumbersObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDComboNumbersObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDNotesSplashObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDNotesSplashObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDfpsObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDfpsObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDEngineTextObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDEngineTextObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollBFObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollBFObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollOPPObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollOPPObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDHitboxLeftObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDHitboxLeftObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDHitboxDownObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDHitboxDownObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDHitboxUpObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDHitboxUpObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDhitrightObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDhitrightObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBFIconObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBFIconObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDOppIconObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDOppIconObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDPauseButtonObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDPauseButtonObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDPauseButton2Objects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDPauseButton2Objects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBlackScreenObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBlackScreenObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDPauseTextObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDPauseTextObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDExitTextObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDExitTextObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDRestartTextObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDRestartTextObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDmisses_9595challenge_9595textObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDmisses_9595challenge_9595textObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNoteObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNoteObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNoteObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNoteObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNoteObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNoteObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNoteObjects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNoteObjects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNote4Objects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNote4Objects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNote5Objects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNote5Objects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNote6Objects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNote6Objects2= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNote7Objects1= [];
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNote7Objects2= [];


gdjs.All_32songs_32Death_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.All_32songs_32Death_32SceneCode.GDNoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.All_32songs_32Death_32SceneCode.GDNoObjects1.length;i<l;++i) {
    if ( gdjs.All_32songs_32Death_32SceneCode.GDNoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.All_32songs_32Death_32SceneCode.GDNoObjects1[k] = gdjs.All_32songs_32Death_32SceneCode.GDNoObjects1[i];
        ++k;
    }
}
gdjs.All_32songs_32Death_32SceneCode.GDNoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(101743044);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.All_32songs_32Death_32SceneCode.GDYesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.All_32songs_32Death_32SceneCode.GDYesObjects1.length;i<l;++i) {
    if ( gdjs.All_32songs_32Death_32SceneCode.GDYesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.All_32songs_32Death_32SceneCode.GDYesObjects1[k] = gdjs.All_32songs_32Death_32SceneCode.GDYesObjects1[i];
        ++k;
    }
}
gdjs.All_32songs_32Death_32SceneCode.GDYesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(101728412);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(31).getAsString(), false);
}}

}


};

gdjs.All_32songs_32Death_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.All_32songs_32Death_32SceneCode.GDRestartObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDRestartObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDYesObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDYesObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDNoObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDNoObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBackObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBackObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDbflolObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDbflolObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDStatisticsObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDStatisticsObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDComboNumbersObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDComboNumbersObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDNotesSplashObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDNotesSplashObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDfpsObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDfpsObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDEngineTextObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDEngineTextObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxLeftObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxLeftObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxDownObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxDownObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxUpObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxUpObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDhitrightObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDhitrightObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBFIconObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBFIconObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDOppIconObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDOppIconObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseButtonObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseButtonObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseButton2Objects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseButton2Objects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBlackScreenObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBlackScreenObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseTextObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseTextObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDExitTextObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDExitTextObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDRestartTextObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDRestartTextObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNoteObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNoteObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNoteObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNoteObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNoteObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNoteObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNoteObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNoteObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNote4Objects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNote4Objects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNote5Objects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNote5Objects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNote6Objects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNote6Objects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNote7Objects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNote7Objects2.length = 0;

gdjs.All_32songs_32Death_32SceneCode.eventsList0(runtimeScene);
gdjs.All_32songs_32Death_32SceneCode.GDRestartObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDRestartObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDYesObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDYesObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDNoObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDNoObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBackObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBackObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDbflolObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDbflolObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDStatisticsObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDStatisticsObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDComboNumbersObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDComboNumbersObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDNotesSplashObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDNotesSplashObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDfpsObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDfpsObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDEngineTextObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDEngineTextObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxLeftObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxLeftObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxDownObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxDownObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxUpObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDHitboxUpObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDhitrightObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDhitrightObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBFIconObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBFIconObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDOppIconObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDOppIconObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseButtonObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseButtonObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseButton2Objects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseButton2Objects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBlackScreenObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBlackScreenObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseTextObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDPauseTextObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDExitTextObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDExitTextObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDRestartTextObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDRestartTextObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNoteObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNoteObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNoteObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNoteObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNoteObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNoteObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNoteObjects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNoteObjects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNote4Objects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfLeftNote4Objects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNote5Objects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfDownNote5Objects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNote6Objects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfUpNote6Objects2.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNote7Objects1.length = 0;
gdjs.All_32songs_32Death_32SceneCode.GDBfRightNote7Objects2.length = 0;


return;

}

gdjs['All_32songs_32Death_32SceneCode'] = gdjs.All_32songs_32Death_32SceneCode;
