import createApp from "./app";
import config from "./config/config";

(async ()=>{
    const app = await createApp()
    app.listen(config.port, () => {
        console.log(`app runing on port ${config.port}`)
    })  
})()