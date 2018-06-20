const hostname = window && window.location && window.location.hostname;
let AppEnv;
if (hostname === "localhost" || hostname === "127.0.0.1") {
    AppEnv = "https://192.168.0.68/";
} else {
    AppEnv = window.location.origin;
}

export default AppEnv;
