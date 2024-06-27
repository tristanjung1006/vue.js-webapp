<template>
  <header>
    <h1>TODO it!</h1>
  </header>
</template>

<!--싱글파일 컴포넌트, scoped로 하게 되었을 때 무시되고 해당 컴포넌트 안에서만 유효한 스타일 속성으로 변환된다-->
<style scoped>
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
