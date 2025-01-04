import { permit } from './permit'

export async function syncUserToPermit(userId: string, email: string) {
  try {
    // Create user in Permit
    await permit.api.createUser({
      key: userId,
      email: email
    })

    // Assign default viewer role
    await permit.api.assignRole({
      user: userId,
      role: 'viewer',
      tenant: 'default'
    })

    return true
  } catch (error) {
    console.error('Error syncing user to Permit:', error)
    return false
  }
}