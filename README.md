## DreamCoding - 반응형 헤더 만들기

### 진행 방식

1. 디자인만 보고 직접 만들기 (약 20~30분 소요)
2. 영상을 보고 따라 만들기 (약 40~50분 소요)

### 배운 점

1. 클래스 네이밍 방식 (ex. navbar\_\_menu)
   ```html
   <div class="navbar">
     <div class="navbar__menu"></div>
   </div>
   ```
2. 메뉴의 클래스 토글 방식

   ```js
   const toggleBtn = document.querySelector(".navbar__toggleBtn");
   const menu = document.querySelector(".navbar__menu");
   const icons = document.querySelector(".navbar__icons");

   toggleBtn.addEventListener("click", () => {
     menu.classList.toggle("active");
     icons.classList.toggle("active");
   });
   ```

### Notion Link

https://www.notion.so/binitiger/DreamCoding-Responsive-Header-d002e8ee607e41cc96419828479dc1c7

### 참고영상(드림코딩 반응형 헤더 만들기)

https://www.youtube.com/watch?v=X91jsJyZofw&t=69s
