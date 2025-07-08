---
title: "Backdoors en Ciberseguridad: ¿Qué son y cómo funcionan? [+ ejemplo Python 🐍]"
published: 2025-07-07
description: "Explora qué es un backdoor (puerta trasera), cómo funciona en el mundo del hacking ético, y aprende a crear ejemplos prácticos en Python, incluyendo túneles SSH inversos y técnicas de persistencia."
image: "./puerta-trasera-backdoor.jpg"
tags: ["backdoor", "reverse shell", "python"]
category: Notes
draft: false
---

Un *Backdoor* (puerta trasera) es un tipo malware que permite a un atacante __obtener acceso remoto a un sistema informatico, aplicación o red__. Se puede utilizar para fines maliciosos como la recopilación de de datos, el robo de información o el control remoto del sistema.

Esto se puede ver como una puerta trasera secreta de un edificio que permite a alguien acceder a un edificio __sin ser visto__. En el caso de un Backdoor, puede ser __un programa, una función o un xploit__ que permite al atacante evitar las medidas de seguridad del sistema, siendo esta una herramienta favorita de los Hackers o entidades gubernamentales que utilizan para espiar a sus víctimas.

> 🔒 Se utiliza en ataques reales, pero también en pruebas de penetración con fines éticos.

## 🔍 Características principales
| Característica            | Descripción                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| 🧩 **Encubierto**         | El acceso no es visible para el usuario o administrador.                    |
| 🔄 **Persistente**        | Puede seguir activo después de reinicios si se configura.                   |
| 🎯 **Control Remoto**     | Permite ejecutar comandos o exfiltrar datos desde cualquier lugar.          |
| ⚙️ **Versátil**           | Puede estar embebido en scripts, binarios, servicios o incluso firmware.    |

## ⚠️ Importante: Uso Responsable
Este contenido es **educativo** y está pensado para **aprendizaje ético**, *pentesting*, y **formación en ciberseguridad defensiva**.  
🔒 No debe utilizarse para actividades maliciosas ni sin autorización.

---

## 💻 Ejemplo : Reverse Shell en Python - [GitHub](https://github.com/tiagomedi/backdoor-reverse-ssh)
En este ejemplo analizaremos un backdoor de tipo __reverse shell implementado en Python__ que consta de dos componentes principales:
- **Cliente (`client.py`)**: Ejecuta comandos remotamente y envía los resultados.
- **Servidor (`server.py`)**: Recibe conexiones y permite enviar comandos.
#### Funcionamiento General
El backdoor utiliza una arquitectura de **conexión eversa** donde:
1. *El cliente (víctima) inicia la conexión hacia el servidor (atacante)*
2. *El servidor puede enviar comandos al cliente*
3. *El cliente ejecuta los comandos y devuelve los resultados*
4. *Se mantiene una sesión interactiva tipo shell*

#### Configuración de Red

- **IP del servidor**: `Esta IP (para forma de prueba) se obtiene en ifcofig o ipconfig, dependiendo del sistema operativo.`
- **Puerto**: `5678 (o a elección, solo debe de estar disponible)`
- **Protocolo**: `TCP (socket stream)`

### Análisis del Cliente (`client.py`)
#### Importaciones y Dependencias

```python
import socket
import os
import subprocess
```
- `socket`: Nos permite configurar nuestro script para que reciba conexiones remotas.
- `os`: Esta libreria es se utiliza para acceder como tal a funciones y variantes del sistema operativo, para una variedad de tareas, como crear, leer, abrir, escribir y cerrar archivos, manipular directorios, obtener información del sistema y el hardware.
- `subprocess`: Esta libreria nos permite ejecutar procesos externos y recibir datos de un programa externo.