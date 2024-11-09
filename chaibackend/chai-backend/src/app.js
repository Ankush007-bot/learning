import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({                                       // all middleware is used by app.use  ,cors is a middleware
    origin: process.env.CORS_ORIGIN,                  // we can alow our to connect only partiular url/origin(frontEnd) by using origin
    credentials: true                                  // * is used for allowing all origin
}))

app.use(express.json({limit: "16kb"}))          // here we are telling our app that we are accepting json and put a limit on data
app.use(express.urlencoded({extended: true, limit: "16kb"}))  //most of the tim browser encoded te url by adding some parameters lie %20,+ e.t.c to understand this type of string we used this encoded method
               //extended means that we can also accept nested loops objects in urll

app.use(express.static("public"))     //to accessthe files from public folder
app.use(cookieParser())           // to access thecookies of front end browser


//routes import
import userRouter from './routes/user.routes.js'
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declaration
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

// http://localhost:8000/api/v1/users/register

export { app }