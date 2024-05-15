import { ElMessage, ElMessageBox } from 'element-plus'

export const successMsg = function (message = '', duration = 3000) {
  ElMessage({
    message,
    duration,
    type: 'success',
    showClose: true
  })
}

export const errorMsg = function (message = '', duration = 5000) {
  ElMessage({
    message,
    duration,
    type: 'error',
    showClose: true
  })
}

export const warningMsg = function (message = '', duration = 5000) {
  ElMessage({
    message,
    duration,
    type: 'warning',
    showClose: true
  })
}

export const confirmMsg = function (message = '', options = {}) {
  return ElMessageBox.confirm(message, {
    confirmButtonText: '確定',
    cancelButtonText: '取消',
    cancelButtonClass: 'el-button--primary is-plain',
    center: false,
    showClose: false,
    ...options
  })
}
