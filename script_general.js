(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"borderRadius":0,"class":"Player","shadow":false,"contentOpaque":false,"desktopMipmappingEnabled":false,"scrollBarOpacity":0.5,"borderSize":0,"gap":10,"data":{"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnTooltip":false,"volume":1,"pitch":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1},"name":"Player760","locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt"},"width":"100%","backgroundColorDirection":"vertical","paddingTop":0,"scrollBarColor":"#000000","id":"rootPlayer","paddingLeft":0,"vrPolyfillScale":0.75,"mobileMipmappingEnabled":false,"mouseWheelEnabled":true,"paddingRight":0,"mediaActivationMode":"window","horizontalAlign":"left","paddingBottom":0,"overflow":"hidden","definitions": [{"video":"this.videores_52490E65_43C1_FDAB_41D0_9F6080575776","class":"Video","loop":false,"height":1920,"scaleMode":"fit_inside","width":3840,"id":"video_520854B5_43C2_EEAB_41B4_4DF8B133433B","label":trans('video_520854B5_43C2_EEAB_41B4_4DF8B133433B.label'),"thumbnailUrl":"media/video_520854B5_43C2_EEAB_41B4_4DF8B133433B_t.jpg","data":{"label":"CLASP 360"}},{"items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","media":"this.video_520854B5_43C2_EEAB_41B4_4DF8B133433B","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_556C275B_5ECF_7F59_41D4_DCCDDD8834E2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_556C275B_5ECF_7F59_41D4_DCCDDD8834E2, 0)"}],"class":"PlayList","id":"playList_556C275B_5ECF_7F59_41D4_DCCDDD8834E2"},{"items":["this.PanoramaPlayListItem_557C87C7_5ECF_7FA8_41AD_E84CDB6D7E82",{"camera":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_camera","class":"PanoramaPlayListItem","media":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"vfov":180,"class":"Panorama","partial":false,"overlays":["this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_tcap0","this.overlay_4CF2BA26_43C6_65A9_418C_B5CC12E1BFB6","this.overlay_4C59CBD9_43C1_9A9B_4195_1DDB688B885E","this.overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4","this.overlay_52865ED4_43C1_BAE9_41C8_8678175E0B30","this.overlay_513C249E_43C1_EE99_418D_09D947757AF4"],"adjacentPanoramas":[{"distance":6.12,"yaw":-104.43,"select":"this.overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","data":{"overlayID":"overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4"}}],"pitch":0,"id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","hfovMax":130,"label":trans('panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94.label'),"frames":[{"thumbnailUrl":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"colCount":24,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","rowCount":1}]},"class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_t.jpg","hfov":360,"data":{"label":"CLASP F1 "},"hfovMin":"135%"},{"video":"this.videores_531635CF_43CE_6EF7_41CD_260824DEF4CB","class":"Video","loop":false,"height":1920,"scaleMode":"fit_inside","width":3840,"id":"video_5242A95A_43C2_A799_41C2_73D20BB9E1BE","label":trans('video_5242A95A_43C2_A799_41C2_73D20BB9E1BE.label'),"thumbnailUrl":"media/video_5242A95A_43C2_A799_41C2_73D20BB9E1BE_t.jpg","data":{"label":"CLASP 360"}},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_495A974D_43C1_ABFB_4197_0CFB908AFFAD","id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_camera"},{"toolTipTextShadowColor":"#000000","toolTipOpacity":1,"class":"ViewerArea","data":{"name":"Main Viewer"},"progressBorderRadius":0,"toolTipFontSize":"1.11vmin","vrPointerSelectionTime":2000,"borderSize":0,"width":"100%","playbackBarBackgroundColorDirection":"vertical","subtitlesBottom":50,"subtitlesPaddingRight":5,"playbackBarRight":0,"displayTooltipInSurfaceSelection":true,"id":"MainViewer","subtitlesPaddingLeft":5,"paddingLeft":0,"subtitlesTextDecoration":"none","translationTransitionDuration":1000,"paddingRight":0,"subtitlesTextShadowBlurRadius":0,"subtitlesEnabled":true,"toolTipPaddingTop":4,"toolTipBorderSize":1,"toolTipShadowBlurRadius":3,"progressLeft":0,"subtitlesFontFamily":"Arial","transitionDuration":500,"progressBorderColor":"#000000","playbackBarProgressBorderRadius":0,"toolTipBorderColor":"#767676","progressBarBackgroundColor":["#3399FF"],"height":"100%","subtitlesPaddingTop":5,"toolTipFontWeight":"normal","progressBackgroundOpacity":1,"toolTipShadowSpread":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"subtitlesTop":0,"playbackBarHeadShadowVerticalLength":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarLeft":0,"progressBarOpacity":1,"playbackBarHeadHeight":15,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesShadow":false,"minHeight":50,"playbackBarHeadBorderSize":0,"toolTipShadowOpacity":1,"minWidth":100,"progressBottom":0,"firstTransitionDuration":0,"surfaceReticleOpacity":0.6,"borderRadius":0,"vrPointerColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarHeadShadow":true,"progressHeight":10,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarHeadOpacity":1,"playbackBarBorderColor":"#FFFFFF","toolTipShadowColor":"#333138","doubleClickAction":"toggle_fullscreen","toolTipTextShadowOpacity":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontFamily":"Arial","paddingTop":0,"progressBarBorderSize":0,"progressBorderSize":0,"playbackBarProgressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"subtitlesGap":0,"toolTipPaddingRight":6,"progressBarBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarBottom":5,"paddingBottom":0,"surfaceReticleColor":"#FFFFFF","toolTipPaddingLeft":6,"subtitlesVerticalAlign":"bottom","progressBackgroundColorRatios":[0],"progressRight":0,"toolTipHorizontalAlign":"center","surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"progressOpacity":1,"toolTipFontColor":"#606060","displayTooltipInTouchScreens":true,"subtitlesHorizontalAlign":"center","subtitlesFontSize":"3vmin","propagateClick":false,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"vertical","toolTipBorderRadius":3,"subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"playbackBarProgressOpacity":1,"subtitlesFontColor":"#FFFFFF","toolTipShadowHorizontalLength":0,"playbackBarHeadBorderRadius":0,"toolTipFontStyle":"normal","progressBarBorderColor":"#000000","transitionMode":"blending","subtitlesBorderSize":0,"subtitlesOpacity":1,"progressBarBackgroundColorRatios":[0],"subtitlesPaddingBottom":5,"playbackBarHeadBorderColor":"#000000","progressBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"playbackBarHeight":10,"subtitlesFontWeight":"normal","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"shadow":false},{"items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","media":"this.video_5242A95A_43C2_A799_41C2_73D20BB9E1BE","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_556C175A_5ECF_7F5B_41D1_71A9147D248E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_556C175A_5ECF_7F5B_41D1_71A9147D248E, 0)"}],"class":"PlayList","id":"playList_556C175A_5ECF_7F5B_41D1_71A9147D248E"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_4967074F_43C1_ABF7_419B_925ABE15CBE8","id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_camera"},{"closeButtonPaddingRight":0,"class":"Window","closeButtonPressedBorderSize":0,"borderSize":0,"closeButtonRollOverBorderSize":0,"bodyBorderSize":0,"showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"footerBackgroundOpacity":0,"hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"closeButtonPaddingBottom":0,"width":"90%","backgroundColorDirection":"vertical","data":{"name":"Window15720"},"headerBorderColor":"#000000","id":"window_52347E08_43CE_9D79_41A0_D0956BAE2C15","headerPaddingRight":0,"paddingLeft":0,"paddingRight":0,"closeButtonIconColor":"#B2B2B2","shadowColor":"#000000","headerPaddingLeft":10,"modal":true,"overflow":"scroll","shadowSpread":1,"closeButtonPaddingLeft":0,"bodyBorderColor":"#000000","shadowOpacity":0.5,"closeButtonRollOverIconLineWidth":2,"bodyPaddingLeft":0,"closeButtonRollOverIconColor":"#FFFFFF","height":"90%","closeButtonBackgroundColor":[],"backgroundOpacity":1,"titleTextDecoration":"none","closeButtonPressedIconColor":"#FFFFFF","closeButtonBorderSize":0,"backgroundColor":[],"closeButtonBorderColor":"#000000","titleFontStyle":"normal","veilColorRatios":[0,1],"closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"headerBackgroundColorRatios":[0,0.1,1],"veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"scrollBarVisible":"rollOver","headerBorderSize":0,"titlePaddingRight":5,"veilColorDirection":"horizontal","closeButtonIconWidth":20,"minHeight":0,"closeButtonRollOverBorderColor":"#000000","footerBackgroundColorRatios":[0,0.9,1],"bodyBackgroundColorDirection":"vertical","minWidth":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"headerBackgroundColorDirection":"vertical","bodyPaddingTop":0,"footerBackgroundColorDirection":"vertical","gap":10,"shadowBlurRadius":6,"borderRadius":5,"titleFontWeight":"normal","bodyPaddingBottom":0,"layout":"vertical","contentOpaque":false,"closeButtonPressedBackgroundOpacity":0,"titleFontColor":"#000000","closeButtonPressedBackgroundColorRatios":[],"closeButtonPressedBackgroundColor":[],"titlePaddingBottom":5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"headerBackgroundOpacity":0,"paddingTop":0,"scrollBarColor":"#000000","closeButtonPaddingTop":0,"closeButtonRollOverBackgroundColor":[],"headerPaddingTop":10,"footerBorderSize":0,"horizontalAlign":"center","paddingBottom":0,"closeButtonPressedIconLineWidth":3,"bodyBackgroundOpacity":0,"toolTipHorizontalAlign":"center","children":["this.WebFrame_556307C2_5ECF_7FA8_41B4_1466B2ACF903"],"verticalAlign":"middle","closeButtonPressedBorderColor":"#000000","footerHeight":5,"propagateClick":false,"closeButtonBorderRadius":11,"titleHorizontalAlign":"left","closeButtonBackgroundOpacity":0,"veilColor":["#000000","#000000"],"veilOpacity":0.4,"veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"titleFontSize":"1.29vmin","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"bodyBackgroundColorRatios":[0,0.5,1],"backgroundColorRatios":[],"headerPaddingBottom":5,"closeButtonIconLineWidth":2,"scrollBarWidth":10,"shadowVerticalLength":0,"closeButtonRollOverBackgroundColorRatios":[],"headerVerticalAlign":"middle","shadowHorizontalLength":3,"closeButtonIconHeight":20,"titlePaddingTop":5,"scrollBarMargin":2,"footerBorderColor":"#000000","bodyPaddingRight":0,"titleFontFamily":"Arial","scrollBarOpacity":0.5,"shadow":true,"titlePaddingLeft":5},{"vfov":180,"class":"Panorama","partial":false,"overlays":["this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_tcap0","this.overlay_4C33D7BF_43C1_EA97_41B0_AD7D81C10802","this.overlay_556AD42C_4441_EDB9_41B4_83DAA11DC492","this.overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"],"adjacentPanoramas":[{"distance":8.98,"yaw":-103.31,"select":"this.overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","data":{"overlayID":"overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"}}],"pitch":0,"id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","hfovMax":130,"label":trans('panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF.label'),"frames":[{"thumbnailUrl":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"colCount":24,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","rowCount":1}]},"class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_t.jpg","hfov":360,"data":{"label":"CLASPF2"},"hfovMin":"135%"},{"closeButtonPaddingRight":0,"class":"Window","closeButtonPressedBorderSize":0,"borderSize":0,"closeButtonRollOverBorderSize":0,"bodyBorderSize":0,"showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"footerBackgroundOpacity":0,"hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"closeButtonPaddingBottom":0,"width":"90%","backgroundColorDirection":"vertical","data":{"name":"Window17677"},"headerBorderColor":"#000000","id":"window_569DAA08_4442_6579_41C1_541231190E14","headerPaddingRight":0,"paddingLeft":0,"paddingRight":0,"closeButtonIconColor":"#B2B2B2","shadowColor":"#000000","headerPaddingLeft":10,"modal":true,"overflow":"scroll","shadowSpread":1,"closeButtonPaddingLeft":0,"bodyBorderColor":"#000000","shadowOpacity":0.5,"closeButtonRollOverIconLineWidth":2,"bodyPaddingLeft":0,"closeButtonRollOverIconColor":"#FFFFFF","height":"90%","closeButtonBackgroundColor":[],"backgroundOpacity":1,"titleTextDecoration":"none","closeButtonPressedIconColor":"#FFFFFF","closeButtonBorderSize":0,"backgroundColor":[],"closeButtonBorderColor":"#000000","titleFontStyle":"normal","veilColorRatios":[0,1],"closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"headerBackgroundColorRatios":[0,0.1,1],"veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"scrollBarVisible":"rollOver","headerBorderSize":0,"titlePaddingRight":5,"veilColorDirection":"horizontal","closeButtonIconWidth":20,"minHeight":0,"closeButtonRollOverBorderColor":"#000000","footerBackgroundColorRatios":[0,0.9,1],"bodyBackgroundColorDirection":"vertical","minWidth":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"headerBackgroundColorDirection":"vertical","bodyPaddingTop":0,"footerBackgroundColorDirection":"vertical","gap":10,"shadowBlurRadius":6,"borderRadius":5,"titleFontWeight":"normal","bodyPaddingBottom":0,"layout":"vertical","contentOpaque":false,"closeButtonPressedBackgroundOpacity":0,"titleFontColor":"#000000","closeButtonPressedBackgroundColorRatios":[],"closeButtonPressedBackgroundColor":[],"titlePaddingBottom":5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"headerBackgroundOpacity":0,"paddingTop":0,"scrollBarColor":"#000000","closeButtonPaddingTop":0,"closeButtonRollOverBackgroundColor":[],"headerPaddingTop":10,"footerBorderSize":0,"horizontalAlign":"center","paddingBottom":0,"closeButtonPressedIconLineWidth":3,"bodyBackgroundOpacity":0,"toolTipHorizontalAlign":"center","children":["this.WebFrame_557C67C7_5ECF_7FA9_41B9_83AEC7A1FFBD"],"verticalAlign":"middle","closeButtonPressedBorderColor":"#000000","footerHeight":5,"propagateClick":false,"closeButtonBorderRadius":11,"titleHorizontalAlign":"left","closeButtonBackgroundOpacity":0,"veilColor":["#000000","#000000"],"veilOpacity":0.4,"veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"titleFontSize":"1.29vmin","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"bodyBackgroundColorRatios":[0,0.5,1],"backgroundColorRatios":[],"headerPaddingBottom":5,"closeButtonIconLineWidth":2,"scrollBarWidth":10,"shadowVerticalLength":0,"closeButtonRollOverBackgroundColorRatios":[],"headerVerticalAlign":"middle","shadowHorizontalLength":3,"closeButtonIconHeight":20,"titlePaddingTop":5,"scrollBarMargin":2,"footerBorderColor":"#000000","bodyPaddingRight":0,"titleFontFamily":"Arial","scrollBarOpacity":0.5,"shadow":true,"titlePaddingLeft":5},{"displayPlayOverlay":true,"displayPlaybackBar":true,"id":"MainViewerVideoPlayer","viewerArea":"this.MainViewer","class":"VideoPlayer","clickAction":"play_pause"},{"class":"PanoramaPlayer","viewerArea":"this.MainViewer","zoomEnabled":true,"aaEnabled":true,"surfaceSelectionEnabled":false,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"height":1920,"width":3840,"levels":["this.videolevel_520575BB_5ECF_73D9_41D5_A7F00BF32221","this.videolevel_520595BC_5ECF_73DF_41D0_A01356117FD9"],"class":"VideoResource","id":"videores_52490E65_43C1_FDAB_41D0_9F6080575776"},{"camera":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_camera","media":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_557C87C7_5ECF_7FA8_41AD_E84CDB6D7E82"},{"distance":50,"inertia":false,"useHandCursor":false,"angle":0,"class":"TripodCapPanoramaOverlay","rotate":false,"hfov":45,"image":"this.res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE","id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_tcap0"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":50,"yaw":124.28,"class":"HotspotPanoramaOverlayImage","vfov":12.6,"hfov":13.31,"verticalAlign":"middle","image":"this.res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC","horizontalAlign":"center","pitch":-22.16,"data":{"label":"large-removebg-preview"},"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_4D422B31_43C6_7BAB_41BE_21E71EEFE2FA"],"data":{"label":"large-removebg-preview"},"id":"overlay_4CF2BA26_43C6_65A9_418C_B5CC12E1BFB6"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"roll":0.06,"distance":50,"yaw":122.12,"class":"HotspotPanoramaOverlayImage","rotationY":-8.15,"rotationX":4.38,"verticalAlign":"middle","data":{"label":"CLIQUE"},"hfov":11.68,"vfov":14.46,"image":"this.AnimatedImageResource_555156D4_5ECF_71AF_41D2_D1BD18430D5B","horizontalAlign":"center","pitch":-17.23,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_4C151C1B_43C1_9D9F_419A_BF1B69E0FDC2"],"data":{"label":"CLIQUE"},"id":"overlay_4C59CBD9_43C1_9A9B_4195_1DDB688B885E"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":-104.43,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 04b"},"vfov":25.16,"hfov":25.41,"verticalAlign":"middle","image":"this.AnimatedImageResource_5551B6D6_5ECF_71AB_41D3_F7B73BD1B32C","horizontalAlign":"center","pitch":-15.51,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_53F7A7F7_43C3_AA97_41C5_959EA45E3129"],"data":{"hasPanoramaAction":true,"label":"Arrow 04b"},"id":"overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"hfov":19.64,"distance":50,"yaw":-70.71,"class":"HotspotPanoramaOverlayImage","vfov":21.31,"image":{"levels":[{"height":364,"width":334,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_HS_jrpvywis.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"pitch":-48.8,"data":{"label":"Poligono"}}],"areas":["this.HotspotPanoramaOverlayArea_5278DEEA_43C1_BAB9_41B2_FFB984F6E52D"],"data":{"label":"Poligono"},"id":"overlay_52865ED4_43C1_BAE9_41C8_8678175E0B30"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":50,"yaw":-82.41,"class":"HotspotPanoramaOverlayImage","vfov":15.61,"data":{"label":"CLIQUE"},"hfov":8.55,"verticalAlign":"middle","image":"this.AnimatedImageResource_555216D7_5ECF_71A9_41B2_7AF678BEE4DD","horizontalAlign":"center","pitch":-42.31,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_511AC4D3_43C1_EEEF_41CE_40D755D32BC4"],"data":{"label":"CLIQUE"},"id":"overlay_513C249E_43C1_EE99_418D_09D947757AF4"},{"height":1920,"width":3840,"levels":["this.videolevel_520A753D_5ECF_70D9_41D5_219BE4815349","this.videolevel_520A9551_5ECF_70A9_41D2_4984AC99F208"],"class":"VideoResource","id":"videores_531635CF_43CE_6EF7_41CD_260824DEF4CB"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_495A974D_43C1_ABFB_4197_0CFB908AFFAD"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_4967074F_43C1_ABF7_419B_925ABE15CBE8"},{"borderRadius":0,"class":"WebFrame","data":{"name":"WebFrame2083"},"borderSize":0,"width":"100%","url":trans('WebFrame_556307C2_5ECF_7FA8_41B4_1466B2ACF903.url'),"backgroundColorDirection":"vertical","paddingTop":0,"id":"WebFrame_556307C2_5ECF_7FA8_41B4_1466B2ACF903","paddingLeft":0,"paddingRight":0,"paddingBottom":0,"propagateClick":false,"toolTipHorizontalAlign":"center","backgroundOpacity":1,"height":"100%","scrollEnabled":true,"backgroundColorRatios":[],"insetBorder":false,"backgroundColor":[],"minHeight":0,"minWidth":0,"shadow":false},{"distance":50,"inertia":false,"useHandCursor":false,"angle":0,"class":"TripodCapPanoramaOverlay","rotate":false,"hfov":45,"image":"this.res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE","id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_tcap0"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":171.06,"class":"HotspotPanoramaOverlayImage","data":{"label":"Info Red 02"},"vfov":17.2,"hfov":16.74,"verticalAlign":"middle","image":"this.AnimatedImageResource_555256D8_5ECF_71A7_41B2_A74F3DB1CE36","horizontalAlign":"center","pitch":-19.15,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_4C28A7C6_43C1_EAE9_41B9_31D664F32C51"],"data":{"label":"Info Red 02"},"id":"overlay_4C33D7BF_43C1_EA97_41B0_AD7D81C10802"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":50,"yaw":109.82,"class":"HotspotPanoramaOverlayImage","vfov":10.5,"hfov":10.5,"verticalAlign":"middle","image":"this.res_574BFD98_4442_9E99_41C8_4DA5752EED88","horizontalAlign":"center","pitch":8.49,"data":{"label":"Image"},"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_55297518_4441_EF99_41CE_A11B680524D3"],"data":{"label":"Image"},"id":"overlay_556AD42C_4441_EDB9_41B4_83DAA11DC492"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":-103.31,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 04b"},"vfov":21.9,"hfov":21.66,"verticalAlign":"middle","image":"this.AnimatedImageResource_555296D9_5ECF_7159_41D1_E0427E873422","horizontalAlign":"center","pitch":-10.71,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_57D49955_4446_A7EB_41CE_D7259A658067"],"data":{"hasPanoramaAction":true,"label":"Arrow 04b"},"id":"overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"},{"borderRadius":0,"class":"WebFrame","data":{"name":"WebFrame2084"},"borderSize":0,"width":"100%","url":trans('WebFrame_557C67C7_5ECF_7FA9_41B9_83AEC7A1FFBD.url'),"backgroundColorDirection":"vertical","paddingTop":0,"id":"WebFrame_557C67C7_5ECF_7FA9_41B9_83AEC7A1FFBD","paddingLeft":0,"paddingRight":0,"paddingBottom":0,"propagateClick":false,"toolTipHorizontalAlign":"center","backgroundOpacity":1,"height":"100%","scrollEnabled":true,"backgroundColorRatios":[],"insetBorder":false,"backgroundColor":[],"minHeight":0,"minWidth":0,"shadow":false},{"framerate":29.97,"width":3840,"url":trans('videolevel_520575BB_5ECF_73D9_41D5_A7F00BF32221.url'),"class":"VideoResourceLevel","posterURL":trans('videolevel_520575BB_5ECF_73D9_41D5_A7F00BF32221.posterURL'),"height":1920,"type":"application/x-mpegurl","id":"videolevel_520575BB_5ECF_73D9_41D5_A7F00BF32221"},{"framerate":29.97,"width":3840,"bitrate":16572,"url":trans('videolevel_520595BC_5ECF_73DF_41D0_A01356117FD9.url'),"class":"VideoResourceLevel","posterURL":trans('videolevel_520595BC_5ECF_73DF_41D0_A01356117FD9.posterURL'),"height":1920,"type":"video/mp4","id":"videolevel_520595BC_5ECF_73DF_41D0_A01356117FD9"},{"levels":[{"height":1024,"width":1024,"url":"media/res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE"},{"levels":[{"height":179,"width":318,"url":"media/res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC"},{"mapColor":"any","click":"this.openLink(this.translate('LinkBehaviour_525B0825_43C3_A5AA_41BE_CE2E7D6B79C7.source'), '_blank')","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_4D422B31_43C6_7BAB_41BE_21E71EEFE2FA"},{"colCount":1,"frameDuration":300,"id":"AnimatedImageResource_555156D4_5ECF_71AF_41D2_D1BD18430D5B","rowCount":2,"levels":[{"height":558,"width":279,"url":"media/res_4C28B241_43C2_E5EB_41AA_D691BE603B3C_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameCount":2},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_4C151C1B_43C1_9D9F_419A_BF1B69E0FDC2"},{"colCount":4,"frameDuration":41,"id":"AnimatedImageResource_5551B6D6_5ECF_71AB_41D3_F7B73BD1B32C","rowCount":6,"levels":[{"height":420,"width":480,"url":"media/res_53C98A1D_43C1_A59B_41AD_05C5C1B90C11_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameCount":21},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_53F7A7F7_43C3_AA97_41C5_959EA45E3129"},{"mapColor":"image","click":"this.WebFrame_556307C2_5ECF_7FA8_41B4_1466B2ACF903.set('url', this.translate('PopupWebFrameBehaviour_52353E09_43CE_9D7B_41B7_7A5EB719B40E.url')); this.showWindow(this.window_52347E08_43CE_9D79_41A0_D0956BAE2C15, null, false)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_5278DEEA_43C1_BAB9_41B2_FFB984F6E52D"},{"colCount":1,"frameDuration":300,"id":"AnimatedImageResource_555216D7_5ECF_71A9_41B2_7AF678BEE4DD","rowCount":2,"levels":[{"height":558,"width":279,"url":"media/res_4C28B241_43C2_E5EB_41AA_D691BE603B3C_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameCount":2},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_511AC4D3_43C1_EEEF_41CE_40D755D32BC4"},{"framerate":29.97,"width":3840,"url":trans('videolevel_520A753D_5ECF_70D9_41D5_219BE4815349.url'),"class":"VideoResourceLevel","posterURL":trans('videolevel_520A753D_5ECF_70D9_41D5_219BE4815349.posterURL'),"height":1920,"type":"application/x-mpegurl","id":"videolevel_520A753D_5ECF_70D9_41D5_219BE4815349"},{"framerate":29.97,"width":3840,"bitrate":16572,"url":trans('videolevel_520A9551_5ECF_70A9_41D2_4984AC99F208.url'),"class":"VideoResourceLevel","posterURL":trans('videolevel_520A9551_5ECF_70A9_41D2_4984AC99F208.posterURL'),"height":1920,"type":"video/mp4","id":"videolevel_520A9551_5ECF_70A9_41D2_4984AC99F208"},{"colCount":4,"frameDuration":41,"id":"AnimatedImageResource_555256D8_5ECF_71A7_41B2_A74F3DB1CE36","rowCount":6,"levels":[{"height":1020,"width":680,"url":"media/res_52E001A5_43C1_A6AB_419F_09F478331FF8_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameCount":24},{"mapColor":"any","click":"this.openLink(this.translate('LinkBehaviour_5339FA5C_43C2_A599_41D0_A9D6E8603133.source'), '_blank')","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_4C28A7C6_43C1_EAE9_41B9_31D664F32C51"},{"levels":[{"height":119,"width":119,"url":"media/res_574BFD98_4442_9E99_41C8_4DA5752EED88_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_574BFD98_4442_9E99_41C8_4DA5752EED88"},{"mapColor":"any","click":"this.WebFrame_557C67C7_5ECF_7FA9_41B9_83AEC7A1FFBD.set('url', this.translate('PopupWebFrameBehaviour_569ADA0E_4442_6579_41C5_8BAA09BD669F.url')); this.showWindow(this.window_569DAA08_4442_6579_41C1_541231190E14, null, false)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_55297518_4441_EF99_41CE_A11B680524D3"},{"colCount":4,"frameDuration":41,"id":"AnimatedImageResource_555296D9_5ECF_7159_41D1_E0427E873422","rowCount":6,"levels":[{"height":420,"width":480,"url":"media/res_53C98A1D_43C1_A59B_41AD_05C5C1B90C11_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameCount":21},{"mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_557C87C7_5ECF_7FA8_41AD_E84CDB6D7E82, 115.75384615384615, 0.21896243291592216, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_57D49955_4446_A7EB_41CE_D7259A658067"}],"verticalAlign":"top","propagateClick":false,"toolTipHorizontalAlign":"center","defaultVRPointer":"laser","backgroundOpacity":1,"height":"100%","backgroundPreloadEnabled":true,"backgroundColorRatios":[0],"scrollBarWidth":10,"children":["this.MainViewer"],"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","backgroundColor":["#663300"],"scrollBarVisible":"rollOver","scripts":{"isPanorama":TDV.Tour.Script.isPanorama,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"shareSocial":TDV.Tour.Script.shareSocial,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"getKey":TDV.Tour.Script.getKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"clone":TDV.Tour.Script.clone,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"openLink":TDV.Tour.Script.openLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"init":TDV.Tour.Script.init,"getMediaByName":TDV.Tour.Script.getMediaByName,"existsKey":TDV.Tour.Script.existsKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"showPopupImage":TDV.Tour.Script.showPopupImage,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getOverlays":TDV.Tour.Script.getOverlays,"quizStart":TDV.Tour.Script.quizStart,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"resumePlayers":TDV.Tour.Script.resumePlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizFinish":TDV.Tour.Script.quizFinish,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMapLocation":TDV.Tour.Script.setMapLocation,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"initAnalytics":TDV.Tour.Script.initAnalytics,"cloneBindings":TDV.Tour.Script.cloneBindings,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playAudioList":TDV.Tour.Script.playAudioList,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"setValue":TDV.Tour.Script.setValue,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setLocale":TDV.Tour.Script.setLocale,"initQuiz":TDV.Tour.Script.initQuiz,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeJS":TDV.Tour.Script.executeJS,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPixels":TDV.Tour.Script.getPixels,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"historyGoForward":TDV.Tour.Script.historyGoForward,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"cloneCamera":TDV.Tour.Script.cloneCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"translate":TDV.Tour.Script.translate,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateDeepLink":TDV.Tour.Script.updateDeepLink},"start":"this.init()","minHeight":0,"scrollBarMargin":2,"minWidth":0,"downloadEnabled":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Wed Nov 9 2022