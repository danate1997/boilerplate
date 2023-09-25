const express = require('express');
const router = require("express").Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/', async (req,res,next)=>{
    try{
        const allStats = await prisma.Girlfriend.data.findAll();
        res.send(allStats)
    }catch(err){
        next(err)
    }
    console.log(allStats)
})

module.exports = router;