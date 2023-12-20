// ✅ Api Fetch

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.json())
//   .then(data => console.log(data))

// async function loadData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
//     const data = await res.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// loadData();

// Utilizando ESmodule no necesita que await este adentro de una funcion async, pero nuestro projecto debe estar configurado para que funcione con ESmodule, a esto se conoce como un "top level await"
try {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data = await res.json()
  console.log(data)
} catch (e) {
  console.log(e)
}
