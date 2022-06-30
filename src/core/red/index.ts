import type { Red } from 'types/red'
import { num } from '../common'

export function redSum(reds: Red[]): number {
    
    return reds.reduce((sum, n) => (sum += num(n), sum), 0)
}
