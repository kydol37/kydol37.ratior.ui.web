kydol37.ratior.ui.web
=====================

# About

## ratior web app
    
   git 사용 및 web app을 만들어가는 과정에 대한 기록 및 소스
   [일자 별], {주요 내용} 및 git에 반영된 (tag 버전) 중심으로 기록

# [2014.07.20]

## {git repository 구성}
```
  #remote 
   : master
   : develop
   : tag
     -- vx.x  : master에 push할 내용과 동일하게 tag 생성
     -- dvx.x : develop에 push한 내용에 대해 의미상으로 수시로 tag 생성
  #local
   : master (remote sync)  - 여러 사람과 동일하게 공유되야 하는 소스 가지
   : develop (remote sync) - 여러 사람과 공유할 나의 소스 가지
   : release
   : feature
   : hotfix
   : tag
     -- vx.x
     -- dvx.x
     -- ...  : 로컬에서만 사용할 다양할 의미의 tag 생성
```
## (tag v0.1 내용)
```
  master branch 생성  
  : https://github.com/kydol37/kydol37.ratior.ui.web.git
  : README.md 파일만 존재
```
## {설정 내역들}
```
   * bower 설치
     a. nodejs 설치
     b. npm 실행 경로 설정
     c. npm install -g bower
      
   * karma 실행을 위한 설치
     : npm install -g karma-cli
  
   * bower로 js package 설치
     a. 프로젝트 디렉터리에 .bowerrc 파일 추가
     b. { "directory": "lib" } 내용 추가
     c. bower init 명령으로 bower.json 파일 생성
     d. bower install anglurajs --save 로 패키지 설치 및 bower.json에 등록
     e. 5. bower install jasmine --save-dev 로 패키지 설치 및 bower.json에 등록
 
   * "npm start" 실행 스크립트를 위해 package.json 파일 생성

   * 빈 폴더는 git에 반영되지 않으므로 빈 폴더별로 빈파일 생성 후 git에 반영
     : > touch .gitignore      

   * develop branch 생성
     : https://github.com/kydol37/kydol37.ratior.ui.web.git
     : Web App 개발환경 기본 설정
      
       - 폴더 구성
       
       app\
           main\
                css\
                    app.css
	            img\
	            js\
	                controllers\
	                main.js
	                app.js
	                controllers.js
	                directives.js
	                filters.js
	                routes.js
	                services.js
	            lib\
	            view\
	                partial1.html
	                partial2.html
	            index.html
	       test\
	            e2e\
	                runner.html
	                scenario.js
	            unit\
	                 controllersSpec.js
	                 directivesSpec.js
	                 filtersSpec.js
	                 servicesSpec.js
	       scripts\
	               e2e-test.bat
	               e2e-test.sh
	               test.bat
	               test.sh
	               watchr.rb
	               web-server.js
	               
	       .bowerrc
	       bower.json
	       package.json
	   service\
	           main\
	           test\
```                 

#[2014.07.25]  
           
## (tag dv0.1) 
```    
   develop branch에 Web App 개발환경 기본 설정까지 내용을 tag
      태스 주소: https://github.com/kydol37/kydol37.ratior.ui.web/tree/dv0.1
```

## Installation
```   
   git clone https://github.com/kydol37/kydol37.ratior.ui.web.git
   git checkout develop
   cd kydol37.ratior.ui.web\app
   npm install     
   bower install
```

## Running
```
   kydol37.ratior.ui.web\app>npm start-local
      브라우저에서 localhost:8000/main/index.html 로 접속
```   
## Testing
   
   * unit Test
     ```
     - kydol37.ratior.ui.web/app>.\scripts\test.bat 또는
     - kydol37.ratior.ui.web/app>npm run-script test-unit-win
     ```
   
   * e2e Test
     ```    
     - kydol37.ratior.ui./web/app>.\scripts\e2e-test.bat 또는
     - kydol37.ratior.ui/web/app>npm run-script test-e2e-win 또는
     - kydol37.ratior.ui/web/app>npm run-script test-e2e-page 후,
               브라우저에서 http://localhost:8001/test/e2e/runner.html 접속
    ```    

# [2014.07.28] 

## CI 설정
```
   * Sign in
     Travis CI(http://travis-ci.org) sign in with github account
     
   * Travis Installation (https://github.com/travis-ci/travis.rb#installation)
     ruby 설치 (http://rubyinstaller.org/)
     > gem install travis --no-rdoc --no-ri
     > travis version
     
   * Activate GitHub Webhook
     go to https://travis-ci.org/profile , enable the service hook for
     github(https://github.com/kydol37/kydol37.ratior.ui.web/settings/hooks) 에서 확인
     
   * Add .travis.yml file to repository
     : travis CI의 빌드 설정 및 테스트 환경등에 대한 모든 설정을 기록하는 파일
   
   * CI에서 테스트는 e2e 테스트로, 로컬 테스트 unit 테스트로
```
   
## 배포 호스트 서버 설정
```
   * Sign in
     heroku(https://dashboard.heroku.com/apps) sign
     
   * heroku tool 설치
          툴 설치(https://toolbelt.heroku.com/windows) 
          
   * ssh 및  api_key setting
     site에 로그인하여 account에서 ssh key 등록(github와 동일) 후, api_key 생성
   
   * heroku에 app 생성
     > heroku create rating-staging
     > git remote -v
     > heroku git:remote -a kydol37/kydol37.ratior.ui.web
          
   * .travis.yml에 heroku 배포 설정 내용 추가
     >travis setup keroku --force
     
   * package.json의 "scripts"에 내용 추가(소스 참조)
```

### heroku 기본 운영 명령어 들
...
   * log 보기
     > heroku logs --tail --app ratior-staging
   
   * 재시작
     > heroku restart
     
   * 프로세스
     > heroku ps --app ratior-staging
...
