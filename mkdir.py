import os
import datetime
from datetime import datetime, date

month = date.today().strftime("%m")
year = date.today().strftime("%Y")
day = datetime.now().strftime("%d")
hour = datetime.now().strftime("%H")
minute = datetime.now().strftime("%M")

folder_name = f'{year}-{month}-{day}-{hour}-{minute}-post'

print("***** Nombre del directorio a crear => ", folder_name)

# Cambiar la ruta según sea necesario
ruta = f'./src/content/blog/{folder_name}'

if not os.path.exists(ruta):
    os.makedirs(ruta)
    print(f'***** Directorio {ruta} creado correctamente')
else:
    print(f'***** Directorio {ruta} ya existe')
