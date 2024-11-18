"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[49903],{80325:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>d,data:()=>s});var o=n(6254);const a={},d=(0,n(35459).A)(a,[["render",function(e,t){const n=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"enocean-ptm-215ze",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#enocean-ptm-215ze"},[(0,o.Lk)("span",null,"EnOcean PTM 215ZE")])],-1)),(0,o.Lk)("table",null,[t[7]||(t[7]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"PTM 215ZE")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(n,{to:"/supported-devices/#v=EnOcean"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("EnOcean")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Pushbutton transmitter module")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"action, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PTM-215ZE.png",alt:"EnOcean PTM 215ZE"})])],-1)),t[6]||(t[6]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"White-label"),(0,o.Lk)("td",null,"Easyfit by EnOcean EWSxZ, Trio2sys 20020002")],-1))])]),t[9]||(t[9]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power"><span>Green Power</span></a></h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>This device has 4 buttons:</p><table><thead><tr><th>Number</th><th>Button</th><th>Position</th><th>Zigbee Channel</th></tr></thead><tbody><tr><td>1</td><td>A0</td><td>top left</td><td>15</td></tr><tr><td>2</td><td>A1</td><td>bottom left</td><td>20</td></tr><tr><td>3</td><td>B0</td><td>top right</td><td>11</td></tr><tr><td>4</td><td>B1</td><td>bottom right</td><td>25</td></tr></tbody></table><p>In case the module is integrated in a single rocker switch, you need to remove the caps to expose all buttons. A button can be pressed by holding the contact of that button and then push the energy bar.</p><p>To pair it, start by shortly (less than 7 seconds) pressing two different buttons one after another. Any button of the device (A0, A1, B0, B1) can be used.</p><p>Next, read the table above and find the Zigbee channel your network runs at (if you don&#39;t know this, it&#39;s probably channel 11, as this is zigbee2mqtt&#39;s default). Select the button of the device (A0, A1, B0, or B1) that fits your desired channel and execute the following long-short-long sequence:</p><ol><li>Press and hold the selected button for more than 7 seconds before releasing it</li><li>Press the selected button quickly (hold for less than 2 seconds)</li><li>Press and hold the selected button again for more than 7 seconds before releasing it</li></ol><p>Then, press the selected button contact shortly (&lt; 7s) to select radio channel 11. Continue pressing the selected button shortly (&lt; 7s) to increment radio channel. If channel 26 has been reached, then channel 11 will be used next.</p><p>Once the device is paired you need to confirm the channel. To do this, press any button other than the one used previously.</p><p>For more informations, please refer to the <a href="https://www.enocean.com/wp-content/uploads/downloads-produkte/en/products/enocean_modules_24ghz/ptm-215ze/user-manual-pdf/PTM_215ZE_User_Manual-1.pdf" target="_blank" rel="noopener noreferrer">EnOcean PTM 215ZE manual chapter 3.6.2.1</a>.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_1</code>, <code>release_1</code>, <code>press_2</code>, <code>release_2</code>, <code>press_3</code>, <code>release_3</code>, <code>press_4</code>, <code>release_4</code>, <code>press_1_and_2</code>, <code>release_1_and_2</code>, <code>press_1_and_3</code>, <code>release_1_and_3</code>, <code>press_1_and_4</code>, <code>release_1_and_4</code>, <code>press_2_and_3</code>, <code>release_2_and_3</code>, <code>press_2_and_4</code>, <code>release_2_and_4</code>, <code>press_3_and_4</code>, <code>release_3_and_4</code>, <code>press_energy_bar</code>, <code>release_energy_bar</code>, <code>press_or_release_all</code>, <code>lock</code>, <code>unlock</code>, <code>half_open</code>, <code>tilt</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19))])}]]),s=JSON.parse('{"path":"/devices/PTM_215ZE.html","title":"EnOcean PTM 215ZE control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EnOcean PTM 215ZE control via MQTT","description":"Integrate your EnOcean PTM 215ZE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-02T18:14:38.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Green Power","slug":"green-power","link":"#green-power","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1731960135000},"filePathRelative":"devices/PTM_215ZE.md"}')}}]);