import Api from "./Api";

export default {
  //Messages Routes
  newMessage(message) {
    return Api().post("/message/new", message);
  },
  getMessageByName(name) {
    return Api().post("/message/getByName", name);
  },
  getAllMessages() {
    return Api().get("/message/getAll");
  },

  //Critism Routes
  newCritism(crit) {
    return Api().post("/critism/new", crit);
  },
  getCritisms() {
    return Api().get("/critism/getAll");
  },

  //Suggestion Routes
  newSuggestion(suggestion) {
    return Api().post("/suggestion/new", suggestion);
  },
  getSuggestionByName(first_name) {
    return Api().post("/suggestion/getByName", first_name);
  },
  getAllSuggestions() {
    return Api().get("/suggestion/getAll");
  },
  fulfillSuggestionById(Id) {
    return Api().put("/suggestion/fulfillById", Id);
  },
  deleteSuggestionById(Id) {
    return Api().delete(`/suggestion/deleteById/${Id}`);
  },

  //Visits Routes
  newVisit(lastVisit) {
    return Api().post("/visit/new", lastVisit);
  },
  getVisitCount() {
    return Api().get("/visit/getAll");
  },
  getRecentVisits() {
    return Api().get("/visit/getRecent");
  },
  deleteLastVisit() {
    return Api().delete("/visit/deleteRecent");
  },
};
