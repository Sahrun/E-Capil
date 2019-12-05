export const FilterBuilder = {
  operation: {
    like: "like",
    equals: "equals"
  },
  properties: {
    filed: "field",
    operation: "operation",
    value: "value",
    sparator:"/",
    count:10,
    page:0,
    Rows:[5,10,25,50,100]
  },
  generateUri
};

function generateUri(filters, count = null, page = null) {
  var uri = "";
  var filter = "";
  filters.forEach(rows => {
    filter = filter.concat(
      (filter !== "" ? "," : "") +
        rows.field +
        FilterBuilder.properties.sparator +
        rows.operation +
        FilterBuilder.properties.sparator +
        rows.value
    );
  });
 
  if (filter !== "") {
    uri =
      "?filter=" +
      filter +
      (count !== null ? "&count=" + count : "") +
      (page !== null ? "&page=" + page : "");
  } else {
    uri =
      "?" +
       (count !== null ? "count=" + count : "") +
       (page !== null ? (count !== null ? "&" : "") + "page=" + page : "");
  }
 // console.log(uri);
  return uri;
}
