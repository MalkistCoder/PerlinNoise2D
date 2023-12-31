import seedrandom from 'seedrandom'
const { alea } = seedrandom

type Vector = [number, number]

const smoothstep = (x: number) => x * x * x * (x * (x * 6 - 15) + 10)
const interpolation = (a: number, b: number, t: number): number => a + (b - a) * smoothstep(t)
const dotProduct = (a: Vector, b: Vector): number => a[0] * b[0] + a[1] * b[1]

export default class PerlinNoise {
    random: any
    vectors: Vector[][]

    constructor(width: number, height: number, seed: number = Math.floor(Math.random() * 4294967296)) {
        this.random = alea(seed.toString())
        this.vectors = this._createVectorField(width, height)
    }

    _dotProdGrid(x: number, y: number, cellX: number, cellY: number) {
        const vector: Vector = this.vectors[cellY][cellX]
        const distVector: Vector = [x - cellX, y - cellY]

        return dotProduct(vector, distVector)
    }

    _createRandomVector(): Vector {
        const random = this.random() * Math.PI * 2

        return [Math.cos(random), Math.sin(random)]
    }

    _createVectorField(width: number, height: number): Vector[][] {
        return Array(height + 1)
            .fill([])
            .map(() =>
                Array(width + 1)
                    .fill(0)
                    .map(() => this._createRandomVector())
            )
    }

    perlin(x: number, y: number): number {
        const [x0, y0] = [Math.floor(x), Math.floor(y)]
        const [x1, y1] = [x0 + 1, y0 + 1]

        const corners: number[] = [this._dotProdGrid(x, y, x0, y0), this._dotProdGrid(x, y, x1, y0), this._dotProdGrid(x, y, x0, y1), this._dotProdGrid(x, y, x1, y1)]

        return interpolation(interpolation(corners[0], corners[1], x - x0), interpolation(corners[2], corners[3], x - x0), y - y0)
    }
}
