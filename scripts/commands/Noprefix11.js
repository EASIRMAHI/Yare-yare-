module.exports.config = {
  name: "😔",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "😔",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
  if (body.startsWith("😔")) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    
    var rahad = [
      "•⎯͢⎯⃝🙂_ সাইটামার মা তোমার ক্রাশ হইতেই পারে কিন্তু সে আনস & wang লিঙ্গ এর খাওয়া মাল🙂\       _এটাই প্রকৃতির নিয়ম⎯͢⎯⃝🤍🫶🌺!-:))"
    ];
    
    var rahad2 = rahad[Math.floor(Math.random() * rahad.length)];
 
    var link = ["https://i.imgur.com/RIvK9Up.mp4"];
    var callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    
    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};
module.exports.run = async ({ api, event, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["😔"] == "undefined" || data["😔"] == true) data["😔"] = false;
  else data["😔"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["😔"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
