# Usar la imagen oficial de Node.js
FROM node:20.14.0

# Establecer el directorio de trabajo en la imagen del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Instalar el servidor web simple para servir los archivos estáticos
RUN npm install -g serve

# Exponer el puerto en el que la aplicación frontend correrá
EXPOSE 5000

# Comando para correr el servidor de archivos estáticos
CMD ["serve", "-s", "build"]
