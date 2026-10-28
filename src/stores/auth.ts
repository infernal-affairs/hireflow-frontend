import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type UserRole = 'CANDIDATE' | 'RECRUITER'

export interface CurrentUser {
  id: number
  email: string
  name: string
  role: UserRole
}

const TOKEN_KEY = 'hireflow_token'
const USER_KEY = 'hireflow_user'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem(TOKEN_KEY))
  const user = ref<CurrentUser | null>(readUser())

  const isAuthenticated = computed(() => Boolean(token.value))
  const isCandidate = computed(() => user.value?.role === 'CANDIDATE')
  const isRecruiter = computed(() => user.value?.role === 'RECRUITER')

  function setSession(nextToken: string, nextUser: CurrentUser) {
    token.value = nextToken
    user.value = nextUser
    localStorage.setItem(TOKEN_KEY, nextToken)
    localStorage.setItem(USER_KEY, JSON.stringify(nextUser))
  }

  function clearSession() {
    token.value = null
    user.value = null
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }

  return {
    token,
    user,
    isAuthenticated,
    isCandidate,
    isRecruiter,
    setSession,
    clearSession,
  }
})

function readUser(): CurrentUser | null {
  const raw = localStorage.getItem(USER_KEY)
  if (!raw) return null

  try {
    return JSON.parse(raw) as CurrentUser
  } catch {
    localStorage.removeItem(USER_KEY)
    return null
  }
}
