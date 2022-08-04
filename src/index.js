module.exports = function check(str, bracketsConfig) {
  let strNew =str;
 for (let i=0; i<bracketsConfig.length; i++){
    if (strNew.includes(bracketsConfig[i].join(''))) {
    strNew=strNew.replace(bracketsConfig[i].join(''),'');
    i=-1;
  };
};
return (strNew === '');
}

