import os
import datetime
from datetime import datetime, date

month = date.today().strftime("%b")
year = date.today().strftime("%y")
day = datetime.now().day
hour = datetime.now().strftime("%H")
minute = datetime.now().strftime("%M")

folder_name = f'{year}-{day}-{month}-{hour}-{minute}'

print("***** Nombre del directorio a crear => ", folder_name)

# Cambiar la ruta según sea necesario
ruta = f'./src/content/posts/{folder_name}'

if not os.path.exists(ruta):
    os.makedirs(ruta)
    print(f'***** Directorio {ruta} creado correctamente')
else:
    print(f'***** Directorio {ruta} ya existe')
