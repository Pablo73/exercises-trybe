// ./exercises.ts

export function getSquareArea(side: number): number {
    return side ** 2;
  }


export function getRectangleArea(base: number, height: number): number {
    return base * height;
  }

export function getTriangleArea(base: number, height: number): number {
    return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
    return sides.reduce((acc, side) => acc + side, 0);
  }

export function triangleCheck(
        sideA: number,
        sideB: number,
        sideC: number
    ): boolean {
        const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
        const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
        const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
        return checkSideA && checkSideB && checkSideC;
}

export function getPolygonArea(largerDiagonal: number, smallerDiagonal: number): number {
    return (largerDiagonal * smallerDiagonal) / 2;
}

export function getTrapezeArea(B: number, h: number, b: number): number {
    return ((B + b) * h) / 2;
}

export function getCircleArea(radius: number): number {
    return Math.PI * radius ** 2;
  }

//   const list: Array<Number> = ['fdf', 12]
//   const test : [string, number] = ['fdf', 12];
//   const test2: [string, number] = [12, 'fds'];
const test2: (string | number)[] = [12, 'fds', 45];