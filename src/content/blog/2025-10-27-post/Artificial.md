---
title: 'Artificial Writeup'
description: 'Es un artículo paso a paso para resolver Artificial en Hackthebox retirada'
tags: ["HackTheBox", "Easy", "Linux", "Retired"]
pubDate: 'Oct 27 2025'
coverImage: './artificial.png'
---

En este tutorial, te mostraré cómo logré obtener el control total sobre la maquina "Artificial" en HackTheBox Season 9.

# Escaneo Nmap
```bash
┌──(root㉿tiaago)-[/home/secbytiago]
└─# nmap -A 10.10.11.74 -T5 
Starting Nmap 7.95 ( https://nmap.org ) at 2025-10-27 00:15 -03
Nmap scan report for 10.10.11.74
Host is up (0.13s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 7c:e4:8d:84:c5:de:91:3a:5a:2b:9d:34:ed:d6:99:17 (RSA)
|   256 83:46:2d:cf:73:6d:28:6f:11:d5:1d:b4:88:20:d6:7c (ECDSA)
|_  256 e3:18:2e:3b:40:61:b4:59:87:e8:4a:29:24:0f:6a:fc (ED25519)
80/tcp open  http    nginx 1.18.0 (Ubuntu)
|_http-server-header: nginx/1.18.0 (Ubuntu)
|_http-title: Did not follow redirect to http://artificial.htb/
Device type: general purpose|router
Running: Linux 4.X|5.X, MikroTik RouterOS 7.X
OS CPE: cpe:/o:linux:linux_kernel:4 cpe:/o:linux:linux_kernel:5 cpe:/o:mikrotik:routeros:7 cpe:/o:linux:linux_kernel:5.6.3
OS details: Linux 4.15 - 5.19, MikroTik RouterOS 7.2 - 7.5 (Linux 5.6.3)
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 80/tcp)
HOP RTT       ADDRESS
1   133.65 ms 10.10.14.1
2   134.05 ms 10.10.11.74

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 14.93 seconds
```

```bash
┌──(root㉿tiaago)-[/home/secbytiago]
└─# echo "10.10.11.74 artificial.htb" | sudo tee -a /etc/hosts
10.10.11.74 artificial.htb
```

```bash
┌──(root㉿tiaago)-[/home/secbytiago]
└─# gobuster dir -u "http://artificial.htb" -w /usr/share/wordlists/dirbuster/directory-list-2.3-small.txt -t 64
===============================================================
Gobuster v3.8
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://artificial.htb
[+] Method:                  GET
[+] Threads:                 64
[+] Wordlist:                /usr/share/wordlists/dirbuster/directory-list-2.3-small.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.8
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/login                (Status: 200) [Size: 857]
/register             (Status: 200) [Size: 952]
/logout               (Status: 302) [Size: 189] [--> /]
/dashboard            (Status: 302) [Size: 199] [--> /login]
```

```bash
┌──(root㉿tiaago)-[/home/secbytiago/Descargas]
└─# cat Dockerfile 
FROM python:3.8-slim

WORKDIR /code

RUN apt-get update && \
    apt-get install -y curl && \
    curl -k -LO https://files.pythonhosted.org/packages/65/ad/4e090ca3b4de53404df9d1247c8a371346737862cfe539e7516fd23149a4/tensorflow_cpu-2.13.1-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl && \
    rm -rf /var/lib/apt/lists/*

RUN pip install ./tensorflow_cpu-2.13.1-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl

ENTRYPOINT ["/bin/bash"]
```
```bash                                                                                       
┌──(root㉿tiaago)-[/home/secbytiago/Descargas]
└─# docker pull python:3.8-slim
3.8-slim: Pulling from library/python
14c9d9d19932: Already exists 
d847ad1879f2: Already exists 
56d45b8e1404: Already exists 
0cd45dda32d5: Already exists 
Digest: sha256:1d52838af602b4b5a831beb13a0e4d073280665ea7be7f69ce2382f29c5a613f
Status: Downloaded newer image for python:3.8-slim
docker.io/library/python:3.8-slim                                                      
```

```bash
┌──(root㉿tiaago)-[/home/secbytiago/Descargas]
└─# docker run -it -v $(pwd):/tmp python:3.8-slim bash
root@c710d0b80391:/# 
```




```python
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

np.random.seed(42)

hours = np.arange(0, 24 * 7)
profits = np.random.rand(len(hours)) * 100

data = pd.DataFrame({
        'hour': hours,
        'profit': profits
})

x = data['hour'].values.reshape(-1, 1)
y = data['profit'].values

model = keras.Sequential([
        layers.Dense(64, activation='relu', input_shape=(1,)),
        layers.Dense(64, activation='rule'),
        layers.Dense(1)
])

model.compile(optimizer='adam', loss='mean_squared_error')

model.fit(X, y, epochs=100, verbose=1)

model.save('profits_model.h5')
```


