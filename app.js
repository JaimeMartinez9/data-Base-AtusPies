import express from "express";
import cors from 'cors'
import db from "./database/db.js"
import productsRouter from './productsRoutes.js'
import categoryRouter from './categoryRoutes.js'

export const app = express()
app.get('/', (_req, res) =>{
res.send('Hola Api')
})

app.use(cors())
app.use(express.json())
app.use('/products', productsRouter)
app.use('/categories', categoryRouter)

try{
	await db.authenticate()
		console.log('conected to database')
	}catch{
		console.log(`error:' ${error}`)
	}

export const server = app.listen(8000,() =>{
console.log('🚀server up in http://localhost:8000/')
})