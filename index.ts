function addOne(age: number): number {
  return age + 1;
}

console.log(addOne(32));


type User = {
  id: number;
  username: string
  name: string
}


const user1: User = {
  id: 1,
  username: 'Superman',
  name: 'Clark Kent'
}

const user2: User = {
  id: 2,
  username: 'Batman',
  name: 'Bruce Wayne'
}

const user3 = {
  id: 3,
  username: 'Wonder Woman',
  name: 'Diana Prince'
}


const users: User[] = [user1, user2, user3]

const userTuple : [User, number] = [user1, 1]



type UserFetched = {
  id: number
  username: string
  name: string
  email: string
 }
 
 async function fetchFromEmail(email: string) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const parsed: UserFetched[] = await res.json()
  const user = parsed.find((u: UserFetched) => u.email === email)
 
  if (user) {
    return fetchFromId(user.id)
  }
  return undefined
 }
 
 async function fetchFromId(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
   const user = await res.json();
   return user.address;
 }
 
 function getUserAddress(user: UserFetched | string) {
  if (typeof user === 'string') {
    return fetchFromEmail(user)
  }
  return fetchFromId(user.id)
 }
 
 getUserAddress('Rey.Padberg@karina.biz').then(console.log).catch(console.error)



 const userTuple2: Array<User | number> = [user1, 10, 20, user2, 30]
// Любой элемент может быть либо `User`, либо `number`

// const userTuple3: [User, number] = [user1, 10, 20, user3, 30] // Ошибка

const anotherUserTuple: [User, number] = [user1, 10] // Все верно


// Определяем предохранитель для `user`
function isUser(u: unknown): u is User {
  if (u && typeof u === 'object') {
    return 'username' in u && 'currentToken' in u
  }
  return false
 }
 
 function getUserAddress1(user: User | string) {
  if (isUser(user)) {
    return fetchFromEmail(user)
  }
  return fetchFromId(user.id)
 }