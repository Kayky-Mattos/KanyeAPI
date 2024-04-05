sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.kayky.kanyeapplication.controller.Home", {
      onInit: function () {},

      onPress: function () {
        const that = this;
        let parameters = {
          url: "https://api.kanye.rest/",
          method: "GET",
          async: false,
          success: function (response) {
            const oModel = new JSONModel(response);
            that.getView().setModel(oModel, "Quote");
            console.log(response);
          },
          error: function (err) {
            console.log(err);
          },
        };
        //promise = Quando uma função retorna como parâmetro de exportação outra função
        $.ajax(parameters);
      },
    });
  }
);
