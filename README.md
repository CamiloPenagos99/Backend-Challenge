# Solución
- Camilo Penagos:

Solución del reto de backend, usando NodeJS, Express JS y JSON

 ## Video:
https://clipchamp.com/watch/PV5vjufwZrM

 ## Colección Postman:
 https://drive.google.com/file/d/1bJxnl1Ex15KFYUxDU397Xvl5Ov2ghMFo/view?usp=sharing

## Solución preguntas teóricas:
**1. Con sus propias palabras explique que es una inyección de dependencias y para
qué sirve:**

La inyección de dependencias es un conjunto de prácticas y definiciones que consiste en proveer o inyectar a un objeto, sus dependencias o instancias como parámetros en el constructor. Este patrón permite el desacoplamiento de la aplicación y reducir las dependencias estrictas, y el mantenimiento a futuro de la misma. De esta manera una clase no tiene que crear los objetos, para poder hacer uso de ellos; ya que estos objetos se proveen como un servicio para que la clase haga uso de las funcionalidades

**2. Explique con sus propias palabras las diferencias entre asincrono y sincrono:**

Una operación síncrona es un proceso que toma el control del hilo de la aplicación y solo retorna ese control cuando se ha finalizado completamente la ejecución. De esta manera se tiene una ejecución de forma secuencial, en la que el paso a ejecución de una operación está ligado al término de la función anterior ejecutada.

Por otra parte las funciones asíncronas son aquellas que retornan el control al hilo principal, al momento que inician su ejecución y pueden notificar la finalización al hilo principal en el tiempo futuro que terminen. Es decir la ejecución se hace en un contexto diferente, de manera que no bloquea la ejecución del hilo principal de la aplicación y su procesamiento ingresa al manejador de eventos. De esta manera la ejecución no se hace de forma secuencial, permitiendo así, no bloquear la ejecución del programa y avanzar de forma concurrente con las ejecuciones. 

Las ejecuciones asíncronas, requieren de mecanismos que permitan su procesamiento síncrono una vez terminada su ejecución. Estos mecanismos son los callbacks o promesas.
 

**3. Cual es la importancia del uso de promesas en un proyecto:**

El uso de promesas, es un mecanismo propio del lenguaje, que representa un objeto que puede tener un estado de pendiente y estar disponible en el futuro o no. 

Una promesa puede estar en estado pendiente, aceptada o rechazada en el futuro. Además de contar con unas propiedades para capturar el valor de retorno, según el estado de la misma en el futuro, y procesar el flujo de estos valores para hacer cualquier tipo de operación.

En resumen un objeto Promise representa la finalización (o falla) probable de una operación asíncrona y su valor resultante. Es usado para procesar las solicitudes asíncronas como consumo a servicios web y consultas a bases de datos, y así poder capturar y procesar los valores se forma "sincrónica".


**4. Cual es la importancia de usar ORM dentro de un proyecto, ventaja y desventaja:**

Un ORM es un patrón o técnica que permite convertir o parsear datos Entre los objetos del sistema y Los modelos de base de datos.  Con esto es posible hacer una conexión entre los tipos de objetos propios del lenguaje y los modelos o tablas del gestor de base de datos. Con un ORM es posible hacer el mapeo entre los tipos de objetos, definir las diferentes relaciones y encadenar las operaciones de modificación en base de datos al modelo definido en el programa.

La principal ventaja es el mapeo o asociación entre el modelo de base de datos y los modelos de objetos del lenguaje, de manera que es mucho más cómodo las operaciones CRUD sobre los objetos. Igualmente permite la abstracción de la base de datos y facilitar el código para hacer las operaciones en base de datos.
Su principal desventaja es que, puede reducir el rendimiento en grandes entorno, ya que es un componente completo que se añade para la aplicación. Otra desventaja esta relacionada con la curva de aprendizaje, relacionada al modelo y funcionalidades de los diferentes ORM según el lenguaje

**5. Que diferencia hay entre una base de datos SQL, NOSQL**

La principal diferencia radica en la forma lógica en la que se agrupa o estructura la información, ademas de las condiciones propias de almacenamiento que se requieren.
En las bases de datos relacionales, la información se almacena en formato de tablas y estas tablas tienen una o más llaves o identificadores que permiten generar relaciones entre las tablas, creando así los modelos de base de datos y la relación entre la información almacenada. Utilizan un lenguaje estructurado de consulta, basado en SQL para realizar las diferentes operaciones de consulta y actualización en la base de datos. Ademas de ello brindan un modelo estructurado fuerte y bien definido.

Las bases de datos No-SQL permiten tener modelos específicos y sensibles que se adaptan mejor al cambio en las aplicaciones. La información no es almacenada en tablas, y no se una un modelo estrictamente relacional. En su lugar usa un modelo orientado a documentos, que almacena objetos o representaciones de estos, en un formato basado en JSON utilizando el modelo de clave, valor para cada propiedad del objeto que se almacena. De esta manera se crean colecciones de documentos que no tienen que estar estrictamente relacionado con otra colección en la base de datos. Los manejadores de estas bases de datos, proveen interfaces o métodos para hacer operaciones en la base de datos, sin ser necesario escribir las instrucciones propiamente.

**6. ¿Si hablo de colección y documentos me refiero a?**

En bases de datos No-SQL, el concepto de documento es una representación de un objeto o instancia en un formato basado en la tupla clave y valor, que definen las propiedades que tiene dicho documento. Es decir, un documento es el elemento esencial de almacenamiento que representa un objeto en una base de datos No-SQL usando formato basado en JSON.

Una colección, es la agrupación de uno o varios documentos en la base de datos. Estos documentos pueden tener diferentes propiedades, lo que hace a la colección un modelo de agrupamiento libre. De manera que los documentos no necesariamente tienen que seguir un patrón o esquema.

**7. Si una aplicación está sacando error de CORS a que se está refiriendo?**

El mecanimos cross-origin resource sharing (CORS) es un mecanismo de protección de red, que busca proteger o restringir el acceso a recursos web para las solicitudes que provienen de otro dominio o servidor. Cuando una aplicación falla muestra error de CORS, se refiere a que no se ha configurado a nivel de backend las políticas para permitir las diferentes solicitudes al api, desde uno o varios dominios permitidos. De esta manera un cliente que acceda desde un dominio externo al propio dominio de backend podra consumir los servicios y obtener los recursos

