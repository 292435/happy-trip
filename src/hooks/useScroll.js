import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'
export function useScroll() {
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollBottomHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    // console.log('111')
    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      isReachBottom.value = true
    }
  }, 100)
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollBottomHandler)
  })
  onMounted(() => {
    window.addEventListener('scroll', scrollBottomHandler)
  })
  return { clientHeight, scrollTop, scrollHeight, isReachBottom }
}
