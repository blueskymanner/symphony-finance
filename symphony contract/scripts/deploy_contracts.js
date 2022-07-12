const hre = require("hardhat");


async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log('Deploying Symphony, GnosisSafeProxy, WMATICGateway, AaveYield and ChainlinkOracle contract with address:', deployerAddress);

  const Symphony = await hre.ethers.getContractFactory("Symphony");
  const GnosisSafeProxy = await hre.ethers.getContractFactory("GnosisSafeProxy");
  const WMATICGateway = await hre.ethers.getContractFactory("WMATICGateway");
  const AaveYield = await hre.ethers.getContractFactory("AaveYield");
  const ChainlinkOracle = await hre.ethers.getContractFactory("ChainlinkOracle");

  const symphony = await (await Symphony.deploy()).deployed();
  console.log('Symphony contract deployed at', symphony.address);

  const gnosisSafeProxy = await GnosisSafeProxy.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  console.log('GnosisSafeProxy contract deployed at', gnosisSafeProxy.address);

  const wmaticGateway = await (await WMATICGateway.deploy()).deployed();
  console.log('WMATICGateway contract deployed at', wmaticGateway.address);

  const aaveYield = await (await AaveYield.deploy()).deployed();
  console.log('AaveYield contract deployed at', aaveYield.address);

  const chainlinkOracle = await ChainlinkOracle.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  console.log('ChainlinkOracle contract deployed at', chainlinkOracle.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
