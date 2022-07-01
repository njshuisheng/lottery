import { Lottery } from "types"

export const num = (v: string | number) => isNaN(Number(v)) ? 0 : Number(v)

export const isPrime = (v: number): boolean => {
    for (let i = 2; i < v; i++) {
        if (v % i === 0) return false
    }

    return true
}

export const getLotteries = (size: number = 10) => {
    return new Promise<Lottery[]>((resolve, reject) => {
        fetch('../../mock/lotteries.json').then(async res => {
            const data: { RECORDS: Lottery[] } = await res.json()
            resolve(data.RECORDS.slice(0, size))
        }).catch(err => reject(err))
    })
}