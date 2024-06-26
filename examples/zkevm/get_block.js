const { getZkEvmClient, zkEvm, from } = require('../utils_zkevm');

const execute = async () => {
  const client = await getZkEvmClient();
  let blockNum = 1;
  let isParaent = false
  let block = await client.getBlock(blockNum, isParaent)
  console.log("block", block);
  
  let eigenBlock = await client.eigenGetBlock(blockNum, isParaent)
  console.log("eigenBlock", eigenBlock)
}
execute().then(() => {
}).catch(err => {
  console.error("err", err);
}).finally(_ => {
  process.exit(0);
})