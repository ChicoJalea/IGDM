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

# Exponer el puerto en el que la aplicación backend correrá
EXPOSE 4372

# Comando para correr la aplicación
CMD ["npm", "run", "dev"]
