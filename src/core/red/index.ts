import type { Red } from 'types'
import { isPrime, num } from '../common'

export function redSum(reds: Red[]): number {
    return reds.reduce((sum, n) => (sum += num(n), sum), 0)
}

export function redDistance(reds: Red[]): number {
    return Math.max(...reds.map(n => num(n))) - Math.min(...reds.map(n => num(n)))
}

export function redAreaRatio(reds: Red[]) {
    const one = [], two = [], three = []

    for (let i = 0; i < reds.length; i++) {
        const red = num(reds[i])
        red <= 11 ? one.push(red) : red <= 22 ? two.push(red) : three.push(red)
    }

    return `${one.length}:${two.length}:${three.length}`
}

// 质合比
export function redPrimeComposite(reds: Red[][], index: number) {
    const prime = [], composite = []
    index = index - 1
    for (let i = 0; i < reds.length; i++) {
        const red = num(reds[i][index])
        isPrime(red) ? prime.push(red) : composite.push(red)
    }

    return { prime: (prime.length / reds.length).toFixed(2), composite: (composite.length / reds.length).toFixed(2) }
}