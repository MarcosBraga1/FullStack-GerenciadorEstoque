// Gerenciamento MongoBD
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Permissões de acesso
import cors from 'cors'

// Esqueleto API
import express from 'express'
const app = express()
app.use(express.json())
app.use(cors())

// Funções para o gerenciamento (CRUD) do estoque
// Criar
app.post('/', async (req, res) => {
    await prisma.item.create({
        data:{
            code: req.body.code,
            invoiceNum: req.body.invoiceNum,
            name: req.body.name,
            amount: req.body.amount,
            price: req.body.price
        }
    })
    res.status(201).json(req.body)
})

// Listar
app.get('/', async (req, res) => {
    const items = await prisma.item.findMany()
    res.status(200).json(items)
})

// Atualizar
app.put('/:id', async (req, res) => {
    await prisma.item.update({
        where: {
            id: req.params.id
        },
        data: {
            code: req.body.code,
            invoiceNum: req.body.invoiceNum,
            name: req.body.name,
            amount: req.body.amount,
            price: req.body.price
        }
    })
    res.status(201).json(req.body)
})

// Deletar
app.delete('/:id', async (req, res) => {
    await prisma.item.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: "Item deletado."})
})

// Define a porta em que o servidor irá rodar
app.listen(3000)