import { server } from "./lib/server.js";

const app = {};

app.init = () => {
    //sukurti pradinius folderius
    //sukurti pradinius files

    //prisijungti prie DB;
    //paleisti (musu) serveri;
    server.init();
    
    //pasikrtojantys procesai:
    // - istrinti nenaudojamus failus
    // - su'zip'inti sena informacija
    // - atsinaujinti API informacija
}

app.init();

export { app }