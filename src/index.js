module.exports = function check(str, bracketsConfig) {
  let strNew =str;
 for (let i=0; i<bracketsConfig.length; i++){
    console.log (strNew);
    if (strNew.includes(bracketsConfig[i].join(''))) {
    strNew=strNew.replace(bracketsConfig[i].join(''),'');
    i=-1;
  };
};
console.log (strNew);
return (strNew === '');
}

/*console.log (check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));*/