const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const Girlfriend =[
    {name: "Kristin", hp: 120, attack: 120, defense: 120, speed: 120, stamina: 120},
]

async function main() {
    await Promise.all(
        Girlfriend.map(async (post) => {
            return await prisma.post.create({
                data : {
                    name: Girlfriend.name,
                    hp: Girlfriend.hp,
                    attack: Girlfriend.attack,
                    defense: Girlfriend.defense,
                    speed: Girlfriend.speed,
                    stamina: Girlfriend.stamina

                }
            })
        })
    )
}