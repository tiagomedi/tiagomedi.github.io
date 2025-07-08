---
title: "Backdoors en Ciberseguridad: ¿Qué son y cómo funcionan? [+ ejemplo en Python 🐍]"
published: 2025-07-07
description: "Explora qué es un backdoor (puerta trasera), cómo funciona en el mundo del hacking ético, y aprende a crear ejemplos prácticos en Python, incluyendo túneles SSH inversos y técnicas de persistencia."
image: "./puerta-trasera-backdoor.jpg"
tags: ["backdoor", "reverse shell", "python"]
category: Notes
draft: true
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

## 💻 Ejemplo 1: Reverse Shell en Python

### Vista del Servidor (server.py)
```python

```
