# Status Code

Los códigos de stado se clasifican asi:
- 100-199: Respuestas informativas 📄
- 200-299: Respuestas sasticfactorias ✅
- 300-399: Redirecciones ↩️
- 400-499: Errores del cliente ❌ (basicamente que el cliente en la **request** hizo algo mal, como por ejemplo buscar una página que no exista, enviar datos que no se acepten...)
- 500-599: Errores del servidor 💻

Más comunes:
- 200 ✅ OK (significa que todo fue bien)
- 301 ❌ Moved Permanently (significa que el recurso que habia en esa dirección se ha movido a otro sitio)
- 400 🤔 Bad Request (significa que la request que el cliente ha hecho no es correcta, puede ser porque ha pasado mal la url o que basicamente la request está mal formada)
- 404 ❌ Not Found (significa que el recurso que has intentado pedir no se encuentra o no existe)
- 500 ❌ Internal Server Error (es un error interno del servidor, uno de los más temidos)

## Recursos
👉 [http.cat](http.cat)
<br>
👉 [MDN Status Code](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
<br>
👉 [MDN HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)