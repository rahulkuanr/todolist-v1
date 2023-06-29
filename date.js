
module.exports.getDate = () => {
  let today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  day = today.toLocaleDateString("en-US", options);

  return day;
};

module.exports.getDay = () => {
    let today = new Date();
  
    var options = {
      weekday: "long"
    };
  
    day = today.toLocaleDateString("en-US", options);
  
    return day;
  };