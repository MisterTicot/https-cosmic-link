(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,o){var n=o(38),r=o(68),c=o(51).copyContent;"null"===location.origin?n.websiteUrl.textContent=location.pathname:n.websiteUrl.textContent=location.origin+location.pathname,n.query.textContent=location.search,n.header.onclick=function(){return c(n.header)},o(69);var a=o(70),i=r.add("Sign",n.sign);i.onSelect=function(){history.replaceState("",null,location.pathname+location.search),a.refresh()},a.init(),r.add("Help",n.help),r.current===i?i.onSelect():r.current||r.select("#sign")},51:function(e,t,o){var n=t,r=o(38),c=o(3);n.enableButton=function(e,t,o){"string"==typeof t&&(e.value=t),e.onclick=o,e.disabled=!1},n.disableButton=function(e,t){"string"==typeof t&&(e.value=t),e.disabled=!0},n.readWriteBox=function(e,t,o){"string"==typeof o&&(e.value=o),"string"==typeof t&&(e.placeholder=t),e.disabled=!1,e.readOnly=!1,e.onclick=void 0,e.style.cursor="initial"},n.readOnlyBox=function(e,t){"string"==typeof t&&(e.value=t),e.disabled=!1,e.readOnly=!0,e.onclick=function(){return n.copyContent(e)},e.style.cursor="pointer"},n.disableBox=function(e,t){n.readWriteBox(e,t,""),e.disabled=!0},n.display=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=t?"."+t:null,r=n?c.create("span",n,o):o;c.rewrite(e,c.create("span",n,r))},n.showIf=function(e,t){e?c.show(t):c.hide(t)},n.switchPage=function(e,t){c.append(r.body,e),c.append(r.main,t)},n.copyContent=function(e){if(c.copyContent(e)&&document.activeElement.value){var t=c.grab("#copied");t&&c.destroy(t);var o=c.create("span","#copied","Copied");e.parentNode.insertBefore(o,e),setTimeout(function(){o.hidden=!0},3e3)}}},69:function(e,t,o){o(38).tamper.src="https://robohash.org/"+function(){if(localStorage.myHash)return localStorage.myHash;for(var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="",o=0;o<32;o++)t+=e.charAt(Math.floor(Math.random()*e.length));return localStorage.myHash=t,t}()},70:function(e,t,o){var n=o(1),r=o(2),c=t,a=o(71),i=a.CosmicLink,s=o(38),u=o(27),l=o(3),d=o(85),h=o(25).timeout,f=o(13),k=o(15),p=o(51),w=p.enableButton,m=p.disableButton,b=p.readWriteBox,g=p.readOnlyBox,v=p.disableBox,x=p.display,y=p.showIf;c.init=function(){for(var e in k.query||l.rewrite(s.cosmiclink_description,"No transaction"),f.nodes.forEach(function(e){return l.append(s.authenticators,e)}),s.authenticators.value=k.authenticator.name,k.redirect&&(s.redirectionCheckbox.checked=!0),k.qrCode&&N.enable(),localStorage)if("network:"===e.substr(0,8)){var t=e.substr(8),o=a.resolve.networkPassphrase(t);a.config.setupNetwork(t,localStorage[e],o)}},c.refresh=r(n.mark(function e(){return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:k.query?k.cosmicLink=new i(k.query):k.cosmicLink={tdesc:{}},S.init(),I.init(),k.cosmicLink&&B.refresh();case 4:case"end":return e.stop()}},e)}));var B={refresh:function(){if(!k.authenticator.needSource||k.accountId)if(!k.authenticator.needNetwork||!s.customNetwork.checked||k.horizon&&k.network){a.config.source=k.accountId,a.config.network=k.network;var e=k.transaction=k.authenticator.handle(k.cosmicLink);k.transaction.then(function(t){k.transaction===e&&I.refresh(t)}).catch(function(){k.transaction===e&&I.error(k.cosmicLink.status)})}else I.error("Please fill custom network fields");else k.authenticator.getAccountId||I.error("Please set a source account")}},S={init:function(){x(s.accountMsgbox,""),k.authenticator=f[s.authenticators.value],localStorage.authenticator=k.authenticator.name,k.authenticator.needSource?C.init():C.disable(),k.authenticator.needNetwork?q.init():q.disable(),k.authenticator.refresh&&k.authenticator.refresh(c.refresh)}},C={disable:function(){l.hide(s.accountDiv),k.accountId=void 0}};C.init=r(n.mark(function e(){var t,o;return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l.show(s.accountDiv),k.authenticator.getAccountId){e.next=5;break}k.cosmicLink.tdesc.source?k.cosmicLink.tdesc.source.error?v(s.accountIdBox,k.cosmicLink.tdesc.source.error.message):(k.accountId=!0,g(s.accountIdBox,k.cosmicLink.tdesc.source)):(k.accountId=localStorage.accountId,b(s.accountIdBox,"Your Account Address or ID",k.accountId)),e.next=25;break;case 5:return k.accountId=void 0,v(s.accountIdBox,"Connecting..."),t=k.authenticator,e.prev=8,e.next=11,k.authenticator.getAccountId();case 11:if(o=e.sent,k.authenticator===t){e.next=14;break}return e.abrupt("return");case 14:k.accountId=o,g(s.accountIdBox,o),B.refresh(),e.next=25;break;case 19:if(e.prev=19,e.t0=e.catch(8),k.authenticator===t){e.next=23;break}return e.abrupt("return");case 23:s.accountIdBox.placeholder="Error",x(s.accountMsgbox,"error",e.t0.message+".");case 25:case"end":return e.stop()}},e,null,[[8,19]])}));var q={disable:function(){l.hide(s.networkDiv),k.network="public",k.horizon=void 0},init:function(){switch(l.show(s.networkDiv),l.hide(s.customNetworkSetup),k.network=k.cosmicLink.tdesc.network||localStorage.networkSelector,k.horizon=void 0,k.network){case void 0:case"public":s.publicNetwork.checked=!0,s.networkSelector.scrollLeft=0;break;case"test":s.testNetwork.checked=!0;break;default:s.networkSelector.onscroll&&s.networkSelector.onscroll(),h(1).then(function(){return s.networkSelector.scrollLeft=999}),s.customNetwork.checked=!0,l.show(s.customNetworkSetup),k.network||(k.network=localStorage.customPassphrase),k.horizon=a.resolve.horizon(k.network||"")||k.cosmicLink.tdesc.horizon,s.customPassphrase.value=k.network||"",s.customHorizon.value=k.horizon||""}k.cosmicLink.tdesc.network&&q.lock()},lock:function(){g(s.customPassphrase),s.publicNetwork.disabled=!0,s.testNetwork.disabled=!0,s.customNetwork.disabled=!0},switch:function(e){localStorage.networkSelector=e,c.refresh()}};s.authenticators.onchange=function(){k.authenticator&&k.authenticator.onExit&&k.authenticator.onExit(),k.redirect=localStorage.redirect=!1,s.redirectionCheckbox.checked=!1,c.refresh()},s.accountIdBox.onchange=function(){k.accountId=localStorage.accountId=s.accountIdBox.value,c.refresh()},s.networkSelector.onscroll=function(){s.networkSelector.style.textOverflow="initial",s.networkSelector.onscroll=void 0},s.publicNetwork.onchange=function(){return q.switch("public")},s.testNetwork.onchange=function(){return q.switch("test")},s.customNetwork.onchange=function(){return q.switch("")},s.customPassphrase.onchange=function(){var e=a.resolve.networkName(s.customPassphrase.value);localStorage.customPassphrase=e,q.switch("")},s.customHorizon.onchange=function(){if(k.horizon=s.customHorizon.value,k.horizon&&"http"!==k.horizon.substr(0,4)&&(k.horizon="https://"+k.horizon),k.network&&k.horizon){var e=a.resolve.networkPassphrase(k.network);a.config.setupNetwork(k.network,k.horizon,e),localStorage["network:"+e]=k.horizon}k.network&&c.refresh()};var I={init:function(){if(I.display(""),y(k.authenticator.redirection,s.redirectionForm),y(k.authenticator.textarea,s.textareaForm),y(k.query&&k.authenticator.qrCode,s.qrForm),k.query)k.authenticator.redirection&&m(s.redirectionButton,"…"),k.authenticator.textarea&&v(s.xdrBox,"Computing..."),k.authenticator.qrCode&&N.loadingAnim();else if(k.authenticator.url){w(s.redirectionButton,k.authenticator.buttonText,function(){return location.href=k.authenticator.url})}else I.error("No transaction")},refresh:function(e){if(k.authenticator.redirection){w(s.redirectionButton,k.authenticator.buttonText,function(){return I.click(e)})}k.redirect&&s.redirectionButton.onclick(),k.authenticator.textarea&&g(s.xdrBox,e),k.authenticator.qrCode&&N.refresh(e)},error:function(e){m(s.redirectionButton,e),v(s.xdrBox,e),l.clear(s.qrCode)}};I.click=function(){var e=r(n.mark(function e(t){var o;return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!=typeof t){e.next=4;break}u.isEmbedded&&"new"===k.authenticator.target?(open(t,"_blank"),window.parent.postMessage("close","*")):u.isEmbedded&&"external"===k.authenticator.target&&(open(t),window.parent.postMessage("close","*")),e.next=20;break;case 4:if("function"!=typeof t){e.next=20;break}return x(s.redirectionMsgbox,"info","Waiting for confirmation..."),s.redirectionButton.disabled=!0,e.prev=7,e.next=10,t();case 10:return o=e.sent,e.next=13,I.sendTransaction(o);case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(7),console.error(e.t0.response||e.t0),I.display("error",e.t0.message.replace(/\.$/,"")),s.redirectionButton.disabled=!1;case 20:case"end":return e.stop()}},e,null,[[7,15]])}));return function(t){return e.apply(this,arguments)}}(),I.sendTransaction=r(n.mark(function e(){return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return I.display("info","Sending to the network..."),history.replaceState({},"",k.cosmicLink.query),s.query.textContent=k.cosmicLink.query,q.lock(),e.next=6,k.cosmicLink.send();case 6:I.display("info","Transaction validated"),u.isEmbedded&&parent.postMessage("close","*"),document.referrer?w(s.redirectionButton,"Close",function(){return history.back()}):s.redirectionButton.value="Done";case 9:case"end":return e.stop()}},e)})),I.display=function(e,t){x(s.redirectionMsgbox,e,t)};var N={loadingAnim:function(){l.rewrite(s.qrCode,l.create("canvas",".cosmiclib_loadingAnim"))},refresh:function(e){if(k.authenticator.qrCode&&e){var t=l.create("canvas");d.toCanvas(t,e,{margin:0,scale:4}),t.title=e,l.rewrite(s.qrCode,t)}},switch:function(){k.qrCode=localStorage.QR=!k.qrCode,k.qrCode?N.enable():N.disable()},enable:function(){s.qrButton.className="enabled",l.show(s.qrCode)},disable:function(){s.qrButton.className=void 0,l.hide(s.qrCode)}};s.redirectionButton.onclick=I.click,s.qrButton.onclick=N.switch,s.redirectionCheckbox.onchange=function(){k.redirect=localStorage.redirect=!k.redirect}}}]);
//# sourceMappingURL=app.js.map