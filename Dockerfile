# Usa una imagen base ligera con soporte para servidor web
FROM nginx:alpine

# Establece el directorio de trabajo
WORKDIR /usr/share/nginx/html

# Copia los archivos de tu aplicación al directorio de trabajo
COPY . .

# Esto garantiza que la aplicación se sirva directamente desde /usr/share/nginx/html

