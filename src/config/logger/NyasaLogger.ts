import bunyan from "bunyan";

const NyasaLogger = bunyan.createLogger({
  name: "NyasaDataHubLogger"
});

export default NyasaLogger;
