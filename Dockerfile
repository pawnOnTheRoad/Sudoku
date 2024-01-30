# Usa una imagen base ligera con soporte para servidor web
FROM nginx:alpine

# Crea un directorio para almacenar los archivos de la aplicación
RUN mkdir -p /usr/share/nginx/html

# Copia los archivos de tu aplicación al directorio de trabajo
COPY . /usr/share/nginx/html

# Establece el directorio de trabajo
WORKDIR /usr/share/nginx/html

