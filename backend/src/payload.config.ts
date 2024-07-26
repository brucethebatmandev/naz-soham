import path from 'path'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import { Category } from './collections/MenuCategory'
import { Item } from './collections/MenuItem'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { ContactDetails } from './collections/ContactDetails'
import { OpeningHours } from './collections/OpeningHours'
import { ContactMessage } from './collections/ContactMessage'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Category,
    Item,
    Pages,
    Media,
    ContactDetails,
    ContactMessage,
    OpeningHours,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  // cors: ['*']
})
