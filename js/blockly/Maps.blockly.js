window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Maps = window.blockly.js.blockly.Maps || {};

/**
 * @function Bom Retiro
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.Bom_RetiroArgs = [];
window.blockly.js.blockly.Maps.Bom_Retiro = async function() {

  //
  this.cronapi.maps.createMarker("map1396", 'IdMarcador', 'Ponto Coleta2', this.cronapi.maps.createLatLngPoint('23.529276321550654', '-46.64008049974253'), '', '', '{\"opacity\": 0.6}');
}

/**
 * @function Cambuci
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.CambuciArgs = [];
window.blockly.js.blockly.Maps.Cambuci = async function() {

  //
  this.cronapi.maps.createMarker("map1396", 'IdMarcador', 'Ponto Coleta2', this.cronapi.maps.createLatLngPoint('-23.579550126573654', '-46.62405467592736'), '', '', '{\"opacity\": 0.6}');
}

/**
 * @function Jardim Europa
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.Jardim_EuropaArgs = [];
window.blockly.js.blockly.Maps.Jardim_Europa = async function() {

  //
  this.cronapi.maps.createMarker("map1396", 'IdMarcador', 'Ponto Coleta2', this.cronapi.maps.createLatLngPoint('-23.582745859232038', '-46.68631364565883'), '', '', '{\"opacity\": 0.6}');
}

/**
 * @function Executar
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.ExecutarArgs = [];
window.blockly.js.blockly.Maps.Executar = async function() {

  //
  if (!this.cronapi.maps.isInitialized("map1396")) {
    //
    this.cronapi.maps.init("map1396", 'roadmap', this.cronapi.maps.createLatLngPoint('-23.56393838380646', '-46.62240403663951'), '16', async function(sender_item) {
        item = sender_item;
    }.bind(this));
  }
}

/**
 * @function Mooca
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.MoocaArgs = [];
window.blockly.js.blockly.Maps.Mooca = async function() {

  //
  this.cronapi.maps.createMarker("map1396", 'IdMarcador', 'Ponto Coleta2', this.cronapi.maps.createLatLngPoint('-23.574980735089436', '-46.58703393120003'), '', '', '{\"opacity\": 0.6}');
}

/**
 * @function Pinheiros
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.PinheirosArgs = [];
window.blockly.js.blockly.Maps.Pinheiros = async function() {

  //
  this.cronapi.maps.createMarker("map1396", 'IdMarcador', 'Ponto Coleta2', this.cronapi.maps.createLatLngPoint('-23.56769271370816', '-46.69545780614994'), '', '', '{\"opacity\": 0.6}');
}

/**
 * @function Santo Amaro
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.Santo_AmaroArgs = [];
window.blockly.js.blockly.Maps.Santo_Amaro = async function() {

  //
  this.cronapi.maps.createMarker("map1396", 'IdMarcador', 'Ponto Coleta2', this.cronapi.maps.createLatLngPoint('-23.620106059175736', '-46.69428358069121'), '', '', '{\"opacity\": 0.6}');
}

/**
 * @function Tatuape1
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.Tatuape1Args = [];
window.blockly.js.blockly.Maps.Tatuape1 = async function() {

  //
  this.cronapi.maps.createMarker("map1396", 'IdMarcador', 'Ponto Coleta2', this.cronapi.maps.createLatLngPoint('-23.532982240677303', '-46.56286128771253'), '', '', '{\"opacity\": 0.6}');
}

/**
 * @function Tatuape2
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.Tatuape2Args = [];
window.blockly.js.blockly.Maps.Tatuape2 = async function() {

  //
  this.cronapi.maps.createMarker("map1396", 'IdMarcador', 'Ponto Coleta2', this.cronapi.maps.createLatLngPoint('-23.535943548224132', '-46.572946544783406'), '', '', '{\"opacity\": 0.6}');
}

/**
 * @function UBS Paraisopolis III
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.UBS_Paraisopolis_IIIArgs = [];
window.blockly.js.blockly.Maps.UBS_Paraisopolis_III = async function() {

  //
  this.cronapi.maps.createMarker("map1396", 'IdMarcador', 'Ponto Coleta2', this.cronapi.maps.createLatLngPoint('-23.61671264761557', '-46.72020605169502'), '', '', '{\"opacity\": 0.6}');
}

/**
 * @function Vila Mariana
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 12:39:03
 *
 */
window.blockly.js.blockly.Maps.Vila_MarianaArgs = [];
window.blockly.js.blockly.Maps.Vila_Mariana = async function() {

  //
  this.cronapi.maps.createMarker("map1396", 'IdMarcador', 'Ponto Coleta2', this.cronapi.maps.createLatLngPoint('-23.578805693751278', '-46.64084640817019'), '', '', '{\"opacity\": 0.6}');
}
