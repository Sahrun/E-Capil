export const config = {
  apiUrl: "http://127.0.0.1:8000/api/",
  webUrl: "http://localhost:3000/",
  Page_404: "404",
  HeaderRequest: {
    baseUrl: "http://localhost:3000/",
    ContentType: "application/json"
  },
  routeApi: {
    user: "user/users",
    navigation: "general/navigation",
    wargas: "warga/wargas",
    wargaSave: "warga/save",
    ChekingExistingNIK: "warga/checkingExistingNIK/"
  },
  alertType: {
    error: "error",
    success: "success",
    warning: "warning"
  },
  modalType: {
    show: "show",
    hide: "hide"
  },
  inputType: {
    text: "text",
    checkbox: "checkbox",
    file: "file",
    radio: "radio",
    number: "number",
    date: "date"
  }
};
