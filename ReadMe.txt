# Git 作成

- ローカルリポジトリの作成

1.Gitリポジトリの作成
  git init

2.Gitリポジトリへの登録（初回はすべて）
  git add .

3.コミット
  git commit -m "first commit"

- リモートリポジトリへの登録
https://github.com/tomisho53/dotinstall.git

4.リモートリポジトリ登録
  git remote add origin https://github.com/tomisho53/dotinstall.git
  git remote -v

5.Git Hubへプッシュ
  git push origin master


※ 403エラー発生
※ 参考サイト：https://qiita.com/tanishilove/items/3164ecf3f16585fa3bf2
$ git remote set-url origin https://tomisho53@github.com/tomisho53/dotinstall.git
	- tomisho53@　を追加
	- push時にパスワード入力
