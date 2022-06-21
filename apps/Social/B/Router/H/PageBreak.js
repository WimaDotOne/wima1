
// divide an array into an array of arrays of pageSize
export function PageBreak(items, pageSize) {
  pageSize = pageSize || 10
  const pages = []
  let page = []
  let count = 0
  for(const item of items) {
    count++
    if(count > pageSize) {
      count = 1
    }

    if(count === 1) {
      page = []
      pages.push(page)
    }
    page.push(item)
  }

  return pages
}