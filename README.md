## Instalación


📋 Pre requisitos - local 📚

- Requiere instalar NodeJS
- Requiere instalar JDK 21
- Acontinuación se indica la configuración de variables de entorno para SO macOS
  - Ejecución de comandos desde la terminal
- Para consultar la ruta donde esta instalado el JDK
 ```bash
    /usr/libexec/java_home
```

- Para abrir la configuración de variables de entorno
 ```bash
    vim ~/.zshenv
```
- Para ingresar la nueva variable de entorno
 ```bash
    export JAVA_HOME=$(/usr/libexec/java_home)
```

- Para confirmar los cambios en las variables de entorno
 ```bash
    source ~/.zshenv
```

- Requiere IDE de su preferencia
- Requiere instalación de Android Studio
- Requiere configuración de un dispositivo Android virtual
- Acontinuación se indica la configuración de variables de entorno para SO macOS
    - Ejecución de comandos desde la terminal
- Verificar que el SDK de android se encuentra en la ruta 
 ```bash
    cd /Users/[USER]/Library/Android/sdk
```

- Para abrir la configuración de variables de entorno
 ```bash
    vim ~/.zshenv
```
- Ingresar las nuevas variable de entorno
 ```bash
    export ANDROID_HOME="/Users/[USER]/Library/Android/sdk"
    export PATH=$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
```

- Para confirmar los cambios en las variables de entorno
 ```bash
    source ~/.zshenv
```



- Requiere instalación local de Appium inspector,descargar desde la dirección https://github.com/appium/appium-inspector/releases
- Configurar Appium inspector con las siguientes variables:

| Server Key          | Server Value             |
|---------------------|--------------------------|
| Remote Host         | 0.0.0.0                  |
| Remote Port         | 4724                     |
| Remote Path         | /                        |

### Android Capabilities (Ejemplo)

| Desired Capability Key | Desired Capability Value                 |
|------------------------|------------------------------------------|
| platformName           | Android                                  |
| platformVersion        | [OS VERSION / IMAGE]                      |
| deviceName             | [EMULATED_DEVICE_NAME]                   |
| app                    | /[PROJECT_PATH]/[APP_NAME].apk           |
| appium:automationName  | UIAutomator2                              |


- Requiere instalacion local de Appium server
- Instalar appium server https://github.com/appium/appium-desktop/releases
- Desde la terminal instalar lo siguiente
 ```bash
    appium driver install xcuitest
    appium driver install uiautomator2
```


## Crear el proyecto con WebDriver IO
- Crear un proyecto local en la ubicación deseada
- Estando dentro del proyecto en la terminal sea del IDE o del SO, se debe ejecutar el siguiente comando
 ```bash
    npm init wdio .
```
Esto inicializara el proyecto de WebDriver IO una vez se configuren todas las variables solicitadas paso a paso por el
framework
- Importante: Este proyecto utiliza cucumber para la definicion de los casos de prueba es importante que al requerir el
framework cuando se esta inicializando el proyecto se seleccione esta opción lo cual cargara por defecto las dependencias
y estructura basica del proyecto

Esta definición permite:
- Habilitar la generación de videos de la ejecución de la prueba en modo headless, se guardan en la ruta cypress/videos
- Habilitar el uso de plugins dentro del proyecto, en este caso se utilizara unicamente allure para generar reportes
- Define el path donde se encuentran los test a ejecutar
- Define la url base donde se estarán ejecutando las pruebas

## Configuración del package.json

Se agrega la sección "Scripts": Define comandos personalizados para ejecutar acciones dentro de las pruebas por ejemplo:

 ```bash
"scripts": {
    "wdio": "wdio run ./wdio.conf.js"
  }
```
## Ejecución

- El comando "wdio" permite hacer una ejecución del caso de prueba asi:

 ```bash
 npx wdio
```

## Estructura del proyecto

El proyecto fue estructurado con el patrón de diseño Page Object Model, se definieron las siguientes carpetas:

📁 step-definitions: [./features]
> Contiene la clase donde se estructuran los pasos de prueba que seran ejecutados


📁 screen-objects: [./features]
> Contiene las clases que definen la implementación de cada uno de los casos de prueba, en esta se incluye los pantallas
y los elementos que corresponden a cada una de ellas dentro de la ejecución


📁 features: [./]
> Contiene los casos de prueba que estan definidos dentro del proyecto, todo lo que se incluya en este path, será
ejecutado en las pruebas


📁 android: [./app]
> Contiene el apk del aplicacion que se esta probando, esta estructura permite agregar la implementación para aplicaciones iOS


## Entorno

> Se ejecuta en el app para sistema operativo Android Booking


## Autor

Test Automation Engineer
David Enriquez - kdavid.enriquez@gmail.com

## Consideraciones en automatización

- **Buenas practicas:**

    - **Estructura del proyecto:** Dentro de este proyecto se aplica una estructura sencilla donde claramente se definen las
      responsabilidades de cada uno de las clases y en cada ruta se asignan nombres descriptivos y coherencia con las
      funciones contenidas para un mejor entendimiento, el código esta dividido en archivos y funciones para que sea modular
      y de fácil mantenimiento y escalabilidad
    - **Uso de selectores eficientes:** Se definen en una clase con esta unica respondabilidad los selectores de prueba
      especificos evitando depender de muchas clases o identificadores generales
    - **Configuración del entorno:** Es importante realizar una buena configuración del proyecto para evitar errores
      en la ejecución, en este caso el proyecto tiene bastantes dependencias por lo cual es importante seguir detalladamente
      cada uno de los pasos
    - **Documentación de pruebas:** Es una de las partes mas relevantes dentro de la codificación docuemntar adecuadamente
      las pruebas para su facil entendimiento, dentro de este proyecto se agrega el archivo README.md que incluye los detalles de implementación y ejecución.
    - **Aplicar principios SOLID:** Es importante considerar estos principios dentro de cualquier proyecto de programación
      y la automatización no es la excepción, dentro de este proyecto se aplica principios como:
        - SRP - Responsabilidad unica: Clases que se enfocan en una función especifica dentro del proyecto
        - OCP - Open/Closed: Clases que definen elementos dentro de la página y que se pueden extender hacia nuevas
          implemenataciones dentro del mismo contexto y ser reutilizados en diferentes clases de prueba
        - ISP - Segregación de interfaces: Se definen metodos para funciones de lectura y escritura y comandos que obtienen
          el resultado