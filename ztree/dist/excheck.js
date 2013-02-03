define("gallery/ztree/3.5.2/excheck",["$"],function(a){var d=a("$");(function(a){var b={event:{CHECK:"ztree_check"},id:{CHECK:"_check"},checkbox:{STYLE:"checkbox",DEFAULT:"chk",DISABLED:"disable",FALSE:"false",TRUE:"true",FULL:"full",PART:"part",FOCUS:"focus"},radio:{STYLE:"radio",TYPE_ALL:"all",TYPE_LEVEL:"level"}},c={check:{enable:!1,autoCheckTrigger:!1,chkStyle:b.checkbox.STYLE,nocheckInherit:!1,chkDisabledInherit:!1,radioType:b.radio.TYPE_LEVEL,chkboxType:{Y:"ps",N:"ps"}},data:{key:{checked:"checked"}},callback:{beforeCheck:null,onCheck:null}},d=function(a){var b=v.getRoot(a);b.radioCheckedList=[]},e=function(){},f=function(a){var b=a.treeObj,c=t.event;b.bind(c.CHECK,function(b,c,d,e){s.apply(a.callback.onCheck,[c?c:b,d,e])})},g=function(a){var b=a.treeObj,c=t.event;b.unbind(c.CHECK)},h=function(a){var b=a.target,c=v.getSetting(a.data.treeId),d="",e=null,f="",g="",h=null,i=null;if(s.eqs(a.type,"mouseover")?c.check.enable&&s.eqs(b.tagName,"span")&&null!==b.getAttribute("treeNode"+t.id.CHECK)&&(d=b.parentNode.id,f="mouseoverCheck"):s.eqs(a.type,"mouseout")?c.check.enable&&s.eqs(b.tagName,"span")&&null!==b.getAttribute("treeNode"+t.id.CHECK)&&(d=b.parentNode.id,f="mouseoutCheck"):s.eqs(a.type,"click")&&c.check.enable&&s.eqs(b.tagName,"span")&&null!==b.getAttribute("treeNode"+t.id.CHECK)&&(d=b.parentNode.id,f="checkNode"),d.length>0)switch(e=v.getNodeCache(c,d),f){case"checkNode":h=n.onCheckNode;break;case"mouseoverCheck":h=n.onMouseoverCheck;break;case"mouseoutCheck":h=n.onMouseoutCheck}var j={stop:!1,node:e,nodeEventType:f,nodeEventCallback:h,treeEventType:g,treeEventCallback:i};return j},i=function(a,b,c,d){if(c){var h=a.data.key.checked;"string"==typeof c[h]&&(c[h]=s.eqs(c[h],"true")),c[h]=!!c[h],c.checkedOld=c[h],"string"==typeof c.nocheck&&(c.nocheck=s.eqs(c.nocheck,"true")),c.nocheck=!!c.nocheck||a.check.nocheckInherit&&d&&!!d.nocheck,"string"==typeof c.chkDisabled&&(c.chkDisabled=s.eqs(c.chkDisabled,"true")),c.chkDisabled=!!c.chkDisabled||a.check.chkDisabledInherit&&d&&!!d.chkDisabled,"string"==typeof c.halfCheck&&(c.halfCheck=s.eqs(c.halfCheck,"true")),c.halfCheck=!!c.halfCheck,c.check_Child_State=-1,c.check_Focus=!1,c.getCheckStatus=function(){return v.getCheckStatus(a,c)}}},j=function(a,b,c){var d=a.data.key.checked;if(a.check.enable){if(v.makeChkFlag(a,b),a.check.chkStyle==t.radio.STYLE&&a.check.radioType==t.radio.TYPE_ALL&&b[d]){var e=v.getRoot(a);e.radioCheckedList.push(b)}c.push("<span ID='",b.tId,t.id.CHECK,"' class='",u.makeChkClass(a,b),"' treeNode",t.id.CHECK,b.nocheck===!0?" style='display:none;'":"","></span>")}},k=function(b,c){c.checkNode=function(c,d,e,f){var g=this.setting.data.key.checked;if(c.chkDisabled!==!0&&(d!==!0&&d!==!1&&(d=!c[g]),f=!!f,(c[g]!==d||e)&&(!f||0!=s.apply(this.setting.callback.beforeCheck,[this.setting.treeId,c],!0))&&s.uCanDo(this.setting)&&this.setting.check.enable&&c.nocheck!==!0)){c[g]=d;var h=a("#"+c.tId+t.id.CHECK);(e||this.setting.check.chkStyle===t.radio.STYLE)&&u.checkNodeRelation(this.setting,c),u.setChkClass(this.setting,h,c),u.repairParentChkClassWithSelf(this.setting,c),f&&b.treeObj.trigger(t.event.CHECK,[null,b.treeId,c])}},c.checkAllNodes=function(a){u.repairAllChk(this.setting,!!a)},c.getCheckedNodes=function(a){var c=this.setting.data.key.children;return a=a!==!1,v.getTreeCheckedNodes(this.setting,v.getRoot(b)[c],a)},c.getChangeCheckedNodes=function(){var a=this.setting.data.key.children;return v.getTreeChangeCheckedNodes(this.setting,v.getRoot(b)[a])},c.setChkDisabled=function(a,b,c,d){b=!!b,c=!!c,d=!!d,u.repairSonChkDisabled(this.setting,a,b,d),u.repairParentChkDisabled(this.setting,a.getParentNode(),b,c)};var d=c.updateNode;c.updateNode=function(b,e){if(d&&d.apply(c,arguments),b&&this.setting.check.enable){var f=a("#"+b.tId);if(f.get(0)&&s.uCanDo(this.setting)){var g=a("#"+b.tId+t.id.CHECK);(1==e||this.setting.check.chkStyle===t.radio.STYLE)&&u.checkNodeRelation(this.setting,b),u.setChkClass(this.setting,g,b),u.repairParentChkClassWithSelf(this.setting,b)}}}},l={getRadioCheckedList:function(a){for(var b=v.getRoot(a).radioCheckedList,c=0,d=b.length;d>c;c++)v.getNodeCache(a,b[c].tId)||(b.splice(c,1),c--,d--);return b},getCheckStatus:function(a,b){if(!a.check.enable||b.nocheck||b.chkDisabled)return null;var c=a.data.key.checked,d={checked:b[c],half:b.halfCheck?b.halfCheck:a.check.chkStyle==t.radio.STYLE?2===b.check_Child_State:b[c]?b.check_Child_State>-1&&2>b.check_Child_State:b.check_Child_State>0};return d},getTreeCheckedNodes:function(a,b,c,d){if(!b)return[];var e=a.data.key.children,f=a.data.key.checked,g=c&&a.check.chkStyle==t.radio.STYLE&&a.check.radioType==t.radio.TYPE_ALL;d=d?d:[];for(var h=0,i=b.length;i>h&&(b[h].nocheck===!0||b[h].chkDisabled===!0||b[h][f]!=c||(d.push(b[h]),!g))&&(v.getTreeCheckedNodes(a,b[h][e],c,d),!(g&&d.length>0));h++);return d},getTreeChangeCheckedNodes:function(a,b,c){if(!b)return[];var d=a.data.key.children,e=a.data.key.checked;c=c?c:[];for(var f=0,g=b.length;g>f;f++)b[f].nocheck!==!0&&b[f].chkDisabled!==!0&&b[f][e]!=b[f].checkedOld&&c.push(b[f]),v.getTreeChangeCheckedNodes(a,b[f][d],c);return c},makeChkFlag:function(a,b){if(b){var c=a.data.key.children,d=a.data.key.checked,e=-1;if(b[c])for(var f=0,g=b[c].length;g>f;f++){var h=b[c][f],i=-1;if(a.check.chkStyle==t.radio.STYLE){if(i=h.nocheck===!0||h.chkDisabled===!0?h.check_Child_State:h.halfCheck===!0?2:h[d]?2:h.check_Child_State>0?2:0,2==i){e=2;break}0==i&&(e=0)}else if(a.check.chkStyle==t.checkbox.STYLE){if(i=h.nocheck===!0||h.chkDisabled===!0?h.check_Child_State:h.halfCheck===!0?1:h[d]?-1===h.check_Child_State||2===h.check_Child_State?2:1:h.check_Child_State>0?1:0,1===i){e=1;break}if(2===i&&e>-1&&f>0&&i!==e){e=1;break}if(2===e&&i>-1&&2>i){e=1;break}i>-1&&(e=i)}}b.check_Child_State=e}}},m={},n={onCheckNode:function(b,c){if(c.chkDisabled===!0)return!1;var d=v.getSetting(b.data.treeId),e=d.data.key.checked;if(0==s.apply(d.callback.beforeCheck,[d.treeId,c],!0))return!0;c[e]=!c[e],u.checkNodeRelation(d,c);var f=a("#"+c.tId+t.id.CHECK);return u.setChkClass(d,f,c),u.repairParentChkClassWithSelf(d,c),d.treeObj.trigger(t.event.CHECK,[b,d.treeId,c]),!0},onMouseoverCheck:function(b,c){if(c.chkDisabled===!0)return!1;var d=v.getSetting(b.data.treeId),e=a("#"+c.tId+t.id.CHECK);return c.check_Focus=!0,u.setChkClass(d,e,c),!0},onMouseoutCheck:function(b,c){if(c.chkDisabled===!0)return!1;var d=v.getSetting(b.data.treeId),e=a("#"+c.tId+t.id.CHECK);return c.check_Focus=!1,u.setChkClass(d,e,c),!0}},o={},p={checkNodeRelation:function(b,c){var d,e,f,g=b.data.key.children,h=b.data.key.checked,i=t.radio;if(b.check.chkStyle==i.STYLE){var j=v.getRadioCheckedList(b);if(c[h])if(b.check.radioType==i.TYPE_ALL){for(e=j.length-1;e>=0;e--)d=j[e],d[h]=!1,j.splice(e,1),u.setChkClass(b,a("#"+d.tId+t.id.CHECK),d),d.parentTId!=c.parentTId&&u.repairParentChkClassWithSelf(b,d);j.push(c)}else{var k=c.parentTId?c.getParentNode():v.getRoot(b);for(e=0,f=k[g].length;f>e;e++)d=k[g][e],d[h]&&d!=c&&(d[h]=!1,u.setChkClass(b,a("#"+d.tId+t.id.CHECK),d))}else if(b.check.radioType==i.TYPE_ALL)for(e=0,f=j.length;f>e;e++)if(c==j[e]){j.splice(e,1);break}}else c[h]&&(!c[g]||0==c[g].length||b.check.chkboxType.Y.indexOf("s")>-1)&&u.setSonNodeCheckBox(b,c,!0),c[h]||c[g]&&0!=c[g].length&&!(b.check.chkboxType.N.indexOf("s")>-1)||u.setSonNodeCheckBox(b,c,!1),c[h]&&b.check.chkboxType.Y.indexOf("p")>-1&&u.setParentNodeCheckBox(b,c,!0),!c[h]&&b.check.chkboxType.N.indexOf("p")>-1&&u.setParentNodeCheckBox(b,c,!1)},makeChkClass:function(a,b){var c=a.data.key.checked,d=t.checkbox,e=t.radio,f="";f=b.chkDisabled===!0?d.DISABLED:b.halfCheck?d.PART:a.check.chkStyle==e.STYLE?1>b.check_Child_State?d.FULL:d.PART:b[c]?2===b.check_Child_State||-1===b.check_Child_State?d.FULL:d.PART:1>b.check_Child_State?d.FULL:d.PART;var g=a.check.chkStyle+"_"+(b[c]?d.TRUE:d.FALSE)+"_"+f;return g=b.check_Focus&&b.chkDisabled!==!0?g+"_"+d.FOCUS:g,"button "+d.DEFAULT+" "+g},repairAllChk:function(a,b){if(a.check.enable&&a.check.chkStyle===t.checkbox.STYLE)for(var c=a.data.key.checked,d=a.data.key.children,e=v.getRoot(a),f=0,g=e[d].length;g>f;f++){var h=e[d][f];h.nocheck!==!0&&h.chkDisabled!==!0&&(h[c]=b),u.setSonNodeCheckBox(a,h,b)}},repairChkClass:function(b,c){if(c&&(v.makeChkFlag(b,c),c.nocheck!==!0)){var d=a("#"+c.tId+t.id.CHECK);u.setChkClass(b,d,c)}},repairParentChkClass:function(a,b){if(b&&b.parentTId){var c=b.getParentNode();u.repairChkClass(a,c),u.repairParentChkClass(a,c)}},repairParentChkClassWithSelf:function(a,b){if(b){var c=a.data.key.children;b[c]&&b[c].length>0?u.repairParentChkClass(a,b[c][0]):u.repairParentChkClass(a,b)}},repairSonChkDisabled:function(a,b,c,d){if(b){var e=a.data.key.children;if(b.chkDisabled!=c&&(b.chkDisabled=c),u.repairChkClass(a,b),b[e]&&d)for(var f=0,g=b[e].length;g>f;f++){var h=b[e][f];u.repairSonChkDisabled(a,h,c,d)}}},repairParentChkDisabled:function(a,b,c,d){b&&(b.chkDisabled!=c&&d&&(b.chkDisabled=c),u.repairChkClass(a,b),u.repairParentChkDisabled(a,b.getParentNode(),c,d))},setChkClass:function(a,b,c){b&&(c.nocheck===!0?b.hide():b.show(),b.removeClass(),b.addClass(u.makeChkClass(a,c)))},setParentNodeCheckBox:function(b,c,d,e){var f=b.data.key.children,g=b.data.key.checked,h=a("#"+c.tId+t.id.CHECK);if(e||(e=c),v.makeChkFlag(b,c),c.nocheck!==!0&&c.chkDisabled!==!0&&(c[g]=d,u.setChkClass(b,h,c),b.check.autoCheckTrigger&&c!=e&&b.treeObj.trigger(t.event.CHECK,[null,b.treeId,c])),c.parentTId){var i=!0;if(!d)for(var j=c.getParentNode()[f],k=0,l=j.length;l>k;k++)if(j[k].nocheck!==!0&&j[k].chkDisabled!==!0&&j[k][g]||(j[k].nocheck===!0||j[k].chkDisabled===!0)&&j[k].check_Child_State>0){i=!1;break}i&&u.setParentNodeCheckBox(b,c.getParentNode(),d,e)}},setSonNodeCheckBox:function(b,c,d,e){if(c){var f=b.data.key.children,g=b.data.key.checked,h=a("#"+c.tId+t.id.CHECK);e||(e=c);var i=!1;if(c[f])for(var j=0,k=c[f].length;k>j&&c.chkDisabled!==!0;j++){var l=c[f][j];u.setSonNodeCheckBox(b,l,d,e),l.chkDisabled===!0&&(i=!0)}c!=v.getRoot(b)&&c.chkDisabled!==!0&&(i&&c.nocheck!==!0&&v.makeChkFlag(b,c),c.nocheck!==!0&&c.chkDisabled!==!0?(c[g]=d,i||(c.check_Child_State=c[f]&&c[f].length>0?d?2:0:-1)):c.check_Child_State=-1,u.setChkClass(b,h,c),b.check.autoCheckTrigger&&c!=e&&c.nocheck!==!0&&c.chkDisabled!==!0&&b.treeObj.trigger(t.event.CHECK,[null,b.treeId,c]))}}},q={tools:o,view:p,event:m,data:l};a.extend(!0,a.fn.zTree.consts,b),a.extend(!0,a.fn.zTree._z,q);var r=a.fn.zTree,s=r._z.tools,t=r.consts,u=r._z.view,v=r._z.data;r._z.event,v.exSetting(c),v.addInitBind(f),v.addInitUnBind(g),v.addInitCache(e),v.addInitNode(i),v.addInitProxy(h),v.addInitRoot(d),v.addBeforeA(j),v.addZTreeTools(k);var x=u.createNodes;u.createNodes=function(a,b,c,d){x&&x.apply(u,arguments),c&&u.repairParentChkClassWithSelf(a,d)};var y=u.removeNode;u.removeNode=function(a,b){var c=b.getParentNode();y&&y.apply(u,arguments),b&&c&&(u.repairChkClass(a,c),u.repairParentChkClass(a,c))};var z=u.appendNodes;u.appendNodes=function(a,b,c,d){var g="";return z&&(g=z.apply(u,arguments)),d&&v.makeChkFlag(a,d),g}})(d)});