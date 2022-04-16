import mongoose from "mongoose";

export const CONNECTION_URL = 'mongodb+srv://Phuc125:Phuc01655465065@cluster0.5356o.mongodb.net/TenDB?retryWrites=true&w=majority';


 export const connect = async () => {
    try {
        await mongoose.connect(
            CONNECTION_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // useFindAndModify: false,
                // useCreateIndex: true,
            }
        );
        console.log("%c Connect success", "color: yellow");
    } catch (error) {
        console.log("Error connect:" + error);
    }
}
