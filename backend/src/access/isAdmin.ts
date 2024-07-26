import { Access } from 'payload/config'

export const isAdmin: Access = ({ req: { user } }) => {
  // allow authenticated users
  if (user) {
    return true
  }

}