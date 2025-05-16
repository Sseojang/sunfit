# Sunglasses AI Recommendation Service
The Sunglasses AI Recommendation Service is a prototype application that recommends sunglasses tailored to individuals based on their facial photos, gender, and age.

# Features
The service allows users to select their gender and enter their age, then upload a photo of their face with support for drag-and-drop functionality. Once the image is uploaded, an AI analysis simulation is performed to determine the best sunglasses fit for the user. The recommended sunglasses results are then displayed, and users can easily share these results using the native sharing feature of their device.

# Technology Stack
The application is built using modern web technologies, including HTML5 for markup, CSS3 for styling, and JavaScript (ES6+) for interactive features. It also leverages the Web Share API to enable seamless sharing capabilities across different platforms.

# Project Structure

```
sunglasses-recommendation/
├── index.html     # Main HTML file
├── styles.css     # Stylesheet
├── script.js      # JavaScript functionality
└── data.json      # Sunglasses product data
```

# Installation and Execution
To run the project, first clone the repository to your local machine. Then, simply open the index.html file in your web browser to launch the application.

# Deployment
The application can be easily deployed using static hosting services such as GitHub Pages, Netlify, or Vercel.

# Deployment via GitHub Pages
To deploy using GitHub Pages, create a new GitHub repository and push your project files to it. Then, enable GitHub Pages in the repository settings to publish your site.

# Notes
This project utilizes the DeepFace AI open-source library to perform facial analysis. The user interface and experience are optimized for mobile environments to ensure accessibility and ease of use.

---------------------------------------------------------------------------------------------------------------

# 선글라스 AI 추천 서비스 (KO)

선글라스 AI 추천 서비스는 사용자의 얼굴 사진, 성별, 나이를 기반으로 개인에게 어울리는 선글라스를 추천해주는 프로토타입 애플리케이션입니다.

## 기능

- 성별 선택
- 나이 입력
- 사진 업로드 (드래그 앤 드롭 지원)
- AI 분석 시뮬레이션
- 선글라스 추천 결과 표시
- 네이티브 공유 기능

## 기술 스택

- HTML5
- CSS3
- JavaScript (ES6+)
- Web Share API

## 프로젝트 구조

```
선글라스 추천/
├── index.html      # 메인 HTML 파일
├── styles.css      # 스타일시트
├── script.js       # JavaScript 기능 구현
└── data.json       # 선글라스 제품 데이터
```

## 설치 및 실행 방법

1. 프로젝트를 클론합니다.
2. `index.html` 파일을 웹 브라우저로 열어 실행합니다.

## 배포 방법

GitHub Pages, Netlify, Vercel 등의 정적 호스팅 서비스를 통해 쉽게 배포할 수 있습니다.

### GitHub Pages 배포 방법

1. GitHub 저장소 생성
2. 프로젝트 파일을 저장소에 푸시
3. 저장소 설정에서 GitHub Pages 활성화

## 참고 사항

- 이 프로젝트는 deepface AI 오픈소스를 활용하여 얼굴 분석을 실행합니다.
- 모바일 환경에 최적화된 UI/UX를 제공합니다.