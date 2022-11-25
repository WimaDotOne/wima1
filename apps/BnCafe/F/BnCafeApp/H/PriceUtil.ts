
export function Cent2Dollar(cent?: number) {
  cent = cent || 0
  return (cent/100).toFixed(2)
}