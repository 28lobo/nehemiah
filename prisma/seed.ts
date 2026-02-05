import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "../app/generated/prisma/client" // Your custom path
import 'dotenv/config'

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Starting seed...')

  // 1. Ensure the Author exists
  const author = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Marcus',
    },
  })

  console.log(`👤 Author ensured: ${author.name} (ID: ${author.id})`)

  // 2. Define the posts
  const posts = [
    {
      title: 'The Theology of Governance',
      slug: 'theology-of-governance',
      category: 'Theology',
      content: 'Exploring the historical and spiritual roots of modern administration...',
      published: true,
      authorId: author.id,
    },
    {
      title: 'Urban Planning for the New Age',
      slug: 'urban-planning-new-age',
      category: 'Urbanism',
      content: 'Architectural visions for 2025: How design influences community...',
      published: true,
      authorId: author.id,
    },
    {
      title: 'Prophetic Voices in Modernity',
      slug: 'prophetic-voices',
      category: 'Politics',
      content: 'Who are the voices that matter today? A study of influence...',
      published: true,
      authorId: author.id,
    },
    {
      title: 'Security in a Divided World',
      slug: 'security-divided-world',
      category: 'Security',
      content: 'Protecting our heritage while fostering open dialogue...',
      published: true,
      authorId: author.id,
    },
    {
      title: 'Ethics of the Future',
      slug: 'ethics-of-future',
      category: 'Ethics',
      content: 'Where faith meets policy: A new framework for ethical decision-making...',
      published: true,
      authorId: author.id,
    },
    {
      title: 'A Call to Civic Duty',
      slug: 'civic-duty',
      category: 'Community',
      content: 'Engaging the next generation in the noble art of public service...',
      published: true,
      authorId: author.id,
    },
  ]

  // 3. Loop through and create them
  for (const post of posts) {
    const record = await prisma.post.upsert({
      where: { slug: post.slug },
      update: {}, 
      create: post,
    })
    console.log(`✅ Post ensured: ${record.title}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })