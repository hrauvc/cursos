Voy a preparar una guía completa para principiantes en el desarrollo de aplicaciones con React Native. Cubriré los conceptos básicos, la instalación del entorno, los primeros pasos en la creación de una app, el uso de componentes y navegación, y las mejores prácticas.

Te avisaré cuando la guía esté lista para que la revises.

# Guía completa de desarrollo de aplicaciones con React Native (Principiantes)

## 1. Introducción a React Native

**¿Qué es React Native?**  
React Native es un *framework* de desarrollo de aplicaciones móviles creado por Facebook en 2015. Permite construir aplicaciones **nativas** para iOS y Android usando JavaScript y React (la biblioteca para interfaces web). En lugar de compilar a código web, React Native renderiza **componentes nativos** reales. Esto significa que la interfaz de usuario de tu app usará los mismos elementos de UI que una app escrita en Swift, Objective-C o Java/Kotlin ([
        What Is React Native? Complex Guide for 2024
      ](https://www.netguru.com/glossary/react-native#:~:text=React%20Native%20,using%20the%20same%20codebase)). En otras palabras, **“aprende una vez, escribe donde sea”**: puedes reutilizar el mismo código JavaScript para múltiples plataformas móviles.

**¿Por qué usar React Native?**  
Hay varias razones por las que React Native se ha vuelto tan popular:  

- **Desarrollo multiplataforma:** con React Native, escribes la base de tu aplicación una vez en JavaScript/JSX y la ejecutas tanto en Android como en iOS ([
        What Is React Native? Complex Guide for 2024
      ](https://www.netguru.com/glossary/react-native#:~:text=There%20are%20several%20reasons%20behind,React%20Native%E2%80%99s%20global%20success)). Esto ahorra mucho tiempo y recursos, ya que no necesitas dos equipos separados de desarrollo.  
- **Experiencia de usuario nativa:** los componentes básicos de React Native se traducen a widgets nativos (como `UIView` en iOS o `View` en Android). Por ello, la app resultante tiene el look-and-feel y rendimiento cercanos a una app nativa pura ([React Native · Learn once, write anywhere](https://reactnative.dev/#:~:text=Written%20in%20JavaScript%2C%20rendered%20with,platform%20APIs%20other%20apps%20do)). Empresas como Instagram, Facebook, Skype y muchas otras usan React Native en sus aplicaciones móviles, demostrando su capacidad para apps de producción exigentes ([
        What Is React Native? Complex Guide for 2024
      ](https://www.netguru.com/glossary/react-native#:~:text=React%20Native%20was%20first%20released,including%20Instagram%2C%20Facebook%2C%20and%20Skype)).  
- **Comunidad y ecosistema:** al estar basado en React (que ya era muy popular), existe una enorme comunidad de desarrolladores, librerías de terceros y recursos disponibles. De hecho, React Native es de código abierto y cuenta con miles de *packages* que amplían su funcionalidad (integraciones con hardware, navegación, animaciones, etc.) ([
        What Is React Native? Complex Guide for 2024
      ](https://www.netguru.com/glossary/react-native#:~:text=React%20Native%20is%20ahead%20of,1%2C450%20packages%20at%20its%20disposal)).  
- **Productividad y rapidez:** ofrece características como *Fast Refresh* (recarga rápida) que acelera el ciclo de desarrollo, aplicando cambios en tu app al instante mientras desarrollas. Asimismo, los desarrolladores web con conocimientos de React pueden aprender React Native rápidamente, reutilizando sus conocimientos para crear apps móviles ([
        What Is React Native? Complex Guide for 2024
      ](https://www.netguru.com/glossary/react-native#:~:text=section)).  

En resumen, React Native combina la **facilidad del desarrollo web** (JavaScript, React, una sola base de código) con la **experiencia nativa** en móviles, lo que la convierte en una excelente elección para crear aplicaciones móviles de forma eficiente.

## 2. Instalación y configuración del entorno

Para empezar con React Native necesitarás preparar tu entorno de desarrollo. Existen dos formas principales de crear un proyecto React Native:

- **Usando Expo CLI (Expo Go):** recomendada para principiantes. Expo es un conjunto de herramientas que simplifica la creación y prueba de apps React Native, sin necesidad de configuraciones complejas de Xcode o Android Studio ([Setting up the development environment · React Native](https://reactnative.dev/docs/0.70/environment-setup#:~:text=If%20you%20are%20new%20to,you%20can%20try%20out%20Snack)).  
- **Usando React Native CLI (Bare Workflow):** te da acceso total al código nativo iOS/Android. Requiere instalar Android Studio (para Android) y Xcode en macOS (para iOS). Es un poco más complejo de configurar, pero necesario si planeas agregar módulos nativos o personalizaciones avanzadas ([Setting up the development environment · React Native](https://reactnative.dev/docs/0.70/environment-setup#:~:text=If%20you%20are%20already%20familiar,hour%20installing%20and%20configuring%20them)).

### 2.1 Node.js y entorno base

Lo primero es instalar **Node.js** (versión LTS recomendada) en tu sistema, ya que React Native utiliza Node y npm (o Yarn) para gestionar dependencias. Puedes descargar Node.js desde su sitio oficial e incluir npm (gestor de paquetes de Node) en la instalación. Para verificar que está instalado correctamente, ejecuta en la terminal: `node -v` y `npm -v` (deberían mostrar números de versión).

También asegúrate de tener instaladas herramientas de línea de comando de Git, ya que *React Native CLI* las utiliza internamente.

### 2.2 Configuración con Expo CLI (para principiantes)

**Expo CLI** permite iniciar un proyecto rápidamente:  

1. **Instalar Expo CLI:** Ejecuta `npm install --global expo-cli` en la terminal para instalar la herramienta de Expo de forma global. Alternativamente, a partir de Expo SDK 45+, puedes usar **npx** sin instalar globalmente: por ejemplo, `npx create-expo-app MiProyecto`.  
2. **Crear un proyecto Expo:** Ejecuta `npx create-expo-app MiProyecto` (reemplaza "MiProyecto" por el nombre de tu app). Esto generará una estructura de proyecto preconfigurada con Expo. Al finalizar, entra al directorio con `cd MiProyecto`.  
3. **Iniciar el servidor de desarrollo:** Dentro de tu proyecto, ejecuta `npm start` o `npx expo start`. Se abrirá Expo DevTools en tu navegador y la terminal mostrará un código QR.  
4. **Probar la app en un dispositivo o emulador:**  
   - Para probar en tu *smartphone*, instala la app **Expo Go** (disponible en Play Store y App Store). Asegúrate de que el teléfono y el PC estén en la misma red WiFi, y escanea el QR mostrado en la terminal o DevTools. La app Expo Go cargará tu proyecto.  
   - Para probar en un **emulador** Android, debes tener Android Studio configurado (ver más abajo) y arrancar un AVD (dispositivo virtual). Expo detectará el emulador y podrás presionar **Run on Android device/emulator** en Expo DevTools. En macOS, para probar en un **simulador iOS**, necesitas Xcode instalado; Expo podrá abrir automáticamente la app en el simulador de iPhone.

Expo facilita mucho el proceso: no requiere configurar SDKs nativos de inmediato y permite tener la app corriendo en minutos ([Setting up the development environment · React Native](https://reactnative.dev/docs/0.70/environment-setup#:~:text=If%20you%20are%20new%20to,you%20can%20try%20out%20Snack)) ([Setting up the development environment · React Native](https://reactnative.dev/docs/0.70/environment-setup#:~:text=)). Ten en cuenta que las apps Expo tienen algunas limitaciones (no puedes incluir fácilmente módulos nativos personalizados sin “expocrear” el proyecto, por ejemplo), pero para muchos proyectos iniciales es suficiente.

### 2.3 Configuración con React Native CLI (entorno nativo)

Si optas por la vía “bare” con **React Native CLI**, la configuración depende de tu SO de desarrollo y de las plataformas objetivo:

**En macOS (para iOS y Android):**  
   - **Xcode:** Instala Xcode desde la App Store. Luego, abre Xcode y en Preferences > Locations asegúrate de tener instaladas las *Command Line Tools*. Xcode es necesario para compilar y probar en iOS (simulador o dispositivo físico).  
   - **CocoaPods:** Es el gestor de dependencias de iOS. Instálalo ejecutando `sudo gem install cocoapods`. Se usa para instalar las librerías nativas de iOS que necesita React Native y otros *plugins*.  
   - **Android Studio:** Descarga Android Studio desde el sitio oficial de Android Developers. Durante la instalación, incluye el **Android SDK**, el **Android SDK Platform** para la versión de Android que te interese (por ejemplo API 33 para Android 13), y el **Android Virtual Device (AVD)** for crear emuladores.  
   - **Variables de entorno (Android):** Configura las variables `ANDROID_HOME` apuntando al directorio del SDK de Android (por ejemplo, `~/Library/Android/sdk`) y agrega al PATH las rutas `platform-tools/` y `tools/` dentro del SDK. Esto puede hacerse añadiendo líneas en tu `~/.bash_profile` o `~/.zshrc` en macOS, como:  
     ```bash
     export ANDROID_HOME=$HOME/Library/Android/sdk  
     export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools
     ```  
   - **Crear proyecto con React Native CLI:** Una vez instalado todo, puedes crear un proyecto usando la herramienta CLI oficial. No es necesario instalarla globalmente; con Node 14+ puedes usar **npx**:  
     ```bash
     npx react-native init MiProyecto
     ```  
     Este comando genera un proyecto React Native “puro” llamado *MiProyecto*. Por defecto incluirá una plantilla básica (puedes agregar `--template react-native-template-typescript` si deseas TypeScript, por ejemplo).  

**En Windows (para Android):**  
   - **Node.js y Python:** Instala Node.js (LTS). Además, algunas herramientas nativas requieren Python2/3 instalado (Android SDK lo utiliza en algunas secuencias de comandos; en Windows es recomendable tener Python 3 en PATH).  
   - **Java Development Kit (JDK):** React Native para Android requiere JDK (se recomienda JDK 11 o el que Android Studio sugiera). Puedes instalar **AdoptOpenJDK** o el JDK de Oracle. Asegúrate de configurar `JAVA_HOME` en variables de entorno apuntando al directorio del JDK.  
   - **Android Studio:** Descárgalo e instálalo. Incluye el Android SDK Manager donde debes instalar: el SDK Platform de la versión deseada, el SDK Tools, y configurar un dispositivo virtual (AVD) para pruebas.  
   - **Variables de entorno:** Similar a macOS, configura `ANDROID_HOME` (por ejemplo en `C:\Usuarios\<tuUsuario>\AppData\Local\Android\Sdk`) y agrega al PATH global las rutas de `platform-tools` y `tools` del SDK. En Windows esto se hace desde Configuración > Sistema > Información del sistema > Configuración avanzada del sistema > Variables de entorno.  
   - **Crear proyecto:** Usa el mismo comando `npx react-native init MiProyecto` en una terminal de Node.  

**Nota:** En Windows *no es posible* compilar ni ejecutar la parte iOS de React Native (ya que Xcode solo existe en macOS). Podrás desarrollar y probar Android en Windows, y si necesitas iOS tendrás que usar una Mac (o un servicio de CI en la nube para compilar). Para muchos principiantes, desarrollar solo con Android en Windows es suficiente al inicio.

### 2.4 Ejecución y pruebas iniciales

Una vez creado el proyecto (ya sea con Expo o CLI), estás listo para ejecutarlo:

- **Expo:** `npm start` ya inicia el packager de Expo. Solo debes escanear el QR con Expo Go o elegir un emulador en DevTools como mencionamos.  
- **React Native CLI:** Abre una terminal en la carpeta del proyecto y ejecuta:  
  - `npx react-native start` – inicia el *Metro Bundler* (servidor de empaquetado). Déjalo corriendo.  
  - En otra terminal, ejecuta `npx react-native run-android` para compilar y lanzar la app en un emulador Android (o dispositivo conectado por USB con *debugging* USB habilitado). La primera compilación puede tardar varios minutos. Si todo está bien, se abrirá la app con el texto por defecto "Welcome to React Native".  
  - En Mac, para iOS: `npx react-native run-ios` lanzará el simulador de iPhone predeterminado y compilará la app. (Asegúrate de que CocoaPods instaló las dependencias: el proceso de `init` suele ejecutarlo automáticamente; si no, ve al directorio `ios` y ejecuta `pod install`).  

**Estructura básica del proyecto:**  
Un proyecto React Native (CLI) típico tendrá esta estructura de carpetas y archivos: 

- **android/** – proyecto nativo Android (gradle, manifest, código Java/Kotlin).  
- **ios/** – proyecto nativo iOS (archivos Xcode, Info.plist, código Obj-C/Swift).  
- **App.js** – punto de partida de la interfaz React Native, escrito en JavaScript/JSX.  
- **index.js** – registro del *root component*. Suele importar App y usar `AppRegistry.registerComponent` para iniciar la app ([Integration with Existing Apps · React Native](https://reactnative.dev/docs/integration-with-existing-apps#:~:text=First%2C%20create%20an%20empty%20,of%20your%20React%20Native%20project)) ([Integration with Existing Apps · React Native](https://reactnative.dev/docs/integration-with-existing-apps#:~:text=js)). En proyectos Expo, típicamente `App.js` es suficiente y `index.js` puede no ser visible para el desarrollador.  
- **package.json** – lista de dependencias y scripts del proyecto.  
- **metro.config.js**, **babel.config.js** – configuración del bundler Metro y Babel (transformaciones del código JS).  
- **app.json** (en Expo) – configuraciones de la app Expo (nombre, ícono, ID de paquete, etc.).  

Si usaste Expo, la estructura es similar aunque no verás las carpetas `ios/` ni `android/` (Expo las gestiona internamente hasta que *ejectas* el proyecto). Solo trabajarás con el código JavaScript (App.js y demás). En ambos casos, tu código de interfaz estará dentro de archivos .js (o .jsx/.tsx si usas TypeScript). 

## 3. Primeros pasos: Creando un nuevo proyecto y estructura básica

*(Nota: Este capítulo se solapa ligeramente con la sección anterior, pero profundizaremos en la estructura y el “Hello World”).*

**Creación de un proyecto nuevo:** Si ya instalaste las herramientas, resumimos los comandos:  

- Con Expo: `npx create-expo-app MiPrimeraApp`  
- Con CLI: `npx react-native init MiPrimeraApp`  

Ambos generan la aplicación de ejemplo. Por ejemplo, en Expo verás en `App.js` algo de código JSX inicial mostrando un texto y algunos estilos básicos; en CLI hay un componente por defecto con varias instrucciones de edición. Probemos un **Hola Mundo** mínimo editando `App.js`:

```jsx
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¡Hola Mundo desde React Native!</Text>
    </View>
  );
}
```

Explicando lo anterior: importamos `View` y `Text` desde `'react-native'` (estos son componentes nativos básicos). Luego definimos el componente principal `App` que retorna un árbol JSX: un `<View>` que ocupa toda la pantalla (`flex: 1`) y centra el contenido, y dentro un `<Text>` con nuestro saludo. Al guardar este cambio, la app se actualizará automáticamente gracias a *Fast Refresh*.

**Comprendiendo la estructura de la app:**  
En React Native, no existe un archivo HTML principal donde montar nuestra app. En cambio, la **entrada** es el registro de un componente raíz (generalmente `App`). Por ejemplo, en `index.js` (creado por React Native CLI) encontraremos:

```js
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

Esta línea registra el componente `App` como punto de inicio con un nombre (definido en app.json). En Expo, este registro se maneja automáticamente, y simplemente se espera que `App.js` exporte el componente principal.

La aplicación se compone entonces de **componentes React Native** que renderizan UI nativa. No usamos etiquetas HTML como `<div>` o `<h1>`, en su lugar usamos `<View>`, `<Text>`, etc. que proporciona React Native. En la siguiente sección veremos los componentes básicos con más detalle.

## 4. Uso de componentes básicos

React Native provee una serie de **componentes base** listos para construir la interfaz de usuario de tu app ([Core Components and APIs · React Native](https://reactnative.dev/docs/components-and-apis#:~:text=,specific%20%20%2A%20%2052)). Los más utilizados (y que todo principiante debe conocer) son: **View, Text, Image, Button, ScrollView** y **FlatList**. Veamos cada uno:

- **`<View>`:** Es el contenedor fundamental para el layout, similar a un `<div>` en la web. Sirve para agrupar otros componentes, aplicar estilos de fondo, paddings, etc. En React Native **todo está compuesto por Views anidadas** para estructurar la interfaz. La documentación la define como *“el componente más fundamental para construir una UI”* ([Core Components and APIs · React Native](https://reactnative.dev/docs/components-and-apis#:~:text=View%20The%20most%20fundamental%20component,for%20building%20a%20UI)). Un `<View>` puede ser de tamaño fijo o usar estilos flexibles (por defecto React Native usa Flexbox para distribuir espacios). Ejemplo: `</View style={{ padding: 10, backgroundColor: '#fff' }}>...</View>`.

- **`<Text>`:** Componente para mostrar texto en la pantalla. Es importante saber que *todo texto debe ir dentro de un `<Text>`*, no puedes simplemente escribir texto suelto en un `<View>` sin envolverlo. Puedes anidar Texts para estilizar partes del texto de forma diferente. Ejemplo: `<Text style={{fontSize:18}}>Hola <Text style={{color: 'red'}}>Mundo</Text></Text>` mostraría "Hola Mundo" donde "Mundo" está en rojo. (En RN, a diferencia de HTML, no tienes etiquetas `<p>` o `<span>`, se usa `<Text>` para cualquier porción de texto).  ([Core Components and APIs · React Native](https://reactnative.dev/docs/components-and-apis#:~:text=View%20The%20most%20fundamental%20component,for%20building%20a%20UI))

- **`<Image>`:** Sirve para mostrar imágenes. Puede cargar imágenes desde recursos locales del proyecto (requiriéndolas por ruta) o desde URLs remotas. Ejemplo de imagen remota:  
  ```jsx
  <Image 
    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
    style={{ width: 100, height: 100 }} 
  />
  ```  
  Aquí `source` requiere un objeto con la URI, y **debes** especificar explícitamente el ancho y alto (o usar estilos flexibles) porque las imágenes deben tener dimensiones definidas. `<Image>` acepta también propiedades como `resizeMode` para controlar cómo se ajusta la imagen (cover, contain, etc.).  ([Core Components and APIs · React Native](https://reactnative.dev/docs/components-and-apis#:~:text=View%20The%20most%20fundamental%20component,for%20building%20a%20UI))

- **`<Button>`:** Un botón simple pre-estilizado según la plataforma. Es muy fácil de usar para acciones básicas. Solo requiere un `title` (texto) y un `onPress` (función a ejecutar al pulsarlo). Ejemplo:  
  ```jsx
  <Button 
    title="Click me" 
    onPress={() => { alert('¡Botón pulsado!'); }} 
    color="#841584" 
  />
  ```  
  La apariencia exacta varía: en iOS es un texto azul por defecto, en Android es un botón con un fondo color por defecto (el color se puede personalizar). El componente Button es **limitado en estilo** (no puedes cambiar mucho su forma). Si necesitas un botón altamente personalizado, puedes usar componentes táctiles como `Pressable` o librerías de UI. La descripción oficial: “Un componente de botón básico que se renderiza bien en cualquier plataforma” ([Button · React Native](https://reactnative.dev/docs/button#:~:text=Button)).

- **`<ScrollView>`:** Un contenedor de *scroll*. Úsalo para envolver contenidos que pueden exceder el tamaño de la pantalla (listas cortas, formularios largos, etc.) y necesiten ser **desplazables**. `<ScrollView>` renderiza *todos* sus hijos de una vez, por lo que **no es eficiente para listas largas** de cientos de elementos ([ScrollView · React Native](https://reactnative.dev/docs/scrollview#:~:text=,this%20has%20a%20performance%20downside)). Para pocas vistas o contenido estático que necesita scroll, está bien. Ejemplo:  
  ```jsx
  <ScrollView style={{flex:1}}>
    <Text>Elemento 1</Text>
    <Text>Elemento 2</Text>
    {/* ... */}
    <Text>Elemento N</Text>
  </ScrollView>
  ```  
  Este ejemplo haría scroll vertical (por defecto). También puedes hacer scroll horizontal con `horizontal={true}`. Recuerda que el ScrollView debe tener un alto definido o flex:1, y sus hijos se expanden dentro. Si olvidamos definir tamaños, puede comportarse de forma inesperada ([ScrollView · React Native](https://reactnative.dev/docs/scrollview#:~:text=Keep%20in%20mind%20that%20ScrollViews,inspector%20makes%20quick%20to%20debug)).

- **`<FlatList>`:** Es el componente recomendado para listas de datos largas. A diferencia de ScrollView, FlatList **renderiza sus ítems bajo demanda** (paginación virtual), lo que mejora el rendimiento en listas extensas ([ScrollView · React Native](https://reactnative.dev/docs/scrollview#:~:text=,this%20has%20a%20performance%20downside)). Tú le pasas un array de datos y una función de renderizado para cada elemento. FlatList se encarga del scroll y de reciclar vistas que salen de pantalla. Características útiles: soporte para formato vertical u horizontal, encabezados/pies de lista, separadores entre ítems, *pull to refresh*, carga incremental (infinite scroll), entre otras ([FlatList · React Native](https://reactnative.dev/docs/flatlist#:~:text=A%20performant%20interface%20for%20rendering,supporting%20the%20most%20handy%20features)). Ejemplo mínimo:  
  ```jsx
  const datos = [{id: '1', nombre: 'Juan'}, {id: '2', nombre: 'Ana'}];
  <FlatList
    data={datos}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <Text>{item.nombre}</Text>}
  />
  ```  
  Aquí `data` es nuestro array, `keyExtractor` le dice a FlatList qué propiedad única usar como clave (imprescindible para rendimiento), y `renderItem` define cómo renderizar cada objeto (en este caso, simplemente mostramos el nombre dentro de un Text). FlatList automáticamente hace scroll vertical. Para listas secciones (agrupadas) existe `<SectionList>` similar en concepto.  

**ScrollView vs FlatList – ¿cuál usar?**  
Regla básica: si tienes una lista potencialmente larga o de tamaño dinámico indeterminado, usa **FlatList**. La documentación advierte que `<ScrollView>` renderiza todos sus hijos de golpe, lo cual puede causar lentitud y alto consumo de memoria en listas grandes ([ScrollView · React Native](https://reactnative.dev/docs/scrollview#:~:text=,this%20has%20a%20performance%20downside)). `<FlatList>` en cambio renderiza bajo demanda “de forma perezosa” a medida que los elementos van apareciendo en pantalla, removiendo los que ya no se ven ([ScrollView · React Native](https://reactnative.dev/docs/scrollview#:~:text=Imagine%20you%20have%20a%20very,rendering%20and%20increased%20memory%20usage)). Esto hace a FlatList mucho más **performante** para largas listas o feeds. Para contenidos pequeños (por ejemplo unos cuantos `<Text>` o `<Image>` que juntos no exceden la pantalla completa) un ScrollView es suficiente y más sencillo. 

A modo de resumen, aquí tienes un ejemplo integrando algunos componentes básicos en una pequeña interfaz:

```jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';

export default function DemoComponent() {
  const [items, setItems] = useState(["Elemento 1", "Elemento 2"]);
  
  const agregarItem = () => {
    setItems([...items, `Elemento ${items.length + 1}`]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de elementos</Text>
      <Button title="Agregar elemento" onPress={agregarItem} />
      <FlatList 
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
      <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
             style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 5, fontSize: 16 },
  logo: { width: 50, height: 50, marginTop: 10 }
});
```

En este código, tenemos un estado `items` (inicialmente con dos elementos). Un botón que al pulsar agrega un nuevo elemento a la lista. La lista se muestra con FlatList, donde cada item es un `<Text>` simple. Debajo, mostramos un pequeño logo de React Native mediante `<Image>`. Esto combina manejo de estado, FlatList e Image en un ejemplo sencillo.

## 5. Navegación entre pantallas

La mayoría de las apps tienen **múltiples pantallas** o vistas entre las cuales el usuario navega (por ejemplo, pantalla de inicio, detalle, perfil, etc.). React Native no incluye por sí mismo un sistema de navegación completo, por lo que la comunidad ha creado librerías para ello. La más popular es **React Navigation**, que ofrece una solución potente y flexible para navegación en React Native ([Navigating Between Screens - React Native](https://reactnative.dev/docs/navigation#:~:text=React%20Navigation%20provides%20a%20straightforward,navigation%20patterns%20on%20both)).

**React Navigation** es una biblioteca basada en JavaScript que maneja las transiciones de pantallas de forma declarativa, similar a cómo React Router funciona para la web. Te permite implementar navegaciones tipo **Stack (pila)**, **Tabs (pestañas)**, **Drawer (menú lateral tipo hamburguesa)**, etc., de forma fácil. Veamos los dos patrones más comunes:

- **Stack Navigator (Navegación en pila):** Funciona apilando pantallas una sobre otra, como una pila de cartas. Cuando navegas a una nueva pantalla, ésta se *empuja* encima de la anterior; cuando vuelves atrás, se *desapila*. Es el patrón típico para navegación **push/pop** (ej: ir de lista a detalle y volver). En iOS, por defecto la nueva pantalla desliza desde la derecha; en Android suele aparecer con la animación por defecto del sistema ([Stack Navigator | React Navigation](https://reactnavigation.org/docs/stack-navigator/#:~:text=Stack%20Navigator%20provides%20a%20way,on%20top%20of%20a%20stack)). React Navigation provee `createStackNavigator` para esto. Ejemplo mínimo de uso:  

  ```jsx
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import HomeScreen from './HomeScreen';
  import DetailsScreen from './DetailsScreen';

  const Stack = createStackNavigator();

  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalles' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  ```

  En este código, envolvemos la app en `NavigationContainer` (proveer contexto de navegación). Definimos un Stack Navigator con dos pantallas: "Home" y "Details", cada una apunta a un componente de pantalla. `initialRouteName` indica que "Home" se muestra primero. Cada pantalla puede tener opciones, como el título que aparecerá en la cabecera. Con esto, React Navigation se encarga de añadir automáticamente una cabecera de navegación con botón de back en "Details", etc. Puedes navegar entre pantallas usando el prop `navigation`: por ejemplo `navigation.navigate('Details')` en HomeScreen para ir a Detalles.

- **Tab Navigator (Navegación por pestañas):** Se usa para pantallas independientes entre las cuales se cambia mediante pestañas (generalmente en la parte inferior de la app, estilo barra de navegación inferior). Por ejemplo, una app de redes sociales puede tener tabs para *Feed*, *Buscar*, *Perfil*. En React Navigation existe `createBottomTabNavigator` para esto. Las tabs cargan sus pantallas *perezosamente*, es decir, no montan cada pantalla hasta que se visita por primera vez ([Bottom Tabs Navigator | React Navigation](https://reactnavigation.org/docs/bottom-tab-navigator/#:~:text=A%20simple%20tab%20bar%20on,until%20they%20are%20first%20focused)). Ejemplo reducido:  

  ```jsx
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import FeedScreen from './FeedScreen';
  import ProfileScreen from './ProfileScreen';

  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }
  ```

  Normalmente, envolverías este Tab.Navigator también dentro de un NavigationContainer (o anidado dentro de un Stack, dependiendo de la estructura deseada). El resultado es una barra inferior con dos tabs: "Feed" y "Profile". Cada Tab tiene su propia pila de navegación interna si se necesita (p.ej., el tab de Feed podría a su vez usar un Stack para ir a detalles de un post).

**Instalación de React Navigation:** Para usar React Navigation debes instalar el paquete principal `@react-navigation/native` y también los *navigators* específicos que quieras (stack, tabs, drawer). Además, requiere algunas dependencias nativas como `react-native-screens` y `react-native-gesture-handler`. Si usas Expo, muchas de estas vienen preinstaladas o se pueden instalar con `expo install`. Un típico proceso de instalación (en un proyecto bare) sería:

```bash
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler
```

*(Consulta la documentación oficial para versiones actuales y pasos específicos, ya que puede cambiar).* En Expo, podrías hacer: `expo install react-native-screens react-native-safe-area-context react-native-gesture-handler` y luego `npm install` de los paquetes de navegación JS.

**Navegación y el botón Atrás:** React Navigation integrará automáticamente el manejo del botón físico "Atrás" en Android dentro de navegadores (por ejemplo, en un Stack, al presionar atrás se hace pop a la pantalla anterior). Esto es muy conveniente, ya que manejarlo manualmente es complejo. En las tabs, por defecto el botón atrás cierra la app si estás en la raíz; pero la librería también provee comportamiento para cambiar de pestaña o confirmar salida según convenga ([Tab navigation - React Navigation](https://reactnavigation.org/docs/2.x/tab-based-navigation/#:~:text=Tab%20navigation%20,standalone%20components%20typically%20do%20not)).

En resumen, React Navigation es la solución estándar para navegación en React Native, ofreciendo patrones de **Stack** (transiciones apiladas) ([Stack Navigator | React Navigation](https://reactnavigation.org/docs/stack-navigator/#:~:text=Stack%20Navigator%20provides%20a%20way,on%20top%20of%20a%20stack)), **Tabs** (barra inferior con pestañas) ([Bottom Tabs Navigator | React Navigation](https://reactnavigation.org/docs/bottom-tab-navigator/#:~:text=A%20simple%20tab%20bar%20on,until%20they%20are%20first%20focused)) y más. Con ella puedes construir fácilmente el flujo de pantallas de tu aplicación.

*(Existen otras librerías como **React Native Navigation** de Wix (navegación verdaderamente nativa) o **Expo Router** (basada en filesystem routing), pero para empezar React Navigation es la más amigable y bien documentada.)*

## 6. Manejo de estado

El manejo de estado en React Native es igual que en React para web, ya que la lógica subyacente es la misma. React Native soporta *Hooks* como **useState** y **useEffect**, y también puedes utilizar la **Context API** de React para compartir estado global. Veamos estos conceptos básicos:

- **useState:** Es un *Hook* que te permite agregar estado *interno* a un componente funcional. Se utiliza para valores que cambian con las interacciones del usuario o a lo largo del ciclo de vida del componente (ej: un contador, el texto de un input, la respuesta de una API, etc.). Ejemplo:  
  ```jsx
  import React, { useState } from 'react';
  import { View, Text, Button } from 'react-native';

  function Contador() {
    const [count, setCount] = useState(0);  // estado inicial 0

    return (
      <View>
        <Text>Has hecho click {count} veces</Text>
        <Button title="Incrementar" onPress={() => setCount(count + 1)} />
      </View>
    );
  }
  ```  
  Aquí `useState(0)` declara una variable de estado `count` inicializada en 0, y la función `setCount` para actualizarla. Cada vez que llamamos a `setCount`, React re-renderiza el componente mostrando el nuevo valor. **Regla importante:** nunca modifiques el estado directamente (por ejemplo, no usar `count++`), siempre usar la función de *setter*. Con useState podemos manejar estados simples de forma muy fácil.

- **useEffect:** Es otro Hook que permite ejecutar efectos secundarios en los componentes. Un *efecto* podría ser: realizar una llamada a una API, suscribirse a un evento, configurar un temporizador, actualizar el título de la pantalla, etc. `useEffect` acepta una función que React ejecutará **después** de renderizar el componente, y opcionalmente un arreglo de dependencias para controlar cuándo debe volver a ejecutarse. Ejemplo típico – llamar a una API cuando el componente se monta:  
  ```jsx
  import React, { useEffect, useState } from 'react';
  import { View, Text, ActivityIndicator } from 'react-native';

  function DatosRemotos() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
          setData(json);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    }, []);  // dependencia vacía: se ejecuta solo al montar

    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
      <View>
        <Text>{ data ? JSON.stringify(data) : "No hay datos" }</Text>
      </View>
    );
  }
  ```  
  Aquí `useEffect` con un array vacío `[]` hace que la función se ejecute solo una vez al montarse el componente (similar a `componentDidMount`). Dentro llamamos `fetch` (veremos más de fetch en la siguiente sección) y al obtener respuesta actualizamos `data` y `loading`. Mientras `loading` es true, mostramos un indicador de carga `<ActivityIndicator>` (un spinner nativo). Una vez cargado, mostramos los datos obtenidos.  
  Además de montaje, `useEffect` se puede ejecutar en actualizaciones si incluyes variables en el array de dependencias, y también puede *limpiarse* retornando una función (por ejemplo, para anular suscripciones en desmontaje). En resumen, **useEffect permite sincronizar tu componente con fuentes de datos externas o acciones fuera del render**, manteniendo la UI actualizada tras realizar esas operaciones ([React useEffect Hooks - W3Schools](https://www.w3schools.com/react/react_useeffect.asp#:~:text=React%20useEffect%20Hooks%20,directly%20updating%20the%20DOM%2C)).

- **Context API (API de Contexto):** Es una forma de compartir **estado global** o datos entre componentes sin tener que pasarlos manualmente via props en cada nivel. En aplicaciones React Native, Context se usa, por ejemplo, para un tema global (colores, estilos), el usuario autenticado, configuraciones, o cualquier dato que muchas partes de la app necesiten.  
  La Context API consiste en crear un Contexto con `React.createContext`, proveerlo en un nivel alto de tu árbol, y luego consumirlo desde cualquier componente descendiente usando `useContext`. De esta manera evitas la “pasadera de props” por múltiples capas (*prop drilling*). Como dicen las docs de React: *“Context permite pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel”* ([Context – React](https://legacy.reactjs.org/docs/context.html#:~:text=Context%20provides%20a%20way%20to,down%20manually%20at%20every%20level)).  

  **Cómo usar Context en resumen:**  
   - Crear un contexto, por ejemplo: `const UserContext = React.createContext(null);`  
   - En tu componente raíz (o donde tenga sentido), envoler los hijos con un `UserContext.Provider` y pasar un `value` que quieres compartir:  
     ```jsx
     <UserContext.Provider value={user}>
       <App /> {/* resto de la app tiene acceso a UserContext */}
     </UserContext.Provider>
     ```  
   - Consumir el contexto en un componente hijo:  
     ```jsx
     import React, { useContext } from 'react';
     import { UserContext } from './UserContext';

     const Profile = () => {
       const user = useContext(UserContext);
       return <Text>Hola, {user.nombre}</Text>;
     };
     ```  
   En este ejemplo, asumimos que `user` es un objeto con el nombre del usuario. Así, cualquier componente dentro del Provider puede obtener `user` sin tener que recibirlo por props desde arriba. Context es ideal para datos considerados "globales" en la app, como el usuario autenticado, el tema (claro/oscuro), el idioma, etc. ([Context – React](https://legacy.reactjs.org/docs/context.html#:~:text=Context%20is%20designed%20to%20share,to%20style%20the%20Button%20component)) ([Context – React](https://legacy.reactjs.org/docs/context.html#:~:text=Context%20is%20designed%20to%20share,to%20style%20the%20Button%20component)).  

   **Buenas prácticas con Context:** Úsalo cuando realmente tengas muchos componentes que necesiten el mismo dato. Evita usar context para cada pequeño estado, porque puede complicar la lógica y causar renders adicionales. Para estados globales muy complejos (por ejemplo, manejo extenso de datos en caché, acciones asíncronas, etc.) quizá valga la pena mirar librerías de estado global como Redux o MobX. Pero para iniciar, Context API es suficiente para compartir datos de forma sencilla.

En resumen, React Native permite manejar estado local con **Hooks** (`useState`, `useEffect`, etc.) como en React web, y estado global con **Context API** cuando es necesario compartir información a través del árbol de componentes. Esto te da las herramientas para que tu UI responda dinámicamente a las interacciones del usuario y a los datos que obtengas.

*(Referencias: `useState` para estado interno; `useEffect` para efectos secundarios ([Difference between useState and useEffect in React - SheCodes](https://www.shecodes.io/athena/125174-difference-between-usestate-and-useeffect-in-react#:~:text=SheCodes%20www,effects%20in%20a%20component)); Context para datos globales ([Context – React](https://legacy.reactjs.org/docs/context.html#:~:text=Context%20provides%20a%20way%20to,down%20manually%20at%20every%20level)).)*

## 7. Conexión con APIs externas

La mayoría de las apps necesitan comunicarse con servicios externos: por ejemplo, un backend REST, una API de terceros (como Google Maps, Weather API, etc.), o tu propio servidor. En React Native puedes usar cualquier herramienta de networking de JavaScript. Dos opciones comunes son el **Fetch API** (que viene integrado) y **Axios** (una librería popular).

**Fetch API:** React Native incluye una implementación de *fetch* muy similar a la del navegador ([Networking · React Native](https://reactnative.dev/docs/network#:~:text=Using%20Fetch)). Esto significa que puedes hacer peticiones HTTP sin instalar nada adicional. La sintaxis de `fetch` utiliza *promises*: 

```js
fetch('https://mi-api.com/datos')
  .then(response => response.json())
  .then(data => {
    // utilizar los datos obtenidos
  })
  .catch(error => {
    // manejar error
  });
```

También puedes usar `async/await` para un código más limpio:

```js
try {
  const response = await fetch('https://mi-api.com/datos');
  const data = await response.json();
  // utilizar los datos
} catch (error) {
  // manejar error
}
```

Fetch por defecto hace **GET**, pero puedes pasar un segundo argumento con más opciones (método POST, headers, body en JSON, etc.) ([Networking · React Native](https://reactnative.dev/docs/network#:~:text=Fetch%20also%20takes%20an%20optional,or%20make%20a%20POST%20request)) ([Networking · React Native](https://reactnative.dev/docs/network#:~:text=fetch%28%27https%3A%2F%2Fmywebsite.com%2Fendpoint%2F%27%2C%20,firstParam%3A%20%27yourValue%27%2C%20secondParam%3A%20%27yourOtherValue)). Ejemplo de POST con fetch:

```js
fetch('https://mi-api.com/crear', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ nombre: 'Juan', edad: 30 })
});
```

Esto enviaría un JSON con nombre y edad al endpoint dado.

Una cosa a tener en cuenta: las operaciones de red son **asíncronas**, y en React Native (igual que en la web) no bloquean la interfaz. Debes manejar los resultados en callbacks `.then()` o con async/await, como en los ejemplos. Hasta que la respuesta llegue, puedes mostrar indicadores de carga (como usamos `<ActivityIndicator>` en la sección de useEffect).

**Axios:** Axios es una librería externa que hace peticiones HTTP, ofreciendo algunas comodidades sobre fetch: por ejemplo, transforma automáticamente las respuestas JSON, maneja mejor algunos errores, permite cancelar requests, etc. En React Native, Axios funciona bien (es JS puro). Necesitas instalarla con `npm install axios`. Un ejemplo de uso con async/await:

```js
import axios from 'axios';

try {
  const response = await axios.get('https://mi-api.com/datos');
  const data = response.data;
  // usar los datos
} catch (error) {
  console.error(error);
}
```

Con Axios, la respuesta suele estar dentro de `response.data` directamente. También puedes configurar una instancia de Axios con URL base y headers comunes, útil para APIs que requieren autenticación con token, etc.

**¿Fetch o Axios?** Ambos logran el objetivo. Fetch es nativo y no requiere dependencias; Axios ofrece algunas funciones útiles. Puedes comenzar con fetch para algo sencillo. De hecho, React Native trae fetch *inbuilt* justamente para que no tengas que agregar nada más ([Using Axios with React Native to manage API requests - LogRocket Blog](https://blog.logrocket.com/using-axios-with-react-native-manage-api-requests/#:~:text=The%20Fetch%20API%20comes%20in,on%20the%20native%20Fetch%20API)). Si tu proyecto crece en complejidad de llamadas API, Axios es una buena opción y ampliamente usada.

**Ejemplo práctico:** Supongamos que quieres mostrar en tu app una lista de usuarios desde una API. Podrías hacerlo así dentro de un useEffect (combinando secciones anteriores):

```jsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function UsersScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Text>{item.name} - {item.email}</Text>}
    />
  );
}
```

Este componente `UsersScreen` al montarse hará una petición GET a una API pública de ejemplo (jsonplaceholder). Cuando lleguen los datos, se guardan en `users` y se muestra una FlatList listando nombre y email de cada usuario. En caso de error, se loguea en consola; en una app real quizás mostrarías un mensaje de error en la UI. Mientras espera, muestra "Cargando...".

Este es un flujo típico: estado `loading`, efecto de `fetch`, y mostrar resultados en la interfaz. Aplica el mismo patrón para cualquier llamada a API. 

**Resumen:** React Native soporta la **Fetch API** nativamente para hacer solicitudes HTTP ([Networking · React Native](https://reactnative.dev/docs/network#:~:text=Using%20Fetch)). Fetch funciona con promesas (o async/await) y es similar a usar `XMLHttpRequest`. Alternativamente, puedes usar librerías como **Axios** para manejar peticiones de forma quizás más conveniente. Lo importante es siempre hacer estas llamadas de forma asíncrona (por ejemplo dentro de useEffect) y actualizar el estado de tu componente con la respuesta para que React Native re-renderice la UI con los nuevos datos.

## 8. Estilización en React Native

Dar estilos en React Native es diferente a CSS tradicional, pero comparte muchos conceptos. En RN **no hay archivos CSS separados**, en su lugar estilamos los componentes usando **JavaScript**: mediante objetos de estilo, el componente `StyleSheet` de RN, o librerías de CSS-in-JS como Styled Components.

Algunos puntos clave sobre estilos en RN:

- Los nombres de estilo son muy similares a CSS de la web, pero usando *camelCase* en vez de kebab-case. Por ejemplo, en lugar de `background-color` usas `backgroundColor` ([Style · React Native](https://reactnative.dev/docs/style#:~:text=With%20React%20Native%2C%20you%20style,color)). Propiedades como margin, padding, flexbox, fontSize, color, etc., funcionan de forma parecida a CSS estándar ([Style · React Native](https://reactnative.dev/docs/style#:~:text=With%20React%20Native%2C%20you%20style,color)). 
- Cada componente básico acepta una prop `style`. Puedes pasarle un objeto de estilos (o un array de objetos) ([Style · React Native](https://reactnative.dev/docs/style#:~:text=The%20,use%20this%20to%20inherit%20styles)). Ejemplo: `<View style={{ margin:10, padding:5, backgroundColor: '#eee' }} />`. También `<Text style={{ fontWeight: 'bold' }} />`, etc.  
- Para evitar escribir objetos en línea dentro del JSX (especialmente si se repiten estilos), es común usar `StyleSheet.create()` proporcionado por React Native. Esto permite definir estilos agrupados que luego se usan por referencia, mejorando la legibilidad e incluso ofreciendo pequeñas optimizaciones. Ejemplo:  
  ```js
  import { StyleSheet, View, Text } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  });

  // En el componente:
  <View style={styles.container}>
    <Text style={styles.title}>Título</Text>
  </View>
  ```
  Aquí definimos un objeto `styles` con dos estilos: container y title. Luego aplicamos `style={styles.container}` y `style={styles.title}` respectivamente. Esto organiza mejor el código, especialmente cuando hay muchos estilos. Internamente no hay gran diferencia con usar objetos en línea (StyleSheet.create simplemente congela los objetos para posible optimización).

- Se pueden **combinar estilos** pasando un array: `style={[styles.base, styles.highlight]}`. En caso de conflicto, el último en el array tiene prioridad (similar a aplicar dos clases CSS donde la última sobrescribe alguna propiedad) ([Style · React Native](https://reactnative.dev/docs/style#:~:text=The%20,use%20this%20to%20inherit%20styles)).

- **Unidad de medida:** No se usan px, em, % explícitamente. Las medidas numéricas se interpretan como píxeles densidad-independientes (DP). Un `width: 100` significa 100 puntos en la pantalla (que se escalan según la densidad del dispositivo automáticamente). Para porcentajes, en algunos casos se usa flexbox o calculado manualmente (no existe width: "50%" directamente para View, pero puedes hacer un workaround con Dimensions del dispositivo).

- **Flexbox:** React Native utiliza Flexbox por defecto para layout en eje principal y secundario. Los componentes `<View>` son flex containers por defecto *solo si* les das un estilo flex. Por ejemplo, `style={{flex: 1}}` hace que un View ocupe todo el espacio disponible de su padre. Propiedades útiles: `flexDirection` (por defecto 'column' en RN, a diferencia de la web que es 'row'), `justifyContent`, `alignItems`, etc., funcionan igual que en CSS Flexbox. Esto es fundamental para posicionar elementos. Recomiendo repasar la guía de Flexbox en React Native cuando empieces a crear layouts más complejos.

- **Herencia de estilos:** A diferencia de CSS, los estilos en RN **no heredan** automáticamente excepto donde indicado (por ejemplo, textos anidados pueden heredar algunas propiedades de `<Text>` padre). Debes aplicar estilo a cada componente según necesites o componer estilos con arrays. Sin embargo, puedes pasar una prop style a un componente personalizado y luego éste la puede propagar a subcomponentes para lograr cierta cascada ([Style · React Native](https://reactnative.dev/docs/style#:~:text=,Here%27s%20an%20example)) (un patrón común es permitir `style` en componentes propios para que quien los usa pueda inyectar estilos adicionales).

**Styled Components:** Es una librería que lleva el concepto de *CSS-in-JS* a React Native. Básicamente te permite escribir estilos de manera muy similar a CSS dentro de tu código JavaScript, creando componentes estilizados. Por ejemplo, con styled-components puedes hacer:

```jsx
import styled from 'styled-components/native';

const Contenedor = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const Titulo = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.color || 'black'};
`;

export default function Screen() {
  return (
    <Contenedor>
      <Titulo color="purple">Hola mundo</Titulo>
    </Contenedor>
  );
}
```

Aquí definimos `Contenedor` como un componente equivalente a View con estilos embebidos en una plantilla string (literal de CSS). Y `Titulo` es un Text estilizado. Podemos incluso usar props para cambiar dinámicamente estilos (`props.color`). Styled-components utiliza **template literals** para escribir CSS tal cual dentro de JS ([Styling your React Native App with Styled-Components: Reusability and Flexibility - DEV Community](https://dev.to/blarzhernandez/styling-your-react-native-app-with-styled-components-reusability-and-flexibility-3lf8#:~:text=What%20is%20styled,JS%20styling%20framework)). Es muy conveniente si te gusta la sintaxis CSS o si vienes de React web donde ya usaste styled-components o Emotion. Funciona en React Native porque bajo el capó genera los estilos JS apropiados y aplica a los componentes RN. Las ventajas:  
  - Mantienes estilo y componente juntos, mejora la **legibilidad** y la encapsulación.  
  - Evitas nombres de clase conflictivos; cada styled-component genera identificadores únicos ([Styling your React Native App with Styled-Components: Reusability and Flexibility - DEV Community](https://dev.to/blarzhernandez/styling-your-react-native-app-with-styled-components-reusability-and-flexibility-3lf8#:~:text=%2A%20You%20can%20use%20styled,tied%20to%20a%20specific%20component)).  
  - Soporta theming fácilmente (puedes definir un ThemeProvider con colores globales).  

La elección de usar StyleSheet vs inline styles vs styled-components depende de preferencias y del equipo. Para principiantes, usar **StyleSheet.create** es una buena práctica para mantener el código organizado y performante. A medida que tu app crezca, podrías explorar styled-components para escalabilidad.

**Ejemplo final de estilos:** Combinando varias técnicas, podrías tener:

```jsx
// Definir estilos con StyleSheet
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    // Sombra en iOS
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, shadowOffset: { width: 0, height: 2 },
    // Sombra en Android
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600'
  }
});

// Uso en componente
<View style={styles.card}>
  <Text style={styles.cardTitle}>Título de la tarjeta</Text>
  <Text>Contenido de la tarjeta...</Text>
</View>
```

Esto crearía una tarjeta con fondo blanco, borde redondeado, sombra (usando `elevation` para Android y `shadow*` para iOS), con un título estilizado. Observa cómo ciertas propiedades de estilo son específicas por plataforma (sombra en iOS vs Android). React Native abarca ambas.

En resumen, para estilizar en React Native: usas la prop **`style`** en los componentes, proporcionando un objeto JavaScript con propiedades de estilo (muy similares a CSS en camelCase) ([Style · React Native](https://reactnative.dev/docs/style#:~:text=With%20React%20Native%2C%20you%20style,color)). Es recomendable organizar estilos con **StyleSheet.create** en vez de escribir muchos objetos en línea ([Style · React Native](https://reactnative.dev/docs/style#:~:text=The%20,use%20this%20to%20inherit%20styles)). Y tienes opciones más avanzadas como **Styled Components** para un enfoque CSS-in-JS más poderoso si lo requieres ([Styling your React Native App with Styled-Components: Reusability and Flexibility - DEV Community](https://dev.to/blarzhernandez/styling-your-react-native-app-with-styled-components-reusability-and-flexibility-3lf8#:~:text=What%20is%20styled,JS%20styling%20framework)). Con práctica, te familiarizarás con el conjunto de propiedades de estilo disponibles (muy completo, incluye flexbox, tipografía, dimensiones, colores, fondo, bordes, etc., aunque no soporte absolutamente todo lo de CSS web, cubre lo necesario para diseños móviles).

## 9. Depuración y pruebas

Desarrollar apps implica depurar (debug) errores y comportamientos, así como escribir pruebas para asegurar calidad. React Native ofrece herramientas integradas de **depuración** y la comunidad ha creado utilidades para **pruebas automatizadas** como la React Native Testing Library. Veamos cada parte:

### 9.1 Depuración (Debugging)

**Menú de Desarrollador (Dev Menu):** Cuando corres tu app en modo desarrollo, React Native incluye un menú especial. En el simulador/emulador, puedes abrirlo **sacudiendo** el dispositivo (o simulando shake). En iOS Simulator también con `Ctrl + Cmd + Z`, en Android Emulator con `Cmd + M` en Mac o `Ctrl + M` en Windows ([Debugging Basics · React Native](https://reactnative.dev/docs/debugging#:~:text=React%20Native%20provides%20an%20in,device%20or%20via%20keyboard%20shortcuts)). Este *Dev Menu* te da opciones como: recargar la app, habilitar *live reload* (obsoleto, ahora hay *Fast Refresh* siempre activo), depuración *Remota JS*, inspeccionar elementos, etc.

**React Native DevTools:** A partir de RN 0.64+, existe una herramienta de depuración integrada llamada **React Native DevTools**. Al abrir el Dev Menu y elegir "Open DevTools" (o simplemente presionar la tecla **`d`** en la terminal Metro, o **`j`** en RN 0.70+ CLI) se abrirá en tu navegador una interfaz parecida a las Chrome DevTools pero adaptadas a React Native ([Debugging Basics · React Native](https://reactnative.dev/docs/debugging#:~:text=Opening%20DevTools)). Desde allí puedes: ver **console.logs**, inspeccionar la jerarquía de **componentes React** de tu app (similar a la extensión React Developer Tools), y perfilar rendimiento. Internamente, RN DevTools utiliza una versión personalizada de Chrome DevTools ([Debugging Basics · React Native](https://reactnative.dev/docs/debugging#:~:text=Image%3A%20React%20Native%20DevTools%20opened,to%20the%20%26quot%3BWelcome%26quot%3B%20pane)), pero conectada a la app en ejecución. Esto permite examinar el estado, props de componentes, y ver mensajes de `console.log` sin tener que mirar la terminal. *Nota:* RN DevTools funciona cuando usas el motor JavaScript *Hermes* (que es por defecto en últimas versiones) y tener Chrome/Edge instalado ([Debugging Basics · React Native](https://reactnative.dev/docs/debugging#:~:text=note)).

**LogBox:** Este es el sistema de manejo de logs y *warnings* de React Native. En modo desarrollo, si ocurre un error, verás una pantalla roja (RedBox) con el *stacktrace*. Si hay *warnings*, aparece un recuadro amarillo (YellowBox) en la app. Desde RN 0.63 en adelante, se rediseñó como LogBox, agrupando warnings y mostrando trazas limpias. Presta atención a estos mensajes durante desarrollo para corregir problemas. Puedes tocar en un warning para ver detalles. LogBox se deshabilita automáticamente en builds de producción ([Debugging Basics · React Native](https://reactnative.dev/docs/debugging#:~:text=note)).

**Herramientas externas (Flipper):** [Flipper](https://fbflipper.com/) es una herramienta de Meta para depuración móvil. Se puede conectar a apps React Native y provee un conjunto de *plugins*: visualización de logs, inspección de la vista UI (ver la jerarquía de Views nativos, estilo inspector), monitor de requests de red, debug de base de datos SQLite o AsyncStorage, performance, etc. Hasta hace poco, Flipper era la vía principal para debug avanzado en RN. Con la llegada de RN DevTools, algunas funciones se solapan y Flipper quedó más para inspección nativa avanzada y otras utilidades. Aun así, muchos desarrolladores lo usan. Para utilizarlo, instalas la app de Flipper en tu PC y usualmente RN lo conecta automáticamente en desarrollo (verifica que en Dev Menu esté habilitado “Debug with Flipper”). Si usas Expo Go, Flipper no funciona directamente porque Expo corre en un sandbox; Flipper es más útil en proyectos bare/CLI.

**Debug de código nativo:** Si llegas a escribir código nativo (Objective-C/Swift o Java/Kotlin), puedes depurarlo usando Xcode (para iOS) o Android Studio (para Android) con sus debuggers nativos. Esto escapa al foco de esta guía, pero es bueno saber que es posible. Para la mayoría de lógica en JS, basta con RN DevTools o incluso un simple `console.log()` para inspeccionar valores durante la ejecución.

**Consejos prácticos de depuración:**  
- Usa `console.log`, `console.warn`, etc., generosamente para imprimir valores y verificar flujos. Miralos en la consola Metro o en RN DevTools.  
- Si tu app no responde, mira la terminal Metro, a veces aparece un error rojo ahí con pista de qué falló (por ejemplo, un paquete no encontrado, etc.).  
- Habilita **Pause On Caught Exceptions** en DevTools (como lo harías en Chrome) si quieres detener la ejecución en un error. Con RN DevTools, puedes depurar paso a paso como en Chrome.  
- Aprovecha la herramienta **Inspector**: en el Dev Menu, "Toggle Inspector" te permite hacer clic en UI de la app y ver sus estilos, medidas, etc., muy útil para ajustar diseño.  
- Si un componente no se actualiza como esperas, revisa que estés usando `setState` correctamente o las dependencias de useEffect. Un gran porcentaje de bugs de React Native son similares a los de React: olvidar actualizar estado, props mal pasadas, etc. Depúralos conceptual y lógicamente, además de con herramientas.

### 9.2 Pruebas (Testing)

Es importante escribir pruebas automatizadas para asegurar que tu aplicación funcione correctamente a medida que crece. En React Native podemos hacer **pruebas unitarias** y **pruebas de integración** para componentes. 

**Jest:** React Native incluye por defecto **Jest** como framework de pruebas. Si iniciaste el proyecto con react-native CLI, ya viene configurado (verás un archivo `__tests__/App.test.js` de ejemplo). Jest permite ejecutar pruebas de JavaScript en un entorno simulado. Sin embargo, para componentes de UI resulta más útil usar una librería complementaria: **React Native Testing Library (RNTL)**.

**React Native Testing Library:** Es una librería inspirada en React Testing Library que facilita renderizar componentes RN en un entorno de prueba y hacer consultas sobre la salida (nodos de UI) ([Introduction | Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/#:~:text=React%20Native%20Testing%20Library%20is,examples%2C%20on%20the%20project%20sites)). La idea principal es probar el comportamiento de tus componentes de forma similar a cómo el usuario los usa, en lugar de comprobar detalles de implementación. RNTL proporciona utilidades para: renderizar un componente (en memoria, no en una pantalla real), simular eventos (taps, cambios de texto), y buscar subcomponentes por texto, accesibilidad, etc. 

Ventajas de RNTL: es ligera, se ejecuta rápido (no necesita un dispositivo/emulador, todo ocurre en JS puro utilizando react-test-renderer debajo ([Introduction | Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/#:~:text=The%20React%20Native%20Testing%20Library,Its%20primary%20guiding%20principle%20is))), y promueve buenas prácticas de testing ([Introduction | Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/#:~:text=test,Its%20primary%20guiding%20principle%20is)).  

**Ejemplo de prueba con RNTL:** Imagina un componente simple que muestra un contador y un botón para incrementarlo:

```jsx
// Counter.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Valor: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

Ahora una prueba para verificar que el contador funciona:

```jsx
// __tests__/Counter.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Counter from '../Counter';

test('incrementa el contador al pulsar el botón', () => {
  const { getByText } = render(<Counter />);
  
  const valorTexto = getByText(/Valor:/); // encuentra el Text que contiene "Valor:"
  const boton = getByText('Incrementar');

  // Valor inicial
  expect(valorTexto.props.children.join('')).toBe('Valor: 0');

  // Simular click del botón
  fireEvent.press(boton);

  // Ahora el texto debe haber cambiado a 1
  expect(valorTexto.props.children.join('')).toBe('Valor: 1');
});
```

Aquí usamos `render` de `@testing-library/react-native` para renderizar <Counter />. Luego `getByText` para obtener referencias al elemento de texto y al botón. Comprobamos que inicialmente el texto muestra "Valor: 0". Luego usamos `fireEvent.press` para simular un evento de pulsación en el botón. Finalmente verificamos que el texto cambió a "Valor: 1". Si implementamos todo correctamente, la prueba pasará.

Podemos escribir muchas pruebas similares para distintos componentes y lógicas. También es posible probar componentes que usan fetch/axios simulando las respuestas (usando funciones fake o mocks con Jest).

**Otras pruebas:** Además de pruebas unitarias de componentes, podrías eventualmente hacer pruebas *end-to-end* (E2E) usando herramientas como **Detox**. Detox lanza la app en un dispositivo/emulador real y automatiza interacciones como si fuera un usuario (haciendo click por coordenadas, etc.). Es útil para pruebas integrales de flujo completo. Sin embargo, Detox tiene una configuración más compleja y quizás no sea lo primero para un principiante. Mención aparte: si usas Expo, Detox no soporta el cliente Expo Go, tendrías que usar builds especiales.

**Resumen Testing:** Para principiantes, se recomienda enfocarse en **pruebas unitarias de componentes con Jest + React Native Testing Library**. Esto te permitirá cubrir la lógica de tus componentes y UI de forma confiable. La React Native Testing Library es mantenida por Callstack (una empresa experta en RN) ([Introduction | Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/#:~:text=The%20project%20is%20maintained%20by,throughout%20the%20React%20Native%20Community)) y sigue el principio “mientras más tus tests se parezcan a cómo se usa tu aplicación, más confianza te darán” ([Introduction | Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/#:~:text=,confidence%20they%20can%20give%20you)). Comienza escribiendo tests para componentes críticos (por ejemplo, funciones puras, formateo de datos, o que cierto input produce cierta salida en la pantalla). Con práctica, tus test ayudarán a prevenir regresiones a medida que refactorices o añadas nuevas características.

*(Referencias: la documentación de RNTL explica su filosofía ([Introduction | Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/#:~:text=The%20React%20Native%20Testing%20Library,Its%20primary%20guiding%20principle%20is)); la guía oficial de Testing de React Native cubre desde pruebas unitarias hasta E2E ([Testing - React Native](https://reactnative.dev/docs/testing-overview#:~:text=Testing%20,end%20tests)).)*

## 10. Publicación en tiendas de aplicaciones (Deploy)

Una vez desarrollada y probada tu aplicación, llega el momento de **publicarla** para que otros puedan instalarla. Esto implica generar **builds de producción** y subirlas a la **Google Play Store** (Android) y **Apple App Store** (iOS). El proceso tiene similitudes pero también diferencias por plataforma:

### 10.1 Publicación en Google Play (Android)

**Cuenta de desarrollador:** Necesitas una cuenta de desarrollador de Google Play. Se crea desde la consola de Google Play ([play.google.com/console](https://play.google.com/console)) y requiere un pago único (alrededor de 25 USD). Con esa cuenta podrás subir aplicaciones, actualizaciones, ver estadísticas, etc.

**Firma de aplicación (signing):** Android **requiere firmar digitalmente** toda app con un certificado antes de publicarla ([Publishing to Google Play Store · React Native](https://reactnative.dev/docs/signed-apk-android#:~:text=Android%20requires%20that%20all%20apps,This%20guide)). En desarrollo, React Native usa una firma debug automática. Para producción, debes generar una **clave de firma (keystore)** privada. Esto se hace con la herramienta `keytool` (parte del JDK). Por ejemplo en tu terminal:

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore mi-upload-key.keystore -alias mi-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

Este comando genera un archivo `mi-upload-key.keystore` protegido por contraseña ([Publishing to Google Play Store · React Native](https://reactnative.dev/docs/signed-apk-android#:~:text=shell)). Te pedirá datos como nombre, org, país (puedes poner valores genéricos para pruebas). Recuerda la **contraseña** y el **alias** que elegiste, los necesitarás para configurar la app.

A partir de 2018, Google Play ofrece la opción de **App Signing by Google Play**, que significa que Google gestionará la clave final de firma por ti. En ese caso, tú subes tu app firmada con un **upload key** (clave de subida), que puede ser esta que generaste. Google la reemplaza por la clave interna. Si optas por esto (es recomendable para no tener que preocuparte de perder la clave), entonces la keystore que generes será tu upload key. Si no, tu clave será la definitiva para firmar todas las versiones.

**Generar build de producción (APK/AAB):** Hoy en día Google **requiere subir un Android App Bundle (AAB)** en lugar del APK tradicional, para nuevas apps. El AAB permite entregar a cada dispositivo solo los recursos que necesita, optimizando el tamaño de descarga. Para generar un AAB en React Native CLI:

- Abre el archivo `android/app/build.gradle` en tu proyecto. En la sección **signingConfigs** y **buildTypes**, configura la firma de release. Debes añadir algo así:  
  ```gradle
  android {
      ...
      defaultConfig { ... }
      signingConfigs {
          release {
              storeFile file('ruta/mi-upload-key.keystore')
              storePassword 'TuKeystorePass'
              keyAlias 'mi-key-alias'
              keyPassword 'TuKeyPass'
          }
      }
      buildTypes {
          release {
              signingConfig signingConfigs.release
              // asegurarse de minifyEnabled y shrinkResources según necesites
          }
      }
  }
  ```  
  (Puedes también guardar las contraseñas en `gradle.properties` para no ponerlas en texto plano aquí).  

- Luego, en la terminal ejecuta en el directorio android:  
  ```bash
  cd android
  ./gradlew bundleRelease
  ```  
  Esto compilará la versión release en un archivo AAB, probablemente ubicado en `android/app/build/outputs/bundle/release/app-release.aab`. Si quisieras un APK (por ejemplo para pruebas internas), usarías `./gradlew assembleRelease` en su lugar, lo cual generaría `app-release.apk` ([Publishing to Google Play Store · React Native](https://reactnative.dev/docs/signed-apk-android#:~:text=they%20can%20be%20installed,steps%20required%20to%20package%20the)).  

- Nota: Este proceso asume que no hay errores y que configuraste bien la firma. Gradle tomará la keystore y firmará el APK/AAB. Si algo falla con la firma, revisa rutas y contraseñas.

**Subir a Google Play Console:** En la consola, crea una **nueva aplicación**, rellena los datos (nombre, descripción, categorías, etc.). En la sección de *Release Management* (Gestión de lanzamientos) crearás un **Release** en la pista "Production" (o primero en "Internal testing" o "Closed testing" si quieres probar con testers antes). Allí subirás el archivo AAB generado. Google realizará una revisión automática (por ejemplo, análisis de APK) y luego, cuando envíes a revisión, un equipo revisará tu app según las políticas (esto puede tardar horas o un par de días). Si todo está bien, la app se publicará y estará disponible en la Play Store.

**Otros detalles Android:** No olvides preparar **recursos gráficos**: el ícono de la app (debe estar incorporado en la app como mipmap), capturas de pantalla, una imagen de característica (feature graphic) para la ficha en Play Store, etc. También debes asegurarte de haber incrementado la versión de tu app antes de cada release (los valores `versionCode` y `versionName` en *build.gradle*). `versionCode` es un número entero que debe aumentar con cada actualización; `versionName` es la versión visible tipo "1.0.0". Play Console te pedirá esto. 

### 10.2 Publicación en Apple App Store (iOS)

**Cuenta de desarrollador de Apple:** Necesitas inscribirte en el Apple Developer Program. Es una suscripción de ~$99 USD al año. Esto te da acceso a publicar apps en App Store, usar TestFlight, y otras ventajas (como certificados para notificaciones push, etc.).

**Certificados y perfiles (signing):** El proceso de firma en iOS es manejado por Xcode. Básicamente tendrás un **certificado de desarrollador** y uno de **distribución** junto con un **Provisioning Profile** para tu app. En Xcode, si activas *Automatically manage signing*, él intentará configurar esto por ti (debes haber iniciado sesión con tu Apple ID desarrollador en Xcode). Para simplicidad, dejemos que Xcode gestione la firma automáticamente. Esto creará un App ID y perfil provisional asociados al paquete de tu app (ej: com.miempresa.miapp).

**Preparar la app en Xcode para release:** Abre el workspace/proyecto `.xcworkspace` de iOS en Xcode (se encuentra en `ios/NombreProyecto.xcworkspace`). Selecciona el **target** de la app, ve a *Signing & Capabilities*, elige tu equipo (Team) de desarrollo (tu cuenta), asegúrate que el **Bundle Identifier** es único (formato com.tuempresa.tuapp). Selecciona "Any iOS Device (arm64)" como destino (en vez de un simulador).

Asegúrate de poner el esquema en **Release** (Product > Scheme > Edit Scheme > Run > Build Configuration = Release) para construir sin código de depuración ([Publishing to Apple App Store · React Native](https://reactnative.dev/docs/publishing-to-app-store#:~:text=1)). En modo Release, la app no incluirá el menú de desarrollo ni las herramientas de debug ([Publishing to Apple App Store · React Native](https://reactnative.dev/docs/publishing-to-app-store#:~:text=Building%20an%20app%20for%20distribution,not%20connected%20to%20the%20computer)).

**Archivo de subida (IPA):** Para enviar al App Store, normalmente generas un **IPA** (iOS App Archive). En Xcode: Product > Archive. Esto compilará la app en modo Release y creará un Archive. Al terminar, se abrirá el Organizer mostrando el nuevo archive. Con el archive seleccionado, haz clic en **Distribute App**. Sigue los pasos: elige App Store, luego normalmente "Upload". Xcode se encargará de firmar (usando tu certificado de distribución) y subir el binary al App Store Connect.

**App Store Connect:** Apple tiene un portal llamado App Store Connect donde gestionas las apps. Si es la primera subida, debes crear allí la app entry: dale nombre, mismo bundle ID, adjunta capturas de pantalla (por resolución de pantalla), ícono (1024x1024 App Store icon), descripción, categoría, clasificación de contenido, etc. Una vez que Xcode sube el IPA, irá a App Store Connect (sección "TestFlight" o "App Store > Versiones"). Debes asociar ese build a una versión de App Store, rellenar los metadatos mencionados y finalmente **enviar a revisión**.

Apple revisa manualmente cada app, comprobando directrices de contenido, funcionalidad, etc. Esto suele tardar entre 1 y 3 días promedio (puede ser menos). Si rechazan tu app, te dan una razón y puedes corregir y volver a enviar. Si la aprueban, podrás **publicarla** y aparecerá en la App Store.

**TestFlight:** Antes de lanzar públicamente, puedes invitar testers externos o internos vía TestFlight (parte de App Store Connect). Esto es altamente recomendable para obtener feedback y asegurarte de que la app funciona en dispositivos reales variados. TestFlight permite distribuir la app a testers simplemente con su email, sin necesidad de cables ni Xcode (los testers instalan la app TestFlight en sus iPhones).

**Consideraciones finales iOS:** Asegúrate de incrementar la versión (CFBundleShortVersionString) y build number (CFBundleVersion) en Xcode antes de cada envío. La versión es tipo "1.0" y build es un número entero que debe ser mayor que el anterior. Apple es estricto con ciertos detalles: por ejemplo, si tu app requiere login para funcionar, debes proporcionarles credenciales de demo en la sección de revisión; si usas funcionalidades como cámara, ubicación, etc., asegúrate de incluir las descripciones en Info.plist (NSCameraUsageDescription, etc.), de lo contrario la app será rechazada automáticamente al intentar usarlas. 

### 10.3 Usando Expo para publicar

Si desarrollaste con **Expo (managed)**, el flujo es un poco diferente pero más sencillo en cuanto a compilación: puedes usar **EAS Build** (Expo Application Services) para generar los binaries (APK/AAB/IPA) sin tener que configurar entornos nativos localmente. Con comandos como `eas build -p android --profile production` (y similar para iOS), los servidores de Expo compilan tu app y te dan el archivo final. Incluso Expo puede subirlo automáticamente usando `eas submit`. Tendrás que proporcionar a Expo las credenciales de tu cuenta de desarrollador de Google/Apple (o manejarlas via su interfaz). La documentación de Expo detalla este proceso ([Publishing to Google Play Store · React Native](https://reactnative.dev/docs/signed-apk-android#:~:text=info)) ([Publishing to Apple App Store · React Native](https://reactnative.dev/docs/publishing-to-app-store#:~:text=info)). Esto es muy útil si no quieres lidiar con Xcode o Android Studio para la fase de release. 

### 10.4 Resumen publicación

Publicar una app React Native implica: **configurar la firma** adecuada (clave privada en Android, certificados en iOS), **compilar en modo release** obteniendo el binario final (AAB para Android, IPA para iOS), y luego **subir a las tiendas** mediante sus consolas, cumpliendo sus requisitos (metadatos, capturas, revisiones). La documentación oficial de RN resume los pasos técnicos ([Publishing to Google Play Store · React Native](https://reactnative.dev/docs/signed-apk-android#:~:text=Android%20requires%20that%20all%20apps,This%20guide)). Es importante seguir las guías de Google y Apple, ya que son muy cuidadosos con políticas (por ejemplo, permisos, uso de datos de usuario, contenido apropiado, etc.). 

Aunque la primera vez puede ser un poco complejo, una vez configurado, lanzar actualizaciones (nuevas versiones) es mucho más fácil: solo incrementas versión, compilas y subes de nuevo.

**¡Felicidades!** Si has llegado hasta aquí, tienes un panorama completo para principiantes en React Native: desde entender de qué se trata, armar el entorno, crear tu primera app, componentes básicos, navegación, estado, llamadas a APIs, estilado, depuración, pruebas, hasta publicar tu aplicación en el mundo real. React Native tiene mucha profundidad en cada tema, pero con esta guía puedes dar tus primeros pasos con confianza. ¡Mucha suerte desarrollando tu primera app móvil con React Native!

