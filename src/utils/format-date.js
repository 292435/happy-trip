import dayjs from 'dayjs'
export function formatDate(time, format = 'MM月DD日') {
  return dayjs(time).format(format)
}
export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day')
}
