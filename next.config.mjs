/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        AppName: 'Enigma',
        MONGO_URL: "mongodb+srv://admin:admin@enigma%23123@cluster0.sajmo.mongodb.net/"
    }
};

export default nextConfig;
