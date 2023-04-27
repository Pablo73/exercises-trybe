// ./index.ts

import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Ex.getRectangleArea(200, 100)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm: ${Ex.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Ex.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Ex.getTriangleArea(100, 200)}cm²`);

console.log("\nO PERÍMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(30, 30, 30)}`);

console.log(`- Calcule a área de um losango que tem D = 32cm e d = 18cm: ${Ex.getPolygonArea(32, 18)}cm²`);
console.log(`- Calcule a área de um losango que tem D = 200cm e d = 50cm;: ${Ex.getPolygonArea(200, 50)}cm²`);
console.log(`- Calcule a área de um losango que tem D = 75cm e d = 25cm: ${Ex.getPolygonArea(75, 25)}cm²`);

console.log(`- Trapézio com base maior igual a 100cm, base menor igual a 70cm e altura igual a 50cm: ${Ex.getTrapezeArea(100, 70, 50)}cm²`);
console.log(`- Trapézio com base maior igual a 75cm, base menor igual a 50cm e altura igual a 35cm: ${Ex.getTrapezeArea(75, 50, 35)}cm²`);
console.log(`- Trapézio com base maior igual a 150cm, base menor igual a 120cm e altura igual a 80cm: ${Ex.getTrapezeArea(150, 120, 80)}cm²`);

console.log(`- Círculo de raio 10cm: ${Ex.getCircleArea(10)}cm²`);
console.log(`- Círculo de raio 5cm: ${Ex.getCircleArea(5)}cm²`);
console.log(`- Círculo de raio 100cm: ${Ex.getCircleArea(100)}cm²`);