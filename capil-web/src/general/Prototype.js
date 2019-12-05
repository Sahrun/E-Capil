import { config } from "../config/Config";

export const Prototype = {
 showAlert,
  modal
};

function showAlert(type, message = null) {
  if (type == config.alertType.warning) {
    alert(message);
  } else if (type == config.alertType.success) {
    alert(message == null?"Data berhasil disimpan":message);
  }
 }

function modal(modalName, type) {
  window.$("#" + modalName).modal(type);
}
