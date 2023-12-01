# Node.js 애플리케이션을 위한 이미지
FROM node:14

# 작업 디렉토리 설정
WORKDIR /app

# 애플리케이션 소스 코드 복사
COPY package*.json ./
RUN npm install
COPY . .

# 애플리케이션 포트 설정
EXPOSE 3000

# 애플리케이션 실행
CMD ["npm", "start"]
