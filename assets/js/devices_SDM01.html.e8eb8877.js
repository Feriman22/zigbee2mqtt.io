"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96507],{25477:(e,r,o)=>{o.r(r),o.d(r,{comp:()=>c,data:()=>a});var n=o(6254);const t={},c=(0,o(35459).A)(t,[["render",function(e,r){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[r[8]||(r[8]=(0,n.Lk)("h1",{id:"tuya-sdm01",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#tuya-sdm01"},[(0,n.Lk)("span",null,"Tuya SDM01")])],-1)),(0,n.Lk)("table",null,[r[6]||(r[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[r[2]||(r[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"SDM01")],-1)),(0,n.Lk)("tr",null,[r[1]||(r[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,n.k6)((()=>r[0]||(r[0]=[(0,n.eW)("Tuya")]))),_:1})])]),r[3]||(r[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Smart energy monitor for 3P+N system")],-1)),r[4]||(r[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"voltage_a, voltage_b, voltage_c, power_a, power_b, power_c, current_a, current_b, current_c, energy, produced_energy, power_factor, power, ac_frequency, energy_a, energy_b, energy_c, energy_produced_a, energy_produced_b, energy_produced_c, power_factor_a, power_factor_b, power_factor_c, linkquality")],-1)),r[5]||(r[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SDM01.png",alt:"Tuya SDM01"})])],-1))])]),r[9]||(r[9]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>r[7]||(r[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),r[10]||(r[10]=(0,n.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>ac_frequency_calibration</code>: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="voltage-a-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-a-numeric"><span>Voltage a (numeric)</span></a></h3><p>Measured electrical potential value (phase A). Value can be found in the published state on the <code>voltage_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-b-numeric"><span>Voltage b (numeric)</span></a></h3><p>Measured electrical potential value (phase B). Value can be found in the published state on the <code>voltage_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-c-numeric"><span>Voltage c (numeric)</span></a></h3><p>Measured electrical potential value (phase C). Value can be found in the published state on the <code>voltage_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-a-numeric"><span>Power a (numeric)</span></a></h3><p>Instantaneous measured power (phase A). Value can be found in the published state on the <code>power_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-b-numeric"><span>Power b (numeric)</span></a></h3><p>Instantaneous measured power (phase B). Value can be found in the published state on the <code>power_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-c-numeric"><span>Power c (numeric)</span></a></h3><p>Instantaneous measured power (phase C). Value can be found in the published state on the <code>power_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-a-numeric" tabindex="-1"><a class="header-anchor" href="#current-a-numeric"><span>Current a (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase A). Value can be found in the published state on the <code>current_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-b-numeric"><span>Current b (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase B). Value can be found in the published state on the <code>current_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-c-numeric"><span>Current c (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase C). Value can be found in the published state on the <code>current_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Total forward active energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="produced-energy-numeric" tabindex="-1"><a class="header-anchor" href="#produced-energy-numeric"><span>Produced energy (numeric)</span></a></h3><p>Total reverse active energy. Value can be found in the published state on the <code>produced_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-factor-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-numeric"><span>Power factor (numeric)</span></a></h3><p>Total power factor. Value can be found in the published state on the <code>power_factor</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Total active power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#ac-frequency-numeric"><span>AC frequency (numeric)</span></a></h3><p>Measured electrical AC frequency. Value can be found in the published state on the <code>ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hz</code>.</p><h3 id="energy-a-numeric" tabindex="-1"><a class="header-anchor" href="#energy-a-numeric"><span>Energy a (numeric)</span></a></h3><p>Sum of consumed energy (phase A). Value can be found in the published state on the <code>energy_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-b-numeric" tabindex="-1"><a class="header-anchor" href="#energy-b-numeric"><span>Energy b (numeric)</span></a></h3><p>Sum of consumed energy (phase B). Value can be found in the published state on the <code>energy_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-c-numeric" tabindex="-1"><a class="header-anchor" href="#energy-c-numeric"><span>Energy c (numeric)</span></a></h3><p>Sum of consumed energy (phase C). Value can be found in the published state on the <code>energy_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-a-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-a-numeric"><span>Energy produced a (numeric)</span></a></h3><p>Sum of produced energy (phase A). Value can be found in the published state on the <code>energy_produced_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-b-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-b-numeric"><span>Energy produced b (numeric)</span></a></h3><p>Sum of produced energy (phase B). Value can be found in the published state on the <code>energy_produced_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-c-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-c-numeric"><span>Energy produced c (numeric)</span></a></h3><p>Sum of produced energy (phase C). Value can be found in the published state on the <code>energy_produced_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-factor-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-a-numeric"><span>Power factor a (numeric)</span></a></h3><p>Instantaneous measured power factor (phase A). Value can be found in the published state on the <code>power_factor_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-b-numeric"><span>Power factor b (numeric)</span></a></h3><p>Instantaneous measured power factor (phase B). Value can be found in the published state on the <code>power_factor_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-c-numeric"><span>Power factor c (numeric)</span></a></h3><p>Instantaneous measured power factor (phase C). Value can be found in the published state on the <code>power_factor_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',50))])}]]),a=JSON.parse('{"path":"/devices/SDM01.html","title":"Tuya SDM01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya SDM01 control via MQTT","description":"Integrate your Tuya SDM01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:38.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Voltage a (numeric)","slug":"voltage-a-numeric","link":"#voltage-a-numeric","children":[]},{"level":3,"title":"Voltage b (numeric)","slug":"voltage-b-numeric","link":"#voltage-b-numeric","children":[]},{"level":3,"title":"Voltage c (numeric)","slug":"voltage-c-numeric","link":"#voltage-c-numeric","children":[]},{"level":3,"title":"Power a (numeric)","slug":"power-a-numeric","link":"#power-a-numeric","children":[]},{"level":3,"title":"Power b (numeric)","slug":"power-b-numeric","link":"#power-b-numeric","children":[]},{"level":3,"title":"Power c (numeric)","slug":"power-c-numeric","link":"#power-c-numeric","children":[]},{"level":3,"title":"Current a (numeric)","slug":"current-a-numeric","link":"#current-a-numeric","children":[]},{"level":3,"title":"Current b (numeric)","slug":"current-b-numeric","link":"#current-b-numeric","children":[]},{"level":3,"title":"Current c (numeric)","slug":"current-c-numeric","link":"#current-c-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Produced energy (numeric)","slug":"produced-energy-numeric","link":"#produced-energy-numeric","children":[]},{"level":3,"title":"Power factor (numeric)","slug":"power-factor-numeric","link":"#power-factor-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"AC frequency (numeric)","slug":"ac-frequency-numeric","link":"#ac-frequency-numeric","children":[]},{"level":3,"title":"Energy a (numeric)","slug":"energy-a-numeric","link":"#energy-a-numeric","children":[]},{"level":3,"title":"Energy b (numeric)","slug":"energy-b-numeric","link":"#energy-b-numeric","children":[]},{"level":3,"title":"Energy c (numeric)","slug":"energy-c-numeric","link":"#energy-c-numeric","children":[]},{"level":3,"title":"Energy produced a (numeric)","slug":"energy-produced-a-numeric","link":"#energy-produced-a-numeric","children":[]},{"level":3,"title":"Energy produced b (numeric)","slug":"energy-produced-b-numeric","link":"#energy-produced-b-numeric","children":[]},{"level":3,"title":"Energy produced c (numeric)","slug":"energy-produced-c-numeric","link":"#energy-produced-c-numeric","children":[]},{"level":3,"title":"Power factor a (numeric)","slug":"power-factor-a-numeric","link":"#power-factor-a-numeric","children":[]},{"level":3,"title":"Power factor b (numeric)","slug":"power-factor-b-numeric","link":"#power-factor-b-numeric","children":[]},{"level":3,"title":"Power factor c (numeric)","slug":"power-factor-c-numeric","link":"#power-factor-c-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1731960135000},"filePathRelative":"devices/SDM01.md"}')}}]);