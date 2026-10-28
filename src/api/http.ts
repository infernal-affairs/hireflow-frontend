import axios from 'axios'
import { ElMessage } from 'element-plus'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api/v1',
  timeout: 10_000,
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('hireflow_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = error.response?.status
    const message = error.response?.data?.message ?? '请求失败，请稍后重试'

    if (status === 401) {
      localStorage.removeItem('hireflow_token')
      if (window.location.pathname !== '/login') {
        window.location.assign('/login')
      }
    }

    ElMessage.error(message)
    return Promise.reject(error)
  },
)

export default http
