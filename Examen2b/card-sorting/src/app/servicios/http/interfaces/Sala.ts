export interface  Sala{
  idSala:string;
  baraja: 'fibonacci' | 'modFibonacci' | 'tshirts',
  usuarios?:string[]
}
