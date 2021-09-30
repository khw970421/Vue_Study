## 필수로 하는 것
//기본 package.json 설치 관련<br>
npm init -y<br>

//vue3 관련
npm i vue@next<br>

//webpack 관련 <br>
npm i -D webpack webpack-cli<br>

//vue3을 webpack에서 동작시키기 관련<br>
npm i -D vue-loader@next<br>
npm i -D @vue/compiler-sfc<br>

//sass를 webpack에서 동작시키기 관련<br>
npm i -D mini-css-extract-plugin<br>
npm i -D sass<br>
npm i -D sass-loader<br>

// npm run build할때 html까지 작성 관련<br>
npm i -D html-webpack-plugin


## 주의할 점
*  vue-loader는 그냥 설치할 경우 15.9.8이 latest(최신)버전이다. 
해당 최신버전은 vue2버전에 적용된다.  
따라서 vue3을 적용하기 위해서는 vue-loader@next를 통해 16.8.1을 설치해야한다. 

*  "@vue/compiler-sfc"와 "vue"의 버전을 같게 맞춰줘야한다. 


## parcel vs webpack
>parcel에 비해 webpack은 설치할 것들이 많다. <br>
>vue 관련도 parcel은 간단하나 webpack은 설치할 내용이 많다. <br>
>대신 parcel은 이와같은 세밀한 번들러 제어를 할 수 없다.  

* webpack은 근데 결과물이 parcel의 npm run build와 같은데 dist 폴더의 index.html을 누르면 parcel과 다르게 동작을 한다.


