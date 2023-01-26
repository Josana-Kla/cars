import prisma from "../config/database.js";

async function getCars() {
  const data = await prisma.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const data = await prisma.cars.findUnique({
    where: {
      id: id
    }
  })
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await prisma.cars.findUnique({
      where: {
        licensePlate: licensePlate
      }
  })
  return data;
}

async function createCar(model: string, licensePlate: string, year: string, color: string) {
  await prisma.cars.create({
    data: {
      model, 
      licensePlate, 
      year,
      color
    }
  });
}

async function deleteCar(id: number) {
  /* await db.query(`DELETE FROM cars WHERE id = $1`, [id]); */
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  /* deleteCar */
}

export default carRepository;