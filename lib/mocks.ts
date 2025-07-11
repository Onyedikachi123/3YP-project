export interface Trip {
  id: string;
  carId: string;
  riderId: string;
  driverId: string;
  fareTotal: number;
  waitTime: number;        // 🔧 new
  baseFare: number;        // 🔧 new
  requestedAt: string;     // "10:10 AM"
  pickupAt: string;        // "10:20 AM"
  dropoffAt: string;       // "11:00 AM"
  pickupStation: string;
  dropoffStation: string;
}
export interface Vehicle {
  id: string;
  make: string;
  model: string;
  color: string;
  plate: string;
  battery: number;
  health: "Healthy" | "Needs Service";
}
export interface Station {           
  id: string;
  name: string;
  address: string;
}
export const trips: Trip[] = [
  {
    id: "Trip001",
    carId: "car001",
    riderId: "rider001",
    driverId: "driver001",
    fareTotal: 12000,
    waitTime: 200,
    baseFare: 11800,
    requestedAt: "10:10 AM",
    pickupAt: "10:20 AM",
    dropoffAt: "11:00 AM",
    pickupStation: "Abuja Station 1",
    dropoffStation: "Abuja Station 2",
  },
];
export interface Driver {            
  id: string;
  name: string;
  ratings: number;
  phone: string;
  email: string;
  image: string;
  station: string;
  gender?: string;
  status: "Clock In" | "Clock Out";
}
export interface Rider {
  id: string;
  name: string;
  phone: string;
  email: string;
  subscription: "Active" | "Inactive";
  gender?: string;
  dob?: string;
  occupation?: string;
  homeAddress?: string;
  workAddress?: string;
  country?: string;
}
export const vehicles: Vehicle[] = [
  {
    id: "car001",
    make: "Toyota",
    model: "Corolla",
    color: "Silver",
    plate: "TBWR206HF",
    battery: 100,
    health: "Healthy",
  },
];
export const riders: Rider[] = [
  {
    id: "rider001",
    name: "Jake Olatude",
    phone: "+2348169071955",
    email: "janet@example.com",
    subscription: "Active",
    gender: "Female",
    dob: "1980-10-13",
    occupation: "Student",
    homeAddress: "9, Asokoro road, Jos close",
    workAddress: "707 Chestnut St, Hill Valley, CA",
    country: "Lagos/Nigeria"
  },
];
export const drivers = [
  {
    id: "driver001",
    name: "Jake Olatunde",
    phone: "+234 816 907 1955",
    image: "/happy.png",
    ratings: 4.0,
    station: "Lekki Station",
    status: "Clock In",
    email: "jakeolatunde@gmail.com",
    gender: "Male"
  },
];
export const stations = [
  {
    id: "station001",
    name: "Abuja Station 1",
    address: "No 27, Monrovia street, Wuse 2, Abuja",
  },
];

/* Helper functions (in‑memory) */
export function findItem<T extends { id: string }>(arr: T[], id: string) {
  return arr.find((i) => i.id === id);
}
export function deleteItem<T extends { id: string }>(arr: T[], id: string) {
  const i = arr.findIndex((x) => x.id === id);
  if (i > -1) arr.splice(i, 1);
  return i > -1;
}