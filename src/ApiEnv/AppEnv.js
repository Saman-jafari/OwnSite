const hostname = window && window.location && window.location.hostname;
let AppEnv;
if (hostname === "localhost" || hostname === "127.0.0.1") {
    AppEnv = "http://samanjafari.me";
} else {
    AppEnv = window.location.origin;
}

export default AppEnv;
