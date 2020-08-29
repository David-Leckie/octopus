/* eslint-disable */
export default {
  

authoriseAndConnect: async function() {

  window.appInfo = {
    name: 'Safe Index',
    id: 'safe-index',
    version: '1.0.0',
    vendor: 'David-Leckie'
  };
  window.safeApp = await window.safe.initialiseApp(appInfo);
  let authorisingMessage = document.getElementById("authorisingMessage");
  authorisingMessage.className = authorisingMessage.className.replace("", "show");
  console.log('Authorising SAFE application...');
  
  const authReqUri = await safeApp.auth.genConnUri(
  );
      let authUri = await window.safe.authorise(authReqUri);
      console.log('SAFE application authorised by user');

      authorisingMessage.className = authorisingMessage.className.replace("show", "");
      let connectingMessage = await document.getElementById("connectingMessage");
      connectingMessage.className = connectingMessage.className.replace("", "show");

      await safeApp.auth.loginFromUri(authUri);
      console.log("Application connected to the network");

      connectingMessage.className = connectingMessage.className.replace("show", "");
  
},


linkToMutableData: async function() {
  let connectingMessage = await document.getElementById("connectingMessage");
  connectingMessage.className = connectingMessage.className.replace("", "show");

  let storedNameAndTag = 
  /* INSERT NAME AND TAG CREATED BY ADMIN APP, AS EXAMPLE BELOW */
  { "name": [ 63, 167, 192, 128, 107, 134, 157, 174, 36, 227, 25, 15, 67, 137, 251, 100, 114, 63, 204, 101, 228, 76,
     56, 158, 70, 198, 255, 21, 182, 156, 175, 21 ], "typeTag": 15000 }
  window.linkedMD = await window.safeApp.mutableData.newPublic(storedNameAndTag.name, storedNameAndTag.typeTag);

  connectingMessage.className = connectingMessage.className.replace("show", "");
},

getItems: async function() {
  const entries = await window.linkedMD.getEntries();
  let entriesList = await entries.listEntries();
  
  let items = [];
  entriesList.forEach((entry) => {
    const value = entry.value;
    if (value.buf.length == 0) return;
    const parsedValue = JSON.parse(value.buf);
    const stringKey = entry.key.toString();
    items.push({ key: stringKey, value: parsedValue, version: value.version });
  });
  return items;
},

}

/* eslint-enable */

